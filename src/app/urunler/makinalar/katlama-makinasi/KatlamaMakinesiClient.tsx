"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

type BrandKey = "all" | "foldjet" | "rowe";

function detectBrand(title: string): Exclude<BrandKey, "all"> {
  const t = title.toLowerCase();
  if (t.includes("foldjet")) return "foldjet";
  return "rowe";
}

function brandLabel(k: Exclude<BrandKey, "all">) {
  switch (k) {
    case "foldjet":
      return "Foldjet";
    case "rowe":
      return "ROWE";
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
  // FOLDJET
  // ======================
  {
    title: "Foldjet 2000 Katlama Makinası",
    desc: "Teknik çizim ve projeler için hızlı, düzenli ve profesyonel katlama çözümü.",
    href: "/urunler/makinalar/katlama-makinasi/foldjet-2000",
    pills: ["Foldjet", "2000", "Katlama"],
    image: {
      src: "/images/urunler/makinalar/katlama-makinasi/foldjet-2000-katlama-makinasi.jpg",
      alt: "Foldjet 2000 katlama makinası",
    },
  },
  {
    title: "Foldjet 2000 Katlama Makinası (2. El)",
    desc: "Bütçe dostu ikinci el seçenek; proje ve plan katlama süreçlerini hızlandırır.",
    href: "/urunler/makinalar/katlama-makinasi/foldjet-2000-2-el",
    pills: ["Foldjet", "2000", "2. El"],
    image: {
      src: "/images/urunler/makinalar/katlama-makinasi/foldjet-2000-katlama-makinasi-2-el.jpg",
      alt: "Foldjet 2000 katlama makinası 2. el",
    },
  },

  // ======================
  // ROWE
  // ======================
  {
    title: "ROWE Katlama Makinası",
    desc: "Yoğun ofis/şantiye kullanımına uygun; plan, pafta ve CAD çıktılarında verimlilik sağlar.",
    href: "/urunler/makinalar/katlama-makinasi/rowe",
    pills: ["ROWE", "Katlama", "Profesyonel"],
    image: {
      src: "/images/urunler/makinalar/katlama-makinasi/rowe-katlama-makinasi.jpg",
      alt: "ROWE katlama makinası",
    },
  },
];

export default function KatlamaMakinesiClient() {
  const [active, setActive] = useState<BrandKey>("all");

  const grouped = useMemo(() => {
    const buckets: Record<Exclude<BrandKey, "all">, Product[]> = {
      foldjet: [],
      rowe: [],
    };

    PRODUCTS.forEach((p) => {
      const b = detectBrand(p.title);
      buckets[b].push(p);
    });

    return buckets;
  }, []);

  const visibleGroups = useMemo(() => {
    const allGroups = ([
      { key: "foldjet", items: grouped.foldjet },
      { key: "rowe", items: grouped.rowe },
    ] as const).filter((g) => g.items.length > 0);

    if (active === "all") return allGroups;
    return allGroups.filter((g) => g.key === active);
  }, [active, grouped]);

  const FILTERS: { key: BrandKey; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "foldjet", label: "Foldjet" },
    { key: "rowe", label: "ROWE" },
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
            Katlama Makinası
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            Proje, plan ve teknik çizim çıktılarınızı hızlı ve düzenli şekilde katlamak için
            Foldjet ve ROWE katlama makinası modellerini inceleyin.
          </p>

          <div className="mt-6 h-px w-full bg-slate-100" />

          {/* Filters */}
          <div className="mt-6">
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Katlama Makinası Modelleri
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
          Size uygun katlama makinasını birlikte seçelim
        </h3>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 leading-relaxed">
          Çıktı formatınızı (A0/A1/A2), günlük adetleri ve kullanım alanınızı paylaşın;
          en uygun katlama makinası modelini hızlıca önerelim.
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
