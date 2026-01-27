// src/app/urunler/bitmeyen-kartus/page.tsx

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
const pagePath = "/urunler/bitmeyen-kartus";

export const metadata: Metadata = {
  title: "Bitmeyen Kartuş | Papirink",
  description:
    "Epson, HP ve Canon yazıcı/plotter modelleri için dolan (bitmeyen) kartuş ve dolum seti seçeneklerini inceleyin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Bitmeyen Kartuş | Papirink",
    description:
      "Uyumlu dolan kartuş çözümleri: Epson/HP/Canon için setler, renk seçenekleri ve hızlı teklif.",
  },
};

const CATS = [
  {
    id: "epson-icin-dolan-kartus",
    title: "Epson için Dolan Kartuş",
    desc: "Epson uyumlu dolan kartuş ve dolum setleri.",
    href: "/urunler/bitmeyen-kartus/epson-icin-dolan-kartus",
    pills: ["4900", "9700/7700", "7890/9890", "SCT", "WT"],
    images: [
      {
        src: "/images/urunler/bitmeyen-kartus/epson-icin-dolan-kartus/epson-4900-uyumlu-kolay-dolan-kartus-11-renk.webp",
        alt: "Epson 4900 uyumlu kolay dolan kartuş seti (11 renk)",
      },
      {
        src: "/images/urunler/bitmeyen-kartus/epson-icin-dolan-kartus/epson-9700-7700-uyumlu-kolay-dolan-kartus-5-renk.webp",
        alt: "Epson 9700 / 7700 uyumlu kolay dolan kartuş seti (5 renk)",
      },
      {
        src: "/images/urunler/bitmeyen-kartus/epson-icin-dolan-kartus/epson-sct3000-5000-7000-dolum-seti.webp",
        alt: "Epson SureColor T3000 / T5000 / T7000 uyumlu dolum seti",
      },
    ],
  },
  {
    id: "hp-icin-dolan-kartus",
    title: "HP için Dolan Kartuş",
    desc: "HP uyumlu dolan kartuş ve dolum setleri.",
    href: "/urunler/bitmeyen-kartus/hp-icin-dolan-kartus",
    pills: ["HP 10/82", "HP 70", "HP 72", "HP 82", "Set"],
    images: [
      {
        src: "/images/urunler/bitmeyen-kartus/hp-icin-dolan-kartus/hp-10-82-uyumlu-kolay-dolan-kartus-4-renk.webp",
        alt: "HP 10 / 82 uyumlu kolay dolan kartuş seti (4 renk)",
      },
      {
        src: "/images/urunler/bitmeyen-kartus/hp-icin-dolan-kartus/hp-70-z2100-medium-uyumlu-kolay-dolan-kartus-8-renk.webp",
        alt: "HP 70 Z2100 uyumlu kolay dolan kartuş seti (8 renk)",
      },
      {
        src: "/images/urunler/bitmeyen-kartus/hp-icin-dolan-kartus/hp-70-z3100-z3200-xxl-uyumlu-kolay-dolan-kartus-12-renk.webp",
        alt: "HP 70 Z3100 / Z3200 XXL uyumlu kolay dolan kartuş seti (12 renk)",
      },
    ],
  },
  {
    id: "canon-icin-dolan-kartus",
    title: "Canon için Dolan Kartuş",
    desc: "Canon uyumlu dolan kartuş ve dolum setleri.",
    href: "/urunler/bitmeyen-kartus/canon-icin-dolan-kartus",
    pills: ["SCT", "WT", "Set", "Uyumlu"],
    images: [
      {
        src: "/images/urunler/bitmeyen-kartus/canon-icin-dolan-kartus/canon-icin-uyumlu-kolay-dolan-kartus.webp",
        alt: "Uyumlu dolan kartuş seti (11 renk)",
      },
      {
        src: "/images/urunler/bitmeyen-kartus/canon-icin-dolan-kartus/canon-uyumlu-kolay-dolan-kartus.webp",
        alt: "Uyumlu dolan kartuş seti (5 renk)",
      },
    ],
  },
] as const;

export default function BitmeyenKartusPage() {
  return (
    <>
      <Header />

      <main className="bg-slate-50 text-slate-900 scroll-smooth">
        <section className="mx-auto max-w-7xl px-4 pt-4 pb-14 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
<BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-6" />

          {/* Hero */}
          <div className="mt-3 rounded-xl border border-slate-200 bg-white px-6 py-6 sm:px-8">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Bitmeyen Kartuş
            </h1>

            <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
              Epson, HP ve Canon modelleri için dolan (bitmeyen) kartuş ve dolum
              setleri. Alt kategori seçerek sayfa içinde ilgili bölüme hızlıca
              gidebilirsiniz.
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
