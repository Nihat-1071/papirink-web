"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "../../../lib/contact";

const PRODUCTS = [
  {
    title: "Papjet PJ 33x48 Etiket Makinası",
    desc: "Rulo etiket baskı ihtiyaçları için kompakt, hızlı ve profesyonel etiket makinası.",
    href: "/urunler/makinalar/etiket-makinalari/papjet-pj33x48",
    pills: ["Papjet", "Etiket", "33x48"],
    image: {
      src: "/images/urunler/makinalar/etiket-makinalari/papjet-pj33x48-etiket-makinasi.jpg",
      alt: "Papjet PJ 33x48 etiket makinası",
    },
  },
];

export default function EtiketMakinalariClient() {
  return (
    <>
      {/* Hero */}
      <div className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white px-6 py-6 sm:px-8">
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Alt Kategori
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Etiket Makinaları
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            Rulo etiket baskı, ürün etiketleme ve endüstriyel etiket çözümleri için
            Papjet etiket makinası modellerini inceleyin.
          </p>

          <div className="mt-6 h-px w-full bg-slate-100" />

        </div>
      </div>

      {/* Products */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {PRODUCTS.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group block rounded-xl border border-slate-200 bg-white p-6 transition hover:border-slate-300"
          >
            <div className="flex gap-5">
              {/* SOL */}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-slate-900">
                  {p.title}
                </h3>

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

                <div className="mt-4 text-xs text-slate-500">
                  Ürün detayı
                </div>
              </div>

              {/* SAĞ */}
              <div className="relative hidden sm:block w-44 md:w-48 lg:w-56">
                <div className="relative h-32 md:h-36 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 224px, 192px"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Etiket makinası seçimi için destek alın
        </h3>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 leading-relaxed">
          Etiket ölçüsü, baskı türü ve günlük üretim miktarınıza göre size en uygun
          etiket makinasını birlikte belirleyelim.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={CONTACT.tel}
            className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            Hızlı Destek Al
          </a>

          <Link
            href="/urunler"
            className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Tüm Ürünler
          </Link>
        </div>
      </div>
    </>
  );
}
