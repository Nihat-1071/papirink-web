// src/app/urunler/kartus/canon-orijinal-kartus/canon-320/Canon320Client.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Canon320Item = {
  title: string;
  code: string;
  colorLabel: string;
  capacity: string;
  image: { src: string; alt: string };
  compatibleModels: string[];
  notes?: string[];
};

const COMPATIBLE_MODELS_CANON320: string[] = [
  "Canon imagePROGRAF TM-200",
  "Canon imagePROGRAF TM-205",
  "Canon imagePROGRAF TM-300",
  "Canon imagePROGRAF TM-305",
];

const ITEMS: Canon320Item[] = [
  {
    title: "Canon PFI-320BK Siyah Orijinal Kartuş - TM-200 / TM-205",
    code: "PFI-320BK",
    colorLabel: "Siyah (Black)",
    capacity: "300 ml",
    image: {
      src: "/images/urunler/kartus/canon-orijinal-kartus/canon-pfi-320bk-siyah-orijinal-kartus-tm-200-tm-205.jpg",
      alt: "Canon PFI-320BK Siyah Orijinal Kartuş - TM-200 / TM-205",
    },
    compatibleModels: COMPATIBLE_MODELS_CANON320,
  },
  {
    title: "Canon PFI-320C Mavi Orijinal Kartuş - TM-200 / TM-205",
    code: "PFI-320C",
    colorLabel: "Mavi (Cyan)",
    capacity: "300 ml",
    image: {
      src: "/images/urunler/kartus/canon-orijinal-kartus/canon-pfi-320c-mavi-orijinal-kartus-tm-200-tm-205.jpg",
      alt: "Canon PFI-320C Mavi Orijinal Kartuş - TM-200 / TM-205",
    },
    compatibleModels: COMPATIBLE_MODELS_CANON320,
  },
  {
    title: "Canon PFI-320M Kırmızı Orijinal Kartuş - TM-200 / TM-205",
    code: "PFI-320M",
    colorLabel: "Kırmızı (Magenta)",
    capacity: "300 ml",
    image: {
      src: "/images/urunler/kartus/canon-orijinal-kartus/canon-pfi-320m-kirmizi-orijinal-kartus-tm-200-tm-205.jpg",
      alt: "Canon PFI-320M Kırmızı Orijinal Kartuş - TM-200 / TM-205",
    },
    compatibleModels: COMPATIBLE_MODELS_CANON320,
  },
  {
    title: "Canon PFI-320MBK Mat Siyah Orijinal Kartuş - TM-200 / TM-205",
    code: "PFI-320MBK",
    colorLabel: "Mat Siyah (Matte Black)",
    capacity: "300 ml",
    image: {
      src: "/images/urunler/kartus/canon-orijinal-kartus/canon-pfi-320mbk-mat-siyah-orijinal-kartus-tm-200-tm-205.jpg",
      alt: "Canon PFI-320MBK Mat Siyah Orijinal Kartuş - TM-200 / TM-205",
    },
    compatibleModels: COMPATIBLE_MODELS_CANON320,
  },
  {
    title: "Canon PFI-320Y Sarı Orijinal Kartuş - TM-200 / TM-205",
    code: "PFI-320Y",
    colorLabel: "Sarı (Yellow)",
    capacity: "300 ml",
    image: {
      src: "/images/urunler/kartus/canon-orijinal-kartus/canon-pfi-320y-sari-orijinal-kartus-tm-200-tm-205.jpg",
      alt: "Canon PFI-320Y Sarı Orijinal Kartuş - TM-200 / TM-205",
    },
    compatibleModels: COMPATIBLE_MODELS_CANON320,
  },
];

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Canon320Client() {
  const [activeCode, setActiveCode] = useState<string>(ITEMS[0]?.code ?? "");
  const [openSrc, setOpenSrc] = useState<string | null>(null);

  const active = useMemo(
    () => ITEMS.find((x) => x.code === activeCode) ?? ITEMS[0],
    [activeCode]
  );

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenSrc(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      {/* Kod seçimi */}
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
            <InfoRow label="Marka" value="Canon" />
            <InfoRow label="Seri" value="Canon PFI-320" />
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
              href="/urunler/kartus/canon-orijinal-kartus"
              className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              Canon Orijinal Kartuşlara Dön
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
              <BoxRow label="Markası" value="Canon" />
              <BoxRow label="Baskı Kapasitesi" value={active.capacity} />
              <BoxRow
                label="Yazıcı Modeli"
                value={active.compatibleModels.join(", ")}
              />
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            * Uyum listesi seri bazlıdır. Sipariş/teklif öncesi yazıcı modelinizi
            paylaşın, birlikte doğrulayalım.
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
    <div className="grid grid-cols-[140px_1fr] gap-4 p-4">
      <div className="text-sm font-semibold text-slate-900">{label} :</div>
      <div className="text-sm text-slate-700 leading-relaxed">{value}</div>
    </div>
  );
}
