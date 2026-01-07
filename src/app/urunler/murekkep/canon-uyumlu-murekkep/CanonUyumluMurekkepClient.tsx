// src/app/urunler/murekkep/canon-uyumlu-murekkep/CanonUyumluMurekkepClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type InkType = "pigment" | "dye" | "a4";

type ColorKey =
  | "Cyan"
  | "Light Cyan"
  | "Magenta"
  | "Light Magenta"
  | "Yellow"
  | "Gray"
  | "Matte Black"
  | "Photo Black"
  | "Photo Cyan"
  | "Photo Magenta"
  | "Black";

type CanonInkItem = {
  title: string;
  inkType: InkType;
  typeLabel: string; // ekranda görünen seri etiketi
  brandLabel: string; // Marka satırında görünecek ifade
  weight: string; // 500 gr / 1000 gr
  colorKey: ColorKey;
  colorLabel: string;
  image: { src: string; alt: string };
  compatiblePrinters: string[];
};

const PRINTERS_A4: string[] = ["Canon A4 Masaüstü Yazıcı Serisi Modelleri"];

const PRINTERS_DYE: string[] = [
  "Tüm Canon Dye 5 Renkli Plotter Modellerine Uyumludur.",
];

const PRINTERS_PIGMENT: string[] = [
  "Tüm Canon Pigment 8 ve 12 renkli Plotter Modellerine Uyumludur.",
];

const IMG_BASE = "/images/urunler/murekkep/canon-uyumlu-murekkep";

