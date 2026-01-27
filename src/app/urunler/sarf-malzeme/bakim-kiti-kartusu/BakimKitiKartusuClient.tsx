// src/app/urunler/sarf-malzemeleri/bakim-kiti-kartusu/BakimKitiKartusuClient.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

type CategoryKey = "all" | "epson-atik-tank-kutusu" | "hp-bakim-kiti-kartusu";

type Product = {
  title: string;
  desc: string;
  category: Exclude<CategoryKey, "all">;
  pills: string[];
  image: { src: string; alt: string };
};

function categoryLabel(k: Exclude<CategoryKey, "all">) {
  switch (k) {
    case "epson-atik-tank-kutusu":
      return "Epson Atık Tank Kutusu";
    case "hp-bakim-kiti-kartusu":
      return "HP Bakım Kiti / Kartuşu";
  }
}

const PRODUCTS: Product[] = [
  // ======================
  // EPSON - ATIK TANK KUTUSU
  // ======================
  {
    title: "Epson B6000 Uyumlu Atık Tank Kutusu",
    desc: "Epson SCB6000 plotter modeline uyumlu atık tank kutusudur. Atık tankları ile aynı görevi gerçekleştirir.",
    category: "epson-atik-tank-kutusu",
    pills: ["Epson", "B6000", "Atık Tank Kutusu"],
    image: {
      src: "/images/urunler/sarf-malzemeleri/bakim-kiti-kartusu/epson-b6000-uyumlu-atik-tank-kutusu.webp",
      alt: "Epson B6000 uyumlu atık tank kutusu",
    },
  },
  {
    title: "Epson T3200–T5200–T7200 Uyumlu Atık Tank Kutusu",
    desc: "Epson T3200 / T5200 / T7200 plotter yazıcılarının atık tankları ile aynı görevi gerçekleştiren uyumlu atık tank kutusudur.",
    category: "epson-atik-tank-kutusu",
    pills: ["Epson", "T3200", "T5200", "T7200", "Atık Tank Kutusu"],
    image: {
      src: "/images/urunler/sarf-malzemeleri/bakim-kiti-kartusu/epson-t3200-t5200-t7200-uyumlu-atik-tank-kutusu.webp",
      alt: "Epson T3200 T5200 T7200 uyumlu atık tank kutusu",
    },
  },
  {
    title: "Epson T7000 Atık Tank Kutusu",
    desc: "Epson SCT7000 uyumlu atık tank kutusudur. Plotter cihazlarda atık tank görevini yerine getirir.",
    category: "epson-atik-tank-kutusu",
    pills: ["Epson", "T7000", "Atık Tank Kutusu"],
    image: {
      src: "/images/urunler/sarf-malzemeleri/bakim-kiti-kartusu/epson-t7000-atik-tank-kutusu.webp",
      alt: "Epson T7000 atık tank kutusu",
    },
  },

  // ======================
  // HP - BAKIM KİTİ / KARTUŞU
  // ======================
  {
    title: "HP 771 CH644A Bakım Kiti (Maintenance Kit)",
    desc: "HP DesignJet Z6200 yazıcı serisi için bakım kiti/bakım kartuşu çözümü. Sarf parça değişimi ve bakım süreçleri için kullanılır.",
    category: "hp-bakim-kiti-kartusu",
    pills: ["HP", "771", "CH644A", "Z6200", "Bakım Kiti"],
    image: {
      src: "/images/urunler/sarf-malzemeleri/bakim-kiti-kartusu/hp-771-ch644a-bakim-kiti-maintenance-kit.webp",
      alt: "HP 771 CH644A bakım kiti",
    },
  },
  {
    title: "HP 831 Lateks Bakım Kartuşu",
    desc: "HP Latex 310 / 315 / 330 / 335 / 360 / 365 / 370 / 375 modelleriyle uyumlu bakım kartuşu. Periyodik bakım ve sarf süreçlerinde kullanılır.",
    category: "hp-bakim-kiti-kartusu",
    pills: ["HP", "831", "Latex", "Bakım Kartuşu"],
    image: {
      src: "/images/urunler/sarf-malzemeleri/bakim-kiti-kartusu/hp-831-lateks-bakim-kartusu.webp",
      alt: "HP 831 lateks bakım kartuşu",
    },
  },
];

