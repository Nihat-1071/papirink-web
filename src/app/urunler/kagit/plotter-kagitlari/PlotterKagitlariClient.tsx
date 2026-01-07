"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Variant = {
  widthCm: number;   // en (cm)
  lengthM: number;   // uzunluk (mt)
  gram: number;      // 80
  brand: string;     // Papirink
  origin: string;    // Yerli
  packaging: string; // Rulo / Paket
};

type Props = {
  contactHref?: string; // /iletisim vb.
  contact?: any; // CONTACT objesi gelirse ilerde whatsapp/telefon bağlarız
};

const IMG = {
  src: "/images/urunler/kagit/polyester/plotter-polyesteri.webp",
  alt: "Plotter kağıdı ruloları",
};

const VARIANTS: Variant[] = [
  { widthCm: 106.7, lengthM: 50, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },

  { widthCm: 107, lengthM: 100, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },
  { widthCm: 127, lengthM: 100, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },
  { widthCm: 152, lengthM: 100, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },

  { widthCm: 31, lengthM: 100, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },
  { widthCm: 31, lengthM: 50, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },

  { widthCm: 45, lengthM: 100, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },
  { widthCm: 45, lengthM: 50, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },

  { widthCm: 62, lengthM: 100, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },
  { widthCm: 62, lengthM: 50, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },

  { widthCm: 75, lengthM: 100, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },
  { widthCm: 75, lengthM: 50, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },

  { widthCm: 91.4, lengthM: 100, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },
  { widthCm: 91.4, lengthM: 50, gram: 80, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },
];

function fmtWidth(cm: number) {
  // 106.7 => "1067cm", 91.4 => "914cm", 31 => "31cm"
  const isInt = Math.abs(cm - Math.round(cm)) < 1e-9;
  if (isInt) return `${Math.round(cm)}cm`;
  return `${Math.round(cm * 10)}cm`;
}

function fmtTitle(v: Variant) {
  return `${fmtWidth(v.widthCm)}*${v.lengthM}mt Plotter Kağıdı ${v.gram} gr`;
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="text-gray-600">{k}</div>
      <div className="text-right font-medium text-gray-900">{v}</div>
    </div>
  );
}

export default function PlotterKagitlariClient({ contactHref = "/iletisim" }: Props) {
  const [filterLen, setFilterLen] = useState<"all" | 50 | 100>("all");
  const [filterWidth, setFilterWidth] = useState<number | "all">("all");

  const widths = useMemo(() => {
    const set = new Set(VARIANTS.map((v) => v.widthCm));
    return Array.from(set).sort((a, b) => a - b);
  }, []);

  const filtered = useMemo(() => {
    return VARIANTS.filter((v) => {
      const okLen = filterLen === "all" ? true : v.lengthM === filterLen;
      const okW = filterWidth === "all" ? true : v.widthCm === filterWidth;
      return okLen && okW;
    }).sort((a, b) => (a.widthCm - b.widthCm) || (a.lengthM - b.lengthM));
  }, [filterLen, filterWidth]);

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative overflow-hidden rounded-2xl border bg-gray-50">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={IMG.src}
                  alt={IMG.alt}
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                Plotter Kağıtları (Proje Kağıdı) • 80 gr
              </h1>
              <p className="text-sm text-gray-600">
                Yerli üretim Papirink plotter kağıdı seçenekleri. Teknik baskılar ve CAD/plot çıktıları için uygundur.
              </p>

              <div className="rounded-2xl border bg-white p-5">
                <div className="grid gap-3 text-sm">
                  <Row k="Marka" v="Papirink" />
                  <Row k="Menşei" v="Yerli" />
                  <Row k="Ambalaj" v="Rulo / Paket" />
                  <Row k="Gramaj" v="80 gr" />
                  <Row k="Öne Çıkan" v="Net çizim, dengeli kalınlık, standart rulolar" />
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
              En ve uzunluğa göre filtreleyin, fiyat için iletişime geçin.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
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
                setFilterLen(e.target.value === "all" ? "all" : (Number(e.target.value) as 50 | 100))
              }
            >
              <option value="all">Tüm Uzunluklar</option>
              <option value="50">50 mt</option>
              <option value="100">100 mt</option>
            </select>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border">
          <div className="grid grid-cols-12 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-700">
            <div className="col-span-5">Ürün</div>
            <div className="col-span-2">Gramaj</div>
            <div className="col-span-2">Menşei</div>
            <div className="col-span-2">Ambalaj</div>
            <div className="col-span-1 text-right"></div>
          </div>

          <div className="divide-y">
            {filtered.map((v, idx) => (
              <div key={`${v.widthCm}-${v.lengthM}-${idx}`} className="grid grid-cols-12 items-center px-4 py-4">
                <div className="col-span-12 sm:col-span-5">
                  <div className="text-sm font-medium text-gray-900">{fmtTitle(v)}</div>
                  <div className="mt-1 text-xs text-gray-500">
                    Ebat: {fmtWidth(v.widthCm)} eninde, {v.lengthM} mt uzunluk
                  </div>
                </div>

                <div className="col-span-4 sm:col-span-2 text-sm text-gray-700">{v.gram} gr</div>
                <div className="col-span-4 sm:col-span-2 text-sm text-gray-700">{v.origin}</div>
                <div className="col-span-4 sm:col-span-2 text-sm text-gray-700">{v.packaging}</div>

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
