"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

type BrandKey = "all" | "canon" | "epson";

function detectBrand(title: string): Exclude<BrandKey, "all"> {
  const t = title.toLowerCase();
  if (t.includes("canon")) return "canon";
  return "epson";
}

function brandLabel(k: Exclude<BrandKey, "all">) {
  switch (k) {
    case "canon":
      return "Canon";
    case "epson":
      return "Epson";
  }
}

type Product = {
  title: string;
  desc: string;
  href: string;
  pills: string[];
  image?: { src: string; alt: string };
};

const PRODUCTS: Product[] = [
  // ======================
  // CANON
  // ======================
  {
    title: "Canon G4400 Tanklı Yazıcı Tarayıcı Fotokopi Fax WiFi",
    desc: "Tanklı çok fonksiyonlu: yazıcı + tarayıcı + fotokopi + fax, WiFi destekli.",
    href: "/urunler/makinalar/masaustu-yazicilar/canon-g4400",
    pills: ["Canon", "G4400", "WiFi", "Fax"],
    image: {
      src: "/images/urunler/makinalar/masaustu-yazici/canon-g4400-tankli-yazici-tarayici-fotokopi-fax-wifi.jpg",
      alt: "Canon G4400 tanklı yazıcı tarayıcı fotokopi fax WiFi",
    },
  },
  {
    title: "Canon Pixma G2400 Mürekkep Tanklı Yazıcı Tarayıcı Fotokopi",
    desc: "Tanklı mürekkep sistemiyle ekonomik çıktı; yazdır + tara + kopyala.",
    href: "/urunler/makinalar/masaustu-yazicilar/canon-pixma-g2400",
    pills: ["Canon", "G2400", "Tanklı"],
    image: {
      src: "/images/urunler/makinalar/masaustu-yazici/canon-pixma-g2400-murekkep-tankli-yazici-tarayici-fotokopi.jpg",
      alt: "Canon Pixma G2400 mürekkep tanklı yazıcı tarayıcı fotokopi",
    },
  },
  {
    title: "Canon Pixma G3400 Ink Tank Fotokopi Tarayıcı WiFi Tanklı",
    desc: "WiFi destekli tanklı sistem; günlük ofis işleri için pratik çok fonksiyon.",
    href: "/urunler/makinalar/masaustu-yazicilar/canon-pixma-g3400",
    pills: ["Canon", "G3400", "WiFi", "Tanklı"],
    image: {
      src: "/images/urunler/makinalar/masaustu-yazici/canon-pixma-g3400-ink-fotograf-tarayici-wifi-tankli.jpg",
      alt: "Canon Pixma G3400 WiFi tanklı yazıcı tarayıcı fotokopi",
    },
  },

  // ======================
  // EPSON
  // ======================
  {
    title: "Epson L1300 A3 Mürekkep Tanklı Yazıcı (Renk)",
    desc: "A3 geniş format renkli baskı; tanklı mürekkep ile düşük maliyet.",
    href: "/urunler/makinalar/masaustu-yazicilar/epson-l1300-a3",
    pills: ["Epson", "L1300", "A3", "Renk"],
    image: {
      src: "/images/urunler/makinalar/masaustu-yazici/epson-l1300-a3-murekkep-tankli-yazici-4-renk.jpg",
      alt: "Epson L1300 A3 mürekkep tanklı yazıcı (renk)",
    },
  },
  {
    title: "Epson L1800 A3 Mürekkep Tanklı Yazıcı (6 Renk)",
    desc: "6 renk fotoğraf kalitesi; A3 baskı desteğiyle profesyonel çıktı.",
    href: "/urunler/makinalar/masaustu-yazicilar/epson-l1800-a3-6-renk",
    pills: ["Epson", "L1800", "A3", "6 Renk"],
    image: {
      src: "/images/urunler/makinalar/masaustu-yazici/epson-l1800-a3-murekkep-tankli-yazici-6-renk.jpg",
      alt: "Epson L1800 A3 mürekkep tanklı yazıcı 6 renk",
    },
  },
  {
    title: "Epson L310 Color Tank Printer",
    desc: "Tanklı renkli yazıcı; ev/sofho için ekonomik ve hızlı çıktı.",
    href: "/urunler/makinalar/masaustu-yazicilar/epson-l310",
    pills: ["Epson", "L310", "Renkli", "Tanklı"],
    image: {
      src: "/images/urunler/makinalar/masaustu-yazici/epson-l310-color-tank-printer.jpg",
      alt: "Epson L310 color tank printer",
    },
  },
  {
    title: "Epson L565 Color Tank Printer Scan Copy Fax",
    desc: "Çok fonksiyonlu tanklı: yazdır + tara + kopyala + fax (ofis odaklı).",
    href: "/urunler/makinalar/masaustu-yazicilar/epson-l565",
    pills: ["Epson", "L565", "Scan/Copy", "Fax"],
    image: {
      src: "/images/urunler/makinalar/masaustu-yazici/epson-l565-color-tank-printer-scanner-copier-fax.jpg",
      alt: "Epson L565 color tank printer scan copy fax",
    },
  },
  {
    title: "Epson L655 Color Tank Printer Scan Copy Fax",
    desc: "Yoğun kullanım için tanklı çok fonksiyonlu yazıcı; iş akışını hızlandırır.",
    href: "/urunler/makinalar/masaustu-yazicilar/epson-l655",
    pills: ["Epson", "L655", "Scan/Copy", "Fax"],
    image: {
      src: "/images/urunler/makinalar/masaustu-yazici/epson-l655-color-tank-printer-scanner-copier-fax.jpg",
      alt: "Epson L655 color tank printer scan copy fax",
    },
  },
  {
    title: "Epson L805 Foto Tanklı Yazıcı (6 Renk)",
    desc: "Fotoğraf baskıları için 6 renk tanklı sistem; canlı ve detaylı çıktı.",
    href: "/urunler/makinalar/masaustu-yazicilar/epson-l805-6-renk",
    pills: ["Epson", "L805", "Foto", "6 Renk"],
    image: {
      src: "/images/urunler/makinalar/masaustu-yazici/epson-l805-foto-tankli-yazici-6-renk.jpg",
      alt: "Epson L805 foto tanklı yazıcı 6 renk",
    },
  },
  {
    title: "Epson L810 Foto Printer A4 (6 Renk)",
    desc: "A4 foto yazıcısı; 6 renk ile yüksek kalite fotoğraf baskı.",
    href: "/urunler/makinalar/masaustu-yazicilar/epson-l810-a4-6-renk",
    pills: ["Epson", "L810", "A4", "6 Renk"],
    image: {
      src: "/images/urunler/makinalar/masaustu-yazici/epson-l810-foto-printer-a4-6-renk.jpg",
      alt: "Epson L810 foto printer A4 6 renk",
    },
  },
  {
    title: "Epson L850 Yazıcı Fotokopi Tarayıcı Foto A4",
    desc: "A4 foto odaklı çok fonksiyon: yazdır + tara + kopyala.",
    href: "/urunler/makinalar/masaustu-yazicilar/epson-l850-a4",
    pills: ["Epson", "L850", "A4", "Foto"],
    image: {
      src: "/images/urunler/makinalar/masaustu-yazici/epson-l850-foto-yazici-tarayici-a4.jpg",
      alt: "Epson L850 yazıcı fotokopi tarayıcı foto A4",
    },
  },
];