const ITEMS: CanonInkItem[] = [
  // A4 Masaüstü Yazıcı Serisi (500 gr)
  {
    title: "Canon Black A4 Masaüstü Yazıcı Serisi Mürekkep",
    inkType: "a4",
    typeLabel: "Canon Masaüstü Yazıcı Serisi",
    brandLabel: "Papirink",
    weight: "500 gr",
    colorKey: "Black",
    colorLabel: "Black",
    image: {
      src: `${IMG_BASE}/canon-black-a4-masaustu-yazici-serisi-murekkep.webp`,
      alt: "Canon Black A4 Masaüstü Yazıcı Serisi Mürekkep",
    },
    compatiblePrinters: PRINTERS_A4,
  },
  {
    title: "Canon Cyan A4 Masaüstü Yazıcı Serisi Mürekkep",
    inkType: "a4",
    typeLabel: "Canon Masaüstü Yazıcı Serisi",
    brandLabel: "Papirink",
    weight: "500 gr",
    colorKey: "Cyan",
    colorLabel: "Cyan",
    image: {
      src: `${IMG_BASE}/canon-cyan-a4-masaustu-yazici-serisi-murekkep.webp`,
      alt: "Canon Cyan A4 Masaüstü Yazıcı Serisi Mürekkep",
    },
    compatiblePrinters: PRINTERS_A4,
  },
  {
    title: "Canon Light Cyan A4 Masaüstü Yazıcı Serisi Mürekkep",
    inkType: "a4",
    typeLabel: "Canon Masaüstü Yazıcı Serisi",
    brandLabel: "Papirink",
    weight: "500 gr",
    colorKey: "Light Cyan",
    colorLabel: "Light Cyan",
    image: {
      src: `${IMG_BASE}/canon-light-cyan-a4-masaustu-yazici-serisi-murekkep.webp`,
      alt: "Canon Light Cyan A4 Masaüstü Yazıcı Serisi Mürekkep",
    },
    compatiblePrinters: PRINTERS_A4,
  },
  {
    title: "Canon Magenta A4 Masaüstü Yazıcı Serisi Mürekkep",
    inkType: "a4",
    typeLabel: "Canon Masaüstü Yazıcı Serisi",
    brandLabel: "Papirink",
    weight: "500 gr",
    colorKey: "Magenta",
    colorLabel: "Magenta",
    image: {
      // (2) olmayan dosyayı kullandım
      src: `${IMG_BASE}/canon-magenta-a4-masaustu-yazici-serisi-murekkep.webp`,
      alt: "Canon Magenta A4 Masaüstü Yazıcı Serisi Mürekkep",
    },
    compatiblePrinters: PRINTERS_A4,
  },
  {
    title: "Canon Light Magenta A4 Masaüstü Yazıcı Serisi Mürekkep",
    inkType: "a4",
    typeLabel: "Canon Masaüstü Yazıcı Serisi",
    brandLabel: "Papirink",
    weight: "500 gr",
    colorKey: "Light Magenta",
    colorLabel: "Light Magenta",
    image: {
      src: `${IMG_BASE}/canon-light-magenta-a4-masaustu-yazici-serisi-murekkep.webp`,
      alt: "Canon Light Magenta A4 Masaüstü Yazıcı Serisi Mürekkep",
    },
    compatiblePrinters: PRINTERS_A4,
  },

  // Canon Plotter Dye Serisi (1000 gr)
  {
    title: "Papirink Cyan Canon Uyumlu Plotter Mürekkebi 1000 gr Dye",
    inkType: "dye",
    typeLabel: "Canon Dye Serisi",
    brandLabel: "Canon Uyumlu Dye Plotter Mürekkebi",
    weight: "1000 gr",
    colorKey: "Cyan",
    colorLabel: "Cyan",
    image: {
      src: `${IMG_BASE}/papirink-cyan-canon-uyumlu-plotter-murekkebi-1000-gr-dye.webp`,
      alt: "Papirink Cyan Canon Uyumlu Plotter Mürekkebi 1000 gr Dye",
    },
    compatiblePrinters: PRINTERS_DYE,
  },
  {
    title: "Papirink Magenta Canon Uyumlu Plotter Mürekkebi 1000 gr Dye",
    inkType: "dye",
    typeLabel: "Canon Dye Serisi",
    brandLabel: "Canon Uyumlu Dye Plotter Mürekkebi",
    weight: "1000 gr",
    colorKey: "Magenta",
    colorLabel: "Magenta",
    image: {
      src: `${IMG_BASE}/papirink-magenta-canon-uyumlu-plotter-murekkebi-1000-gr-dye.webp`,
      alt: "Papirink Magenta Canon Uyumlu Plotter Mürekkebi 1000 gr Dye",
    },
    compatiblePrinters: PRINTERS_DYE,
  },
  {
    title: "Papirink Matte Black Canon Uyumlu Plotter Mürekkebi 1000 gr Dye",
    inkType: "dye",
    typeLabel: "Canon Dye Serisi",
    brandLabel: "Canon Uyumlu Dye Plotter Mürekkebi",
    weight: "1000 gr",
    colorKey: "Matte Black",
    colorLabel: "Matte Black",
    image: {
      src: `${IMG_BASE}/papirink-matte-black-canon-uyumlu-plotter-murekkebi-1000-gr-dye.webp`,
      alt: "Papirink Matte Black Canon Uyumlu Plotter Mürekkebi 1000 gr Dye",
    },
    compatiblePrinters: PRINTERS_DYE,
  },
  {
    title: "Papirink Yellow Canon Uyumlu Plotter Mürekkebi 1000 gr Dye",
    inkType: "dye",
    typeLabel: "Canon Dye Serisi",
    brandLabel: "Canon Uyumlu Dye Plotter Mürekkebi",
    weight: "1000 gr",
    colorKey: "Yellow",
    colorLabel: "Yellow",
    image: {
      src: `${IMG_BASE}/papirink-yellow-canon-uyumlu-plotter-murekkebi-1000-gr-dye.webp`,
      alt: "Papirink Yellow Canon Uyumlu Plotter Mürekkebi 1000 gr Dye",
    },
    compatiblePrinters: PRINTERS_DYE,
  },

  // Canon Plotter Pigment Serisi (1000 gr)
  {
    title: "Papirink Cyan Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    inkType: "pigment",
    typeLabel: "Canon Pigment Yazıcı Serisi",
    brandLabel: "Canon Uyumlu Dye Plotter Mürekkebi",
    weight: "1000 gr",
    colorKey: "Cyan",
    colorLabel: "Cyan",
    image: {
      src: `${IMG_BASE}/papirink-cyan-canon-uyumlu-plotter-murekkebi-1000-gr-pigment.webp`,
      alt: "Papirink Cyan Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    },
    compatiblePrinters: PRINTERS_PIGMENT,
  },
  {
    title: "Papirink Gray Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    inkType: "pigment",
    typeLabel: "Canon Pigment Yazıcı Serisi",
    brandLabel: "Canon Uyumlu Dye Plotter Mürekkebi",
    weight: "1000 gr",
    colorKey: "Gray",
    colorLabel: "Gray",
    image: {
      src: `${IMG_BASE}/papirink-gray-canon-uyumlu-plotter-murekkebi-1000-gr-pigment.webp`,
      alt: "Papirink Gray Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    },
    compatiblePrinters: PRINTERS_PIGMENT,
  },
  {
    title: "Papirink Magenta Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    inkType: "pigment",
    typeLabel: "Canon Pigment Yazıcı Serisi",
    brandLabel: "Canon Uyumlu Dye Plotter Mürekkebi",
    weight: "1000 gr",
    colorKey: "Magenta",
    colorLabel: "Magenta",
    image: {
      src: `${IMG_BASE}/papirink-magenta-canon-uyumlu-plotter-murekkebi-1000-gr-pigment.webp`,
      alt: "Papirink Magenta Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    },
    compatiblePrinters: PRINTERS_PIGMENT,
  },
  {
    title: "Papirink Matte Black Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    inkType: "pigment",
    typeLabel: "Canon Pigment Yazıcı Serisi",
    brandLabel: "Canon Uyumlu Dye Plotter Mürekkebi",
    weight: "1000 gr",
    colorKey: "Matte Black",
    colorLabel: "Matte Black",
    image: {
      src: `${IMG_BASE}/papirink-matte-black-canon-uyumlu-plotter-murekkebi-1000-gr-pigment.webp`,
      alt: "Papirink Matte Black Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    },
    compatiblePrinters: PRINTERS_PIGMENT,
  },
  {
    title: "Papirink Photo Black Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    inkType: "pigment",
    typeLabel: "Canon Pigment Yazıcı Serisi",
    brandLabel: "Canon Uyumlu Dye Plotter Mürekkebi",
    weight: "1000 gr",
    colorKey: "Photo Black",
    colorLabel: "Photo Black",
    image: {
      src: `${IMG_BASE}/papirink-photo-black-canon-uyumlu-plotter-murekkebi-1000-gr-pigment.webp`,
      alt: "Papirink Photo Black Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    },
    compatiblePrinters: PRINTERS_PIGMENT,
  },
  {
    title: "Papirink Photo Cyan Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    inkType: "pigment",
    typeLabel: "Canon Pigment Yazıcı Serisi",
    brandLabel: "Canon Uyumlu Dye Plotter Mürekkebi",
    weight: "1000 gr",
    colorKey: "Photo Cyan",
    colorLabel: "Photo Cyan",
    image: {
      src: `${IMG_BASE}/papirink-photo-cyan-canon-uyumlu-plotter-murekkebi-1000-gr-pigment.webp`,
      alt: "Papirink Photo Cyan Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    },
    compatiblePrinters: PRINTERS_PIGMENT,
  },
  {
    title: "Papirink Photo Magenta Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    inkType: "pigment",
    typeLabel: "Canon Pigment Yazıcı Serisi",
    brandLabel: "Canon Uyumlu Dye Plotter Mürekkebi",
    weight: "1000 gr",
    colorKey: "Photo Magenta",
    colorLabel: "Photo Magenta",
    image: {
      src: `${IMG_BASE}/papirink-photo-magenta-canon-uyumlu-plotter-murekkebi-1000-gr-pigment.webp`,
      alt: "Papirink Photo Magenta Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    },
    compatiblePrinters: PRINTERS_PIGMENT,
  },
  {
    title: "Papirink Yellow Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    inkType: "pigment",
    typeLabel: "Canon Pigment Yazıcı Serisi",
    brandLabel: "Canon Uyumlu Dye Plotter Mürekkebi",
    weight: "1000 gr",
    colorKey: "Yellow",
    colorLabel: "Yellow",
    image: {
      src: `${IMG_BASE}/papirink-yellow-canon-uyumlu-plotter-murekkebi-1000-gr-pigment.webp`,
      alt: "Papirink Yellow Canon Uyumlu Plotter Mürekkebi 1000 gr Pigment",
    },
    compatiblePrinters: PRINTERS_PIGMENT,
  },
];

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function inkTypeLabel(t: InkType) {
  switch (t) {
    case "pigment":
      return "Pigment";
    case "dye":
      return "Dye";
    case "a4":
      return "A4";
  }
}

export default function CanonUyumluMurekkepClient() {
  const availableTypes = useMemo(() => {
    const s = new Set<InkType>();
    for (const it of ITEMS) s.add(it.inkType);
    return Array.from(s);
  }, []);

  const [activeType, setActiveType] = useState<InkType>(availableTypes[0] ?? "pigment");

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
                <div className="text-sm font-semibold leading-none">
                  {inkTypeLabel(t)}
                </div>
                <div
                  className={cx(
                    "mt-1 text-xs leading-none",
                    isActive ? "text-white/80" : "text-slate-500"
                  )}
                >
                  {t === "pigment"
                    ? "Plotter (Pigment Seri)"
                    : t === "dye"
                      ? "Plotter (Dye Seri)"
                      : "A4 Masaüstü Seri"}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Renk Seç */}
      <div className="mt-6">
        <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          Renk Seç
        </p>

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
            <InfoRow label="Kategori" value="Canon Uyumlu Mürekkep" />
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
            <h3 className="text-lg font-semibold text-slate-900">
              Ürün Açıklaması
            </h3>
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
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            * Uyum listeleri seri bazlıdır. Sipariş/teklif öncesi cihaz modelinizi paylaşın, birlikte doğrulayalım.
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
      <span className="text-sm font-medium text-slate-900 text-right">
        {value}
      </span>
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
