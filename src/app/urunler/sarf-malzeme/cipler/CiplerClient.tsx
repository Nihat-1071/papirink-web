// src/app/urunler/sarf-malzemeleri/cipler/CiplerClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

type GroupKey =
  | "all"
  | "epson-b6000"
  | "epson-sc-t3000-5000-7000"
  | "epson-sc-t3200-5200-7200"
  | "hp-70"
  | "hp-72";

type ChipType = "Atık Tank" | "Kartuş" | "One-Time Set" | "Süper";

type Product = {
  title: string;
  desc: string;
  brand: "Epson" | "HP";
  group: Exclude<GroupKey, "all">;
  chipType: ChipType;
  models: string[];
  pills: string[];
  image: { src: string; alt: string };
};

const CHIP_IMG = "/images/urunler/sarf-malzemeleri/cipler/epson-cip.webp";

function groupLabel(k: Exclude<GroupKey, "all">) {
  switch (k) {
    case "epson-b6000":
      return "Epson B6000";
    case "epson-sc-t3000-5000-7000":
      return "Epson SC-T3000 / T5000 / T7000";
    case "epson-sc-t3200-5200-7200":
      return "Epson SC-T3200 / T5200 / T7200";
    case "hp-70":
      return "HP 70 Uyumlu";
    case "hp-72":
      return "HP 72 Uyumlu";
  }
}

const PRODUCTS: Product[] = [
  {
    title: "Epson B6000 Atık Tank Çipi",
    desc:
      "Epson B6000 modeline uyumlu atık tank çipidir. Çip hata verene kadar kullanılabilir.",
    brand: "Epson",
    group: "epson-b6000",
    chipType: "Atık Tank",
    models: ["B6000"],
    pills: ["Epson", "B6000", "Atık Tank"],
    image: { src: CHIP_IMG, alt: "Epson B6000 atık tank çipi" },
  },
  {
    title: "Epson SC-T3000, T5000, T7000 Uyumlu Atık Tank Çipi",
    desc:
      "Epson SC-T3000 / T5000 / T7000 serileri ile uyumlu atık tank çipidir. Çip hata verene kadar kullanılabilir.",
    brand: "Epson",
    group: "epson-sc-t3000-5000-7000",
    chipType: "Atık Tank",
    models: ["SC-T3000", "SC-T5000", "SC-T7000"],
    pills: ["Epson", "SC-T3000", "SC-T5000", "SC-T7000", "Atık Tank"],
    image: { src: CHIP_IMG, alt: "Epson SC-T3000/T5000/T7000 atık tank çipi" },
  },
  {
    title: "Epson SC-T3000, T5000, T7000 Uyumlu Kartuş Çipi (Tek Renk)",
    desc:
      "Epson 3000 / 5000 / 7000 modellerine uyumlu, her kartuş için ayrı ayrı kullanılabilen tek renk kartuş çipidir.",
    brand: "Epson",
    group: "epson-sc-t3000-5000-7000",
    chipType: "Kartuş",
    models: ["SC-T3000", "SC-T5000", "SC-T7000"],
    pills: ["Epson", "Tek Renk", "Kartuş Çipi", "T3000", "T5000", "T7000"],
    image: { src: CHIP_IMG, alt: "Epson SC-T3000/T5000/T7000 kartuş çipi" },
  },
  {
    title: "Epson SC-T3200, T5200, T7200 Uyumlu Atık Tank Çipi",
    desc:
      "Epson SC-T3200 / T5200 / T7200 modellerine uyumlu atık tank çipidir.",
    brand: "Epson",
    group: "epson-sc-t3200-5200-7200",
    chipType: "Atık Tank",
    models: ["SC-T3200", "SC-T5200", "SC-T7200"],
    pills: ["Epson", "SC-T3200", "SC-T5200", "SC-T7200", "Atık Tank"],
    image: { src: CHIP_IMG, alt: "Epson SC-T3200/T5200/T7200 atık tank çipi" },
  },
  {
    title: "Epson SC-T3200, T5200, T7200 Uyumlu One-Time Kartuş Çipi (5 Renk)",
    desc:
      "Epson T3200 / T5200 / T7200 modellerine uyumlu tek kullanımlık çiplerdir. 5 renk takım olarak gönderilir.",
    brand: "Epson",
    group: "epson-sc-t3200-5200-7200",
    chipType: "One-Time Set",
    models: ["SC-T3200", "SC-T5200", "SC-T7200"],
    pills: ["Epson", "One-Time", "5 Renk", "T3200", "T5200", "T7200"],
    image: { src: CHIP_IMG, alt: "Epson one-time 5 renk kartuş çipi seti" },
  },
  {
    title: "HP 70 Uyumlu Kartuş Çipi (Tek Renk)",
    desc:
      "HP yazıcılarda kullanılmak üzere geliştirilmiştir. HP DesignJet T610, T620, T770, T790, T795, T1100, T1120, T1200, T1300, T2300 modellerine uyumludur. Dolum tankları için her bir kartuşa ayrı ayrı kullanılabilecek çiplerdir.",
    brand: "HP",
    group: "hp-70",
    chipType: "Kartuş",
    models: ["T610", "T620", "T770", "T790", "T795", "T1100", "T1120", "T1200", "T1300", "T2300"],
    pills: ["HP", "70", "Tek Renk", "Kartuş Çipi", "DesignJet"],
    image: { src: CHIP_IMG, alt: "HP 70 uyumlu kartuş çipi" },
  },
  {
    title: "HP 72 Uyumlu Kartuş Çipi (Tek Renk)",
    desc:
      "HP yazıcılarda kullanılmak üzere geliştirilmiştir. HP DesignJet T610, T620, T770, T790, T795, T1100, T1120, T1200, T1300, T2300 modellerine uyumludur. Dolum tankları için her bir kartuşa ayrı ayrı kullanılabilecek çiplerdir.",
    brand: "HP",
    group: "hp-72",
    chipType: "Kartuş",
    models: ["T610", "T620", "T770", "T790", "T795", "T1100", "T1120", "T1200", "T1300", "T2300"],
    pills: ["HP", "72", "Tek Renk", "Kartuş Çipi", "DesignJet"],
    image: { src: CHIP_IMG, alt: "HP 72 uyumlu kartuş çipi" },
  },
  {
    title: "HP 72 Uyumlu Süper Çip",
    desc:
      "HP yazıcılarda kullanılmak üzere geliştirilmiştir. HP DesignJet T610, T620, T770, T790, T795, T1100, T1120, T1200, T1300, T2300 modellerine uyumludur. Sadece MK dolum tanka takılır, tüm kartuşları algılar.",
    brand: "HP",
    group: "hp-72",
    chipType: "Süper",
    models: ["T610", "T620", "T770", "T790", "T795", "T1100", "T1120", "T1200", "T1300", "T2300"],
    pills: ["HP", "72", "Süper Çip", "MK Tank", "DesignJet"],
    image: { src: CHIP_IMG, alt: "HP 72 uyumlu süper çip" },
  },
];

