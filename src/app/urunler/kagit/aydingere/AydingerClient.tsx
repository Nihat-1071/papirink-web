"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Props = { contactHref?: string; contact?: any };

type RollVariant = {
  kind: "plotter" | "plan-kopya";
  widthCm: number;
  lengthM: number;
  gram: number;
};

type SheetVariant = {
  kind: "tabaka";
  title: string; // ekrandaki tam isim
  gram: number;
  unit?: string; // "500 adet", "250 adet" vs.
};

const HERO = {
  src: "/images/urunler/kagit/aydinger/aydingeri-kagit.webp",
  alt: "Aydınger kağıdı",
};

const BADGE = {
  src: "/images/urunler/kagit/aydinger/aydingeri-kagit-toplu-satis.webp",
  alt: "Aydınger kağıdı toplu satış",
};

const ROLLS: RollVariant[] = [
  // Plan Kopya 95 gr – 150 mt
  { kind: "plan-kopya", widthCm: 62, lengthM: 150, gram: 95 },
  { kind: "plan-kopya", widthCm: 91.4, lengthM: 150, gram: 95 },

  // Plotter 95 gr – 50 mt
  { kind: "plotter", widthCm: 62, lengthM: 50, gram: 95 },
  { kind: "plotter", widthCm: 91.4, lengthM: 50, gram: 95 },
];

const SHEETS: SheetVariant[] = [
  { kind: "tabaka", title: "50cm*70cm Aydıngeri 500 adet 90 gr", gram: 90, unit: "500 adet" },
  { kind: "tabaka", title: "50cm*70cm Eskiz Aydıngeri 500 adet 50 gr", gram: 50, unit: "500 adet" },
  { kind: "tabaka", title: "70cm*100cm Eskiz Aydıngeri 250 adet 50 gr", gram: 50, unit: "250 adet" },
  { kind: "tabaka", title: "A3 Aydınger 90 gr", gram: 90 },
  { kind: "tabaka", title: "A4 Aydınger 90 gr", gram: 90 },
];

function fmtWidth(cm: number) {
  const isInt = Math.abs(cm - Math.round(cm)) < 1e-9;
  if (isInt) return `${Math.round(cm)}cm`;
  return `${Math.round(cm * 10)}cm`; // 91.4 => 914cm
}

function rollTitle(v: RollVariant) {
  if (v.kind === "plan-kopya") {
    return `${fmtWidth(v.widthCm)}*${v.lengthM}mt Plan Kopya Aydıngeri ${v.gram} gr`;
  }
  return `${fmtWidth(v.widthCm)}*${v.lengthM}mt Plotter Aydıngeri ${v.gram} gr`;
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="text-gray-600">{k}</div>
      <div className="text-right font-medium text-gray-900">{v}</div>
    </div>
  );
}

export default function AydingerClient({ contactHref = "/iletisim" }: Props) {
  const [tab, setTab] = useState<"plotter" | "plan-kopya" | "tabaka">("plotter");

  const currentRolls = useMemo(
    () => ROLLS.filter((r) => r.kind === tab).sort((a, b) => a.widthCm - b.widthCm),
    [tab]
  );

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl border bg-gray-50">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={HERO.src} alt={HERO.alt} fill className="object-contain p-6" priority />
                </div>
              </div>

              {/* opsiyonel toplu satış görseli */}
              <div className="flex items-center gap-3 rounded-2xl border bg-white p-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-gray-50">
                  <Image src={BADGE.src} alt={BADGE.alt} fill className="object-contain p-2" />
                </div>
                <div className="text-sm text-gray-700">
                  Toplu alımlar ve kurumsal ihtiyaçlar için fiyat teklifi alın.
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                Aydınger Kağıtları • Rulo & Tabaka
              </h1>
              <p className="text-sm text-gray-600">
                Plotter ve plan kopya rulo aydıngerleri ile tabaka/paket aydınger-eskiz seçenekleri.
              </p>

              <div className="rounded-2xl border bg-white p-5">
                <div className="grid gap-3 text-sm">
                  <Row k="Marka" v="Papirink" />
                  <Row k="Menşei" v="Yerli" />
                  <Row k="Ambalaj" v="Rulo / Paket / Tabaka" />
                  <Row k="Kullanım" v="Plan kopya, çizim, teknik doküman ve proje çıktıları" />
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

      {/* TABS + LISTS */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-5 flex flex-wrap gap-2">
          <TabButton active={tab === "plotter"} onClick={() => setTab("plotter")}>
            Rulo • Plotter (95 gr / 50 mt)
          </TabButton>
          <TabButton active={tab === "plan-kopya"} onClick={() => setTab("plan-kopya")}>
            Rulo • Plan Kopya (95 gr / 150 mt)
          </TabButton>
          <TabButton active={tab === "tabaka"} onClick={() => setTab("tabaka")}>
            Tabaka / Paket
          </TabButton>
        </div>

        {tab !== "tabaka" ? (
          <div className="overflow-hidden rounded-2xl border">
            <div className="grid grid-cols-12 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-700">
              <div className="col-span-8">Ürün</div>
              <div className="col-span-2">Uzunluk</div>
              <div className="col-span-1">Gr</div>
              <div className="col-span-1 text-right"></div>
            </div>

            <div className="divide-y">
              {currentRolls.map((v, idx) => (
                <div key={`${v.kind}-${v.widthCm}-${idx}`} className="grid grid-cols-12 items-center px-4 py-4">
                  <div className="col-span-12 sm:col-span-8">
                    <div className="text-sm font-medium text-gray-900">{rollTitle(v)}</div>
                    <div className="mt-1 text-xs text-gray-500">
                      Ebat: {fmtWidth(v.widthCm)} eninde • Ambalaj: Rulo
                    </div>
                  </div>

                  <div className="col-span-4 sm:col-span-2 text-sm text-gray-700">{v.lengthM} mt</div>
                  <div className="col-span-4 sm:col-span-1 text-sm text-gray-700">{v.gram}</div>

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
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border">
            <div className="grid grid-cols-12 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-700">
              <div className="col-span-9">Ürün</div>
              <div className="col-span-2">Paket</div>
              <div className="col-span-1 text-right"></div>
            </div>

            <div className="divide-y">
              {SHEETS.map((s, idx) => (
                <div key={`${s.title}-${idx}`} className="grid grid-cols-12 items-center px-4 py-4">
                  <div className="col-span-12 sm:col-span-9">
                    <div className="text-sm font-medium text-gray-900">{s.title}</div>
                    <div className="mt-1 text-xs text-gray-500">Ambalaj: Paket / Tabaka</div>
                  </div>

                  <div className="col-span-6 sm:col-span-2 text-sm text-gray-700">{s.unit ?? "-"}</div>

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
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-xl px-4 py-2 text-sm font-medium transition",
        active ? "bg-gray-900 text-white" : "border text-gray-900 hover:bg-gray-50",
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  );
}
