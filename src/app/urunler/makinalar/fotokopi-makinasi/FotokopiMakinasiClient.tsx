"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

type Product = {
  key: "canon-c3326i" | "canon-c3926i";
  title: string;
  desc: string;
  href: string;
  pills: string[];
  image: { src: string; alt: string };
  specsImage: { src: string; alt: string };
};

const PRODUCTS: Product[] = [
  {
    key: "canon-c3326i",
    title: "Canon c3326i Fotokopi Makinası",
    desc: "Renkli A3 çok fonksiyonlu fotokopi makinası. Çift taraf baskı, tarama ve fotokopi süreçleri için verimli çözüm.",
    href: "/urunler/makinalar/fotokopi-makinasi/canon-c3326i",
    pills: ["Canon", "c3326i", "A3", "Renkli", "26 kopya/dk"],
    image: {
      src: "/images/urunler/makinalar/fotokopi-makinasi/canon-c3326i-fotokopi-makinasi.webp",
      alt: "Canon c3326i fotokopi makinası",
    },
    specsImage: {
      src: "/images/urunler/makinalar/fotokopi-makinasi/canon-c3326i-fotokopi-makinasi-ozellikleri.webp",
      alt: "Canon c3326i fotokopi makinası özellikleri",
    },
  },
  {
    key: "canon-c3926i",
    title: "Canon c3926i Fotokopi Makinası",
    desc: "Renkli A3 çok fonksiyonlu fotokopi makinası. Yüksek kapasite toner ve yoğun kullanım için sağlam kurumsal çözüm.",
    href: "/urunler/makinalar/fotokopi-makinasi/canon-c3926i",
    pills: ["Canon", "c3926i", "A3", "Renkli", "26 kopya/dk"],
    image: {
      src: "/images/urunler/makinalar/fotokopi-makinasi/canon-c3926i-fotokopi-makinasi.webp",
      alt: "Canon c3926i fotokopi makinası",
    },
    specsImage: {
      src: "/images/urunler/makinalar/fotokopi-makinasi/canon-c3926i-fotokopi-makinasi-ozellikleri.webp",
      alt: "Canon c3926i fotokopi makinası özellikleri",
    },
  },
];

export default function FotokopiMakinasiClient() {
  const [openSpecsFor, setOpenSpecsFor] = useState<Product | null>(null);

  const items = useMemo(() => PRODUCTS, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSpecsFor(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white px-6 py-6 sm:px-8">
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Ürün Grubu
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Fotokopi Makineleri
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            Kurumsal ofisler için A3 renkli çok fonksiyonlu fotokopi makineleri.
            Ürünleri inceleyin, özellik görsellerini açın; hızlı teklif ve kurulum için bize ulaşın.
          </p>

          <div className="mt-6 h-px w-full bg-slate-100" />

          {/* Quick actions */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={CONTACT.tel}
              className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Hızlı Destek / Teklif Al
            </a>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
            >
              WhatsApp
            </a>

            <Link
              href="/iletisim"
              className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              İletişim kanallarımız
            </Link>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((p) => (
            <div
              key={p.key}
              className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:border-slate-300"
            >
              <div className="flex gap-5">
                {/* SOL */}
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-semibold text-slate-900">{p.title}</h2>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.pills.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 h-px w-full bg-slate-100" />

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <Link
                      href={p.href}
                      className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
                    >
                      Ürün Detayı
                    </Link>

                    <button
                      type="button"
                      onClick={() => setOpenSpecsFor(p)}
                      className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                    >
                      Özellikleri Gör
                    </button>

                    <Link
                      href="/iletisim"
                      className="rounded-md border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white hover:border-slate-300 transition"
                    >
                      Teklif Al
                    </Link>
                  </div>
                </div>

                {/* SAĞ: görsel */}
                <div className="relative hidden sm:block w-44 md:w-48 lg:w-56">
                  <div className="relative h-40 md:h-44 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 224px, 192px"
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Size en uygun modeli seçelim
        </h3>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 leading-relaxed">
          Aylık baskı adediniz, renkli/siyah ağırlığınız, kâğıt ebatları (A3/A4) ve
          ağ yapınız (USB/Ethernet/WiFi) gibi bilgileri paylaşın; size uygun cihazı hızlıca önerelim.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={CONTACT.tel}
            className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            Hızlı Destek Al
          </a>

          <Link
            href="/urunler/makinalar"
            className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Tüm Makinalar
          </Link>
        </div>
      </div>

      {/* Specs Modal */}
      {openSpecsFor && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Ürün özellikleri"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpenSpecsFor(null);
          }}
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {openSpecsFor.title} — Özellikler
                </p>
                <p className="text-xs text-slate-500">ESC ile kapatabilirsiniz</p>
              </div>

              <button
                type="button"
                onClick={() => setOpenSpecsFor(null)}
                className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
                aria-label="Kapat"
              >
                Kapat
              </button>
            </div>

            <div className="relative aspect-[1/1] w-full bg-slate-100">
              <Image
                src={openSpecsFor.specsImage.src}
                alt={openSpecsFor.specsImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