export default function MasaustuYazicilarClient() {
  const [active, setActive] = useState<BrandKey>("all");

  const grouped = useMemo(() => {
    const buckets: Record<Exclude<BrandKey, "all">, Product[]> = {
      canon: [],
      epson: [],
    };

    PRODUCTS.forEach((p) => {
      const b = detectBrand(p.title);
      buckets[b].push(p);
    });

    return buckets;
  }, []);

  const visibleGroups = useMemo(() => {
    const allGroups = ([
      { key: "canon", items: grouped.canon },
      { key: "epson", items: grouped.epson },
    ] as const).filter((g) => g.items.length > 0);

    if (active === "all") return allGroups;
    return allGroups.filter((g) => g.key === active);
  }, [active, grouped]);

  const FILTERS: { key: BrandKey; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "canon", label: "Canon" },
    { key: "epson", label: "Epson" },
  ];

  return (
    <>
      {/* Hero */}
      <div className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white px-6 py-6 sm:px-8">
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Alt Kategori
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Masaüstü Yazıcılar
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            Canon ve Epson masaüstü yazıcı modellerini inceleyin. Tanklı mürekkep,
            foto baskı (6 renk), A4/A3 ve çok fonksiyon (tara/kopya/fax) ihtiyaçlarınıza
            göre hızlıca uygun modeli seçin.
          </p>

          <div className="mt-6 h-px w-full bg-slate-100" />

          {/* Quick actions */}
          <div className="mt-5 flex flex-wrap gap-3">
            {/* Hızlı Destek / Teklif Al = Telefon arama */}
            <a
              href={CONTACT.tel}
              className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Hızlı Destek / Teklif Al
            </a>

            {/* WhatsApp */}
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
            >
              WhatsApp
            </a>

            {/* İletişim */}
            <Link
              href="/iletisim"
              className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              İletişim kanallarımız
            </Link>
          </div>

          {/* Filters */}
          <div className="mt-6">
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Ürünlerimiz
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {FILTERS.map((f) => {
                const isActive = active === f.key;
                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setActive(f.key)}
                    className={
                      "rounded-md border px-4 py-2 text-sm font-medium transition " +
                      (isActive
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-white hover:border-slate-300")
                    }
                    aria-pressed={isActive}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Groups */}
      <div className="mt-10 space-y-10">
        {visibleGroups.map((g) => (
          <section key={g.key} className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">
                {brandLabel(g.key)}
              </h2>
              <span className="text-xs text-slate-500">{g.items.length} ürün</span>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {g.items.map((p) => (
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

                      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                        <span>Ürün detayı</span>
                      </div>
                    </div>

                    {/* SAĞ: görsel */}
                    <div className="relative hidden sm:block w-44 md:w-48 lg:w-56">
                      <div className="relative h-32 md:h-36 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                        <Image
                          src={p.image?.src ?? "/images/urunler/placeholder.webp"}
                          alt={p.image?.alt ?? p.title}
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
          </section>
        ))}

        {visibleGroups.length === 0 && (
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
            <p className="text-sm text-slate-600">
              Bu filtre için henüz ürün eklenmedi.
            </p>
            <button
              type="button"
              onClick={() => setActive("all")}
              className="mt-4 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Tümünü Göster
            </button>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Hangi modeli seçmelisiniz?
        </h3>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 leading-relaxed">
          A4/A3 ihtiyacınızı, foto baskı (6 renk) beklentinizi, WiFi/Fax gereksiniminizi
          ve aylık baskı miktarınızı paylaşın; size en uygun masaüstü yazıcıyı hızlıca önerelim.
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
