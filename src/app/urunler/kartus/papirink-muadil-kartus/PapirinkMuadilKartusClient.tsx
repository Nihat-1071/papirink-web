"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

type SeriesKey = "all" | "hp-81" | "hp-91" | "hp-761" | "hp-771";

type Product = {
  title: string;
  desc: string;
  href: string;
  pills: string[];
  image: { src: string; alt: string };
};

function detectSeries(title: string): Exclude<SeriesKey, "all"> {
  const t = title.toLowerCase();
  if (t.includes("hp 81") || t.includes("hp-81")) return "hp-81";
  if (t.includes("hp 91") || t.includes("hp-91")) return "hp-91";
  if (t.includes("hp 761") || t.includes("hp-761")) return "hp-761";
  if (t.includes("hp 771") || t.includes("hp-771")) return "hp-771";
  return "hp-761";
}

function seriesLabel(k: Exclude<SeriesKey, "all">) {
  switch (k) {
    case "hp-81":
      return "HP 81 Muadil";
    case "hp-91":
      return "HP 91 Muadil";
    case "hp-761":
      return "HP 761 Muadil";
    case "hp-771":
      return "HP 771 Muadil";
  }
}

const BASE = "/urunler/kartus/papirink-muadil-kartus";

// İstersen bunları ileride gerçek alt sayfalara bağlarız:
const HP81_HREF = `${BASE}/hp-81`;
const HP91_HREF = `${BASE}/hp-91`;
const HP761_HREF = `${BASE}/hp-761`;
const HP771_HREF = `${BASE}/hp-771`;

const PRODUCTS: Product[] = [
  {
    title: "HP 81 Muadil Kartuş (Tüm Renkler)",
    desc: "HP 81 serisi için muadil kartuşlar — tüm renk seçenekleri tek kategoride.",
    href: HP81_HREF,
    pills: ["HP 81", "Muadil", "Tüm Renkler"],
    image: {
      src: "/images/urunler/kartus/papirink-muadil-kartus/hp-81-muadil-kartus-tum-renkler.jpg",
      alt: "HP 81 muadil kartuş tüm renkler",
    },
  },
  {
    title: "HP 91 Muadil Kartuş (Tüm Renkler)",
    desc: "HP 91 serisi için muadil kartuşlar — tüm renk seçenekleri tek kategoride.",
    href: HP91_HREF,
    pills: ["HP 91", "Muadil", "Tüm Renkler"],
    image: {
      src: "/images/urunler/kartus/papirink-muadil-kartus/hp-91-muadil-kartus-tum-renkler.jpg",
      alt: "HP 91 muadil kartuş tüm renkler",
    },
  },
  {
    title: "HP 761 Muadil Kartuş (Tüm Renkler)",
    desc: "HP 761 serisi için muadil kartuşlar — tüm renk seçenekleri tek kategoride.",
    href: HP761_HREF,
    pills: ["HP 761", "Muadil", "Tüm Renkler"],
    image: {
      src: "/images/urunler/kartus/papirink-muadil-kartus/hp-761-muadil-kartus-tum-renkler.jpg",
      alt: "HP 761 muadil kartuş tüm renkler",
    },
  },
  {
    title: "HP 761 Muadil Kartuş (Siyah / Black)",
    desc: "HP 761 serisi için siyah muadil kartuş — hızlı temin ve destek.",
    href: HP761_HREF,
    pills: ["HP 761", "Muadil", "Siyah", "Black"],
    image: {
      src: "/images/urunler/kartus/papirink-muadil-kartus/hp-761-muadil-kartus-siyah-black.png",
      alt: "HP 761 muadil kartuş siyah black",
    },
  },
  {
    title: "HP 771 Muadil Kartuş (Tüm Renkler)",
    desc: "HP 771 serisi için muadil kartuşlar — tüm renk seçenekleri tek kategoride.",
    href: HP771_HREF,
    pills: ["HP 771", "Muadil", "Tüm Renkler"],
    image: {
      src: "/images/urunler/kartus/papirink-muadil-kartus/hp-771-muadil-kartus-tum-renkler.jpg",
      alt: "HP 771 muadil kartuş tüm renkler",
    },
  },
];

export default function PapirinkMuadilKartusClient() {
  const [active, setActive] = useState<SeriesKey>("all");

  const grouped = useMemo(() => {
    const buckets: Record<Exclude<SeriesKey, "all">, Product[]> = {
      "hp-81": [],
      "hp-91": [],
      "hp-761": [],
      "hp-771": [],
    };

    PRODUCTS.forEach((p) => {
      const s = detectSeries(p.title);
      buckets[s].push(p);
    });

    return buckets;
  }, []);

  const visibleGroups = useMemo(() => {
    const allGroups = ([
      { key: "hp-81", items: grouped["hp-81"] },
      { key: "hp-91", items: grouped["hp-91"] },
      { key: "hp-761", items: grouped["hp-761"] },
      { key: "hp-771", items: grouped["hp-771"] },
    ] as const).filter((g) => g.items.length > 0);

    if (active === "all") return allGroups;
    return allGroups.filter((g) => g.key === active);
  }, [active, grouped]);

  const FILTERS: { key: SeriesKey; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "hp-81", label: "HP 81" },
    { key: "hp-91", label: "HP 91" },
    { key: "hp-761", label: "HP 761" },
    { key: "hp-771", label: "HP 771" },
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
            Papirink Muadil Kartuş
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            HP plotter serileri için muadil kartuşları seri bazında filtreleyin.
            Doğru seri/renk seçimi için hızlı destek alabilirsiniz.
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

            <Link
              href="/iletisim"
              className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              İletişim kanallarımız
            </Link>
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
              <span className="text-xs text-slate-500">
                {g.items.length} ürün
              </span>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {g.items.map((p) => (
                <Link
                  key={`${p.href}-${p.title}`}
                  href={p.href}
                  className="group block rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-300 transition"
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

                      <div className="mt-4 text-xs text-slate-500">
                        Ürün detayı
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
          Doğru muadil kartuşu bulamadınız mı?
        </h3>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 leading-relaxed">
          Yazıcı modelinizi ve ihtiyacınız olan rengi paylaşın; en uygun muadil
          kartuşu hızlıca netleştirelim.
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
