// src/app/urunler/kartus/hp-orijinal-kartus/hp-72/Hp72Client.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import TeklifAlButton from "../../../../components/TeklifAlButton";

type Hp72Item = {
  title: string;
  code: string;
  colorLabel: string;
  capacity: string;
  image: { src: string; alt: string };
  compatibleModels: string[];
  notes?: string[];
};

const ITEMS: Hp72Item[] = [
  {
    title: "HP 72 C9370A Foto Siyah Orijinal Plotter Kartuşu",
    code: "C9370A",
    colorLabel: "Foto Siyah",
    capacity: "130 ml",
    image: {
      src: "/images/urunler/kartus/hp-orijinal-kartus/hp-72-c9370a-foto-siyah-orijinal-plotter-kartusu.jpg",
      alt: "HP 72 C9370A Foto Siyah Orijinal Plotter Kartuşu",
    },
    compatibleModels: [
      "HP DesignJet T610",
      "HP DesignJet T620",
      "HP DesignJet T770",
      "HP DesignJet T1100",
      "HP DesignJet T1200",
      "HP DesignJet T1200 HD Çok İşlevli",
      "HP DesignJet T2300 eMFP",
      "HP DesignJet T790",
      "HP DesignJet T795",
    ],
  },
  {
    title: "HP 72 C9371A Mavi Renkli Orijinal Kartuş",
    code: "C9371A",
    colorLabel: "Mavi (Cyan)",
    capacity: "130 ml",
    image: {
      src: "/images/urunler/kartus/hp-orijinal-kartus/hp-72-c9371a-mavi-renkli-orijinal-kartus.jpg",
      alt: "HP 72 C9371A Mavi Renkli Orijinal Kartuş",
    },
    compatibleModels: [
      "HP DesignJet T610",
      "HP DesignJet T620",
      "HP DesignJet T770",
      "HP DesignJet T1100",
      "HP DesignJet T1200",
      "HP DesignJet T1200 HD Çok İşlevli",
      "HP DesignJet T2300 eMFP",
      "HP DesignJet T790",
      "HP DesignJet T795",
    ],
  },
  {
    title: "HP 72 C9372A Kırmızı Orijinal Kartuş",
    code: "C9372A",
    colorLabel: "Kırmızı (Magenta)",
    capacity: "130 ml",
    image: {
      src: "/images/urunler/kartus/hp-orijinal-kartus/hp-72-c9372a-kirmizi-orijinal-kartus.jpg",
      alt: "HP 72 C9372A Kırmızı Orijinal Kartuş",
    },
    compatibleModels: [
      "HP DesignJet T610",
      "HP DesignJet T620",
      "HP DesignJet T770",
      "HP DesignJet T1100",
      "HP DesignJet T1200",
      "HP DesignJet T1200 HD Çok İşlevli",
      "HP DesignJet T2300 eMFP",
      "HP DesignJet T790",
      "HP DesignJet T795",
    ],
  },
  {
    title: "HP 72 C9373A Sarı Renkli Orijinal Plotter Kartuşu",
    code: "C9373A",
    colorLabel: "Sarı (Yellow)",
    capacity: "130 ml",
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-72-c9373a-sari-renkli-orijinal-plotter-kartus.jpg",
      alt: "HP 72 C9373A Sarı Renkli Orijinal Plotter Kartuşu",
    },
    compatibleModels: [
      "HP DesignJet T610",
      "HP DesignJet T620",
      "HP DesignJet T770",
      "HP DesignJet T1100",
      "HP DesignJet T1200",
      "HP DesignJet T1200 HD Çok İşlevli",
      "HP DesignJet T2300 eMFP",
      "HP DesignJet T790",
      "HP DesignJet T795",
    ],
  },
  {
    title: "HP 72 C9374A Gri Renkli Orijinal Kartuş",
    code: "C9374A",
    colorLabel: "Gri",
    capacity: "130 ml",
    image: {
      src: "/images/urunler/kartus/hp-orijinal-kartus/hp-72-c9374a-gri-renkli-orijinal-kartus.jpg",
      alt: "HP 72 C9374A Gri Renkli Orijinal Kartuş",
    },
    compatibleModels: [
      "HP DesignJet T610",
      "HP DesignJet T620",
      "HP DesignJet T770",
      "HP DesignJet T1100",
      "HP DesignJet T1200",
      "HP DesignJet T1200 HD Çok İşlevli",
      "HP DesignJet T2300 eMFP",
      "HP DesignJet T790",
      "HP DesignJet T795",
    ],
  },
  {
    title: "HP 72 C9403A Mat Siyah Orijinal Plotter Kartuşu (2’li Kutu)",
    code: "C9403A",
    colorLabel: "Mat Siyah",
    capacity: "130 ml",
    image: {
      src: "/images/urunler/kartus/hp-orijinal-kartus/hp-72-c9403a-mat-siyah-orijinal-plotter-kartusu-2-li-kutu.jpg",
      alt: "HP 72 C9403A Mat Siyah Orijinal Plotter Kartuşu 2’li Kutu",
    },
    compatibleModels: [
      "HP DesignJet T610",
      "HP DesignJet T620",
      "HP DesignJet T770",
      "HP DesignJet T1100",
      "HP DesignJet T1200",
      "HP DesignJet T1200 HD Çok İşlevli",
      "HP DesignJet T2300 eMFP",
      "HP DesignJet T790",
      "HP DesignJet T795",
    ],
    notes: ["Paket: 2’li kutu"],
  },
];

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Hp72Client() {
  const [activeCode, setActiveCode] = useState<string>(ITEMS[0]?.code ?? "");
  const [openSrc, setOpenSrc] = useState<string | null>(null);

  const active = useMemo(
    () => ITEMS.find((x) => x.code === activeCode) ?? ITEMS[0],
    [activeCode]
  );

  // ESC ile modal kapansın
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenSrc(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {/* Hero */}
<div className="mt-6">
  <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
    Kod Seç
  </p>

  <div className="mt-2 flex flex-wrap gap-2">
    {ITEMS.map((it) => {
      const isActive = it.code === activeCode;

      return (
        <button
          key={it.code}
          type="button"
          onClick={() => setActiveCode(it.code)}
          className={cx(
            "rounded-lg border px-4 py-3 text-left transition min-w-[120px]",
            isActive
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-200 bg-slate-50 text-slate-800 hover:bg-white hover:border-slate-300"
          )}
          aria-pressed={isActive}
        >
          <div className="text-sm font-semibold leading-none">
            {it.code}
          </div>

          <div
            className={cx(
              "mt-1 text-xs leading-none",
              isActive ? "text-white/80" : "text-slate-500"
            )}
          >
            {it.colorLabel}
          </div>
        </button>
      );
    })}
  </div>
</div>


      {/* 3 kolon: Sol görsel | Orta ürün bilgisi | Sağ ürün açıklaması */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* SOL: Görsel kart */}
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Ürün Görseli
          </p>

          <button
            type="button"
            onClick={() => setOpenSrc(active.image.src)}
            className="mt-4 block w-full text-left"
            title="Görseli büyüt"
          >
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-[4/3]">
              <Image
                src={active.image.src}
                alt={active.image.alt}
                fill
                className="object-contain p-3"
                sizes="(min-width: 1024px) 33vw, 100vw"
                priority
              />
            </div>

            <div className="mt-3 text-xs text-slate-500">
              Büyütmek için görsele tıklayın
            </div>
          </button>
        </div>

        {/* ORTA: Ürün bilgisi */}
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Ürün Bilgisi
          </p>

          <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-900">
            {active.title}
          </h2>

          <div className="mt-4 grid gap-3">
            <InfoRow label="Marka" value="HP" />
            <InfoRow label="Seri" value="HP 72" />
            <InfoRow label="Kod" value={active.code} />
            <InfoRow label="Renk" value={active.colorLabel} />
            <InfoRow label="Baskı Kapasitesi" value={active.capacity} />
          </div>

          {active.notes?.length ? (
            <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                Notlar
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
                {active.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-6 h-px w-full bg-slate-100" />

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Fiyat Alınız
            </Link>

            <Link
              href="/urunler/kartus/hp-orijinal-kartus"
              className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              HP Orijinal Kartuşlara Dön
            </Link>
          </div>
        </div>

        {/* SAĞ: Ürün açıklaması (resmi kutucuk) */}
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1 rounded-full bg-orange-500" />
            <h3 className="text-lg font-semibold text-slate-900">Ürün Açıklaması</h3>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 divide-y divide-slate-200">
              <BoxRow
                label="Ürün Adı"
                value={`${active.title.replace("HP 72 ", "HP 72 ").replace("Orijinal", "Orijinal")}`}
              />
              <BoxRow label="Yazıcı Modeli" value={active.compatibleModels.join(", ")} />
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            * Uyum listesi seri bazlıdır. Sipariş/teklif öncesi yazıcı modelinizi paylaşın, birlikte doğrulayalım.
          </p>
        </div>
      </div>

      {/* Modal: tam ekran görsel */}
      {openSrc && (
        <div
          className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setOpenSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="mx-auto h-full w-full max-w-6xl">
            <div
              className="relative h-full w-full rounded-2xl bg-black/30 border border-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpenSrc(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
                aria-label="Kapat"
              >
                ✕
              </button>

              <div className="relative h-full w-full">
                <Image
                  src={openSrc}
                  alt="Ürün görseli (büyük)"
                  fill
                  className="object-contain p-6"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
      <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
        {label}
      </span>
      <span className="text-sm font-medium text-slate-900 text-right">{value}</span>
    </div>
  );
}

function BoxRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-4 p-4">
      <div className="text-sm font-semibold text-slate-900">{label}:</div>
      <div className="text-sm text-slate-700 leading-relaxed">{value}</div>
    </div>
  );
}
