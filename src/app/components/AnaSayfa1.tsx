"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ShowcaseThumb = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export default function HomeShowcase() {
  const thumbs: ShowcaseThumb[] = useMemo(
    () => [
      {
        title: "Makinalar",
        href: "/urunler/makinalar",
        imageSrc: "/images/ana-sayfa-ilk-gorseller/makine.webp",
        imageAlt: "Plotter, yazıcı ve baskı makinaları",
      },
      {
        title: "Yazıcı & Plotter",
        href: "/urunler/makinalar/plotter",
        imageSrc: "/images/ana-sayfa-ilk-gorseller/yazici.webp",
        imageAlt: "Geniş format yazıcı ve plotter çözümleri",
      },
      {
        title: "Kağıt Ürünleri",
        href: "/urunler/kagit",
        imageSrc: "/images/ana-sayfa-ilk-gorseller/kagit.webp",
        imageAlt: "Plotter ve fotoğraf kağıdı çeşitleri",
      },
      {
        title: "Mürekkep",
        href: "/urunler/murekkep",
        imageSrc: "/images/ana-sayfa-ilk-gorseller/murekkep.webp",
        imageAlt: "Canon, Epson ve HP uyumlu mürekkepler",
      },
      {
        title: "UV Baskı",
        href: "/urunler/makinalar/uv",
        imageSrc: "/images/ana-sayfa-ilk-gorseller/uv.webp",
        imageAlt: "UV baskı makinaları",
      },
    ],
    []
  );

  const total = thumbs.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const [isHoveringThumb, setIsHoveringThumb] = useState(false);

  // motion reduce
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(!!mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  /* ===========================
     AUTOPLAY – 3 saniye
  ============================ */
  useEffect(() => {
    if (isHoveringThumb) return;

    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % total);
      setFadeKey((k) => k + 1);
    }, 3000);

    return () => clearInterval(id);
  }, [isHoveringThumb, total]);

  const previewTo = (idx: number) => {
    setActiveIndex(idx);
    setFadeKey((k) => k + 1);
  };

  const active = thumbs[activeIndex];
  const easing = "cubic-bezier(0.22, 1, 0.36, 1)";
  const duration = reduceMotion ? "160ms" : "420ms";

  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pb-20">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        {/* Büyük Görsel */}
        <div
          className="relative aspect-[1920/700] bg-slate-100 overflow-hidden"
          role="region"
          aria-label="Ana vitrin görseli"
        >
          <div
            key={fadeKey}
            className="absolute inset-0"
            style={{
              animation: reduceMotion ? undefined : `hsFade ${duration} ${easing} both`,
            }}
          >
            <Image
              src={active.imageSrc}
              alt={active.imageAlt}
              fill
              priority
              className="object-contain"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/15" />
            <div className="absolute inset-0 [box-shadow:inset_0_0_140px_rgba(0,0,0,0.20)]" />

            <div className="absolute left-6 bottom-6">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white/85 px-4 py-2 text-sm font-extrabold text-slate-900 shadow-sm backdrop-blur">
                {active.title}
                <span className="text-slate-500 font-bold">→</span>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes hsFade {
              from {
                opacity: 0;
                transform: scale(0.985);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </div>

        {/* Thumbs */}
        <div className="p-6">
          <div className="grid gap-3 sm:grid-cols-5">
            {thumbs.map((t, idx) => {
              const activeThumb = idx === activeIndex;

              return (
                <Link
                  key={t.href}
                  href={t.href}
                  onMouseEnter={() => {
                    setIsHoveringThumb(true);
                    previewTo(idx);
                  }}
                  onMouseLeave={() => setIsHoveringThumb(false)}
                  onFocus={() => previewTo(idx)}
                  className={[
                    "group rounded-2xl border p-2 transition hover:bg-slate-50",
                    activeThumb ? "border-slate-900" : "border-slate-200",
                  ].join(" ")}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <Image
                      src={t.imageSrc}
                      alt={t.imageAlt}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-2 text-center text-xs font-extrabold text-slate-800">
                    {t.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
