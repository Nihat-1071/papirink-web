"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ShowcaseThumb = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const DEFAULT_IMAGE = "/images/ana-sayfa-ilk-gorseller/makine.webp";

export default function HomeShowcase() {
  const [activeImage, setActiveImage] = useState(DEFAULT_IMAGE);

  const thumbs: ShowcaseThumb[] = [
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
  ];

  return (
    <section className="mx-auto w-full max-w-[1400px] px-3 sm:px-6 py-12">
      {/* Başlık */}
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
          Baskı ve Plotter Ürünlerinde Tek Nokta Tedarik
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-base">
          Makina, kağıt, kartuş ve mürekkep ihtiyaçlarınız için hızlı ve güvenilir çözümler.
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1fr_360px]">
        {/* SOL */}
        <div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* 🔥 ORTA BÜYÜK GÖRSEL */}
            <div className="relative aspect-[16/5.5] bg-slate-100">
              <Image
                key={activeImage} // smooth geçiş için önemli
                src={activeImage}
                alt="Papirink vitrin görseli"
                fill
                priority
                className="object-cover object-[50%_45%] transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
            </div>

            <div className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-extrabold text-slate-900">
                    İhtiyacına uygun ürünü seç
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Üzerine gel, vitrinde anında gör.
                  </p>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="/urunler"
                    className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-extrabold text-white hover:opacity-90"
                  >
                    Ürünleri Gör
                  </Link>
                  <Link
                    href="/iletisim"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                  >
                    Teklif Al
                  </Link>
                </div>
              </div>

              {/* 🔽 THUMBNAILLAR */}
              <div className="mt-5 grid gap-3 sm:grid-cols-5">
                {thumbs.map((t) => (
                  <Link
                    key={t.href}
                    href={t.href}
                    onMouseEnter={() => setActiveImage(t.imageSrc)}
                    onMouseLeave={() => setActiveImage(DEFAULT_IMAGE)}
                    onClick={() => setActiveImage(t.imageSrc)} // mobil için
                    className="group rounded-2xl border border-slate-200 p-2 transition hover:bg-slate-50"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                      <Image
                        src={t.imageSrc}
                        alt={t.imageAlt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-2 text-xs font-extrabold text-slate-800 text-center">
                      {t.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SAĞ */}
        <aside className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3]">
                <Image
                src="/images/ana-sayfa-ilk-gorseller/hizli-teslimat.webp"
                alt="Papirink hızlı ve ücretsiz teslimat"
                fill
                className="object-cover"
                />
            </div>

            <div className="p-5">
                <Link
                href="/kurumsal/teslimat-bilgilerimiz"
                className="inline-flex w-full justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-extrabold text-white hover:opacity-90"
                >
                Teslimat Detayları →
                </Link>
            </div>
            </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-extrabold text-slate-900">
              Hızlı İletişim
            </div>

            <div className="mt-4 space-y-3 text-sm font-bold">
              <a href="tel:+903125801006" className="block">
                +90 312 580 10 06
              </a>
              <a
                href="https://wa.me/905010320406"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                +90 501 032 04 06 (WhatsApp)
              </a>
              <a href="mailto:info@papirink.com.tr" className="block">
                info@papirink.com.tr
              </a>
            </div>

            <Link
              href="/iletisim"
              className="mt-4 inline-flex w-full justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-extrabold text-white hover:opacity-90"
            >
              İletişim Sayfası →
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
