//src/app/urunler/sarf-malzemeleri/baski-kafasi/BaskiKafasiClient.tsx

"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

type SeriesKey = "all" | "hp-70" | "hp-72" | "hp-771" | "hp-831" | "canon-pf";

type Product = {
  series: Exclude<SeriesKey, "all">;
  title: string;
  image: { src: string; alt: string };
  midInfo: string[]; // ortadaki kısa bilgi/pill
  descRight: string; // sağdaki ürün açıklaması / uyumlu modeller / kapasite vb.
};

function seriesLabel(k: Exclude<SeriesKey, "all">) {
  switch (k) {
    case "hp-70":
      return "HP 70 Baskı Kafası";
    case "hp-72":
      return "HP 72 Baskı Kafası";
    case "hp-771":
      return "HP 771 Baskı Kafası";
    case "hp-831":
      return "HP 831 Latex Baskı Kafası";
    case "canon-pf":
      return "Canon PF Baskı Kafası";
  }
}

const PRODUCTS: Product[] = [
  // ======================
  // HP 70 (Baskı Kafası)
  // ======================
  {
    series: "hp-70",
    title: "HP 70 C9407A Foto Siyah - Açık Gri Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-70c9407a-foto-siyah-acik-gri-baski-kafasi.webp",
      alt: "HP 70 C9407A Foto Siyah - Açık Gri baskı kafası",
    },
    midInfo: ["C9407A", "Foto Siyah", "Açık Gri"],
    descRight:
      "Ürün Adı: HP 70 PB-LG Baskı Kafası\nUyumlu Yazıcı Modelleri: HP Designjet Z2100, Z3100, Z3200, Z5200, Z5400",
  },
  {
    series: "hp-70",
    title: "HP 70 C9404A Mat Siyah ve Mavi Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-70-c9404a-mat-siyah-ve-mavi-baski-kafasi.webp",
      alt: "HP 70 C9404A Mat Siyah ve Mavi baskı kafası",
    },
    midInfo: ["C9404A", "Mat Siyah", "Mavi"],
    descRight:
      "Ürün Adı: HP 70 MB-C Baskı Kafası\nUyumlu Yazıcı Modelleri: HP Designjet Z2100, Z3100, Z3200",
  },
  {
    series: "hp-70",
    title: "HP 70 C9406A Kırmızı ve Sarı Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-70-c9406a-kirmizi-ve-sari-baski-kafasi.webp",
      alt: "HP 70 C9406A Kırmızı ve Sarı baskı kafası",
    },
    midInfo: ["C9406A", "Kırmızı", "Sarı"],
    descRight:
      "Ürün Adı: HP 70 MY Baskı Kafası\nUyumlu Yazıcı Modelleri: HP Designjet Z2100, Z3100, Z3200, Z5200, Z5400",
  },
  {
    series: "hp-70",
    title: "HP 70 C9408A Mavi ve Yeşil Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-70-c9408a-mavi-ve-yesil-baski-kafasi.webp",
      alt: "HP 70 C9408A Mavi ve Yeşil baskı kafası",
    },
    midInfo: ["C9408A", "Mavi", "Yeşil"],
    descRight:
      "Ürün Adı: HP 70 C-G Baskı Kafası\nUyumlu Yazıcı Modelleri: HP Designjet Z2100, Z3100, Z3200, Z5200, Z5400",
  },
  {
    series: "hp-70",
    title: "HP 70 C9409A Mat Siyah ve Kırmızı Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-70-c9409a-mat-siyah-ve-kirmizi-baski-kafasi.webp",
      alt: "HP 70 C9409A Mat Siyah ve Kırmızı baskı kafası",
    },
    midInfo: ["C9409A", "Mat Siyah", "Kırmızı"],
    descRight:
      "Ürün Adı: HP 70 MB-R Baskı Kafası\nUyumlu Yazıcı Modelleri: HP Designjet Z2100, Z3100, Z3200, Z5200, Z5400",
  },
  {
    series: "hp-70",
    title: "HP 70 C9410A Gri - Gloss Enhancer Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-70-c9410a-gri-gloss-enhancer-kafa.webp",
      alt: "HP 70 C9410A Gri - Gloss Enhancer baskı kafası",
    },
    midInfo: ["C9410A", "Gri", "Gloss Enhancer"],
    descRight:
      "Ürün Adı: HP 70 G-Gloss Baskı Kafası\nUyumlu Yazıcı Modelleri: HP Designjet Z2100, Z3100, Z3200, Z5200, Z5400",
  },

  // ======================
  // HP 72 (Baskı Kafası)
  // ======================
  {
    series: "hp-72",
    title: "HP 72 C9380A Gri - Foto Siyah Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-72-c9380a-gri-foto-siyah-baski-kafasi.webp",
      alt: "HP 72 C9380A Gri - Foto Siyah baskı kafası",
    },
    midInfo: ["C9380A", "Gri", "Foto Siyah"],
    descRight:
      "Ürün Adı: HP 72 PKG Baskı Kafası\nUyumlu Yazıcı Modelleri: HP Designjet T1100, T1120, T1200, T1300, T2300, T610, T770, T790, T795",
  },
  {
    series: "hp-72",
    title: "HP 72 C9383A Mavi - Kırmızı Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-72-c9383a-mavi-kirmizi-baski-kafasi.webp",
      alt: "HP 72 C9383A Mavi - Kırmızı baskı kafası",
    },
    midInfo: ["C9383A", "Mavi", "Kırmızı"],
    descRight:
      "Ürün Adı: HP 72 MC Baskı Kafası\nUyumlu Yazıcı Modelleri: HP Designjet T1100, T1120, T1200, T1300, T2300, T610, T770, T790, T795",
  },
  {
    series: "hp-72",
    title: "HP 72 C9384A Sarı - Siyah Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-72-c9384a-sari-siyah-baski-kafasi.webp",
      alt: "HP 72 C9384A Sarı - Siyah baskı kafası",
    },
    midInfo: ["C9384A", "Sarı", "Siyah"],
    descRight:
      "Ürün Adı: HP 72 MKY Baskı Kafası\nUyumlu Yazıcı Modelleri: HP Designjet T1100, T1120, T1200, T1300, T2300, T610, T770, T790, T795",
  },

  // ======================
  // HP 771 (Baskı Kafası)
  // ======================
  {
    series: "hp-771",
    title: "HP 771 CE017A Orijinal Mat Siyah & Kromatik Kırmızı Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-771-ce017a-orjinal-mat-siyah-kromatik-kirmizi-baski-kafasi.webp",
      alt: "HP 771 CE017A Mat Siyah & Kromatik Kırmızı baskı kafası",
    },
    midInfo: ["CE017A", "Mat Siyah", "Kromatik Kırmızı", "775 ml"],
    descRight:
      "Baskı Kapasitesi: 775 ml\nYazıcı Modeli: DesignJet Z6200 Printer Serisi",
  },
  {
    series: "hp-771",
    title: "HP 771 CE018A Orijinal Sarı & Kırmızı Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-771-ce018a-orjinal-sari-kirmizi-baski-kafasi.webp",
      alt: "HP 771 CE018A Sarı & Kırmızı baskı kafası",
    },
    midInfo: ["CE018A", "Sarı", "Kırmızı", "775 ml"],
    descRight:
      "Baskı Kapasitesi: 775 ml\nYazıcı Modeli: DesignJet Z6200 Printer Serisi",
  },
  {
    series: "hp-771",
    title: "HP 771 CE019A Orijinal Açık Mavi & Açık Kırmızı Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-771-ce019a-orjinal-acik-mavi-acik-kirmizi-baski-kafasi.webp",
      alt: "HP 771 CE019A Açık Mavi & Açık Kırmızı baskı kafası",
    },
    midInfo: ["CE019A", "Açık Mavi", "Açık Kırmızı", "775 ml"],
    descRight:
      "Baskı Kapasitesi: 775 ml\nYazıcı Modeli: DesignJet Z6200 Printer Serisi",
  },
  {
    series: "hp-771",
    title: "HP 771 CE020A Orijinal Foto Siyah & Açık Gri Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-771-ce020a-orjinal-foto-siyah-acik-gri-baski-kafasi.webp",
      alt: "HP 771 CE020A Foto Siyah & Açık Gri baskı kafası",
    },
    midInfo: ["CE020A", "Foto Siyah", "Açık Gri", "775 ml"],
    descRight:
      "Baskı Kapasitesi: 775 ml\nYazıcı Modeli: DesignJet Z6200 Printer Serisi",
  },

  // ======================
  // HP 831 (Latex Baskı Kafası)
  // ======================
  {
    series: "hp-831",
    title: "HP 831 (CZ677A) Camgöbeği/Siyah Latex Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-831-cz677a-camgobegi-siyah-latex-baski-kafasi.webp",
      alt: "HP 831 CZ677A Camgöbeği/Siyah Latex baskı kafası",
    },
    midInfo: ["CZ677A", "Camgöbeği", "Siyah", "Latex"],
    descRight:
      "Uyumlu Yazıcı Modelleri: HP Latex 310, 315, 330, 335, 360, 365, 370, 375",
  },
  {
    series: "hp-831",
    title: "HP 831 (CZ678A) Sarı/Kırmızı Latex Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-831-cz678a-sari-kirmizi-latex-baski-kafasi.webp",
      alt: "HP 831 CZ678A Sarı/Kırmızı Latex baskı kafası",
    },
    midInfo: ["CZ678A", "Sarı", "Kırmızı", "Latex"],
    descRight:
      "Uyumlu Yazıcı Modelleri: HP Latex 310, 315, 330, 335, 360, 365, 370, 375",
  },
  {
    series: "hp-831",
    title: "HP 831 (CZ679A) Açık Kırmızı / Açık Mavi Latex Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-831-cz679a-acik-kirmizi-acik-mavi-lateks-baski-kafasi.webp",
      alt: "HP 831 CZ679A Açık Kırmızı/Açık Mavi Latex baskı kafası",
    },
    midInfo: ["CZ679A", "Açık Kırmızı", "Açık Mavi", "Latex"],
    descRight:
      "Uyumlu Yazıcı Modelleri: HP Latex 310, 315, 330, 335, 360, 365, 370, 375",
  },
  {
    series: "hp-831",
    title: "HP 831 (CZ680A) Latex Optimizasyon Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-831-cz680a-latex-optimizasyon-baski-kafasi.webp",
      alt: "HP 831 CZ680A Latex Optimizasyon baskı kafası",
    },
    midInfo: ["CZ680A", "Optimizer", "Latex"],
    descRight:
      "Uyumlu Yazıcı Modelleri: HP Latex 310, 315, 330, 335, 360, 365, 370, 375",
  },

  // ======================
  // Canon PF
  // ======================
  {
    series: "canon-pf",
    title: "CANON PF-03 Printhead / Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/canon-pf-03-printhead-baski-kafasi.webp",
      alt: "Canon PF-03 printhead baskı kafası",
    },
    midInfo: ["PF-03", "Canon", "Printhead"],
    descRight:
      "Uyumlu Yazıcı Modelleri: imagePROGRAF iPF500, 510, 600, 610, 700, 810, 815, 820, 825, 5000, 5100, 6000, 6100, 8000, 8100, 9000, 9100, 8010, 8110, 9010, 9110",
  },
  {
    series: "canon-pf",
    title: "CANON PF-05 Printhead / Baskı Kafası",
    image: {
      src: "/images/urunler/sarf-malzemeleri/baski-kafasi/canon-pf-05-printhead-baski-kafasi.webp",
      alt: "Canon PF-05 printhead baskı kafası",
    },
    midInfo: ["PF-05", "Canon", "Printhead"],
    descRight:
      "Uyumlu Yazıcı Modelleri: imagePROGRAF iPF8300 / 8300S / 8400 / 8400S / 9400 / 9400S / 6300 / 6400 / 6350 / 6450 / 8310",
  },
];

