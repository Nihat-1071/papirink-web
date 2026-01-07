"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Kind = "plotter" | "plan-kopya";

type Variant = {
  kind: Kind;
  widthCm: number;
  lengthM: number;
  micron: number;
  wp?: boolean;
  brand: string;
  origin: string;
  packaging: string;
};

type Props = { contactHref?: string; contact?: any };

const IMG = {
  src: "/images/urunler/kagit/polyester/plotter-polyesteri.webp",
  alt: "Plotter polyesteri rulo",
};

const VARIANTS: Variant[] = [
  // Plotter Polyesteri 150 micron – 30 mt
  { kind: "plotter", widthCm: 61, lengthM: 30, micron: 150, wp: false, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },
  { kind: "plotter", widthCm: 61, lengthM: 30, micron: 150, wp: true,  brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },
  { kind: "plotter", widthCm: 91.4, lengthM: 30, micron: 150, wp: false, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },
  { kind: "plotter", widthCm: 91.4, lengthM: 30, micron: 150, wp: true,  brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },

  // Plan Kopya Polyesteri 125 micron – 50 mt
  { kind: "plan-kopya", widthCm: 91.4, lengthM: 50, micron: 125, wp: false, brand: "Papirink", origin: "Yerli", packaging: "Rulo / Paket" },
];

function fmtWidth(cm: number) {
  const isInt = Math.abs(cm - Math.round(cm)) < 1e-9;
  if (isInt) return `${Math.round(cm)}cm`;
  return `${Math.round(cm * 10)}cm`; // 91.4 => 914cm
}

function fmtTitle(v: Variant) {
  const wp = v.wp ? " wp" : "";
  if (v.kind === "plan-kopya") {
    return `${fmtWidth(v.widthCm)}*${v.lengthM}mt Plan Kopya Polyesteri ${v.micron} Micron${wp}`;
  }
  return `${fmtWidth(v.widthCm)}*${v.lengthM}mt Plotter Polyesteri ${v.micron} Micron${wp}`;
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="text-gray-600">{k}</div>
      <div className="text-right font-medium text-gray-900">{v}</div>
    </div>
  );
}

export default function PlotterPolyesteriClient({ contactHref = "/iletisim" }: Props) {
  const [filterKind, setFilterKind] = useState<"all" | Kind>("all");
  const [filterWidth, setFilterWidth] = useState<number | "all">("all");

  const widths = useMemo(() => {
    const set = new Set(VARIANTS.map((v) => v.widthCm));
    return Array.from(set).sort((a, b) => a - b);
  }, []);

  const filtered = useMemo(() => {
    return VARIANTS.filter((v) => {
      const okK = filterKind === "all" ? true : v.kind === filterKind;
      const okW = filterWidth === "all" ? true : v.widthCm === filterWidth;
      return okK && okW;
    }).sort((a, b) => {
      if (a.kind !== b.kind) return a.kind.localeCompare(b.kind);
      return (a.widthCm - b.widthCm) || (a.lengthM - b.lengthM) || (a.micron - b.micron);
    });
  }, [filterKind, filterWidth]);

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative overflow-hidden rounded-2xl border bg-gray-50">
              <div className="relative aspect-[4/3] w-full">
                <Image src={IMG.src} alt={IMG.alt} fill className="object-contain p-6" priority />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                Plotter Polyesteri • 125 / 150 Micron
              </h1>
              <p className="text-sm text-gray-600">
                Plotter ve plan kopya uygulamaları için polyester rulo seçenekleri. Farklı en/uzunluk ve micron alternatifleriyle.
              </p>

              <div className="rounded-2xl border bg-white p-5">
                <div className="grid gap-3 text-sm">
                  <Row k="Marka" v="Papirink" />
                  <Row k="Menşei" v="Yerli" />
                  <Row k="Ambalaj" v="Rulo / Paket" />
                  <Row k="Kalınlık" v="125 / 150 micron" />
                  <Row k="Kullanım" v="Teknik çizim, plan kopya, dayanıklı yüzey gerektiren işler" />
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
              Tür ve ene göre filtreleyin, fiyat için iletişime geçin.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              className="h-10 rounded-xl border bg-white px-3 text-sm"
              value={filterKind}
              onChange={(e) => setFilterKind(e.target.value as any)}
            >
              <option value="all">Tüm Türler</option>
              <option value="plotter">Plotter</option>
              <option value="plan-kopya">Plan Kopya</option>
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
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border">
          <div className="grid grid-cols-12 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-700">
            <div className="col-span-8">Ürün</div>
            <div className="col-span-2">Uzunluk</div>
            <div className="col-span-1">Micron</div>
            <div className="col-span-1 text-right"></div>
          </div>

          <div className="divide-y">
            {filtered.map((v, idx) => (
              <div key={`${v.kind}-${v.widthCm}-${v.lengthM}-${v.micron}-${idx}`} className="grid grid-cols-12 items-center px-4 py-4">
                <div className="col-span-12 sm:col-span-8">
                  <div className="text-sm font-medium text-gray-900">{fmtTitle(v)}</div>
                  <div className="mt-1 text-xs text-gray-500">
                    Ebat: {fmtWidth(v.widthCm)} eninde • Ambalaj: {v.packaging} • Menşei: {v.origin}
                  </div>
                </div>

                <div className="col-span-4 sm:col-span-2 text-sm text-gray-700">{v.lengthM} mt</div>
                <div className="col-span-4 sm:col-span-1 text-sm text-gray-700">{v.micron}</div>

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
