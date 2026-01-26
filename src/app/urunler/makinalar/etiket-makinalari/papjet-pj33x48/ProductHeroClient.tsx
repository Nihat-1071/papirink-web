"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  brand: string;
  category: string;
  image: string;
};

export default function ProductHeroClient({
  title,
  brand,
  category,
  image,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Sol: Görsel */}
          <div className="relative bg-gradient-to-b from-slate-50 to-white">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group relative w-full text-left"
              aria-label="Ürün görselini büyüt"
            >
              <div className="relative aspect-[16/10] lg:h-[460px] lg:aspect-auto">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />
              </div>

              <div className="pointer-events-none absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Görseli büyütmek için tıkla
              </div>
            </button>
          </div>

          {/* Sağ: Ürün Bilgileri */}
          <div className="p-6 lg:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              {brand} • {category}
            </div>

            <h1 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
              {title}
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Büyük format baskı, teknik çizim ve grafik üretimleri için
              geliştirilmiş profesyonel bir çözümdür.
            </p>
            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 leading-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                <p>
                  Detaylı teknik tablo ve sarf uyumu hakkında bilgi almak için
                  bizimle iletişime geçebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Ürün görseli"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute inset-0 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-6xl">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute -top-12 right-0 inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/20"
              >
                ✕ Kapat
              </button>

              <div className="relative h-[80vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-3 text-center text-xs text-white/80">
                ESC ile kapatabilirsiniz.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