export default function BaskiKafasiClient() {
  const [active, setActive] = useState<SeriesKey>("all");

  const grouped = useMemo(() => {
    const buckets: Record<Exclude<SeriesKey, "all">, Product[]> = {
      "hp-70": [],
      "hp-72": [],
      "hp-771": [],
      "hp-831": [],
      "canon-pf": [],
    };

    PRODUCTS.forEach((p) => buckets[p.series].push(p));
    return buckets;
  }, []);

  const visibleGroups = useMemo(() => {
    const allGroups = ([
      { key: "hp-70", items: grouped["hp-70"] },
      { key: "hp-72", items: grouped["hp-72"] },
      { key: "hp-771", items: grouped["hp-771"] },
      { key: "hp-831", items: grouped["hp-831"] },
      { key: "canon-pf", items: grouped["canon-pf"] },
    ] as const).filter((g) => g.items.length > 0);

    if (active === "all") return allGroups;
    return allGroups.filter((g) => g.key === active);
  }, [active, grouped]);

  const FILTERS: { key: SeriesKey; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "hp-70", label: "HP 70" },
    { key: "hp-72", label: "HP 72" },
    { key: "hp-771", label: "HP 771" },
    { key: "hp-831", label: "HP 831" },
    { key: "canon-pf", label: "Canon PF" },
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
            Baskı Kafası
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            HP ve Canon yazıcılar için baskı kafalarını seri bazında filtreleyin.
            Detay sayfası yoktur; tüm ürünler bu sayfada listelenir. Doğru ürün seçimi
            için hızlı destek alabilirsiniz.
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
          </div>

          {/* Filters */}
          <div className="mt-6">
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Seriler
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
                {seriesLabel(g.key)}
              </h2>
              <span className="text-xs text-slate-500">{g.items.length} ürün</span>
            </div>

            <div className="grid gap-6">
              {g.items.map((p) => (
                <div
                  key={`${p.series}-${p.title}`}
                  className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-6">
                    {/* SOL: Görsel */}
                    <div className="relative w-full lg:w-56 shrink-0">
                      <div className="relative h-44 lg:h-40 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                        <Image
                          src={p.image.src}
                          alt={p.image.alt}
                          fill
                          className="object-contain p-2"
                          sizes="(min-width: 1024px) 224px, 100vw"
                        />
                      </div>
                    </div>

                    {/* ORTA: İsim + etiketler */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {p.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.midInfo.map((pill) => (
                          <span
                            key={pill}
                            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 h-px w-full bg-slate-100" />

                      <div className="mt-3 text-xs text-slate-500">
                        Seçim için yazıcı modelini paylaş: doğru eşleştirelim.
                      </div>
                    </div>

                    {/* SAĞ: Açıklama */}
                    <div className="w-full lg:w-[420px]">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <div className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                          Ürün Açıklaması
                        </div>

                        <pre className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-slate-700 font-sans">
                          {p.descRight}
                        </pre>
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
          Doğru baskı kafasını bulamadınız mı?
        </h3>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 leading-relaxed">
          Yazıcı modelinizi ve aradığınız kodu (örn: C9407A, C9380A, CE017A, CZ680A, PF-05)
          yazın; doğru ürün seçimini hızlıca netleştirelim.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={CONTACT.tel}
            className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            Hızlı Destek Al
          </a>

          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
