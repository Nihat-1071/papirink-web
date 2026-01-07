"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  brand: string;
  category: string;
  image: string;
  phoneHref: string; // tel:+90...
  whatsappHref: string; // https://wa.me/90...
};

export default function ProductHeroClient({
  title,
  brand,
  category,
  image,
  phoneHref,
  whatsappHref,
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
          {/* Sol: Görsel (tıklayınca büyüt) */}
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

          {/* Sağ: Bilgiler + Teklif Al */}
          <div className="p-6 lg:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              {brand} • {category}
            </div>

            <h1 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
              {title}
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Teklif, stok ve teslimat bilgisi için hızlıca ulaşın. Kurumsal
              satış ve teknik destek ekibimiz size yönlendirme yapar.
            </p>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                {/* TEKLİF AL → direkt ara */}
                <a
                href={phoneHref}
                className="
                    inline-flex items-center justify-center rounded-xl
                    bg-[#2563eb] px-6 py-3 text-white font-extrabold
                    shadow-sm transition hover:bg-[#1d4ed8] active:scale-[0.98]
                    focus:outline-none focus:ring-2 focus:ring-blue-200
                    w-full sm:w-auto
                "
                >
                TEKLİF AL
                </a>

                {/* İLETİŞİM */}
                <Link
                href="/iletisim"
                className="
                    inline-flex items-center justify-center rounded-xl
                    border border-slate-300 bg-white px-6 py-3
                    font-bold text-slate-800
                    shadow-sm transition hover:bg-slate-100 active:scale-[0.98]
                    focus:outline-none focus:ring-2 focus:ring-slate-200
                    w-full sm:w-auto
                "
                >
                İLETİŞİM
                </Link>

                {/* WHATSAPP */}
                <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="
                    inline-flex items-center justify-center rounded-xl
                    bg-[#16a34a] px-6 py-3 font-extrabold text-white
                    shadow-sm transition hover:bg-[#15803d] active:scale-[0.98]
                    focus:outline-none focus:ring-2 focus:ring-green-200
                    w-full sm:w-auto
                "
                >
                WhatsApp
                </a>
            </div>

            <div className="mt-3 text-xs text-slate-500">
                * Teklif, fiyat ve teslimat bilgisi için satış ekibimizle hızlıca iletişime geçebilirsiniz.
            </div>
            </div>



          </div>
        </div>
      </div>

      {/* Modal: orijinal boyutta büyüt */}
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
                aria-label="Kapat"
              >
                ✕ Kapat
              </button>

              <div className="relative max-h-[80vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                <div className="relative h-[80vh]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
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
