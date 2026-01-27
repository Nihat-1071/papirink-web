// src/app/blog/plotter-kagidi-nedir/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BreadcrumbAuto from "../../components/BreadcrumbAuto";
import ScrollToTopProgress from "../../components/ScrollToTopProgress";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/blog/plotter-kagidi-nedir";

const title = "Plotter Kağıdı Nedir? Nerelerde Kullanılır? | Papirink Blog";
const description =
  "Plotter kağıdı nedir, kaç gram olmalı, CAD çizim, proje, afiş ve teknik baskılarda hangi plotter kağıdı tercih edilmelidir? 80 gr plotter kağıdı rehberi.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title,
    description,
    type: "article",
    siteName: "Papirink",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

function formatTR(iso: string) {
  const d = new Date(`${iso}T00:00:00.000Z`);
  return d.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export default function PlotterKagidiNedirPage() {
  const publishedISO = "2025-12-26";
  const updatedISO = "2025-12-26";

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Plotter Kağıdı Nedir?" },
  ];

  const faq = [
    {
      q: "Plotter kağıdı ile normal kağıt arasındaki fark nedir?",
      a: "Plotter kağıdı rulo formdadır ve geniş format baskılar için üretilir. Normal A4/A3 kağıtlara göre metre bazlı kullanılır ve çizim/baskı hassasiyeti daha yüksektir.",
    },
    {
      q: "80 gr plotter kağıdı nerelerde kullanılır?",
      a: "Mimari ve mühendislik çizimleri, keşif paftaları ve teknik projelerde en yaygın kullanılan plotter kağıdıdır.",
    },
    {
      q: "Daha kalın plotter kağıdı ne zaman tercih edilir?",
      a: "Sunum, afiş, poster veya dış etkenlere daha dayanıklı çıktı gereken durumlarda 90–120 gr ve üzeri kağıtlar tercih edilir.",
    },
    {
      q: "Her plotter kağıdı her plotterda kullanılabilir mi?",
      a: "Genellikle evet; ancak kağıt genişliği (inç), rulo çapı ve yazıcının desteklediği medya türleri kontrol edilmelidir.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: `${baseUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${baseUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Plotter Kağıdı Nedir?",
            item: `${baseUrl}${pagePath}`,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: "Plotter Kağıdı Nedir? Nerelerde Kullanılır?",
        description,
        datePublished: `${publishedISO}T00:00:00.000Z`,
        dateModified: `${updatedISO}T00:00:00.000Z`,
        mainEntityOfPage: `${baseUrl}${pagePath}`,
        author: { "@type": "Organization", name: "Papirink" },
        publisher: {
          "@type": "Organization",
          name: "Papirink",
          url: baseUrl,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((x) => ({
          "@type": "Question",
          name: x.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: x.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Header />
      <ScrollToTopProgress />

      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-6" />

          {/* HERO */}
          <section className="mt-5 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.55]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div className="relative grid gap-6 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700">
                    Kağıt Rehberi
                    <span className="h-1 w-1 rounded-full bg-neutral-400" />
                    {formatTR(publishedISO)}
                  </p>

                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    Plotter Kağıdı Nedir?
                  </h1>

                  <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-700">
                    Plotter kağıdı; mimari, mühendislik ve teknik çizimlerde kullanılan,
                    rulo formunda üretilen geniş format baskı kağıtlarıdır. En yaygın
                    türü 80 gr plotter kağıdıdır.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/urunler/kagit/plotter-kagitlari"
                      className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                    >
                      Plotter Kağıtları
                    </Link>
                    <Link
                      href="/iletisim"
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                    >
                      Kağıt Danış
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-sm">
                    <p className="text-sm font-semibold text-neutral-900">
                      Hızlı Bilgi
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                      <li>• Rulo formdadır</li>
                      <li>• Metre bazlı kullanılır</li>
                      <li>• 80 gr en yaygın türdür</li>
                      <li>• CAD & teknik çizimler</li>
                      <li>• Geniş format baskı</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTENT */}
          <article className="mt-10 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-semibold">Plotter Kağıdı Nedir?</h2>
                <p className="mt-3 leading-7 text-neutral-700">
                  Plotter kağıdı, geniş format yazıcılar (plotterlar) için özel olarak
                  üretilmiş rulo kağıtlardır. Mimarlık, mühendislik ve teknik ofislerde
                  çizimlerin net, ölçekli ve hatasız basılmasını sağlar.
                </p>

                <h2 className="mt-8 text-2xl font-semibold">80 gr Plotter Kağıdı Ne Demektir?</h2>
                <p className="mt-3 leading-7 text-neutral-700">
                  Gramaj (gr), kağıdın metrekare ağırlığını ifade eder. 80 gr plotter
                  kağıdı; hafif, ekonomik ve teknik çizimler için ideal bir seçenektir.
                  En çok tercih edilen plotter kağıdı türüdür.
                </p>

                <h2 className="mt-8 text-2xl font-semibold">Nerelerde Kullanılır?</h2>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-700">
                  <li>Mimari ve statik proje çizimleri</li>
                  <li>Makine ve elektrik projeleri</li>
                  <li>Harita ve pafta çıktıları</li>
                  <li>Keşif ve uygulama çizimleri</li>
                </ul>

                <h2 className="mt-8 text-2xl font-semibold">
                  Daha Kalın Plotter Kağıdı Ne Zaman Tercih Edilir?
                </h2>
                <p className="mt-3 leading-7 text-neutral-700">
                  Sunum, afiş veya duvara asılacak baskılarda 90 gr, 100 gr veya
                  coated kağıtlar tercih edilir. Bu kağıtlar daha dayanıklıdır ve
                  görsel kaliteyi artırır.
                </p>

                <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-sm font-semibold text-neutral-900">
                    İlgili Ürünler
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link
                      href="/urunler/kagit/plotter-kagitlari"
                      className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 shadow-sm hover:shadow"
                    >
                      Plotter Kağıtları
                    </Link>
                    <Link
                      href="/urunler/makinalar/plotter"
                      className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 shadow-sm hover:shadow"
                    >
                      Plotter Modelleri
                    </Link>
                  </div>
                </div>

                <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">Özet</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    Plotter kağıdı seçimi; baskı türü, kullanım amacı ve dayanıklılık
                    ihtiyacına göre yapılmalıdır. Teknik çizimler için 80 gr plotter
                    kağıdı çoğu zaman yeterlidir.
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-semibold">Sık Sorulan Sorular</h2>
                <div className="mt-4 space-y-4">
                  {faq.map((x) => (
                    <details
                      key={x.q}
                      className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                    >
                      <summary className="cursor-pointer select-none text-sm font-semibold text-neutral-900">
                        {x.q}
                      </summary>
                      <p className="mt-3 text-sm leading-6 text-neutral-700">
                        {x.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-neutral-900">
                    İlgili Kategoriler
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    <Link
                      href="/urunler/kagit/plotter-kagitlari"
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 shadow-sm hover:shadow"
                    >
                      Plotter Kağıtları
                    </Link>
                    <Link
                      href="/urunler/kagit"
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 shadow-sm hover:shadow"
                    >
                      Tüm Kağıtlar
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                  <p className="text-xs font-medium text-neutral-600">Yayın</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-900">
                    {formatTR(publishedISO)}
                  </p>
                  <p className="mt-3 text-xs text-neutral-600">Güncelleme</p>
                  <p className="mt-1 text-sm font-semibold text-neutral-900">
                    {formatTR(updatedISO)}
                  </p>
                </div>
              </div>
            </aside>
          </article>
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
