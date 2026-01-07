// src/app/urunler/sarf-malzemeleri/drum-bicak/DrumBicakClient.tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

type CategoryKey = "all" | "developer" | "bicak" | "drum";

type Product = {
  title: string;
  category: Exclude<CategoryKey, "all">;
  desc: string;
  pills: string[];
  image: { src: string; alt: string };
};

function categoryLabel(k: Exclude<CategoryKey, "all">) {
  switch (k) {
    case "developer":
      return "Developer";
    case "bicak":
      return "Bıçak (Blade)";
    case "drum":
      return "Drum";
  }
}

const PRODUCTS: Product[] = [
  {
    title: "Oce D5 Orjinal Developer",
    category: "developer",
    desc:
      "Oce TDS serisi toner sistemleri için orijinal developer. Uyumlu makine modelleri: TDS-300, TDS-320, TDS-400, TDS-450, TDS-600.",
    pills: ["Oce", "D5", "Orijinal", "TDS-300", "TDS-320", "TDS-400", "TDS-450", "TDS-600"],
    image: {
      src: "/images/urunler/sarf-malzemeleri/drum-bicak/oce-d5-orjinal-developer.webp",
      alt: "Oce D5 Orjinal Developer",
    },
  },
  {
    title: "Oce Uyumlu Bıçak (Blade)",
    category: "bicak",
    desc:
      "Oce muadil bıçak (blade). Menşei: İthal. Ambalaj: Paket. Uyumlu yazıcılar: TDS 300, 400, 600, 9600.",
    pills: ["Oce", "Muadil", "Blade", "İthal", "TDS 300", "TDS 400", "TDS 600", "TDS 9600"],
    image: {
      src: "/images/urunler/sarf-malzemeleri/drum-bicak/oce-uyumlu-bicak-blade.webp",
      alt: "Oce Uyumlu Bıçak (Blade)",
    },
  },
  {
    title: "Oce Uyumlu Drum",
    category: "drum",
    desc:
      "Papirink (Oce muadil) drum. Menşei: İthal. Ambalaj: Paket. Uyumlu yazıcılar: TDS 300, 400, 600, 9600.",
    pills: ["Oce", "Muadil", "Drum", "İthal", "TDS 300", "TDS 400", "TDS 600", "TDS 9600"],
    image: {
      src: "/images/urunler/sarf-malzemeleri/drum-bicak/oce-uyumlu-drum.webp",
      alt: "Oce Uyumlu Drum",
    },
  },
];

export default function DrumBicakClient() {
  const [active, setActive] = useState<CategoryKey>("all");

  const grouped = useMemo(() => {
    const buckets: Record<Exclude<CategoryKey, "all">, Product[]> = {
      developer: [],
      bicak: [],
      drum: [],
    };

    PRODUCTS.forEach((p) => buckets[p.category].push(p));
    return buckets;
  }, []);

  const visibleGroups = useMemo(() => {
    const allGroups = ([
      { key: "developer", items: grouped.developer },
      { key: "bicak", items: grouped.bicak },
      { key: "drum", items: grouped.drum },
    ] as const).filter((g) => g.items.length > 0);

    if (active === "all") return allGroups;
    return allGroups.filter((g) => g.key === active);
  }, [active, grouped]);

  const FILTERS: { key: CategoryKey; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "developer", label: "Developer" },
    { key: "bicak", label: "Bıçak (Blade)" },
    { key: "drum", label: "Drum" },
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
            Drum / Bıçak / Developer
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            Oce TDS serileri için drum, bıçak (blade) ve developer ürünlerini kategori bazında
            filtreleyin. Doğru ürün seçimi için hızlı destek alabilirsiniz.
          </p>

          <div className="mt-6 h-px w-full bg-slate-100" />

          {/* Quick actions */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={CONTACT.tel}
              className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Hızlı Destek / Teklif Al
            </a>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
            >
              WhatsApp
            </a>

            <a
              href="/iletisim"
              className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              İletişim kanallarımız
            </a>
          </div>

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

            <div className="grid gap-6">
              {g.items.map((p) => (
                <article
                  key={p.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-slate-300 transition"
                >
                  <div className="grid gap-5 md:grid-cols-[220px_1fr_280px] items-start">
                    {/* SOL: görsel */}
                    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                      <div className="relative h-44 md:h-52">
                        <Image
                          src={p.image.src}
                          alt={p.image.alt}
                          fill
                          className="object-contain p-3"
                          sizes="(min-width: 768px) 220px, 100vw"
                        />
                      </div>
                    </div>

                    {/* ORTA: başlık + pills */}
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {p.title}
                      </h3>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.pills.map((pill) => (
                          <span
                            key={pill}
                            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 h-px w-full bg-slate-100" />

                      <div className="mt-4 text-xs text-slate-500">
                        Detay sayfası yok — bu sayfadan teklif alabilirsiniz.
                      </div>
                    </div>

                    {/* SAĞ: açıklama + CTA */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {p.desc}
                      </p>

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
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Uyumlu modeli teyit edelim mi?
        </h3>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 leading-relaxed">
          Yazıcı modelinizi (ör. Oce TDS 300/400/600/9600 vb.) yazın; drum/bıçak/developer
          uyumluluğunu hızlıca netleştirip fiyat çalışalım.
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
