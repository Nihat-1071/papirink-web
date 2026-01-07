// src/app/urunler/sarf-malzemeleri/toner/TonerClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

type GroupKey = "all" | "plotwave" | "f3-f11" | "b4-b5";

function detectGroup(title: string): Exclude<GroupKey, "all"> {
  const t = title.toLowerCase();

  if (t.includes("plotwave")) return "plotwave";
  if (t.includes("f3") || t.includes("f11")) return "f3-f11";
  if (t.includes("b4") || t.includes("b5")) return "b4-b5";

  return "plotwave";
}

function groupLabel(k: Exclude<GroupKey, "all">) {
  switch (k) {
    case "plotwave":
      return "Oce Plotwave";
    case "f3-f11":
      return "Oce F3 – F11";
    case "b4-b5":
      return "Oce B4 – B5";
  }
}

type SpecRow = { k: string; v: string };

type Product = {
  title: string;
  subtitle: string; // kısa kategori/seri
  pills: string[];
  image: { src: string; alt: string };
  specs: SpecRow[];
  note?: string;
};

const PRODUCTS: Product[] = [
  {
    title: "Oce Plotwave Muadil Toner",
    subtitle: "Oce Plotwave Muadil Toner",
    pills: ["Muadil", "Oce", "Plotwave"],
    image: {
      src: "/images/urunler/sarf-malzemeleri/toner/oce-plotwave-muadil-toner.webp",
      alt: "Oce Plotwave muadil toner",
    },
    specs: [
      { k: "Marka", v: "Light Format Print Toner" },
      { k: "Menşei", v: "İthal" },
      { k: "Ambalaj", v: "Paket" },
      { k: "Ağırlık", v: "500–550 gr." },
      { k: "Uyumlu Yazıcılar", v: "Oce Plotwave Serisi" },
    ],
    note: "Not: İlgili ürün adet fiyatımızdır.",
  },
  {
    title: "Oce F3 – F11 Orijinal Toner",
    subtitle: "Oce Toner",
    pills: ["Orijinal", "Oce", "F3", "F11"],
    image: {
      src: "/images/urunler/sarf-malzemeleri/toner/oce-f3-f11-orijinal-toner.webp",
      alt: "Oce F3 F11 orijinal toner",
    },
    specs: [
      { k: "Marka", v: "Oce F3 - F11 Toner" },
      { k: "Menşei", v: "İthal" },
      { k: "Ambalaj", v: "2’li Paket" },
    ],
  },
  {
    title: "Oce B4 – B5 Muadil Toner",
    subtitle: "Oce TDS Serisi Toner",
    pills: ["Muadil", "Oce", "B4", "B5", "TDS"],
    image: {
      src: "/images/urunler/sarf-malzemeleri/toner/oce-b4-b5-muadil-toner.webp",
      alt: "Oce B4 B5 muadil toner",
    },
    specs: [
      { k: "Marka", v: "Light Format Print Toner B4-B5" },
      { k: "Menşei", v: "İthal" },
      { k: "Ambalaj", v: "Paket" },
      { k: "Ağırlık", v: "464–550 gr." },
      { k: "Uyumlu Yazıcılar", v: "Tds 300, 400, 600, 9600" },
    ],
    note: "Not: İlgili ürün adet fiyatımızdır.",
  },
];

export default function TonerClient() {
  const [active, setActive] = useState<GroupKey>("all");

  const grouped = useMemo(() => {
    const buckets: Record<Exclude<GroupKey, "all">, Product[]> = {
      plotwave: [],
      "f3-f11": [],
      "b4-b5": [],
    };

    PRODUCTS.forEach((p) => {
      const g = detectGroup(p.title);
      buckets[g].push(p);
    });

    return buckets;
  }, []);

  const visibleGroups = useMemo(() => {
    const all = ([
      { key: "plotwave", items: grouped.plotwave },
      { key: "f3-f11", items: grouped["f3-f11"] },
      { key: "b4-b5", items: grouped["b4-b5"] },
    ] as const).filter((g) => g.items.length > 0);

    if (active === "all") return all;
    return all.filter((g) => g.key === active);
  }, [active, grouped]);

  const FILTERS: { key: GroupKey; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "plotwave", label: "Plotwave" },
    { key: "f3-f11", label: "F3–F11" },
    { key: "b4-b5", label: "B4–B5" },
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
            Toner
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            Oce plotter toner ürünlerini kategori bazında filtreleyin. Uyumlu yazıcı serinizi
            söyleyin, doğru toner seçimini hızlıca netleştirelim.
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
                {groupLabel(g.key)}
              </h2>
              <span className="text-xs text-slate-500">{g.items.length} ürün</span>
            </div>

            <div className="space-y-4">
              {g.items.map((p) => (
                <article
                  key={p.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
                >
                  {/* 3 kolon: sol resim / orta isim / sağ açıklama */}
                  <div className="grid gap-5 md:grid-cols-[220px_1fr_1fr] items-start">
                    {/* SOL: resim */}
                    <div className="relative">
                      <div className="relative h-40 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                        <Image
                          src={p.image.src}
                          alt={p.image.alt}
                          fill
                          className="object-contain"
                          sizes="(min-width: 768px) 220px, 100vw"
                        />
                      </div>
                    </div>

                    {/* ORTA: başlık + etiketler */}
                    <div className="min-w-0">
                      <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                        {p.subtitle}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-slate-900">
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

                      <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                        Uyumlu seri ve paket içeriği için hızlıca teyit alabilirsiniz.
                      </p>
                    </div>

                    {/* SAĞ: ürün açıklaması */}
                    <div className="min-w-0">
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <div className="text-sm font-semibold text-slate-900">
                          Ürün Açıklaması
                        </div>

                        <div className="mt-3 space-y-2 text-sm">
                          {p.specs.map((r) => (
                            <div
                              key={r.k}
                              className="grid grid-cols-[140px_1fr] gap-3"
                            >
                              <div className="text-slate-600 font-medium">
                                {r.k}
                              </div>
                              <div className="text-slate-900">{r.v}</div>
                            </div>
                          ))}
                        </div>

                        {p.note ? (
                          <p className="mt-3 text-xs text-slate-600">{p.note}</p>
                        ) : null}
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <a
                          href={CONTACT.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-700 transition"
                        >
                          WhatsApp ile sor
                        </a>
                        <a
                          href={CONTACT.tel}
                          className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition"
                        >
                          Telefonla destek
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
          Doğru toneri bulamadınız mı?
        </h3>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 leading-relaxed">
          Yazıcı modelinizi/serinizi (Plotwave, F3–F11, TDS 300/400/600/9600 vb.)
          yazın; uygun toner ve paket bilgisini hızlıca netleştirelim.
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
