// src/app/urunler/bitmeyen-kartus/hp-icin-dolan-kartus/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";
import { CONTACT } from "../../../lib/contact";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: domain
const pagePath = "/urunler/bitmeyen-kartus/hp-icin-dolan-kartus";

type ChipType = "Manuel Reset Çip";

type ProductItem = {
  slug: string;
  title: string;
  image: string;
  models: string;
  colors: string;
  chip: ChipType;
  description: string;
};

const ITEMS: ProductItem[] = [
  {
    slug: "hp-82-500-510-xxl-uyumlu-kolay-dolan-kartus-4-renk",
    title: "HP 82 - 500 - 510 XXL Uyumlu Kolay Dolan Kartuş - 4 Renk",
    image:
      "/images/urunler/bitmeyen-kartus/hp-icin-dolan-kartus/hp-82-500-510-xxl-uyumlu-kolay-dolan-kartus-4-renk.webp",
    models: "HP Designjet 500 / 510",
    colors: "4 Renk",
    chip: "Manuel Reset Çip",
    description:
      "HP 82 plotter cihazlarının orijinal kartuş modellerine alternatif olarak üretilmiştir. Mürekkebiniz bittikçe dolum yapabilir ve baskılarınızda ekonomik boyutlara ulaşabilirsiniz. HP Designjet 500 - 510 cihazlarına uyumludur. Manuel-reset çiplere sahiptir. Resetleme gerektirmez.",
  },
  {
    slug: "hp-72-t-serisi-dolum-seti-6-renk-xxl",
    title: "HP 72 - T Serisi Dolum Seti 6 Renk XXL",
    image:
      "/images/urunler/bitmeyen-kartus/hp-icin-dolan-kartus/hp-72-t-serisi-dolum-seti-6-renk-xxl.webp",
    models:
      "HP T610, T620, T770, T790, T795, T1100, T1120, T1200, T1300, T2300",
    colors: "6 Renk",
    chip: "Manuel Reset Çip",
    description:
      "HP 72 plotter cihazlarının orijinal kartuş modellerine alternatif olarak üretilmiştir. Mürekkebiniz bittikçe dolum yapabilir ve baskılarınızda ekonomik boyutlara ulaşabilirsiniz. Belirtilen HP Designjet T serisi cihazlara uyumludur. Manuel-reset çiplere sahiptir.",
  },
  {
    slug: "hp-70-z3100-z3200-xxl-uyumlu-kolay-dolan-kartus-12-renk",
    title: "HP 70 - Z3100 / Z3200 XXL Uyumlu Kolay Dolan Kartuş (12 Renk)",
    image:
      "/images/urunler/bitmeyen-kartus/hp-icin-dolan-kartus/hp-70-z3100-z3200-xxl-uyumlu-kolay-dolan-kartus-12-renk.webp",
    models: "HP Z3100 / Z3200",
    colors: "12 Renk",
    chip: "Manuel Reset Çip",
    description:
      "HP 70 plotter cihazlarının orijinal kartuş modellerine alternatif olarak üretilmiştir. Mürekkebiniz bittikçe dolum yapabilir ve baskılarınızda ekonomik boyutlara ulaşabilirsiniz. HP Z3100 - Z3200 cihazlarına uyumludur. Manuel-reset çiplere sahiptir.",
  },
  {
    slug: "hp-70-z2100-medium-uyumlu-kolay-dolan-kartus-8-renk",
    title: "HP 70 - Z2100 Medium Uyumlu Kolay Dolan Kartuş - 8 Renk",
    image:
      "/images/urunler/bitmeyen-kartus/hp-icin-dolan-kartus/hp-70-z2100-medium-uyumlu-kolay-dolan-kartus-8-renk.webp",
    models: "HP Z2100 / Z5400",
    colors: "8 Renk",
    chip: "Manuel Reset Çip",
    description:
      "HP 70 plotter cihazlarının orijinal kartuş modellerine alternatif olarak üretilmiştir. Mürekkebiniz bittikçe dolum yapabilir ve baskılarınızda ekonomik boyutlara ulaşabilirsiniz. HP Z2100, Z5400 cihazlarına uyumludur. Manuel-reset çiplere sahiptir.",
  },
  {
    slug: "hp-10-82-uyumlu-kolay-dolan-kartus-4-renk",
    title: "HP 10 - 82 Uyumlu Kolay Dolan Kartuş - 4 Renk",
    image:
      "/images/urunler/bitmeyen-kartus/hp-icin-dolan-kartus/hp-10-82-uyumlu-kolay-dolan-kartus-4-renk.webp",
    models: "HP Designjet 500 / 800 / 815 / 820",
    colors: "4 Renk",
    chip: "Manuel Reset Çip",
    description:
      "HP 10 - 82 plotter cihazlarının orijinal kartuş modellerine alternatif olarak üretilmiştir. Mürekkebiniz bittikçe dolum yapabilir ve baskılarınızda ekonomik boyutlara ulaşabilirsiniz. HP Designjet 500 - 800 - 815 - 820 cihazlarına uyumludur. Manuel-reset çiplere sahiptir. Resetleme gerektirmez.",
  },
];

export const metadata: Metadata = {
  title: "HP İçin Dolan Kartuşlar | Papirink",
  description:
    "HP plotter modelleri için kolay dolan kartuş ve dolum setleri. HP 70, 72, 82, Z ve T serileri ile uyumlu çözümler.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

export default function Page() {
  return (
    <>
      <Header />
      <ScrollToTopProgress />

<BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-6" />

      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-4">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
          HP İçin Dolan Kartuşlar
        </h1>
        <p className="mt-2 max-w-3xl text-slate-600">
          HP plotter modelleri için uyumlu dolan kartuş ve dolum setlerini tek
          sayfada inceleyin. Fiyat bilgisi için bizimle iletişime geçin.
        </p>
      </section>

      <main className="mx-auto w-full max-w-6xl px-4 pb-12 space-y-6">
        {ITEMS.map((p) => (
          <article
            key={p.slug}
            id={p.slug}
            className="rounded-3xl border bg-white shadow-sm grid md:grid-cols-12"
          >
            {/* Görsel */}
            <div className="relative md:col-span-4 aspect-[4/3] bg-slate-50 rounded-l-3xl">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-contain p-6"
              />
            </div>

            {/* Bilgiler */}
            <div className="p-6 md:col-span-4 border-l">
              <h2 className="text-lg font-bold text-slate-900">{p.title}</h2>
              <p className="mt-2 text-sm text-slate-600">
                <strong>Uyumlu Modeller:</strong> {p.models}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                <strong>Renk:</strong> {p.colors}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                <strong>Çip:</strong> {p.chip}
              </p>

              <Link
                href="/iletisim"
                className="mt-4 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              >
                Fiyat Alınız
              </Link>
            </div>

            {/* Açıklama */}
            <div className="p-6 md:col-span-4 border-l">
              <h3 className="font-semibold text-slate-900 text-sm">
                Ürün Açıklaması
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">
                {p.description}
              </p>
            </div>
          </article>
        ))}
      </main>

      <Footer />
    </>
  );
}
