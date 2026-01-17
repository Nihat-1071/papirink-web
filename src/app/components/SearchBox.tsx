"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { PRODUCTS_INDEX } from "../lib/productsIndex";

type SearchBoxProps = {
  variant?: "header" | "plain";
};

// Türkçe karakterleri normalize et (kağıt=kagit, çip=cip vb.)
const normalizeTR = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replaceAll("ı", "i")
    .replaceAll("İ", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c");

export default function SearchBox({ variant = "plain" }: SearchBoxProps) {
  const router = useRouter();

  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Fuse index: normalize edilmiş alanlarla arama
  const fuse = useMemo(() => {
    const normalized = PRODUCTS_INDEX.map((x) => ({
      ...x,
      _nTitle: normalizeTR(x.title),
      _nCategory: normalizeTR(x.category),
      _nKeywords: Array.isArray(x.keywords) ? x.keywords.map(normalizeTR).join(" ") : "",
    }));

    return new Fuse(normalized, {
      keys: ["_nTitle", "_nCategory", "_nKeywords"],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 2,
    });
  }, []);

  const results = useMemo(() => {
    const query = normalizeTR(q);
    if (query.length < 2) return [];
    return fuse.search(query).slice(0, 7).map((r) => r.item);
  }, [q, fuse]);

  // query değişince aktif seçimi sıfırla
  useEffect(() => {
    setActiveIndex(-1);
  }, [q]);

  // dışarı tıklayınca kapat
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  const goSearchPage = (queryOverride?: string) => {
    const query = (queryOverride ?? q).trim();
    if (query.length >= 2) {
      router.push(`/arama?q=${encodeURIComponent(query)}`);
      setOpen(false);
    }
  };

  const inputClass = [
    "w-full rounded-xl px-4 py-2.5 text-sm outline-none transition",
    variant === "header"
      ? "border border-slate-200 bg-white text-[#0b1b3a] placeholder:text-slate-500 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
      : "border border-[#e5e7eb] bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100",
  ].join(" ");

  const dropdownClass = [
    "absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl shadow-2xl",
    variant === "header"
      ? "border border-slate-200 bg-white"
      : "border border-[#e5e7eb] bg-white",
  ].join(" ");

  const canOpen = q.trim().length >= 2;

  return (
    <div ref={wrapRef} className="relative w-full">
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
          setActiveIndex(-1);
        }}
        onFocus={() => {
          setOpen(true);
          setActiveIndex(-1);
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            return;
          }

          if (e.key === "ArrowDown") {
            e.preventDefault();
            if (!open) setOpen(true);
            if (results.length === 0) return;

            setActiveIndex((i) => {
              const next = Math.min(i + 1, results.length - 1);
              return next;
            });
            return;
          }

          if (e.key === "ArrowUp") {
            e.preventDefault();
            if (results.length === 0) return;

            setActiveIndex((i) => Math.max(i - 1, -1));
            return;
          }

          if (e.key === "Enter") {
            // seçili sonuç varsa ona git
            if (open && activeIndex >= 0 && results[activeIndex]) {
              router.push(results[activeIndex].href);
              setOpen(false);
              return;
            }
            // yoksa arama sayfasına git
            goSearchPage();
          }
        }}
        placeholder="Ürün / model / sarf ara… (örn: HP 91, 80 gr, DesignJet)"
        className={inputClass}
      />

      {open && canOpen && (
        <div className={dropdownClass}>
          {results.length > 0 ? (
            <ul className="divide-y divide-slate-200">
              {results.map((r, idx) => {
                const active = idx === activeIndex;

                return (
                  <li key={`${r.href}-${idx}`}>
                    <Link
                      href={r.href}
                      onClick={() => setOpen(false)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={[
                        "block px-4 py-3 transition",
                        variant === "header"
                          ? active
                            ? "bg-cyan-50"
                            : "hover:bg-slate-50"
                          : active
                            ? "bg-blue-50"
                            : "hover:bg-blue-50",
                      ].join(" ")}
                    >
                      <div className="text-sm font-extrabold text-[#0b1b3a]">
                        {r.title}
                      </div>
                      <div className="mt-0.5 text-xs text-slate-500">
                        {r.category}
                      </div>
                    </Link>
                  </li>
                );
              })}

              <li>
                <button
                  type="button"
                  onClick={() => goSearchPage()}
                  className={[
                    "w-full px-4 py-3 text-left text-sm font-extrabold transition",
                    variant === "header"
                      ? "text-cyan-700 hover:bg-cyan-50"
                      : "text-[#2563eb] hover:bg-blue-50",
                  ].join(" ")}
                >
                  Tüm sonuçları gör →
                </button>
              </li>
            </ul>
          ) : (
            <div className={variant === "header" ? "px-4 py-3 text-sm text-white/70" : "px-4 py-3 text-sm text-slate-600"}>
              Sonuç yok. Şunları dene:{" "}
              <span className={variant === "header" ? "font-extrabold text-white" : "font-extrabold"}>
                plotter, mürekkep, kağıt, kartuş, servis
              </span>

              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => goSearchPage()}
                  className={[
                    "w-full rounded-xl px-4 py-3 text-left text-sm font-extrabold transition",
                    variant === "header"
                      ? "border border-white/10 bg-white/5 text-cyan-200 hover:bg-white/10"
                      : "border bg-white text-[#2563eb] hover:bg-blue-50",
                  ].join(" ")}
                >
                  Arama sayfasına git →
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
