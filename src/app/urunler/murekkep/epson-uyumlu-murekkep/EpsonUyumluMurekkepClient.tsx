// src/app/urunler/murekkep/epson-uyumlu-murekkep/EpsonUyumluMurekkepClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type InkType = "lseries" | "sublimasyon" | "hdr" | "k3";

type ColorKey =
  | "Cyan"
  | "Green"
  | "Light Cyan"
  | "Light Magenta"
  | "Magenta"
  | "Yellow"
  | "Orange"
  | "Matte Black"
  | "Photo Black"
  | "Light Black"
  | "Light Light Black"
  | "Sublimasyon";

type EpsonInkItem = {
  title: string;
  inkType: InkType;
  typeLabel: string; // ekranda görünen seri etiketi
  brandLabel: string; // Marka satırında görünecek ifade
  weight: string; // 500 gr
  colorKey: ColorKey;
  colorLabel: string; // ekranda görünen renk adı
  image: { src: string; alt: string };
  compatiblePrinters: string[]; // Uyumlu Yazıcı modelleri
  compatibleCartridges?: string[]; // (varsa)
};

const PRINTERS_L_SERIES: string[] = ["Epson L Serisi Tüm Makina modellerine uyumludur."];

const PRINTERS_SUBLIMASYON: string[] = [
  "Epson Sublimasyon özelliğine çevrilmiş Makina modellerine uyumludur.",
];

const PRINTERS_HDR: string[] = [
  "Epson SC-T3200",
  "Epson SC-T5200",
  "Epson SC-T7000",
  "Epson SC-T7200",
];

const PRINTERS_K3: string[] = [
  "Epson Pro 4900",
  "Epson Pro 7890",
  "Epson Pro 9700",
  "Epson Pro 9890",
  "Epson Pro 9990",
];

const IMG_BASE = "/images/urunler/murekkep/epson-uyumlu-murekkep";

