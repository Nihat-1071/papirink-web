// src/app/urunler/kagit/yapiskanli-kagitlar/YapiskanliKagitlarClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Surface = "Mat" | "Parlak";
type InkType = "Dye" | "Pigment" | "—";

type Variant = {
  widthCm: number; // en (cm) 107 / 61 / 91.4
  lengthM: number; // mt
  gram: number; // 150 / 240
  surface: Surface; // Mat / Parlak
  inkType?: InkType; // Dye / Pigment / —
  wp?: boolean; // ürün adında wp geçiyor mu
  brand: string; // Papirink
  origin: string; // Yerli
  packaging: string; // Rulo
};

type Props = {
  contactHref?: string;
  contact?: any;
};

const IMG = {
  mat: {
    src: "/images/urunler/kagit/yapiskanli-kagitlar/mat-yapiskanli-kagit.webp",
    alt: "Mat yapışkanlı kağıt (rulo)",
  },
  parlak: {
    src: "/images/urunler/kagit/yapiskanli-kagitlar/parlak-yapiskanli-kagit.webp",
    alt: "Parlak yapışkanlı kağıt (rulo)",
  },
};

const VARIANTS: Variant[] = [
  // 107 cm
  {
    widthCm: 107,
    lengthM: 30,
    gram: 150,
    surface: "Mat",
    inkType: "—",
    brand: "Papirink",
    origin: "Yerli",
    packaging: "Rulo",
  },
  {
    widthCm: 107,
    lengthM: 30,
    gram: 150,
    surface: "Parlak",
    inkType: "Dye",
    brand: "Papirink",
    origin: "Yerli",
    packaging: "Rulo",
  },
  {
    widthCm: 107,
    lengthM: 30,
    gram: 240,
    surface: "Parlak",
    inkType: "Pigment",
    brand: "Papirink",
    origin: "Yerli",
    packaging: "Rulo",
  },

  // 61 cm
  {
    widthCm: 61,
    lengthM: 30,
    gram: 150,
    surface: "Mat",
    inkType: "—",
    brand: "Papirink",
    origin: "Yerli",
    packaging: "Rulo",
  },
  {
    widthCm: 61,
    lengthM: 30,
    gram: 240,
    surface: "Parlak",
    inkType: "Pigment",
    brand: "Papirink",
    origin: "Yerli",
    packaging: "Rulo",
  },

  // 91.4 cm (=914cm)
  {
    widthCm: 91.4,
    lengthM: 30,
    gram: 150,
    surface: "Mat",
    inkType: "—",
    wp: true,
    brand: "Papirink",
    origin: "Yerli",
    packaging: "Rulo",
  },
  {
    widthCm: 91.4,
    lengthM: 30,
    gram: 240,
    surface: "Parlak",
    inkType: "Pigment",
    brand: "Papirink",
    origin: "Yerli",
    packaging: "Rulo",
  },
];

function fmtWidth(cm: number) {
  // 91.4 => "914cm"
  const isInt = Math.abs(cm - Math.round(cm)) < 1e-9;
  if (isInt) return `${Math.round(cm)}cm`;
  return `${Math.round(cm * 10)}cm`;
}

function fmtTitle(v: Variant) {
  const wp = v.wp ? " wp" : "";
  const ink =
    v.inkType && v.inkType !== "—" ? ` ${v.inkType}` : "";
  // Örn: "107cm*30mt Parlak Yapışkanlı 150 gr Dye"
  return `${fmtWidth(v.widthCm)}*${v.lengthM}mt ${v.surface} Yapışkanlı ${v.gram} gr${ink}${wp}`;
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="text-gray-600">{k}</div>
      <div className="text-right font-medium text-gray-900">{v}</div>
    </div>
  );
}

