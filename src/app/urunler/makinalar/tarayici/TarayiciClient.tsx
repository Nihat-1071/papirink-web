"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

type BrandKey = "all" | "colortrac" | "graphtec";

function detectBrand(title: string): Exclude<BrandKey, "all"> {
  const t = title.toLowerCase();
  if (t.includes("colortrac")) return "colortrac";
  return "graphtec";
}

function brandLabel(k: Exclude<BrandKey, "all">) {
  switch (k) {
    case "colortrac":
      return "Colortrac";
    case "graphtec":
      return "Graphtec";
  }
}

type Product = {
  title: string;
  desc: string;
  href: string;
  pills: string[];
  image?: { src: string; alt: string };
};

const PRODUCTS: Product[] = [
  // ======================
  // COLORTRAC
  // ======================
  {
    title: "Colortrac SmartLF SCi 42",
    desc: "Geniş format tarama için güvenilir performans; teknik çizim ve harita taramalarında ideal.",
    href: "/urunler/makinalar/tarayici/colortrac-smartlf-sci-42",
    pills: ["Colortrac", "SmartLF", "SCi 42"],
    image: {
      src: "/images/urunler/makinalar/tarayici/colortrac-smartlf-sci-42.jpg",
      alt: "Colortrac SmartLF SCi 42 geniş format tarayıcı",
    },
  },

  // ======================
  // GRAPHTEC
  // ======================
  {
    title: "Graphtec CSX530 600dpi A0 Tarayıcı 36 inç (Scanner)",
    desc: "A0 (36 inç) genişlikte 600dpi tarama; CAD/teknik çizim iş akışlarına uygun.",
    href: "/urunler/makinalar/tarayici/graphtec-csx530-600dpi-a0-36-inc",
    pills: ["Graphtec", "CSX530", "600dpi", "A0", "36 inç"],
    image: {
      src: "/images/urunler/makinalar/tarayici/graphtec-csx530-600dpi-a0-tarayici-36-inc.jpg",
      alt: "Graphtec CSX530 600dpi A0 tarayıcı 36 inç",
    },
  },
  {
    title: "Graphtec CSX550 1200dpi A0 Tarayıcı 36 inç (Scanner)",
    desc: "A0 (36 inç) genişlikte 1200dpi yüksek çözünürlük; detaylı taramalar için güçlü seçenek.",
    href: "/urunler/makinalar/tarayici/graphtec-csx550-1200dpi-a0-36-inc",
    pills: ["Graphtec", "CSX550", "1200dpi", "A0", "36 inç"],
    image: {
      src: "/images/urunler/makinalar/tarayici/graphtec-csx550-1200dpi-a0-tarayici-36-inc.jpg",
      alt: "Graphtec CSX550 1200dpi A0 tarayıcı 36 inç",
    },
  },
];

export default function TarayiciClient() {
  const [active, setActive] = useState<BrandKey>("all");

  const grouped = useMemo(() => {
    const buckets: Record<Exclude<BrandKey, "all">, Product[]> = {
      colortrac: [],
      graphtec: [],
    };

    PRODUCTS.forEach((p) => {
      const b = detectBrand(p.title);
      buckets[b].push(p);
    });

    return buckets;
  }, []);

  const visibleGroups = useMemo(() => {
    const allGroups = ([
      { key: "colortrac", items: grouped.colortrac },
      { key: "graphtec", items: grouped.graphtec },
    ] as const).filter((g) => g.items.length > 0);

    if (active === "all") return allGroups;
    return allGroups.filter((g) => g.key === active);
  }, [active, grouped]);

  const FILTERS: { key: BrandKey; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "colortrac", label: "Colortrac" },
    { key: "graphtec", label: "Graphtec" },
  ];

  return (
    <>
      {/* Hero */}
      <div className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white px-6 py-6 sm:px-8">
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Alt Kategori
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Tarayıcılar
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            A0 geniş format tarayıcı çözümlerini inceleyin. CAD/teknik çizim,
            harita ve proje taramalarında çözünürlük (dpi) ve genişlik
            (36&quot;/42&quot;) ihtiyaçlarınıza göre doğru modeli hızlıca seçin.
          </p>

          <div className="mt-6 h-px w-full bg-slate-100" />

          {/* Filters */}
          <div className="mt-6">
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Tarayıcı Ürünlerimiz
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {FILTERS.map((f) => {
                const isActive = active === f.key;
                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setActive(f.key)}
                    className={
                      "rounded-md border px-4 py-2 text-sm font-medium transition " +
                      (isActive
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-white hover:border-slate-300")
                    }
                    aria-pressed={isActive}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Groups */}
      <div className="mt-10 space-y-10">
        {visibleGroups.map((g) => (
          <section key={g.key} className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">
                {brandLabel(g.key)}
              </h2>
              <span className="text-xs text-slate-500">{g.items.length} ürün</span>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {g.items.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group block rounded-xl border border-slate-200 bg-white p-6 transition hover:border-slate-300"
                >
                  <div className="flex gap-5">
                    {/* SOL */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {p.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {p.desc}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.pills.map((pill) => (
                          <span
                            key={pill}
                            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 h-px w-full bg-slate-100" />

                      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                        <span>Ürün detayı</span>
                      </div>
                    </div>

                    {/* SAĞ */}
                    <div className="relative hidden sm:block w-44 md:w-48 lg:w-56">
                      <div className="relative h-32 md:h-36 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                        <Image
                          src={p.image?.src ?? "/images/urunler/placeholder.webp"}
                          alt={p.image?.alt ?? p.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 224px, 192px"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Doğru tarayıcıyı birlikte seçelim
        </h3>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 leading-relaxed">
          Tarayacağınız evrak türünü (CAD proje/harita), istediğiniz çözünürlüğü
          (600/1200 dpi) ve kağıt genişliğini (36&quot;/42&quot;) paylaşın; işinize
          en uygun tarayıcı modelini hızlıca önerelim.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={CONTACT.tel}
            className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            Hızlı Destek Al
          </a>

          <Link
            href="/urunler"
            className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Tüm Ürünler
          </Link>
        </div>
      </div>
    </>
  );
}
