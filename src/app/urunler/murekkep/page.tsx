// src/app/urunler/murekkep/page.tsx

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
const pagePath = "/urunler/murekkep";

export const metadata: Metadata = {
  title: "Mürekkep | Papirink",
  description:
    "Canon, Epson ve HP uyumlu mürekkep seçeneklerini inceleyin: masaüstü yazıcı serileri ve plotter mürekkepleri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Mürekkep | Papirink",
    description:
      "Canon/Epson/HP uyumlu mürekkepler: dye/pigment, 500 gr – 1000 gr seçenekleri ve hızlı teklif.",
  },
};

const CATS = [
  {
    id: "canon-uyumlu-murekkep",
    title: "Canon Uyumlu Mürekkep",
    desc: "Canon uyumlu masaüstü yazıcı ve plotter mürekkebi seçenekleri.",
    href: "/urunler/murekkep/canon-uyumlu-murekkep",
    pills: ["Dye", "Pigment", "1000 gr", "CMYK", "Plotter"],
    images: [
      {
        src: "/images/urunler/murekkep/canon-uyumlu-murekkep/papirink-cyan-canon-uyumlu-plotter-murekkebi-1000-gr-pigment.webp",
        alt: "Canon uyumlu plotter mürekkebi 1000 gr pigment (Cyan)",
      },
      {
        src: "/images/urunler/murekkep/canon-uyumlu-murekkep/papirink-matte-black-canon-uyumlu-plotter-murekkebi-1000-gr-pigment.webp",
        alt: "Canon uyumlu plotter mürekkebi 1000 gr pigment (Matte Black)",
      },
      {
        src: "/images/urunler/murekkep/canon-uyumlu-murekkep/papirink-yellow-canon-uyumlu-plotter-murekkebi-1000-gr-dye.webp",
        alt: "Canon uyumlu plotter mürekkebi 1000 gr dye (Yellow)",
      },
    ],
  },
  {
    id: "epson-uyumlu-murekkep",
    title: "Epson Uyumlu Mürekkep",
    desc: "Epson uyumlu masaüstü yazıcı ve plotter mürekkebi seçenekleri.",
    href: "/urunler/murekkep/epson-uyumlu-murekkep",
    pills: ["500 gr", "Sublimasyon", "HDR", "K3", "CMYK"],
    images: [
      {
        src: "/images/urunler/murekkep/epson-uyumlu-murekkep/epson-cyan-masaustu-yazici-murekkebi-500-gr.webp",
        alt: "Epson uyumlu masaüstü yazıcı mürekkebi 500 gr (Cyan)",
      },
      {
        src: "/images/urunler/murekkep/epson-uyumlu-murekkep/epson-sublimasyon-murekkebi-500-gr.webp",
        alt: "Epson uyumlu sublimasyon mürekkebi 500 gr",
      },
      {
        src: "/images/urunler/murekkep/epson-uyumlu-murekkep/papirink-epson-hdr-uyumlu-plotter-murekkebi-500-gr.webp",
        alt: "Epson HDR uyumlu plotter mürekkebi 500 gr",
      },
    ],
  },
  {
    id: "hp-uyumlu-murekkep",
    title: "HP Uyumlu Mürekkep",
    desc: "HP uyumlu PageWide ve plotter mürekkebi seçenekleri.",
    href: "/urunler/murekkep/hp-uyumlu-murekkep",
    pills: ["PageWide", "Pigment", "Dye", "500 gr", "Plotter"],
    images: [
      {
        src: "/images/urunler/murekkep/hp-uyumlu-murekkep/papirink-cyan-hp-uyumlu-plotter-murekkebi-pigment-500gr.webp",
        alt: "HP uyumlu plotter mürekkebi 500 gr pigment (Cyan)",
      },
      {
        src: "/images/urunler/murekkep/hp-uyumlu-murekkep/papirink-matte-black-hp-uyumlu-plotter-murekkebi-pigment-500gr.webp",
        alt: "HP uyumlu plotter mürekkebi 500 gr pigment (Matte Black)",
      },
      {
        src: "/images/urunler/murekkep/hp-uyumlu-murekkep/papirink-yellow-hp-pagewide-a4-yazici-serisi-murekkep.webp",
        alt: "HP PageWide A4 yazıcı serisi mürekkep (Yellow)",
      },
    ],
  },
] as const;

export default function MurekkepPage() {
  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-6" />

      <main className="bg-slate-50 text-slate-900 scroll-smooth">
        <section className="mx-auto max-w-7xl px-4 pt-4 pb-14 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="mt-3 rounded-xl border border-slate-200 bg-white px-6 py-6 sm:px-8">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Mürekkep
            </h1>

            <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
              Canon, Epson ve HP uyumlu mürekkep çözümleri: masaüstü yazıcı
              serileri ve plotter mürekkepleri. Alt kategori seçerek sayfa
              içinde ilgili bölüme hızlıca gidebilirsiniz.
            </p>
          </div>

          {/* Sticky Alt Kategoriler Bar */}
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

          {/* Sayfa içi bölümler */}
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

                  {/* SAĞ */}
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
