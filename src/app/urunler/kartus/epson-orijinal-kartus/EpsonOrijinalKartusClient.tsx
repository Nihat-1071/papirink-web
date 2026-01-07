"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

/* ================= TYPES ================= */

type SeriesKey = "all" | "t596" | "t636" | "t684" | "t714";

type Product = {
  title: string;
  desc: string;
  href: string;
  pills: string[];
  image: { src: string; alt: string };
};

/* ================= HELPERS ================= */

function detectSeries(title: string): Exclude<SeriesKey, "all"> {
  const t = title.toLowerCase();
  if (t.includes("t596")) return "t596";
  if (t.includes("t636")) return "t636";
  // senin içerikte t684 diye geçiyor ama klasör epson-t-694
  if (t.includes("t684") || t.includes("t694")) return "t684";
  if (t.includes("t714")) return "t714";
  return "t636";
}

function seriesLabel(key: Exclude<SeriesKey, "all">) {
  switch (key) {
    case "t596":
      return "Epson T596";
    case "t636":
      return "Epson T636";
    case "t684":
      return "Epson T684 (T694)";
    case "t714":
      return "Epson T714";
  }
}

/* ================= LINKS ================= */

const BASE_HREF = "/urunler/kartus/epson-orijinal-kartus";
const T596_HREF = `${BASE_HREF}/epson-t-596`;
const T636_HREF = `${BASE_HREF}/epson-t-636`;
const T694_HREF = `${BASE_HREF}/epson-t-694`; // (T684/T694)
const T714_HREF = `${BASE_HREF}/epson-t-714`;

/* ================= PRODUCTS ================= */

const PRODUCTS: Product[] = [
  // T596
  {
    title: "Epson T596C Beyaz (White) Orijinal Kartuş",
    desc: "Epson Stylus Pro yazıcılar için beyaz (white) orijinal kartuş.",
    href: T596_HREF,
    pills: ["Epson T596", "White", "Beyaz"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t596c-white-beyaz-kartus.jpg",
      alt: "Epson T596C beyaz orijinal kartuş",
    },
  },

  // T636
  {
    title: "Epson T636A Turuncu Orijinal Kartuş",
    desc: "Epson T636 serisi turuncu orijinal kartuş.",
    href: T636_HREF,
    pills: ["Epson T636", "Turuncu"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t636a-c13t636a00-orijinal-turuncu-kartus.jpg",
      alt: "Epson T636A turuncu orijinal kartuş",
    },
  },
  {
    title: "Epson T636B Yeşil Orijinal Kartuş",
    desc: "Epson T636 serisi yeşil orijinal kartuş.",
    href: T636_HREF,
    pills: ["Epson T636", "Yeşil"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t636b-c13t636b00-orijinal-yesil-kartus.jpg",
      alt: "Epson T636B yeşil orijinal kartuş",
    },
  },
  {
    title: "Epson T636C Açık Mavi Orijinal Kartuş",
    desc: "Epson T636 serisi açık mavi orijinal kartuş.",
    href: T636_HREF,
    pills: ["Epson T636", "Açık Mavi"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t636c-c13t636c00-acik-mavi-kartus.jpg",
      alt: "Epson T636C açık mavi orijinal kartuş",
    },
  },
  {
    title: "Epson T636E Açık Kırmızı Orijinal Kartuş",
    desc: "Epson T636 serisi açık kırmızı orijinal kartuş.",
    href: T636_HREF,
    pills: ["Epson T636", "Açık Kırmızı"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t636e-acik-kirmizi-orijinal-kartus.jpg",
      alt: "Epson T636E açık kırmızı orijinal kartuş",
    },
  },
  {
    title: "Epson T6367 Açık Siyah Orijinal Kartuş",
    desc: "Epson T636 serisi açık siyah orijinal kartuş.",
    href: T636_HREF,
    pills: ["Epson T636", "Açık Siyah"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t6367-c13t636700-acik-siyah-orijinal-kartus.jpg",
      alt: "Epson T6367 açık siyah orijinal kartuş",
    },
  },

  // T684 (T694)
  {
    title: "Epson T6841 Foto Siyah Orijinal Kartuş",
    desc: "Epson SureColor T3000 / T5000 / T7000 için foto siyah kartuş.",
    href: T694_HREF,
    pills: ["Epson T684", "Foto Siyah"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t6941-foto-siyah-orijinal-kartus-surecolor-t3000-t5000-t7000.jpg",
      alt: "Epson T6841 foto siyah orijinal kartuş",
    },
  },
  {
    title: "Epson T6842 Mavi Orijinal Kartuş",
    desc: "Epson SureColor serisi için mavi orijinal kartuş.",
    href: T694_HREF,
    pills: ["Epson T684", "Mavi"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t6942-mavi-orijinal-kartus-surecolor-t3000-t5000-t7000.jpg",
      alt: "Epson T6842 mavi orijinal kartuş",
    },
  },
  {
    title: "Epson T6843 Kırmızı Orijinal Kartuş",
    desc: "Epson SureColor serisi için kırmızı orijinal kartuş.",
    href: T694_HREF,
    pills: ["Epson T684", "Kırmızı"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t6943-kirmizi-orijinal-kartus-surecolor-t3000-t5000-t7000.jpg",
      alt: "Epson T6843 kırmızı orijinal kartuş",
    },
  },
  {
    title: "Epson T6844 Sarı Orijinal Kartuş",
    desc: "Epson SureColor serisi için sarı orijinal kartuş.",
    href: T694_HREF,
    pills: ["Epson T684", "Sarı"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t6944-sari-orijinal-kartus-surecolor-t3000-t5000-t7000.jpg",
      alt: "Epson T6844 sarı orijinal kartuş",
    },
  },
  {
    title: "Epson T6845 Mat Siyah Orijinal Kartuş",
    desc: "Epson SureColor serisi için mat siyah orijinal kartuş.",
    href: T694_HREF,
    pills: ["Epson T684", "Mat Siyah"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t6945-mat-siyah-orijinal-kartus-surecolor-t3000-t5000-t7000-t7200.jpg",
      alt: "Epson T6845 mat siyah orijinal kartuş",
    },
  },

  // T714
  {
    title: "Epson T7141 Siyah Orijinal Kartuş",
    desc: "Epson SureColor T70610 için siyah orijinal kartuş.",
    href: T714_HREF,
    pills: ["Epson T714", "Siyah"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t7141-siyah-orijinal-kartus-surecolor-s70610.jpg",
      alt: "Epson T7141 siyah orijinal kartuş",
    },
  },
  {
    title: "Epson T7142 Mavi Orijinal Kartuş",
    desc: "Epson SureColor T70610 için mavi orijinal kartuş.",
    href: T714_HREF,
    pills: ["Epson T714", "Mavi"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t7142-mavi-orijinal-kartus-s70610.png",
      alt: "Epson T7142 mavi orijinal kartuş",
    },
  },
  {
    title: "Epson T7143 Kırmızı Orijinal Kartuş",
    desc: "Epson SureColor T70610 için kırmızı orijinal kartuş.",
    href: T714_HREF,
    pills: ["Epson T714", "Kırmızı"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t7143-kirmizi-orijinal-kartus-surecolor-s70610.png",
      alt: "Epson T7143 kırmızı orijinal kartuş",
    },
  },
  {
    title: "Epson T7144 Sarı Orijinal Kartuş",
    desc: "Epson SureColor T70610 için sarı orijinal kartuş.",
    href: T714_HREF,
    pills: ["Epson T714", "Sarı"],
    image: {
      src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t7144-sari-orijinal-kartus-surecolor-s70610.jpg",
      alt: "Epson T7144 sarı orijinal kartuş",
    },
  },
];

