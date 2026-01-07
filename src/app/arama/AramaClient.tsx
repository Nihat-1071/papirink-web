"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { SEARCH_INDEX } from "../lib/searchIndex";

export default function AramaClient() {
  const sp = useSearchParams();
  const q = (sp.get("q") || "").trim();

  const fuse = useMemo(
    () =>
      new Fuse(SEARCH_INDEX, {
        keys: ["title", "keywords"],
        threshold: 0.35,
        ignoreLocation: true,
        minMatchCharLength: 2,
      }),
    []
  );

  const results = useMemo(() => {
    if (q.length < 2) return [];
    return fuse.search(q).slice(0, 20).map((r) => r.item);
  }, [q, fuse]);

  return (
    <>
      <Header />

      <main className="bg-[#0b1220] text-white">
        <section className="mx-auto max-w-6xl px-4 py-12">
          <Breadcrumb items={[{ label: "Ana Sayfa", href: "/" }, { label: "Arama" }]} />

          <h1 className="mt-4 text-3xl font-extrabold">Arama</h1>
          <p className="mt-2 text-white/70">
            Sorgu: <span className="font-semibold text-white">{q || "—"}</span>
          </p>

          {q.length < 2 ? (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
              Aramak için en az 2 karakter yaz. (örn: <b>tx4200</b>, <b>plotter kağıdı</b>, <b>kartuş çipi</b>)
            </div>
          ) : results.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
              Sonuç bulunamadı. Farklı bir yazım dene: <b>plotter</b>, <b>mürekkep</b>, <b>kağıt</b>, <b>servis</b>
            </div>
          ) : (
            <div className="mt-6 grid gap-3">
              {results.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-sm font-extrabold text-white">{r.title}</div>
                    <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-white/80">
                      {q}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-white/60">{r.href}</div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
