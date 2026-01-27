// src/app/urunler/bitmeyen-kartus/canon-icin-dolan-kartus/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: domain sabitle
const pagePath = "/urunler/bitmeyen-kartus/canon-icin-dolan-kartus";

type ChipType = "Manuel Reset Çip" | "Oto Reset Çip" | "—";
type InkType = "Lucia Pigment (1.Kalite)" | "Lucia Pigment + Dye (2.Kalite)" | "—";

type ProductItem = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  models: string;
  colors?: string; // bazıları belirtilmemiş
  chip: ChipType;
  ink: InkType;
  description: string;
};

const ITEMS: ProductItem[] = [
  {
    slug: "canon-w6200-6400-uyumlu-kolay-dolan-kartus",
    title: "W6200/6400 Uyumlu Kolay Dolan Kartuş",
    subtitle: "Dolum Seti",
    image:
      "/images/urunler/bitmeyen-kartus/canon-icin-dolan-kartus/canon-uyumlu-kolay-dolan-kartus.webp",
    models: "Canon W6200 / W6400",
    chip: "Oto Reset Çip",
    ink: "Lucia Pigment + Dye (2.Kalite)",
    description:
      "Canon W6200, W6400 cihazının orijinal kartuş modellerine alternatif olarak üretilmiştir. Papirink Lucia Pigment (1.Kalite) ve Dye (2.Kalite) uyumlu Mürekkepler ile baskılarınızda büyük kolaylık sağlayacaktır. Oto-Reset çiplere sahiptir. Kartuş bitince yerinden çıkarılıp takılarak çalışır.",
  },
  {
    slug: "canon-ipf9000s-uyumlu-kolay-dolan-kartus",
    title: "iPF9000S Uyumlu Kolay Dolan Kartuş",
    subtitle: "Dolum Seti",
    image:
      "/images/urunler/bitmeyen-kartus/canon-icin-dolan-kartus/canon-uyumlu-kolay-dolan-kartus.webp",
    models: "Canon iPF9000S",
    chip: "Oto Reset Çip",
    ink: "Lucia Pigment (1.Kalite)",
    description:
      "Canon 9000S plotter cihazının orijinal kartuş modellerine alternatif olarak üretilmiştir. Papirink Lucia Pigment (1.Kalite) uyumlu Mürekkepler ile baskılarınızda büyük kolaylık sağlayacaktır. Oto-Reset çiplere sahiptir. Kartuş bitince yerinden çıkarılıp takılarak çalışır.",
  },
  {
    slug: "canon-ipf8400s-ipf9400s-uyumlu-kolay-dolan-kartus",
    title: "iPF8400S, iPF9400S Uyumlu Kolay Dolan Kartuş",
    subtitle: "Dolum Seti",
    image:
      "/images/urunler/bitmeyen-kartus/canon-icin-dolan-kartus/canon-icin-uyumlu-kolay-dolan-kartus.webp",
    models: "Canon iPF8400S / iPF9400S",
    chip: "Manuel Reset Çip",
    ink: "Lucia Pigment (1.Kalite)",
    description:
      "Canon 8400S, 9400S plotter cihazının orijinal kartuş modellerine alternatif olarak üretilmiştir. Papirink Lucia Pigment (1.Kalite) uyumlu Mürekkepler ile baskılarınızda büyük kolaylık sağlayacaktır. Manuel-Reset çiplere sahiptir. Boş gösterir ancak yazdırmaya devam eder.",
  },
  {
    slug: "canon-ipf8300s-uyumlu-kolay-dolan-kartus",
    title: "iPF8300S Uyumlu Kolay Dolan Kartuş",
    subtitle: "Dolum Seti",
    image:
      "/images/urunler/bitmeyen-kartus/canon-icin-dolan-kartus/canon-icin-uyumlu-kolay-dolan-kartus.webp",
    models: "Canon iPF8300S",
    chip: "Manuel Reset Çip",
    ink: "Lucia Pigment (1.Kalite)",
    description:
      "Canon 8300S plotter cihazının orijinal kartuş modellerine alternatif olarak üretilmiştir. Papirink Lucia Pigment (1.Kalite) uyumlu Mürekkepler ile baskılarınızda büyük kolaylık sağlayacaktır. Manuel-Reset çiplere sahiptir. Boş gösterir ancak yazdırmaya devam eder.",
  },
  {
    slug: "canon-ipf8000s-uyumlu-kolay-dolan-kartus",
    title: "iPF8000S Uyumlu Kolay Dolan Kartuş",
    subtitle: "Dolum Seti",
    image:
      "/images/urunler/bitmeyen-kartus/canon-icin-dolan-kartus/canon-uyumlu-kolay-dolan-kartus.webp",
    models: "Canon iPF8000S",
    chip: "Manuel Reset Çip",
    ink: "Lucia Pigment (1.Kalite)",
    description:
      "Canon 8000S plotter cihazının orijinal kartuş modellerine alternatif olarak üretilmiştir. Papirink Lucia Pigment (1.Kalite) uyumlu Mürekkepler ile baskılarınızda büyük kolaylık sağlayacaktır. Manuel-Reset çiplere sahiptir. Boş gösterir ancak yazdırmaya devam eder.",
  },
  {
    slug: "canon-ipf510-610-650-655-710-750-755-uyumlu-kolay-dolan-kartus-5-renk",
    title: "iPF510/610/650/655/710/750/755 Uyumlu Kolay Dolan Kartuş - 5 Renk",
    subtitle: "Dolum Seti",
    image:
      "/images/urunler/bitmeyen-kartus/canon-icin-dolan-kartus/canon-uyumlu-kolay-dolan-kartus.webp",
    models: "Canon iPF510 / 610 / 650 / 655 / 710 / 750 / 755",
    colors: "5 Renk",
    chip: "Manuel Reset Çip",
    ink: "Lucia Pigment + Dye (2.Kalite)",
    description:
      "Canon 510/610/650/655/710/750/755 plotter cihazının orijinal kartuş modellerine alternatif olarak üretilmiştir. Papirink Lucia Pigment (1.Kalite) ve Dye (2.Kalite) uyumlu Mürekkepler ile baskılarınızda büyük kolaylık sağlayacaktır. Manuel-Reset çiplere sahiptir. Boş gösterir ancak yazdırmaya devam eder.",
  },
  {
    slug: "canon-ipf770-uyumlu-kolay-dolan-kartus",
    title: "iPF 770 Uyumlu Kolay Dolan Kartuş",
    subtitle: "Dolum Seti",
    image:
      "/images/urunler/bitmeyen-kartus/canon-icin-dolan-kartus/canon-icin-uyumlu-kolay-dolan-kartus.webp",
    models: "Canon iPF 770",
    chip: "—",
    ink: "Lucia Pigment (1.Kalite)",
    description:
      "Canon 770 plotter cihazının orijinal kartuş modellerine alternatif olarak üretilmiştir. Papirink Lucia Pigment (1.Kalite) uyumlu Mürekkepler ile baskılarınızda büyük kolaylık sağlayacaktır. Papirink Destek hattının vermiş olduğu talimat ile yapılan ayarlar sonucunda sürekli kullanım sağlanmaktadır.",
  },
];

