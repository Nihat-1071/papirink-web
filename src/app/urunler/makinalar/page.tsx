// src/app/urunler/makinalar/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTopProgress from "../../components/ScrollToTopProgress";
import CategoryImagePair from "../../components/CategoryImagePair";
import { CONTACT } from "../../lib/contact";
export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/makinalar";

export const metadata: Metadata = {
  title: "Makinalar | Papirink",
  description:
    "Plotter, masaüstü yazıcı, tarayıcı, katlama makinası, UV ve etiket makinaları kategorilerinde ürünleri inceleyin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Makinalar | Papirink",
    description:
      "Plotter ekosistemi için makina çözümleri: plotter, masaüstü yazıcı, tarayıcı, katlama, UV ve etiket makinaları.",
  },
};

const CATS = [
  {
    id: "plotter",
    title: "Plotter",
    desc: "Büyük format çizici/yazıcı çözümleri.",
    href: "/urunler/makinalar/plotter",
    pills: ["Canon", "HP", "Epson", "44 inç", "36 inç"],
  images: [
    {
      src: "/images/urunler/makinalar/plotter/canon-pro-4000-plotter-cizici.jpg",
      alt: "Canon Pro 4000 büyük format plotter çizici",
    },
    {
      src: "/images/urunler/makinalar/plotter/hp-designjet-t1700-44-inc-plotter-cizici.jpg",
      alt: "HP DesignJet T1700 44 inç teknik çizim plotter makinası",
    },
    {
      src: "/images/urunler/makinalar/plotter/epson-surecolor-sc-b6000-44-inc.jpg",
      alt: "Epson SureColor SC-B6000 44 inç profesyonel plotter",
    },
  ],
  },
  {
    id: "fotokopi-makinasi",
    title: "Fotokopi Makinası",
    desc: "Tanklı ve foto yazıcı seçenekleri.",
    href: "/urunler/makinalar/fotokopi-makinasi",
    pills: ["Canon", "Epson", "Tanklı", "A3", "Foto"],
    images: [
      {
        src: "/images/urunler/makinalar/masaustu-yazici/canon-pixma-g3400-ink-fotograf-tarayici-wifi-tankli.jpg",
        alt: "Canon Pixma G3400 WiFi tanklı masaüstü yazıcı",
      },
      {
        src: "/images/urunler/makinalar/masaustu-yazici/epson-l1300-a3-murekkep-tankli-yazici-4-renk.jpg",
        alt: "Epson L1300 A3 mürekkep tanklı masaüstü yazıcı",
      },
      {
        src: "/images/urunler/makinalar/masaustu-yazici/epson-l805-foto-tankli-yazici-6-renk.jpg",
        alt: "Epson L805 6 renk foto tanklı masaüstü yazıcı",
      },
    ],
  },
  {
    id: "tarayici",
    title: "Tarayıcı",
    desc: "A0/A1 tarayıcı ve geniş format scanner çözümleri.",
    href: "/urunler/makinalar/tarayici",
    pills: ["A0", "36 inç", "600dpi", "1200dpi"],
    images: [
      {
        src: "/images/urunler/makinalar/tarayici/graphtec-csx530-600dpi-a0-tarayici-36-inc.jpg",
        alt: "Graphtec CS530 600 DPI A0 geniş format tarayıcı",
      },
      {
        src: "/images/urunler/makinalar/tarayici/graphtec-csx550-1200dpi-a0-tarayici-36-inc.jpg",
        alt: "Graphtec CS550 1200 DPI A0 profesyonel tarayıcı",
      },
      {
        src: "/images/urunler/makinalar/tarayici/colortrac-smartlf-sci-42.jpg",
        alt: "A0 teknik çizim için yüksek çözünürlüklü geniş format tarayıcı",
      },
    ],
  },
  {
    id: "katlama-makinasi",
    title: "Katlama Makinası",
    desc: "Teknik çizim katlama sistemleri ve çözümleri.",
    href: "/urunler/makinalar/katlama-makinasi",
    pills: ["Foldjet", "ROWE", "2. El"],
    images: [
      {
        src: "/images/urunler/makinalar/katlama-makinasi/foldjet-2000-katlama-makinasi.jpg",
        alt: "Foldjet 2000 teknik çizim katlama makinası",
      },
      {
        src: "/images/urunler/makinalar/katlama-makinasi/foldjet-2000-katlama-makinasi-2-el.jpg",
        alt: "Foldjet 2000 ikinci el katlama makinası",
      },
      {
        src: "/images/urunler/makinalar/katlama-makinasi/rowe-katlama-makinasi.jpg",
        alt: "ROWE profesyonel teknik çizim katlama makinası",
      },
    ],
  },
  {
    id: "uv",
    title: "UV",
    desc: "UV baskı makinaları (Papjet serisi).",
    href: "/urunler/makinalar/uv",
    pills: ["Papjet", "60x90", "75x90", "110x150"],
    images: [
      {
        src: "/images/urunler/makinalar/uv/papjet-pj-1-60x90-uv.jpg",
        alt: "Papjet PJ-1 60x90 UV baskı makinası",
      },
      {
        src: "/images/urunler/makinalar/uv/papjet-pj-2-75x90-uv.jpg",
        alt: "Papjet PJ-2 75x90 profesyonel UV baskı makinası",
      },
      {
        src: "/images/urunler/makinalar/uv/papjet-pj-3-110x150-uv.jpg",
        alt: "Papjet PJ-3 110x150 endüstriyel UV baskı makinası",
      },
    ],
  },
  {
    id: "etiket-makinalari",
    title: "Etiket Makinaları",
    desc: "Etiket baskı makinaları ve sistemleri.",
    href: "/urunler/makinalar/etiket-makinalari",
    pills: ["Papjet", "Etiket", "Kesim"],
    images: [
      {
        src: "/images/urunler/makinalar/etiket-makinalari/papjet-pj33x48-etiket-makinasi.jpg",
        alt: "Papjet PJ 33x48 etiket baskı makinası",
      },
    ],
  },
] as const;

