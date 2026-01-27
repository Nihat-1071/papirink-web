// src/app/urunler/sarf-malzeme/page.tsx

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
const pagePath = "/urunler/sarf-malzeme";

export const metadata: Metadata = {
  title: "Sarf Malzeme | Papirink",
  description:
    "Plotter ve baskı sistemleri için sarf malzemeleri: baskı kafası, bakım kiti/kartuşu, çip, drum & bıçak ve toner seçenekleri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Sarf Malzeme | Papirink",
    description:
      "Baskı kafası, bakım kiti, çip, drum-bıçak ve toner: plotter/baskı sistemleri için sarf malzeme çözümleri.",
  },
};

const CATS = [
  {
    id: "baski-kafasi",
    title: "Baskı Kafası",
    desc: "HP, Canon ve diğer sistemler için baskı kafası seçenekleri.",
    href: "/urunler/sarf-malzeme/baski-kafasi",
    pills: ["HP 70", "HP 72", "HP 771", "Canon", "Latex"],
    images: [
      {
        src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-70-c9404a-mat-siyah-ve-mavi-baski-kafasi.webp",
        alt: "HP 70 C9404A mat siyah ve mavi baskı kafası",
      },
      {
        src: "/images/urunler/sarf-malzemeleri/baski-kafasi/canon-pf-05-printhead-baski-kafasi.webp",
        alt: "Canon PF-05 printhead baskı kafası",
      },
      {
        src: "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-771-ce020a-orjinal-foto-siyah-acik-gri-baski-kafasi.webp",
        alt: "HP 771 CE020A orijinal foto siyah ve açık gri baskı kafası",
      },
    ],
  },
  {
    id: "bakim-kiti-kartusu",
    title: "Bakım Kiti / Kartuşu",
    desc: "Atık tank kutusu ve bakım kiti/kartuşu seçenekleri.",
    href: "/urunler/sarf-malzeme/bakim-kiti-kartusu",
    pills: ["Atık Tank", "Maintenance Kit", "Lateks", "Uyumlu"],
    images: [
      {
        src: "/images/urunler/sarf-malzemeleri/bakim-kiti-kartusu/epson-t3200-t5200-t7200-uyumlu-atik-tank-kutusu.webp",
        alt: "Epson T3200 / T5200 / T7200 uyumlu atık tank kutusu",
      },
      {
        src: "/images/urunler/sarf-malzemeleri/bakim-kiti-kartusu/hp-771-ch644a-bakim-kiti-maintenance-kit.webp",
        alt: "HP 771 CH644A bakım kiti (maintenance kit)",
      },
      {
        src: "/images/urunler/sarf-malzemeleri/bakim-kiti-kartusu/hp-831-lateks-bakim-kartusu.webp",
        alt: "HP 831 lateks bakım kartuşu",
      },
    ],
  },
  {
    id: "cipler",
    title: "Çipler",
    desc: "Kartuş ve sarf sistemleri için çip çözümleri.",
    href: "/urunler/sarf-malzeme/cipler",
    pills: ["Çip", "Uyumlu", "Sarf"],
    images: [
      {
        src: "/images/urunler/sarf-malzemeleri/cipler/epson-cip.webp",
        alt: "Epson uyumlu çip",
      },
    ],
  },
  {
    id: "drum-bicak",
    title: "Drum & Bıçak",
    desc: "OCE ve benzeri sistemler için drum ve bıçak çözümleri.",
    href: "/urunler/sarf-malzeme/drum-bicak",
    pills: ["OCE", "Drum", "Bıçak", "Developer"],
    images: [
      {
        src: "/images/urunler/sarf-malzemeleri/drum-bicak/oce-uyumlu-drum.webp",
        alt: "OCE uyumlu drum",
      },
      {
        src: "/images/urunler/sarf-malzemeleri/drum-bicak/oce-uyumlu-bicak-blade.webp",
        alt: "OCE uyumlu bıçak (blade)",
      },
      {
        src: "/images/urunler/sarf-malzemeleri/drum-bicak/oce-d5-orjinal-developer.webp",
        alt: "OCE D5 orijinal developer",
      },
    ],
  },
  {
    id: "toner",
    title: "Toner",
    desc: "OCE sistemleri için orijinal ve muadil toner seçenekleri.",
    href: "/urunler/sarf-malzeme/toner",
    pills: ["OCE", "Orijinal", "Muadil", "Toner"],
    images: [
      {
        src: "/images/urunler/sarf-malzemeleri/toner/oce-f3-f11-orijinal-toner.webp",
        alt: "OCE F3 / F11 orijinal toner",
      },
      {
        src: "/images/urunler/sarf-malzemeleri/toner/oce-b4-b5-muadil-toner.webp",
        alt: "OCE B4 / B5 muadil toner",
      },
      {
        src: "/images/urunler/sarf-malzemeleri/toner/oce-plotwave-muadil-toner.webp",
        alt: "OCE PlotWave muadil toner",
      },
    ],
  },
] as const;

export default function SarfMalzemePage() {
  return (
    <>
      <Header />

      <main className="bg-slate-50 text-slate-900 scroll-smooth">
        <section className="mx-auto max-w-7xl px-4 pt-4 pb-14 sm:px-6 lg:px-8">
        <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-6" />

          {/* Hero */}
          <div className="mt-3 rounded-xl border border-slate-200 bg-white px-6 py-6 sm:px-8">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Sarf Malzeme
            </h1>

            <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">
              Plotter ve baskı sistemleri için sarf malzemeleri: baskı kafası,
              bakım kiti/kartuşu, çip, drum & bıçak ve toner. Alt kategori
              seçerek sayfa içinde ilgili bölüme hızlıca gidebilirsiniz.
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
