"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

type BrandKey = "all" | "canon" | "epson" | "hp-designjet";

function detectBrand(title: string): Exclude<BrandKey, "all"> {
  const t = title.toLowerCase();
  if (t.includes("canon")) return "canon";
  if (t.includes("epson")) return "epson";
  // HP + DesignJet benzerliklerini tek grupta tutuyoruz
  return "hp-designjet";
}

function brandLabel(k: Exclude<BrandKey, "all">) {
  switch (k) {
    case "canon":
      return "Canon";
    case "epson":
      return "Epson";
    case "hp-designjet":
      return "HP DesignJet";
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
  // CANON
  // ======================
  {
    title: "Canon Pro 4000 Plotter Çizici",
    desc: "Büyük format baskı ve teknik çizim için profesyonel çözüm.",
    href: "/urunler/makinalar/plotter/canon-pro-4000",
    pills: ["Canon", "Pro 4000"],
    image: {
      src: "/images/urunler/makinalar/plotter/canon-pro-4000-plotter-cizici.jpg",
      alt: "Canon Pro 4000 plotter çizici",
    },
  },
  {
    title: "Canon Pro 4100 Plotter Çizici",
    desc: "Yüksek hacimli üretim için hızlı ve net geniş format çıktı.",
    href: "/urunler/makinalar/plotter/canon-pro-4100",
    pills: ["Canon", "Pro 4100"],
    image: {
      src: "/images/urunler/makinalar/plotter/canon-pro-4100-plotter-cizici.jpg",
      alt: "Canon Pro 4100 plotter çizici",
    },
  },
  {
    title: "Canon Pro 4100S Plotter Çizici",
    desc: "Profesyonel baskı kalitesi ve verimlilik odaklı geniş format çözüm.",
    href: "/urunler/makinalar/plotter/canon-pro-4100s",
    pills: ["Canon", "Pro 4100S"],
    image: {
      src: "/images/urunler/makinalar/plotter/canon-pro-4100s-plotter-cizici.jpg",
      alt: "Canon Pro 4100S plotter çizici",
    },
  },
  {
    title: "Canon TM-200 Plotter Çizici",
    desc: "CAD/teknik çizimler için kompakt, güvenilir ve ekonomik seçenek.",
    href: "/urunler/makinalar/plotter/canon-tm-200",
    pills: ["Canon", "TM-200"],
    image: {
      src: "/images/urunler/makinalar/plotter/canon-tm-200-plotter-cizici.jpg",
      alt: "Canon TM-200 plotter çizici",
    },
  },
  {
    title: "Canon TM-350 Plotter Çizici",
    desc: "Yüksek verimlilik ve net çizgi kalitesiyle iş akışını hızlandırır.",
    href: "/urunler/makinalar/plotter/canon-tm-350",
    pills: ["Canon", "TM-350"],
    image: {
      src: "/images/urunler/makinalar/plotter/canon-tm-350-plotter-cizici.jpg",
      alt: "Canon TM-350 plotter çizici",
    },
  },
  {
    title: "Canon TX4100 Plotter Çizici",
    desc: "Yoğun baskı ortamları için hızlı, dayanıklı geniş format çözüm.",
    href: "/urunler/makinalar/plotter/canon-tx4100",
    pills: ["Canon", "TX4100"],
    image: {
      src: "/images/urunler/makinalar/plotter/canon-tx4100-plotter-cizici.jpg",
      alt: "Canon TX4100 plotter çizici",
    },
  },
  {
    title: "Canon TX4200 Plotter Çizici",
    desc: "Yüksek hız ve verimlilik odaklı geniş format baskı çözümü.",
    href: "/urunler/makinalar/plotter/canon-tx4200",
    pills: ["Canon", "TX4200"],
    image: {
      src: "/images/urunler/makinalar/plotter/canon-tx4200-plotter-cizici.jpg",
      alt: "Canon TX4200 plotter çizici",
    },
  },

  // ======================
  // EPSON
  // ======================
  {
    title: 'Epson SureColor SC-B6000 (44")',
    desc: "44 inç geniş format, yüksek kalite çıktı ve güçlü performans.",
    href: "/urunler/makinalar/plotter/epson-surecolor-sc-b6000-44-inc",
    pills: ["Epson", '44"'],
    image: {
      src: "/images/urunler/makinalar/plotter/epson-surecolor-sc-b6000-44-inc.jpg",
      alt: "Epson SureColor SC-B6000 44 inç plotter",
    },
  },
  {
    title: "Epson SureColor SC-T5200 Plotter Çizici",
    desc: "CAD/GIS uygulamalarında hızlı çıktı ve güvenilir çizim performansı.",
    href: "/urunler/makinalar/plotter/epson-surecolor-sc-t5200",
    pills: ["Epson", "SC-T5200"],
    image: {
      src: "/images/urunler/makinalar/plotter/epson-surecolor-sc-t5200-plotter-cizici.jpg",
      alt: "Epson SureColor SC-T5200 plotter çizici",
    },
  },
  {
    title: "Epson SureColor SC-T7200",
    desc: "Detaylı teknik çizimler için güçlü, yüksek performanslı geniş format.",
    href: "/urunler/makinalar/plotter/epson-surecolor-sc-t7200",
    pills: ["Epson", "SC-T7200"],
    image: {
      src: "/images/urunler/makinalar/plotter/epson-surecolor-sc-t7200.jpg",
      alt: "Epson SureColor SC-T7200 plotter",
    },
  },

  // ======================
  // HP DESIGNJET
  // ======================
  {
    title: "HP DesignJet Smart Tank T908 914 mm Tarayıcı Özellikli Yazıcı",
    desc: "914 mm genişlikte baskı + tarayıcı özellikleriyle entegre iş akışı.",
    href: "/urunler/makinalar/plotter/hp-designjet-smart-tank-t908",
    pills: ["HP", "T908", "914 mm"],
    image: {
      src: "/images/urunler/makinalar/plotter/hp-designjet-smart-tank-t908-914-mm-tarayici-ozellikli-yazici.png",
      alt: "HP DesignJet Smart Tank T908 914 mm tarayıcılı yazıcı",
    },
  },
  {
    title: 'HP DesignJet T120 24" Plotter Çizici',
    desc: "Kompakt ofisler için 24 inç CAD çizim ve poster baskı çözümü.",
    href: "/urunler/makinalar/plotter/hp-designjet-t120-24-inc",
    pills: ["HP", "T120", '24"'],
    image: {
      src: "/images/urunler/makinalar/plotter/hp-designjet-t120-24-inc-plotter-cizici.jpg",
      alt: "HP DesignJet T120 24 inç plotter çizici",
    },
  },
  {
    title: "HP DesignJet T1300 Plotter Çizici",
    desc: "Kurumsal CAD/GIS işleri için dayanıklı ve verimli geniş format.",
    href: "/urunler/makinalar/plotter/hp-designjet-t1300",
    pills: ["HP", "T1300", "DesignJet"],
    image: {
      src: "/images/urunler/makinalar/plotter/hp-designjet-t1300-plotter-cizici.jpg",
      alt: "HP DesignJet T1300 plotter çizici",
    },
  },
  {
    title: "HP DesignJet T1700 44-Inç Plotter Çizici",
    desc: "CAD/GIS işler için güvenilir ve keskin çizim kalitesi.",
    href: "/urunler/makinalar/plotter/hp-designjet-t1700-44-inc",
    pills: ["HP", "T1700", "44 inç"],
    image: {
      src: "/images/urunler/makinalar/plotter/hp-designjet-t1700-44-inc-plotter-cizici.jpg",
      alt: "HP DesignJet T1700 44 inç plotter çizici",
    },
  },
  {
    title: "HP DesignJet T2600 Plotter Çizici 36 inç",
    desc: "36 inç geniş formatla teknik çizim ve üretkenlik odaklı çözüm.",
    href: "/urunler/makinalar/plotter/hp-designjet-t2600-36-inc",
    pills: ["HP", "T2600", "36 inç"],
    image: {
      src: "/images/urunler/makinalar/plotter/hp-designjet-t2600-36-inc-plotter-cizici.jpg",
      alt: "HP DesignJet T2600 36 inç plotter çizici",
    },
  },
  {
    title: "HP DesignJet T520 36 inç",
    desc: "36 inç CAD çizimler için pratik, ekonomik ve güvenilir plotter.",
    href: "/urunler/makinalar/plotter/hp-designjet-t520-36-inc",
    pills: ["HP", "T520", "36 inç"],
    image: {
      src: "/images/urunler/makinalar/plotter/hp-designjet-t520-36-inc-plotter-cizici.jpg",
      alt: "HP DesignJet T520 36 inç plotter",
    },
  },
  {
    title: "HP DesignJet T930 Plotter",
    desc: "Profesyonel CAD çıktı süreçleri için hızlı ve tutarlı performans.",
    href: "/urunler/makinalar/plotter/hp-designjet-t930",
    pills: ["HP", "T930", "DesignJet"],
    image: {
      src: "/images/urunler/makinalar/plotter/hp-designjet-t930-plotter-cizici.jpg",
      alt: "HP DesignJet T930 plotter",
    },
  },
  {
    title: "HP DesignJet Z5600 PS",
    desc: "Yüksek kalite grafik/baskı işleri için güçlü geniş format çözüm.",
    href: "/urunler/makinalar/plotter/hp-designjet-z5600-ps",
    pills: ["HP", "Z5600", "PS"],
    image: {
      src: "/images/urunler/makinalar/plotter/hp-designjet-z5600-ps-44-inc-plotter-cizici.jpg",
      alt: "HP DesignJet Z5600 PS plotter",
    },
  },
];


export default function PlotterClient() {
  const [active, setActive] = useState<BrandKey>("all");

  const grouped = useMemo(() => {
    const buckets: Record<Exclude<BrandKey, "all">, Product[]> = {
      canon: [],
      epson: [],
      "hp-designjet": [],
    };

    PRODUCTS.forEach((p) => {
      const b = detectBrand(p.title);
      buckets[b].push(p);
    });

    return buckets;
  }, []);

  const visibleGroups = useMemo(() => {
    const allGroups = ([
      { key: "canon", items: grouped.canon },
      { key: "epson", items: grouped.epson },
      { key: "hp-designjet", items: grouped["hp-designjet"] },
    ] as const).filter((g) => g.items.length > 0);

    if (active === "all") return allGroups;
    return allGroups.filter((g) => g.key === active);
  }, [active, grouped]);

  const FILTERS: { key: BrandKey; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "canon", label: "Canon" },
    { key: "epson", label: "Epson" },
    { key: "hp-designjet", label: "HP DesignJet" },
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
            Plotter Makineleri
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            Canon, HP DesignJet ve Epson plotter modellerini inceleyin. Teknik
            çizim (CAD) ve büyük format baskı ihtiyaçlarınız için uygun modeli
            hızlıca belirleyin.
          </p>

          <div className="mt-6 h-px w-full bg-slate-100" />


          {/* Filters */}
          <div className="mt-6">
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Plotter Ürünlerimiz
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

                    {/* SAĞ: kartın yarısına yakın görsel (taşarsa kırp) */}
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

        {visibleGroups.length === 0 && (
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
            <p className="text-sm text-slate-600">
              Bu filtre için henüz ürün eklenmedi.
            </p>
            <button
              type="button"
              onClick={() => setActive("all")}
              className="mt-4 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Tümünü Göster
            </button>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Model seçmekte zorlanıyor musunuz?
        </h3>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 leading-relaxed">
          Kullanım amacınızı (CAD/afiş/foto), baskı genişliğini ve aylık sarf
          tüketimini paylaşın; size uygun plotter modelini hızlıca önerelim.
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