export default function MakinalarPage() {
  return (
    <>
      <Header />

      <main className="bg-slate-50 text-slate-900 scroll-smooth">
        <section className="mx-auto max-w-7xl px-4 pt-4 pb-14 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Ürünler", href: "/urunler" },
              { label: "Makinalar" },
            ]}
          />

          {/* Hero */}
          <div
            id="top"
            className="mt-3 rounded-xl border border-slate-200 bg-white px-6 py-6 sm:px-8"
          >
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Makinalar
            </h1>

            <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
              Plotter ekosistemi için profesyonel makina çözümleri: plotter,
              masaüstü yazıcı, tarayıcı, katlama, UV ve etiket makinaları. Alt
              kategori seçerek sayfa içinde ilgili bölüme hızlıca
              gidebilirsiniz.
            </p>

          {/* Quick actions */}
          <div className="mt-5 flex flex-wrap gap-3">
            {/* Hemen Ara */}
            <a
              href={CONTACT.tel}
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Hemen Ara
            </a>

            {/* WhatsApp */}
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              WhatsApp
            </a>

            {/* İletişim */}
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              İletişim
            </Link>
          </div>

          </div>

          {/* 🔒 Sticky Alt Kategoriler Bar */}
          <div className="sticky top-[72px] z-40 mt-3">
            <div className="rounded-xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2 px-4 py-3">
                <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Alt Kategoriler
                </span>

                <div className="flex flex-1 items-center gap-2 overflow-x-auto whitespace-nowrap [-webkit-overflow-scrolling:touch]">
                  {CATS.map((c) => (
                    <Link
                      key={c.id}
                      href={`#${c.id}`}
                      className="shrink-0 rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white"
                      aria-label={`${c.title} bölümüne git`}
                      title={`${c.title} bölümüne git`}
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Sayfa içi bölümler */}
          <div className="mt-8 space-y-6">
            {CATS.map((c) => (
              <section
                key={c.id}
                id={c.id}
                className="scroll-mt-[140px] rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_1.3fr]">
                  {/* SOL: Başlık + buton aynı satır / açıklama / pills */}
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h2 className="text-xl font-semibold text-slate-900">
                          {c.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          {c.desc}
                        </p>
                      </div>

                      <Link
                        href={c.href}
                        className="shrink-0 inline-flex rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        Kategoriye Git →
                      </Link>
                    </div>

                    {/* Pills başlığı */}
                    <div className="mt-4">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {c.title} Ürünlerimiz
                      </div>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {c.pills.map((p) => (
                          <span
                            key={p}
                            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* SAĞ: Fotoğraflar en sağda (boşsa gizle) */}
                {c.images.length > 0 ? (
                  <div className="self-start lg:-mt-1">
                    <CategoryImagePair images={c.images} />
                  </div>
                ) : (
                  <div className="hidden lg:block" />
                )}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      <ScrollToTopProgress />
      <Footer />
    </>
  );
}
