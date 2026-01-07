// src/app/urunler/kartus/papirink-muadil-kartus/hp-81/Hp81Client.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Hp81Item = {
  title: string;
  code: string;
  colorLabel: string;
  capacity: string;
  image: { src: string; alt: string };
  compatibleModels: string[];
  notes?: string[];
  colorOptions?: Array<{ value: string; label: string }>;
};

const COMPATIBLE_MODELS = ["HP DesignJet 5500"];

const ALL_COLORS = [
  { value: "Mat Siyah (Matte Black)", label: "Mat Siyah ( Matte Black )" },
  { value: "Foto Siyah (Photo Black)", label: "Foto Siyah ( Photo Black )" },
  { value: "Mavi (Cyan)", label: "Mavi ( Cyan )" },
  { value: "Açık Mavi (Light Cyan)", label: "Açık Mavi ( Light Cyan )" },
  { value: "Kırmızı (Magenta)", label: "Kırmızı ( Magenta )" },
  { value: "Açık Kırmızı (Light Magenta)", label: "Açık Kırmızı ( Light Magenta )" },
  { value: "Sarı (Yellow)", label: "Sarı ( Yellow )" },
  { value: "Gri (Gray)", label: "Gri ( Gray )" },
  { value: "Açık Gri (Light Gray)", label: "Açık Gri ( Light Gray )" },
];

const ITEMS: Hp81Item[] = [
  {
    title: "HP 81 Muadil Kartuş Tüm Renkler",
    code: "TÜM-RENKLER",
    colorLabel: "Renk Seçiniz",
    capacity: "680 ml",
    image: {
      src: "/images/urunler/kartus/papirink-muadil-kartus/hp-81-muadil-kartus-tum-renkler.jpg",
      alt: "HP 81 Muadil Kartuş Tüm Renkler",
    },
    compatibleModels: COMPATIBLE_MODELS,
    colorOptions: ALL_COLORS,
  },
];

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Hp81Client() {
  const [activeCode, setActiveCode] = useState<string>(ITEMS[0]?.code ?? "");
  const [openSrc, setOpenSrc] = useState<string | null>(null);

  const active = useMemo(
    () => ITEMS.find((x) => x.code === activeCode) ?? ITEMS[0],
    [activeCode]
  );

  const [selectedColor, setSelectedColor] = useState<string>(
    ALL_COLORS[0]?.value ?? "Mat Siyah (Matte Black)"
  );

  // ürün değişince dropdown'u defaulta çek
  useEffect(() => {
    if (active.code !== "TÜM-RENKLER") return;
    setSelectedColor(ALL_COLORS[0]?.value ?? "Mat Siyah (Matte Black)");
  }, [active.code]);

  // ESC ile modal kapansın
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenSrc(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const rightColorLabel = active.code === "TÜM-RENKLER" ? selectedColor : active.colorLabel;

  return (
    <>
      {/* Ürün seç */}
      <div className="mt-6">
        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          Ürün Seç
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
                  "rounded-lg border px-4 py-3 text-left transition min-w-[160px]",
                  isActive
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-800 hover:bg-white hover:border-slate-300"
                )}
                aria-pressed={isActive}
              >
                <div className="text-sm font-semibold leading-none">Tüm Renkler</div>
                <div className={cx("mt-1 text-xs leading-none", isActive ? "text-white/80" : "text-slate-500")}>
                  680 ml
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3 kolon */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* SOL: Görsel */}
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

            <div className="mt-3 text-xs text-slate-500">Büyütmek için görsele tıklayın</div>
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

          {/* Dropdown */}
          <div className="mt-4">
            <label className="block text-sm font-semibold text-slate-700">
              Renk Seçiniz
            </label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-slate-300"
            >
              {ALL_COLORS.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 grid gap-3">
            <InfoRow label="Marka" value="Papirink" />
            <InfoRow label="Kategori" value="Muadil Kartuş" />
            <InfoRow label="Seri" value="HP 81" />
            <InfoRow label="Renk" value={rightColorLabel} />
            <InfoRow label="Baskı Kapasitesi" value={active.capacity} />
          </div>

          <div className="mt-6 h-px w-full bg-slate-100" />

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Fiyat Alınız
            </Link>

            <Link
              href="/urunler/kartus/papirink-muadil-kartus"
              className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              Papirink Muadil Kartuşlara Dön
            </Link>
          </div>
        </div>

        {/* SAĞ: Ürün açıklaması */}
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1 rounded-full bg-orange-500" />
            <h3 className="text-lg font-semibold text-slate-900">Ürün Açıklaması</h3>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 divide-y divide-slate-200">
              <BoxRow label="Ürün Adı" value="HP 81 Muadil Plotter Kartuşu" />
              <BoxRow label="Marka" value="HP - DesignJet 5500" />
              <BoxRow label="Baskı Kapasitesi" value={active.capacity} />
              <BoxRow label="Yazıcı Modeli" value={active.compatibleModels.join(" / ")} />
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            * Seçtiğiniz renk: <span className="font-semibold">{rightColorLabel}</span>
          </p>
        </div>
      </div>

      {/* Modal */}
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
              {/* KAPAT butonu (görünür) */}
              <button
                type="button"
                onClick={() => setOpenSrc(null)}
                className="absolute right-3 top-3 z-20 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
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
    <div className="grid grid-cols-[140px_1fr] gap-4 p-4">
      <div className="text-sm font-semibold text-slate-900">{label}:</div>
      <div className="text-sm text-slate-700 leading-relaxed">{value}</div>
    </div>
  );
}
