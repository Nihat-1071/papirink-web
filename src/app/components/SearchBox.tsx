"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import { PRODUCTS_INDEX } from "../lib/productsIndex";

type SearchBoxProps = {
  variant?: "header" | "plain";
};

export default function SearchBox({ variant = "plain" }: SearchBoxProps) {
  const router = useRouter();

  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);

  const fuse = useMemo(() => {
    return new Fuse(PRODUCTS_INDEX, {
      keys: ["title", "category", "keywords"],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 2,
    });
  }, []);

  const results = useMemo(() => {
    const query = q.trim();
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
      ? "border border-white/15 bg-white/10 text-white placeholder:text-white/60 focus:border-white/25 focus:ring-4 focus:ring-white/10"
      : "border border-[#e5e7eb] bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100",
  ].join(" ");

  const dropdownClass = [
    "absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl shadow-2xl",
    variant === "header"
      ? "border border-white/10 bg-[#0b1220]"
      : "border border-[#e5e7eb] bg-white",
  ].join(" ");

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
            setActiveIndex((i) => {
              const next = Math.min(i + 1, results.length - 1);
              return next;
            });
            return;
          }

          if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((i) => Math.max(i - 1, -1));
            return;
          }

          if (e.key === "Enter") {
            if (open && activeIndex >= 0 && results[activeIndex]) {
              router.push(results[activeIndex].slug);
              setOpen(false);
              return;
            }
            goSearchPage();
          }
        }}
        placeholder="Ürün / model / sarf ara… (örn: HP 91, 80 gr, DesignJet)"
        className={inputClass}
      />

      {open && q.trim().length >= 2 && (
        <div className={dropdownClass}>
          {results.length > 0 ? (
            <ul className={variant === "header" ? "divide-y divide-white/10" : "divide-y divide-[#e5e7eb]"}>
              {results.map((r, idx) => {
                const active = idx === activeIndex;

                return (
                  <li key={`${r.slug}-${(r as any).id ?? idx}`}>
                    <Link
                      href={r.slug}
                      onClick={() => setOpen(false)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={[
                        "block px-4 py-3 transition",
                        variant === "header"
                          ? active
                            ? "bg-white/10"
                            : "hover:bg-white/5"
                          : active
                            ? "bg-blue-50"
                            : "hover:bg-blue-50",
                      ].join(" ")}
                    >
                      <div className={variant === "header" ? "text-sm font-extrabold text-white" : "text-sm font-extrabold text-slate-900"}>
                        {r.title}
                      </div>
                      <div className={variant === "header" ? "mt-0.5 text-xs text-white/60" : "mt-0.5 text-xs text-slate-500"}>
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
                      ? "text-cyan-200 hover:bg-white/5"
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
