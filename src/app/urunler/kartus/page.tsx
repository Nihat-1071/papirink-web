// src/app/urunler/kartus/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadcrumbAuto from "../../components/BreadcrumbAuto";
import ScrollToTopProgress from "../../components/ScrollToTopProgress";
import CategoryImagePair from "../../components/CategoryImagePair";
import { CONTACT } from "../../lib/contact";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus";

export const metadata: Metadata = {
  title: "Kartuş | Papirink",
  description:
    "HP, Canon ve Epson orijinal plotter kartuşları ile Papirink muadil kartuş seçeneklerini inceleyin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Kartuş | Papirink",
    description:
      "Plotter ve baskı sistemleri için kartuş çözümleri: HP, Canon, Epson orijinal kartuşlar ve muadil kartuş seçenekleri.",
  },
};

const CATS = [
  {
    id: "hp-orijinal-kartus",
    title: "HP Orijinal Kartuş",
    desc: "DesignJet serileri için orijinal kartuş seçenekleri.",
    href: "/urunler/kartus/hp-orijinal-kartus",
    pills: ["HP 70", "HP 711", "HP 727", "DesignJet", "300 ml"],
    images: [
      {
        src: "/images/urunler/kartus/hp-orjinal-kartus/hp-70-c9448a-mat-siyah-orjinal-kartus.jpg",
        alt: "HP 70 C9448A mat siyah orijinal kartuş",
      },
      {
        src: "/images/urunler/kartus/hp-orjinal-kartus/hp-711-cz133a-siyah-orjinal-kartus-80-ml-designjet-t120-t520.jpg",
        alt: "HP 711 CZ133A siyah orijinal kartuş 80 ml (DesignJet T120 / T520)",
      },
      {
        src: "/images/urunler/kartus/hp-orjinal-kartus/hp-727-c1q12a-mat-siyah-kartus-300-ml-t920-t1500-t2500.jpg",
        alt: "HP 727 C1Q12A mat siyah orijinal kartuş 300 ml (T920 / T1500 / T2500)",
      },
    ],
  },
  {
    id: "canon-orijinal-kartus",
    title: "Canon Orijinal Kartuş",
    desc: "Canon iPF/TM serileri için orijinal kartuş çözümleri.",
    href: "/urunler/kartus/canon-orijinal-kartus",
    pills: ["PFI-102", "PFI-320", "PFI-1700", "iPF", "TM Serisi"],
    images: [
      {
        src: "/images/urunler/kartus/canon-orijinal-kartus/canon-pfi-102bk-parlak-siyah-kartus-ipf500-ipf600.jpg",
        alt: "Canon PFI-102BK parlak siyah orijinal kartuş (iPF500 / iPF600)",
      },
      {
        src: "/images/urunler/kartus/canon-orijinal-kartus/canon-pfi-701-bk-siyah-orijinal-kartus.jpg",
        alt: "Canon PFI-320BK siyah orijinal kartuş (TM-200 / TM-205)",
      },
      {
        src: "/images/urunler/kartus/canon-orijinal-kartus/canon-pfi-1700mbk-0774c001-mat-siyah-orijinal-kartus.jpg",
        alt: "Canon PFI-1700MBK 0774C001 mat siyah orijinal kartuş",
      },
    ],
  },
  {
    id: "epson-orijinal-kartus",
    title: "Epson Orijinal Kartuş",
    desc: "SureColor serileri için Epson orijinal kartuş seçenekleri.",
    href: "/urunler/kartus/epson-orijinal-kartus",
    pills: ["T636", "T694", "T714", "SureColor", "Orijinal"],
    images: [
      {
        src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t6941-foto-siyah-orijinal-kartus-surecolor-t3000-t5000-t7000.jpg",
        alt: "Epson T6941 foto siyah orijinal kartuş (SureColor T3000 / T5000 / T7000)",
      },
      {
        src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t6942-mavi-orijinal-kartus-surecolor-t3000-t5000-t7000.jpg",
        alt: "Epson T6942 mavi orijinal kartuş (SureColor T3000 / T5000 / T7000)",
      },
      {
        src: "/images/urunler/kartus/epson-orijinal-kartus/epson-t6945-mat-siyah-orijinal-kartus-surecolor-t3000-t5000-t7000-t7200.jpg",
        alt: "Epson T6945 mat siyah orijinal kartuş (SureColor T3000 / T5000 / T7000 / T7200)",
      },
    ],
  },
  {
    id: "papirink-muadil-kartus",
    title: "Papirink Muadil Kartuş",
    desc: "Uyumlu muadil kartuş seçenekleri (HP serileri).",
    href: "/urunler/kartus/papirink-muadil-kartus",
    pills: ["HP 761", "HP 771", "HP 91", "Muadil", "Tüm Renkler"],
    images: [
      {
        src: "/images/urunler/kartus/papirink-muadil-kartus/hp-761-muadil-kartus-tum-renkler.jpg",
        alt: "HP 761 muadil kartuş tüm renkler",
      },
      {
        src: "/images/urunler/kartus/papirink-muadil-kartus/hp-771-muadil-kartus-tum-renkler.jpg",
        alt: "HP 771 muadil kartuş tüm renkler",
      },
      {
        src: "/images/urunler/kartus/papirink-muadil-kartus/hp-91-muadil-kartus-tum-renkler.jpg",
        alt: "HP 91 muadil kartuş tüm renkler",
      },
    ],
  },
] as const;

export default function KartusPage() {
  return (
    <>
      <Header />

      <main className="bg-slate-50 text-slate-900 scroll-smooth">
        <section className="mx-auto max-w-7xl px-4 pt-4 pb-14 sm:px-6 lg:px-8">
<BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-6" />

          {/* Hero */}
          <div
            id="top"
            className="mt-3 rounded-xl border border-slate-200 bg-white px-6 py-6 sm:px-8"
          >
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Kartuş
            </h1>

            <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
              Plotter ve baskı sistemleri için kartuş çözümleri: HP, Canon ve
              Epson orijinal kartuşlar ile muadil kartuş seçenekleri. Alt
              kategori seçerek sayfa içinde ilgili bölüme hızlıca
              gidebilirsiniz.
            </p>

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
                  {/* SOL */}
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

                  {/* SAĞ: Fotoğraflar */}
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