export default function CiplerClient() {
  const [active, setActive] = useState<GroupKey>("all");

  const grouped = useMemo(() => {
    const buckets: Record<Exclude<GroupKey, "all">, Product[]> = {
      "epson-b6000": [],
      "epson-sc-t3000-5000-7000": [],
      "epson-sc-t3200-5200-7200": [],
      "hp-70": [],
      "hp-72": [],
    };

    PRODUCTS.forEach((p) => buckets[p.group].push(p));
    return buckets;
  }, []);

  const visibleGroups = useMemo(() => {
    const allGroups = ([
      { key: "epson-b6000", items: grouped["epson-b6000"] },
      { key: "epson-sc-t3000-5000-7000", items: grouped["epson-sc-t3000-5000-7000"] },
      { key: "epson-sc-t3200-5200-7200", items: grouped["epson-sc-t3200-5200-7200"] },
      { key: "hp-70", items: grouped["hp-70"] },
      { key: "hp-72", items: grouped["hp-72"] },
    ] as const).filter((g) => g.items.length > 0);

    if (active === "all") return allGroups;
    return allGroups.filter((g) => g.key === active);
  }, [active, grouped]);

  const FILTERS: { key: GroupKey; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "epson-b6000", label: "Epson B6000" },
    { key: "epson-sc-t3000-5000-7000", label: "Epson T3000/5000/7000" },
    { key: "epson-sc-t3200-5200-7200", label: "Epson T3200/5200/7200" },
    { key: "hp-70", label: "HP 70" },
    { key: "hp-72", label: "HP 72" },
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
            Çipler
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            Epson ve HP uyumlu kartuş çipleri, atık tank çipleri ve özel çip
            seçeneklerini model bazında filtreleyin. Emin değilseniz hızlıca teklif/uyumluluk
            desteği alın.
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

            <div className="grid gap-6">
              {g.items.map((p) => {
                const isHP = p.brand === "HP";

                return (
                  <div
                    key={`${p.group}-${p.title}`}
                    className="rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 transition"
                  >
                    {/* 3 kolon: sol görsel / orta info / sağ açıklama */}
                    <div className="grid gap-5 md:grid-cols-[220px_1fr_1.2fr] items-start">
                      {/* SOL: aynı görsel ama “badge” hissi */}
                      <div className="relative">
                        <div
                          className={
                            "relative overflow-hidden rounded-xl border bg-gradient-to-br " +
                            (isHP
                              ? "from-slate-50 to-slate-100 border-slate-200"
                              : "from-slate-50 to-slate-100 border-slate-200")
                          }
                        >
                          <div className="absolute left-3 top-3 z-10">
                            <span
                              className={
                                "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold " +
                                (isHP
                                  ? "bg-slate-900 text-white"
                                  : "bg-blue-600 text-white")
                              }
                            >
                              {p.brand}
                            </span>
                          </div>

                          <div className="relative h-44">
                            <Image
                              src={p.image.src}
                              alt={p.image.alt}
                              fill
                              className="object-contain p-6"
                              sizes="220px"
                            />
                          </div>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
                            {p.chipType}
                          </span>
                          {p.models.slice(0, 3).map((m) => (
                            <span
                              key={m}
                              className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                            >
                              {m}
                            </span>
                          ))}
                          {p.models.length > 3 && (
                            <span className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500">
                              +{p.models.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* ORTA: başlık + pills */}
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-slate-900">
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

                        <div className="mt-5 h-px w-full bg-slate-100" />

                        <div className="mt-4 text-xs text-slate-500">
                          Detay sayfası yok — teklif/uyumluluk için hızlı iletişim
                        </div>
                      </div>

                      {/* SAĞ: açıklama + CTA */}
                      <div className="min-w-0">
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {p.desc}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                          <a
                            href={CONTACT.tel}
                            className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
                          >
                            Teklif Al
                          </a>

                          <a
                            href={CONTACT.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition"
                          >
                            WhatsApp
                          </a>

                          <Link
                            href="/iletisim"
                            className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                          >
                            İletişim
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Uyumlu çipi netleştirelim
        </h3>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 leading-relaxed">
          Yazıcı modelinizi ve ihtiyacınızın{" "}
          <span className="font-semibold">kartuş çipi</span> mi{" "}
          <span className="font-semibold">atık tank çipi</span> mi olduğunu yazın;
          doğru ürünü hızlıca belirleyelim.
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
