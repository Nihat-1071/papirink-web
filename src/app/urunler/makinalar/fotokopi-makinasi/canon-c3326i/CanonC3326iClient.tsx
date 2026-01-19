"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTACT } from "../../../../lib/contact";

type SpecItem = { label: string; value: string };

export default function CanonC3326iClient() {
  const [openSpecs, setOpenSpecs] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSpecs(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const heroImage =
    "/images/urunler/makinalar/fotokopi-makinasi/canon-c3326i-fotokopi-makinasi.webp";
  const specsImage =
    "/images/urunler/makinalar/fotokopi-makinasi/canon-c3326i-fotokopi-makinasi-ozellikleri.webp";

  const bullets: string[] = [
    "Dakikada 26 kopya",
    "Çift taraf baskı, tarama, fotokopi",
    "Çözünürlük 1200 dpi",
    "2 yıl garanti",
    "Renkli A3/A4/A5/A6 destek",
  ];

  const quickSpecs: SpecItem[] = [
    { label: "Model", value: "Canon c3326i" },
    { label: "Hız", value: "26 kopya/dk" },
    { label: "Format", value: "A3 / A4 / A5 / A6" },
    { label: "Çift Taraf", value: "Var" },
    { label: "Kullanım", value: "Kurumsal / Ofis" },
  ];

  return (
    <>
      {/* HERO */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Fotokopi Makinası
            </p>

            <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Canon c3326i
            </h1>

            <p className="mt-3 max-w-xl text-slate-600 leading-relaxed">
              A3 renkli çok fonksiyonlu fotokopi makinası. Baskı / tarama / fotokopi
              iş akışında verimli, düşük maliyet odaklı kurumsal çözüm.
            </p>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {bullets.map((t) => (
                <div
                  key={t}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                >
                  {t}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
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

              <button
                type="button"
                onClick={() => setOpenSpecs(true)}
                className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Özellikleri Gör
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={heroImage}
                alt="Canon c3326i fotokopi makinası"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* QUICK SPECS */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Öne Çıkan Özellikler</h2>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickSpecs.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                {s.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/urunler/makinalar/fotokopi-makinasi"
            className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Fotokopi Makinelerine Dön
          </Link>

          <Link
            href="/iletisim"
            className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            Kurulum / Teklif İçin İletişim
          </Link>
        </div>
      </div>

      {/* SPECS MODAL */}
      {openSpecs && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Ürün özellikleri"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpenSpecs(false);
          }}
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">
                  Canon c3326i — Özellikler
                </p>
                <p className="text-xs text-slate-500">ESC ile kapatabilirsiniz</p>
              </div>

              <button
                type="button"
                onClick={() => setOpenSpecs(false)}
                className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
              >
                Kapat
              </button>
            </div>

            <div className="relative aspect-[1/1] w-full bg-slate-100">
              <Image
                src={specsImage}
                alt="Canon c3326i fotokopi makinası özellikleri"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