export const metadata: Metadata = {
  title: "Canon İçin Dolan Kartuşlar | Papirink",
  description:
    "Canon plotter modelleri için kolay dolan kartuş ve dolum setleri: W6200/W6400, iPF9000S, iPF8400S/9400S, iPF8300S, iPF8000S, iPF510/610/650/655/710/750/755, iPF770. Fiyat için iletişime geçin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Canon İçin Dolan Kartuşlar | Papirink",
    description:
      "Canon plotter serileri için dolan kartuş çözümleri. Lucia Pigment ve Dye uyumlu seçenekler, çip tipine göre ürünler.",
    siteName: "Papirink",
    type: "website",
  },
};

function chipBadge(chip: ChipType) {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1";
  if (chip === "Oto Reset Çip") return `${base} bg-emerald-50 text-emerald-800 ring-emerald-200`;
  if (chip === "Manuel Reset Çip") return `${base} bg-slate-50 text-slate-800 ring-slate-200`;
  return `${base} bg-zinc-50 text-zinc-700 ring-zinc-200`;
}

function inkBadge(ink: InkType) {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1";
  if (ink === "Lucia Pigment (1.Kalite)") return `${base} bg-indigo-50 text-indigo-800 ring-indigo-200`;
  if (ink === "Lucia Pigment + Dye (2.Kalite)") return `${base} bg-sky-50 text-sky-800 ring-sky-200`;
  return `${base} bg-zinc-50 text-zinc-700 ring-zinc-200`;
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Canon İçin Dolan Kartuşlar",
    url: `${baseUrl}${pagePath}`,
    itemListElement: ITEMS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${baseUrl}${pagePath}#${p.slug}`,
      item: {
        "@type": "Product",
        name: p.title,
        brand: { "@type": "Brand", name: "Papirink" },
        image: [`${baseUrl}${p.image}`],
        description: p.description,
        category: "Dolan Kartuş / Dolum Seti",
      },
    })),
  };

  return (
    <>
      <Header />
      <ScrollToTopProgress />
<BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-6" />

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-4">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                Canon İçin Dolan Kartuşlar
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
                Canon plotter modelleri için dolan kartuş ve dolum setlerini tek sayfada inceleyin.
                Ürün kartlarında uyumlu model, mürekkep standardı ve çip tipi yer alır.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Fiyat Alınız
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* List */}
      <main className="mx-auto w-full max-w-6xl px-4 pb-12">
        <div className="space-y-5">
          {ITEMS.map((p) => (
            <article key={p.slug} id={p.slug} className="rounded-3xl border bg-white shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Sol: Görsel */}
                <div className="relative md:col-span-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-3xl bg-slate-50 md:rounded-l-3xl md:rounded-tr-none">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>

                {/* Orta: Bilgiler */}
                <div className="p-6 md:col-span-4 md:border-l">
                  <p className="text-sm font-semibold text-slate-600">{p.subtitle}</p>
                  <h2 className="mt-1 text-lg font-extrabold text-slate-900 md:text-xl">
                    {p.title}
                  </h2>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className={chipBadge(p.chip)}>{p.chip}</span>
                    <span className={inkBadge(p.ink)}>{p.ink}</span>
                    {p.colors ? (
                      <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 ring-1 ring-amber-200">
                        {p.colors}
                      </span>
                    ) : null}
                  </div>

                  <dl className="mt-5 space-y-2 text-sm">
                    <div className="flex gap-2">
                      <dt className="min-w-[110px] font-semibold text-slate-700">Uyumlu Model</dt>
                      <dd className="text-slate-600">{p.models}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="min-w-[110px] font-semibold text-slate-700">Marka</dt>
                      <dd className="text-slate-600">Papirink</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="min-w-[110px] font-semibold text-slate-700">Durum</dt>
                      <dd className="text-slate-600">Fiyat için iletişim</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                    <Link
                      href="/iletisim"
                      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                    >
                      Fiyat Alınız
                    </Link>
                  </div>
                </div>

                {/* Sağ: Açıklama */}
                <div className="p-6 md:col-span-4 md:border-l">
                  <h3 className="text-sm font-extrabold tracking-wide text-slate-900">
                    Ürün Açıklaması
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{p.description}</p>

                  <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-xs leading-5 text-slate-600 ring-1 ring-slate-200">
                    <p className="font-semibold text-slate-700">Not (kısa kullanım):</p>
                    <ul className="mt-2 list-disc pl-5">
                      <li>Uyumluluğu sipariş öncesi model kodu ile teyit edin.</li>
                      <li>Çip tipi ürün modeline göre değişebilir.</li>
                      <li>Teklif için “Fiyat Alınız” üzerinden iletişime geçin.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>

      <Footer />
    </>
  );
}
