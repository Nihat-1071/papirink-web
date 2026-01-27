// src/app/urunler/bitmeyen-kartus/epson-icin-dolan-kartus/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";
import { CONTACT } from "../../../lib/contact";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: domain sabitle
const pagePath = "/urunler/bitmeyen-kartus/epson-icin-dolan-kartus";

type ChipType = "Manuel Reset Çip" | "Oto Reset Çip" | "One Time Çip";

type ProductItem = {
  slug: string;
  title: string;
  subtitle: string; // kısa kategori / seri
  image: string;
  models: string; // uyumlu model(ler)
  colors: string; // kaç renk
  chip: ChipType;
  ink: "HDR" | "K3";
  description: string;
};

const ITEMS: ProductItem[] = [
  {
    slug: "epson-4900-uyumlu-kolay-dolan-kartus-11-renk",
    title: "Epson 4900 Uyumlu Kolay Dolan Kartuş - 11 Renk",
    subtitle: "Epson Dolum Seti",
    image:
      "/images/urunler/bitmeyen-kartus/epson-icin-dolan-kartus/epson-4900-uyumlu-kolay-dolan-kartus-11-renk.webp",
    models: "Epson 4900",
    colors: "11 Renk",
    chip: "Manuel Reset Çip",
    ink: "HDR",
    description:
      "Epson 4900 plotter cihazının orijinal kartuş modellerine alternatif olarak üretilmiştir. Papirink HDR uyumlu Mürekkepler ile baskılarınızda büyük kolaylık sağlayacaktır. Manuel - reset çip sistemi ile resetlenerek çalıştırılır.",
  },
  {
    slug: "epson-9700-7700-uyumlu-kolay-dolan-kartus-5-renk",
    title: "Epson 9700 - 7700 Uyumlu Kolay Dolan Kartuş - 5 Renk",
    subtitle: "Dolum Seti",
    image:
      "/images/urunler/bitmeyen-kartus/epson-icin-dolan-kartus/epson-9700-7700-uyumlu-kolay-dolan-kartus-5-renk.webp",
    models: "Epson 9700 / 7700",
    colors: "5 Renk",
    chip: "Manuel Reset Çip",
    ink: "HDR",
    description:
      "Epson 9700 - 7700 plotter cihazının orijinal kartuş modellerine alternatif olarak üretilmiştir. Papirink HDR uyumlu Mürekkepler ile baskılarınızda büyük kolaylık sağlayacaktır. Manuel - reset çip sistemi ile resetlenerek çalıştırılır.",
  },
  {
    slug: "epson-9890-7890-uyumlu-kolay-dolan-kartus-9-renk",
    title: "Epson 9890/7890 Uyumlu Kolay Dolan Kartuş 9 Renk",
    subtitle: "Dolum Seti",
    image:
      "/images/urunler/bitmeyen-kartus/epson-icin-dolan-kartus/epson-9890-7890-uyumlu-kolay-dolan-kartus-9-renk.webp",
    models: "Epson 9890 / 7890",
    colors: "9 Renk",
    chip: "Manuel Reset Çip",
    ink: "K3",
    description:
      "Epson 9890 - 7890 plotter cihazının orijinal kartuş modellerine alternatif olarak üretilmiştir. Papirink K3 uyumlu Mürekkepler ile baskılarınızda büyük kolaylık sağlayacaktır. Manuel - reset çip sistemi ile resetlenerek çalıştırılır.",
  },
  {
    slug: "epson-sct3000-5000-7000-dolum-seti",
    title: "Epson SCT3000, 5000,7000 Dolum Seti",
    subtitle: "Dolum Seti",
    image:
      "/images/urunler/bitmeyen-kartus/epson-icin-dolan-kartus/epson-sct3000-5000-7000-dolum-seti.webp",
    models: "Epson SCT 3000 / 5000 / 7000",
    colors: "—",
    chip: "Oto Reset Çip",
    ink: "HDR",
    description:
      "Epson SCT 3000, 5000, 7000 plotter cihazlarının orijinal kartuş modellerine alternatif olarak üretilmiştir. Papirink HDR uyumlu Mürekkepler ile baskılarınızda büyük kolaylık sağlayacaktır. Oto reset çip sistemine sahiptir.",
  },
  {
    slug: "epson-sct3200-5200-7200-dolum-seti",
    title: "Epson SCT3200, 5200,7200 Dolum Seti",
    subtitle: "Dolum Seti",
    image:
      "/images/urunler/bitmeyen-kartus/epson-icin-dolan-kartus/epson-sct3200-5200-7200-dolum-seti.webp",
    models: "Epson SCT 3200 / 5200 / 7200",
    colors: "—",
    chip: "One Time Çip",
    ink: "HDR",
    description:
      "Epson SCT 3200, 5200, 7200 plotter cihazlarının orijinal kartuş modellerine alternatif olarak üretilmiştir. Papirink HDR uyumlu Mürekkepler ile baskılarınızda büyük kolaylık sağlayacaktır. One time çip sistemine sahiptir.",
  },
  {
    slug: "epson-wt7900-uyumlu-kolay-dolan-kartus-10-renk",
    title: "Epson WT7900 Uyumlu Kolay Dolan Kartuş 10 Renk",
    subtitle: "Dolum Seti",
    image:
      "/images/urunler/bitmeyen-kartus/epson-icin-dolan-kartus/epson-wt7900-uyumlu-kolay-dolan-kartus-10-renk.webp",
    models: "Epson WT7900",
    colors: "10 Renk",
    chip: "Manuel Reset Çip",
    ink: "HDR",
    description:
      "Epson WT7900 plotter cihazının orijinal kartuş modellerine alternatif olarak üretilmiştir. Papirink HDR uyumlu Mürekkepler ile baskılarınızda büyük kolaylık sağlayacaktır. Manuel - reset çip sistemi ile resetlenerek çalıştırılır.",
  },
];