const ITEMS: EpsonInkItem[] = [
  // Epson L Serisi (Masaüstü)
  {
    title: "Epson Cyan Masaüstü Yazıcı Mürekkebi 500 gr",
    inkType: "lseries",
    typeLabel: "Epson L Serisi Mürekkebi",
    brandLabel: "Epson L Serisi Uyumlu Yazıcı Mürekkebi",
    weight: "500 gr",
    colorKey: "Cyan",
    colorLabel: "Cyan",
    image: {
      src: `${IMG_BASE}/epson-cyan-masaustu-yazici-murekkebi-500-gr.webp`,
      alt: "Epson Cyan Masaüstü Yazıcı Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_L_SERIES,
  },
  {
    title: "Epson Green Masaüstü Yazıcı Mürekkebi 500 gr",
    inkType: "lseries",
    typeLabel: "Epson L Serisi Mürekkebi",
    brandLabel: "Epson L Serisi Uyumlu Yazıcı Mürekkebi",
    weight: "500 gr",
    colorKey: "Green",
    colorLabel: "Green",
    image: {
      src: `${IMG_BASE}/epson-green-masaustu-yazici-murekkebi-500-gr.webp`,
      alt: "Epson Green Masaüstü Yazıcı Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_L_SERIES,
  },
  {
    title: "Epson Light Black Masaüstü Yazıcı Mürekkebi 500 gr",
    inkType: "lseries",
    typeLabel: "Epson L Serisi Mürekkebi",
    brandLabel: "Epson L Serisi Uyumlu Yazıcı Mürekkebi",
    weight: "500 gr",
    colorKey: "Light Black",
    colorLabel: "Light Black",
    image: {
      src: `${IMG_BASE}/epson-light-black-masaustu-yazici-murekkebi-500-gr.webp`,
      alt: "Epson Light Black Masaüstü Yazıcı Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_L_SERIES,
  },
  {
    title: "Epson Light Cyan Masaüstü Yazıcı Mürekkebi 500 gr",
    inkType: "lseries",
    typeLabel: "Epson L Serisi Mürekkebi",
    brandLabel: "Epson L Serisi Uyumlu Yazıcı Mürekkebi",
    weight: "500 gr",
    colorKey: "Light Cyan",
    colorLabel: "Light Cyan",
    image: {
      src: `${IMG_BASE}/epson-light-cyan-masaustu-yazici-murekkebi-500-gr.webp`,
      alt: "Epson Light Cyan Masaüstü Yazıcı Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_L_SERIES,
  },
  {
    title: "Epson Light Light Black Masaüstü Yazıcı Mürekkebi 500 gr",
    inkType: "lseries",
    typeLabel: "Epson L Serisi Mürekkebi",
    brandLabel: "Epson L Serisi Uyumlu Yazıcı Mürekkebi",
    weight: "500 gr",
    colorKey: "Light Light Black",
    colorLabel: "Light Light Black",
    image: {
      src: `${IMG_BASE}/epson-light-light-black-masaustu-yazici-murekkebi-500-gr.webp`,
      alt: "Epson Light Light Black Masaüstü Yazıcı Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_L_SERIES,
  },
  {
    title: "Epson Light Magenta Masaüstü Yazıcı Mürekkebi 500 gr",
    inkType: "lseries",
    typeLabel: "Epson L Serisi Mürekkebi",
    brandLabel: "Epson L Serisi Uyumlu Yazıcı Mürekkebi",
    weight: "500 gr",
    colorKey: "Light Magenta",
    colorLabel: "Light Magenta",
    image: {
      src: `${IMG_BASE}/epson-light-magenta-masaustu-yazici-murekkebi-500-gr.webp`,
      alt: "Epson Light Magenta Masaüstü Yazıcı Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_L_SERIES,
  },
  {
    title: "Epson Magenta Masaüstü Yazıcı Mürekkebi 500 gr",
    inkType: "lseries",
    typeLabel: "Epson L Serisi Mürekkebi",
    brandLabel: "Epson L Serisi Uyumlu Yazıcı Mürekkebi",
    weight: "500 gr",
    colorKey: "Magenta",
    colorLabel: "Magenta",
    image: {
      src: `${IMG_BASE}/epson-magenta-masaustu-yazici-murekkebi-500-gr.webp`,
      alt: "Epson Magenta Masaüstü Yazıcı Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_L_SERIES,
  },
  {
    title: "Epson Matte Black Masaüstü Yazıcı Mürekkebi 500 gr",
    inkType: "lseries",
    typeLabel: "Epson L Serisi Mürekkebi",
    brandLabel: "Epson L Serisi Uyumlu Yazıcı Mürekkebi",
    weight: "500 gr",
    colorKey: "Matte Black",
    colorLabel: "Matte Black",
    image: {
      src: `${IMG_BASE}/epson-matte-black-masaustu-yazici-murekkebi-500-gr.webp`,
      alt: "Epson Matte Black Masaüstü Yazıcı Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_L_SERIES,
  },
  {
    title: "Epson Orange Masaüstü Yazıcı Mürekkebi 500 gr",
    inkType: "lseries",
    typeLabel: "Epson L Serisi Mürekkebi",
    brandLabel: "Epson L Serisi Uyumlu Yazıcı Mürekkebi",
    weight: "500 gr",
    colorKey: "Orange",
    colorLabel: "Orange",
    image: {
      src: `${IMG_BASE}/epson-orange-masaustu-yazici-murekkebi-500-gr.webp`,
      alt: "Epson Orange Masaüstü Yazıcı Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_L_SERIES,
  },
  {
    title: "Epson Photo Black Masaüstü Yazıcı Mürekkebi 500 gr",
    inkType: "lseries",
    typeLabel: "Epson L Serisi Mürekkebi",
    brandLabel: "Epson L Serisi Uyumlu Yazıcı Mürekkebi",
    weight: "500 gr",
    colorKey: "Photo Black",
    colorLabel: "Photo Black",
    image: {
      src: `${IMG_BASE}/epson-photo-black-masaustu-yazici-murekkebi-500-gr.webp`,
      alt: "Epson Photo Black Masaüstü Yazıcı Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_L_SERIES,
  },
  {
    title: "Epson Yellow Masaüstü Yazıcı Mürekkebi 500 gr",
    inkType: "lseries",
    typeLabel: "Epson L Serisi Mürekkebi",
    brandLabel: "Epson L Serisi Uyumlu Yazıcı Mürekkebi",
    weight: "500 gr",
    colorKey: "Yellow",
    colorLabel: "Yellow",
    image: {
      src: `${IMG_BASE}/epson-yellow-masaustu-yazici-murekkebi-500-gr.webp`,
      alt: "Epson Yellow Masaüstü Yazıcı Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_L_SERIES,
  },

  // Sublimasyon
  {
    title: "Epson Sublimasyon Mürekkebi 500 gr",
    inkType: "sublimasyon",
    typeLabel: "Epson Sublimasyon Mürekkebi",
    brandLabel: "Epson Uyumlu Sublimasyon Mürekkebi",
    weight: "500 gr",
    colorKey: "Sublimasyon",
    colorLabel: "Sublimasyon",
    image: {
      src: `${IMG_BASE}/epson-sublimasyon-murekkebi-500-gr.webp`,
      alt: "Epson Sublimasyon Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_SUBLIMASYON,
  },

  // HDR (Plotter)
  {
    title: "Papirink Epson HDR Uyumlu Plotter Mürekkebi 500 gr",
    inkType: "hdr",
    typeLabel: "Epson HDR Uyumlu Plotter Mürekkebi",
    brandLabel: "Epson Uyumlu Pigment Plotter Mürekkebi",
    weight: "500 gr",
    colorKey: "Light Magenta",
    colorLabel: "Açık Kırmızı (Light Magenta)",
    image: {
      src: `${IMG_BASE}/papirink-epson-hdr-uyumlu-plotter-murekkebi-500-gr.webp`,
      alt: "Papirink Epson HDR Uyumlu Plotter Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_HDR,
  },

  // K3 (Plotter)
  {
    title: "Papirink Epson K3 Uyumlu Plotter Mürekkebi 500 gr",
    inkType: "k3",
    typeLabel: "Epson K3 Uyumlu Plotter Mürekkebi",
    brandLabel: "Epson Uyumlu Pigment Plotter Mürekkebi",
    weight: "500 gr",
    colorKey: "Light Magenta",
    colorLabel: "Açık Kırmızı (Light Magenta)",
    image: {
      src: `${IMG_BASE}/papirink-epson-k3-uyumlu-plotter-murekkebi-500-gr.webp`,
      alt: "Papirink Epson K3 Uyumlu Plotter Mürekkebi 500 gr",
    },
    compatiblePrinters: PRINTERS_K3,
  },
];

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function inkTypeLabel(t: InkType) {
  switch (t) {
    case "lseries":
      return "L Serisi";
    case "sublimasyon":
      return "Sublimasyon";
    case "hdr":
      return "HDR";
    case "k3":
      return "K3";
  }
}

export default function EpsonUyumluMurekkepClient() {
  const availableTypes = useMemo(() => {
    const s = new Set<InkType>();
    for (const it of ITEMS) s.add(it.inkType);
    return Array.from(s);
  }, []);

  const [activeType, setActiveType] = useState<InkType>(availableTypes[0] ?? "lseries");

  const colorsForType = useMemo(() => {
    const seen = new Set<ColorKey>();
    const list: { key: ColorKey; label: string }[] = [];
    for (const it of ITEMS) {
      if (it.inkType !== activeType) continue;
      if (seen.has(it.colorKey)) continue;
      seen.add(it.colorKey);
      list.push({ key: it.colorKey, label: it.colorLabel });
    }
    return list;
  }, [activeType]);

  const [activeColor, setActiveColor] = useState<ColorKey | null>(null);
  const [openSrc, setOpenSrc] = useState<string | null>(null);

  // type değişince ilk rengi seç
  useEffect(() => {
    setActiveColor(colorsForType[0]?.key ?? null);
  }, [colorsForType]);

  const active = useMemo(() => {
    const found = ITEMS.find((x) => x.inkType === activeType && x.colorKey === activeColor);
    return found ?? ITEMS.find((x) => x.inkType === activeType) ?? ITEMS[0];
  }, [activeType, activeColor]);

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
      {/* Tip Seç */}
      <div className="mt-6">
        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          Mürekkep Tipi Seç
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {availableTypes.map((t) => {
            const isActive = t === activeType;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActiveType(t)}
                className={cx(
                  "rounded-lg border px-4 py-3 text-left transition min-w-[140px]",
                  isActive
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-800 hover:bg-white hover:border-slate-300"
                )}
                aria-pressed={isActive}
              >
                <div className="text-sm font-semibold leading-none">{inkTypeLabel(t)}</div>
                <div
                  className={cx(
                    "mt-1 text-xs leading-none",
                    isActive ? "text-white/80" : "text-slate-500"
                  )}
                >
                  {t === "lseries"
                    ? "Masaüstü (L Serisi)"
                    : t === "sublimasyon"
                    ? "Sublimasyon"
                    : t === "hdr"
                    ? "Plotter (HDR)"
                    : "Plotter (K3)"}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Renk Seç */}
      <div className="mt-6">
        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">Renk Seç</p>

        <div className="mt-2 flex flex-wrap gap-2">
          {colorsForType.map((c) => {
            const isActive = c.key === activeColor;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setActiveColor(c.key)}
                className={cx(
                  "rounded-lg border px-4 py-3 text-left transition min-w-[140px]",
                  isActive
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-800 hover:bg-white hover:border-slate-300"
                )}
                aria-pressed={isActive}
              >
                <div className="text-sm font-semibold leading-none">{c.label}</div>
                <div
                  className={cx(
                    "mt-1 text-xs leading-none",
                    isActive ? "text-white/80" : "text-slate-500"
                  )}
                >
                  {active?.typeLabel ?? ""}
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
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">Ürün Görseli</p>

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
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">Ürün Bilgisi</p>

          <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-900">{active.title}</h2>

          <div className="mt-4 grid gap-3">
            <InfoRow label="Kategori" value="Epson Uyumlu Mürekkep" />
            <InfoRow label="Seri" value={active.typeLabel} />
            <InfoRow label="Renk" value={active.colorLabel} />
            <InfoRow label="Ağırlık" value={active.weight} />
            <InfoRow label="Marka" value={active.brandLabel} />
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
              href="/urunler/murekkep"
              className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              Mürekkep Kategorisine Dön
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
              <BoxRow label="Ürün Adı" value={active.title} />
              <BoxRow label="Marka" value={active.brandLabel} />
              <BoxRow label="Seri" value={active.typeLabel} />
              <BoxRow label="Renk" value={active.colorLabel} />
              <BoxRow label="Ağırlık" value={active.weight} />
              <BoxRow
                label="Uyumlu Yazıcı Modelleri"
                value={active.compatiblePrinters.join(", ")}
              />
              {active.compatibleCartridges?.length ? (
                <BoxRow
                  label="Uyumlu Kartuş Modelleri"
                  value={active.compatibleCartridges.join(", ")}
                />
              ) : null}
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            * Uyum listeleri ürün/seri bazlıdır. Sipariş/teklif öncesi cihaz modelinizi paylaşın,
            birlikte doğrulayalım.
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
      <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">{label}</span>
      <span className="text-sm font-medium text-slate-900 text-right">{value}</span>
    </div>
  );
}

function BoxRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[180px_1fr] gap-4 p-4">
      <div className="text-sm font-semibold text-slate-900">{label} :</div>
      <div className="text-sm text-slate-700 leading-relaxed">{value}</div>
    </div>
  );
}