/* ================= COMPONENT ================= */

export default function EpsonOrijinalKartusClient() {
  const [active, setActive] = useState<SeriesKey>("all");

  const grouped = useMemo(() => {
    const buckets: Record<Exclude<SeriesKey, "all">, Product[]> = {
      t596: [],
      t636: [],
      t684: [],
      t714: [],
    };

    PRODUCTS.forEach((p) => {
      const s = detectSeries(p.title);
      buckets[s].push(p);
    });

    return buckets;
  }, []);

  const groups = useMemo(() => {
    const all = Object.entries(grouped)
      .map(([key, items]) => ({ key: key as Exclude<SeriesKey, "all">, items }))
      .filter((g) => g.items.length > 0);

    if (active === "all") return all;
    return all.filter((g) => g.key === active);
  }, [active, grouped]);

  const FILTERS: { key: SeriesKey; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "t596", label: "T596" },
    { key: "t636", label: "T636" },
    { key: "t684", label: "T684 (T694)" },
    { key: "t714", label: "T714" },
  ];

  return (
    <>
      {/* HERO */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-white px-6 py-6">
        <h1 className="text-3xl font-bold">Epson Orijinal Kartuş</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Epson SureColor ve Stylus Pro yazıcılar için orijinal kartuşları seri
          bazında filtreleyin.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-md border px-4 py-2 text-sm font-medium ${
                active === f.key
                  ? "bg-slate-900 text-white"
                  : "bg-slate-50 text-slate-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* LIST */}
      <div className="mt-10 space-y-10">
        {groups.map((g) => (
          <section key={g.key}>
            <h2 className="text-lg font-semibold mb-4">
              {seriesLabel(g.key)} ({g.items.length})
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">
              {g.items.map((p) => (
                <Link
                  key={p.title}
                  href={p.href}
                  className="group flex gap-5 rounded-xl border bg-white p-4 hover:border-slate-300"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{p.desc}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.pills.map((pill) => (
                        <span
                          key={pill}
                          className="text-xs rounded-md border px-2 py-1"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative hidden sm:block w-40 h-28">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-xl border bg-white p-6">
        <h3 className="font-semibold">Doğru Epson kartuşu bulamadınız mı?</h3>
        <p className="mt-2 text-sm text-slate-600">
          Yazıcı modelinizi ve ihtiyacınız olan rengi paylaşın, hızlıca yardımcı
          olalım.
        </p>

        <div className="mt-4 flex gap-3">
          <a
            href={CONTACT.whatsapp}
            className="rounded-md bg-green-600 px-4 py-2 text-white"
          >
            WhatsApp
          </a>
          <Link
            href="/urunler"
            className="rounded-md border px-4 py-2 text-slate-700"
          >
            Tüm Ürünler
          </Link>
        </div>
      </div>
    </>
  );
}