export const metadata: Metadata = {
  title: "Epson İçin Dolan Kartuşlar | Papirink",
  description:
    "Epson plotter modelleri için kolay dolan kartuş ve dolum setleri: 4900, 7700/9700, 7890/9890, SCT3000/5000/7000, SCT3200/5200/7200, WT7900. Fiyat için iletişime geçin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Epson İçin Dolan Kartuşlar | Papirink",
    description:
      "Epson plotter modelleri için dolan kartuş ve dolum setleri. Uyumlu model, renk sayısı ve çip tipine göre seçenekler.",
    siteName: "Papirink",
    type: "website",
  },
};

function chipBadge(chip: ChipType) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1";
  if (chip === "Oto Reset Çip")
    return `${base} bg-emerald-50 text-emerald-800 ring-emerald-200`;
  if (chip === "One Time Çip")
    return `${base} bg-amber-50 text-amber-900 ring-amber-200`;
  return `${base} bg-slate-50 text-slate-800 ring-slate-200`;
}

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Epson İçin Dolan Kartuşlar",
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

      {/* HERO */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-6 pt-4">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                Epson İçin Dolan Kartuşlar
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
                Epson plotter modelleri için dolan kartuş ve dolum setlerini tek
                sayfada görüntüleyin. Her ürün kartında uyumluluk, renk sayısı,
                mürekkep standardı ve çip tipi yer alır.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* LIST */}
      <main className="mx-auto w-full max-w-6xl px-4 pb-12">
        <div className="space-y-5">
          {ITEMS.map((p) => (
            <article
              key={p.slug}
              id={p.slug}
              className="rounded-3xl border bg-white shadow-sm"
            >
              <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
                {/* Sol: Görsel */}
                <div className="relative md:col-span-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-3xl bg-slate-50 md:rounded-l-3xl md:rounded-tr-none">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={false}
                    />
                  </div>
                </div>

                {/* Orta: Bilgiler */}
                <div className="p-6 md:col-span-4 md:border-l">
                  <p className="text-sm font-semibold text-slate-600">
                    {p.subtitle}
                  </p>
                  <h2 className="mt-1 text-lg font-extrabold text-slate-900 md:text-xl">
                    {p.title}
                  </h2>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className={chipBadge(p.chip)}>{p.chip}</span>
                    <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-800 ring-1 ring-indigo-200">
                      Mürekkep: {p.ink}
                    </span>
                    {p.colors !== "—" && (
                      <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800 ring-1 ring-sky-200">
                        {p.colors}
                      </span>
                    )}
                  </div>

                  <dl className="mt-5 space-y-2 text-sm">
                    <div className="flex gap-2">
                      <dt className="min-w-[110px] font-semibold text-slate-700">
                        Uyumlu Model
                      </dt>
                      <dd className="text-slate-600">{p.models}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="min-w-[110px] font-semibold text-slate-700">
                        Marka
                      </dt>
                      <dd className="text-slate-600">Papirink</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="min-w-[110px] font-semibold text-slate-700">
                        Durum
                      </dt>
                      <dd className="text-slate-600">Fiyat için iletişim</dd>
                    </div>
                  </dl>
                </div>

                {/* Sağ: Açıklama */}
                <div className="p-6 md:col-span-4 md:border-l">
                  <h3 className="text-sm font-extrabold tracking-wide text-slate-900">
                    Ürün Açıklaması
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {p.description}
                  </p>

                  <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-xs leading-5 text-slate-600 ring-1 ring-slate-200">
                    <p className="font-semibold text-slate-700">
                      Not (kısa kullanım):
                    </p>
                    <ul className="mt-2 list-disc pl-5">
                      <li>Uyumluluğu sipariş öncesi model kodu ile teyit edin.</li>
                      <li>
                        Çip tipi: {p.chip} — kullanım şekline göre değişebilir.
                      </li>
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