export default function BakimKitiKartusuClient() {
  const [active, setActive] = useState<CategoryKey>("all");

  const grouped = useMemo(() => {
    const buckets: Record<Exclude<CategoryKey, "all">, Product[]> = {
      "epson-atik-tank-kutusu": [],
      "hp-bakim-kiti-kartusu": [],
    };
    for (const p of PRODUCTS) buckets[p.category].push(p);
    return buckets;
  }, []);

  const visibleGroups = useMemo(() => {
    const allGroups = ([
      { key: "epson-atik-tank-kutusu", items: grouped["epson-atik-tank-kutusu"] },
      { key: "hp-bakim-kiti-kartusu", items: grouped["hp-bakim-kiti-kartusu"] },
    ] as const).filter((g) => g.items.length > 0);

    if (active === "all") return allGroups;
    return allGroups.filter((g) => g.key === active);
  }, [active, grouped]);

  const FILTERS: { key: CategoryKey; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "epson-atik-tank-kutusu", label: "Epson Atık Tank Kutusu" },
    { key: "hp-bakim-kiti-kartusu", label: "HP Bakım Kiti / Kartuşu" },
  ];

  return (
    <>
      {/* Hero */}
      <div className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white px-6 py-6 sm:px-8">
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Sarf Malzemeleri
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Bakım Kiti / Kartuşu
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            HP ve Epson uyumlu bakım kiti/bakım kartuşu ile atık tank kutusu
            ürünlerini kategori bazında filtreleyin. Doğru ürün seçimi için hızlı
            destek alabilirsiniz.
          </p>

          <div className="mt-6 h-px w-full bg-slate-100" />


          {/* Filters */}
          <div className="mt-6">
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Kategoriler
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
                {categoryLabel(g.key)}
              </h2>
              <span className="text-xs text-slate-500">{g.items.length} ürün</span>
            </div>

            <div className="space-y-4">
              {g.items.map((p) => (
                <div
                  key={`${p.category}-${p.title}`}
                  className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
                >
                  {/* 3 kolon: sol resim / orta isim / sağ açıklama */}
                  <div className="grid gap-4 md:grid-cols-[220px_1fr_1fr] md:items-start">
                    {/* SOL: Görsel */}
                    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                      <div className="relative h-44 md:h-40">
                        <Image
                          src={p.image.src}
                          alt={p.image.alt}
                          fill
                          className="object-contain p-3"
                          sizes="(min-width: 768px) 220px, 100vw"
                        />
                      </div>
                    </div>

                    {/* ORTA: Başlık + etiketler */}
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                        {p.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.pills.map((pill) => (
                          <span
                            key={pill}
                            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 h-px w-full bg-slate-100" />

                      <div className="mt-4 flex flex-wrap gap-2">
                        <a
                          href={CONTACT.tel}
                          className="rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition"
                        >
                          Teklif Al
                        </a>
                        <a
                          href={CONTACT.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-700 transition"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>

                    {/* SAĞ: Açıklama */}
                    <div className="min-w-0">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {p.desc}
                      </p>

                      <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
                        <p className="text-xs text-slate-600">
                          Not: Uyumlu modeli netleştirmek için yazıcı modelinizi
                          iletin; doğru ürünü hızlıca doğrulayalım.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Uyumlu bakım kitini/kartuşu bulamadınız mı?
        </h3>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 leading-relaxed">
          Yazıcı modelinizi (ör. Epson T3200/T5200/T7200, HP Latex 315 vb.) yazın;
          doğru bakım kiti/bakım kartuşu ya da atık tank kutusunu hızlıca
          netleştirelim.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={CONTACT.tel}
            className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            Hızlı Destek Al
          </a>

          <a
            href="/urunler"
            className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Tüm Ürünler
          </a>
        </div>
      </div>
    </>
  );
}