export default function YapiskanliKagitlarClient({
  contactHref = "/iletisim",
}: Props) {
  const [filterSurface, setFilterSurface] = useState<"all" | Surface>("all");
  const [filterLen, setFilterLen] = useState<"all" | 30>("all");
  const [filterWidth, setFilterWidth] = useState<number | "all">("all");
  const [filterGram, setFilterGram] = useState<number | "all">("all");
  const [filterInk, setFilterInk] = useState<"all" | InkType>("all");

  const widths = useMemo(() => {
    const set = new Set(VARIANTS.map((v) => v.widthCm));
    return Array.from(set).sort((a, b) => a - b);
  }, []);

  const grams = useMemo(() => {
    const set = new Set(VARIANTS.map((v) => v.gram));
    return Array.from(set).sort((a, b) => a - b);
  }, []);

  const inks = useMemo(() => {
    const set = new Set(
      VARIANTS.map((v) => v.inkType ?? "—")
    );
    return Array.from(set).sort((a, b) => a.localeCompare(b)) as InkType[];
  }, []);

  const filtered = useMemo(() => {
    return VARIANTS.filter((v) => {
      const okS = filterSurface === "all" ? true : v.surface === filterSurface;
      const okL = filterLen === "all" ? true : v.lengthM === filterLen;
      const okW = filterWidth === "all" ? true : v.widthCm === filterWidth;
      const okG = filterGram === "all" ? true : v.gram === filterGram;
      const ink = v.inkType ?? "—";
      const okI = filterInk === "all" ? true : ink === filterInk;
      return okS && okL && okW && okG && okI;
    }).sort((a, b) => {
      if (a.surface !== b.surface) return a.surface.localeCompare(b.surface);
      return (a.widthCm - b.widthCm) || (a.gram - b.gram);
    });
  }, [filterSurface, filterLen, filterWidth, filterGram, filterInk]);

  const heroImg = useMemo(() => {
    // Filtre Parlak ise parlak görsel, Mat ise mat görsel, all ise parlak göster.
    if (filterSurface === "Mat") return IMG.mat;
    return IMG.parlak;
  }, [filterSurface]);

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative overflow-hidden rounded-2xl border bg-gray-50">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={heroImg.src}
                  alt={heroImg.alt}
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                Yapışkanlı Kağıtlar • Mat & Parlak
              </h1>
              <p className="text-sm text-gray-600">
                Papirink yapışkanlı kağıt seçenekleri: 61cm / 107cm / 91.4cm en, 30mt uzunluk,
                150gr ve 240gr alternatifleri (Dye / Pigment).
              </p>

              <div className="rounded-2xl border bg-white p-5">
                <div className="grid gap-3 text-sm">
                  <Row k="Marka" v="Papirink" />
                  <Row k="Menşei" v="Yerli" />
                  <Row k="Ambalaj" v="Rulo" />
                  <Row k="Yüzey" v="Mat / Parlak" />
                  <Row k="Gramaj" v="150 / 240 gr" />
                  <Row k="Uzunluk" v="30 mt" />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={contactHref}
                  className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-black"
                >
                  Fiyat Alınız
                </Link>
                <Link
                  href="/urunler/kagit"
                  className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  Kağıt Kategorisi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VARIANTS */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Varyantlar</h2>
            <p className="text-sm text-gray-600">
              Yüzey, en, gramaj ve mürekkep tipi filtreleriyle hızlı seçim yapın.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              className="h-10 rounded-xl border bg-white px-3 text-sm"
              value={filterSurface}
              onChange={(e) => setFilterSurface(e.target.value as any)}
            >
              <option value="all">Tüm Yüzeyler</option>
              <option value="Mat">Mat</option>
              <option value="Parlak">Parlak</option>
            </select>

            <select
              className="h-10 rounded-xl border bg-white px-3 text-sm"
              value={filterWidth}
              onChange={(e) => {
                const val = e.target.value;
                setFilterWidth(val === "all" ? "all" : Number(val));
              }}
            >
              <option value="all">Tüm Enler</option>
              {widths.map((w) => (
                <option key={w} value={w}>
                  {fmtWidth(w)}
                </option>
              ))}
            </select>

            <select
              className="h-10 rounded-xl border bg-white px-3 text-sm"
              value={filterLen}
              onChange={(e) =>
                setFilterLen(e.target.value === "all" ? "all" : (Number(e.target.value) as 30))
              }
            >
              <option value="all">Tüm Uzunluklar</option>
              <option value="30">30 mt</option>
            </select>

            <select
              className="h-10 rounded-xl border bg-white px-3 text-sm"
              value={filterGram}
              onChange={(e) =>
                setFilterGram(e.target.value === "all" ? "all" : Number(e.target.value))
              }
            >
              <option value="all">Tüm Gramajlar</option>
              {grams.map((g) => (
                <option key={g} value={g}>
                  {g} gr
                </option>
              ))}
            </select>

            <select
              className="h-10 rounded-xl border bg-white px-3 text-sm"
              value={filterInk}
              onChange={(e) => setFilterInk(e.target.value as any)}
            >
              <option value="all">Tüm Mürekkep Tipleri</option>
              {inks.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border">
          <div className="grid grid-cols-12 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-700">
            <div className="col-span-6">Ürün</div>
            <div className="col-span-2">Yüzey</div>
            <div className="col-span-1">Gr</div>
            <div className="col-span-2">Tip</div>
            <div className="col-span-1 text-right"></div>
          </div>

          <div className="divide-y">
            {filtered.map((v, idx) => (
              <div
                key={`${v.surface}-${v.widthCm}-${v.lengthM}-${v.gram}-${v.inkType}-${idx}`}
                className="grid grid-cols-12 items-center px-4 py-4"
              >
                <div className="col-span-12 sm:col-span-6">
                  <div className="text-sm font-medium text-gray-900">{fmtTitle(v)}</div>
                  <div className="mt-1 text-xs text-gray-500">
                    Ebat: {fmtWidth(v.widthCm)} eninde, {v.lengthM} mt • Ambalaj: {v.packaging}
                    {v.wp ? " • wp" : ""}
                  </div>
                </div>

                <div className="col-span-4 sm:col-span-2 text-sm text-gray-700">{v.surface}</div>
                <div className="col-span-4 sm:col-span-1 text-sm text-gray-700">{v.gram}</div>
                <div className="col-span-4 sm:col-span-2 text-sm text-gray-700">
                  {v.inkType ?? "—"}
                </div>

                <div className="col-span-12 sm:col-span-1 sm:text-right">
                  <Link
                    href={contactHref}
                    className="inline-flex w-full justify-center rounded-xl border px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto"
                  >
                    Fiyat Al
                  </Link>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="px-4 py-10 text-center text-sm text-gray-600">
                Seçtiğiniz filtrelere uygun ürün bulunamadı.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
