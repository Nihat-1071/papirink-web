// src/app/blog/orijinal-mi-muadil-mi-kartus/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTopProgress from "../../components/ScrollToTopProgress";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/blog/orijinal-mi-muadil-mi-kartus";

const title = "Orijinal mi Muadil mi? Kartuş Seçim Rehberi | Papirink Blog";
const description =
  "Orijinal kartuş ile muadil kartuş arasındaki farklar nelerdir? Baskı kalitesi, maliyet, garanti ve yazıcı sağlığı açısından doğru kartuş seçimi rehberi.";

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

export default function OrijinalMiMuadilMiKartusPage() {
  const publishedISO = "2025-12-26";
  const updatedISO = "2025-12-26";

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Orijinal mi Muadil mi Kartuş?" },
  ];

  const faq = [
    {
      q: "Muadil kartuş yazıcıya zarar verir mi?",
      a: "Kalitesiz muadil kartuşlar baskı kafasında tıkanma ve renk sapmalarına neden olabilir. Güvenilir üreticilerin muadil kartuşları ise doğru kullanıldığında genellikle sorun oluşturmaz.",
    },
    {
      q: "Orijinal kartuş garantiyi bozar mı?",
      a: "Birçok üretici, muadil kartuş kullanımında oluşan arızaları garanti kapsamı dışında bırakabilir. Garanti hassasiyeti olan cihazlarda orijinal kartuş önerilir.",
    },
    {
      q: "Muadil kartuş gerçekten daha mı ucuz?",
      a: "Ürün fiyatı düşüktür; ancak baskı kalitesi ve kartuş ömrü değişken olabilir. Toplam maliyet hesaplanmalıdır.",
    },
    {
      q: "Hangi kullanıcı muadil kartuş tercih edebilir?",
      a: "Yoğun, taslak veya ekonomik baskı yapan kullanıcılar; garanti süresi bitmiş cihazlarda muadil kartuş tercih edebilir.",
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
            name: "Orijinal mi Muadil mi Kartuş?",
            item: `${baseUrl}${pagePath}`,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: "Orijinal mi Muadil mi? Kartuş Seçim Rehberi",
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
          <Breadcrumb items={breadcrumbs} />

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
                    Kartuş Rehberi
                    <span className="h-1 w-1 rounded-full bg-neutral-400" />
                    {formatTR(publishedISO)}
                  </p>

                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    Orijinal mi Muadil mi Kartuş?
                  </h1>

                  <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-700">
                    Kartuş seçiminde fiyat kadar baskı kalitesi, yazıcı sağlığı ve
                    garanti şartları da önemlidir. Orijinal ve muadil kartuşlar
                    arasındaki farkları net şekilde inceleyelim.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/urunler/kartus"
                      className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                    >
                      Kartuşlara Git
                    </Link>
                    <Link
                      href="/iletisim"
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                    >
                      Ücretsiz Danış
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-sm">
                    <p className="text-sm font-semibold text-neutral-900">
                      Kısa Karşılaştırma
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                      <li>• Orijinal: yüksek kalite</li>
                      <li>• Muadil: düşük maliyet</li>
                      <li>• Garanti farkı</li>
                      <li>• Baskı kafası riski</li>
                      <li>• Kullanım amacına göre seçim</li>
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
                <h2 className="text-2xl font-semibold">Orijinal Kartuş Nedir?</h2>
                <p className="mt-3 leading-7 text-neutral-700">
                  Orijinal kartuşlar, yazıcı üreticisi (HP, Canon, Epson vb.)
                  tarafından üretilir veya onaylanır. Baskı kalitesi, renk
                  doğruluğu ve yazıcı uyumu açısından en güvenli seçenektir.
                </p>

                <h2 className="mt-8 text-2xl font-semibold">Muadil Kartuş Nedir?</h2>
                <p className="mt-3 leading-7 text-neutral-700">
                  Muadil kartuşlar, üçüncü parti üreticiler tarafından üretilir.
                  Fiyat avantajı sunar; ancak kalite ve performans markaya göre
                  değişkenlik gösterebilir.
                </p>

                <h2 className="mt-8 text-2xl font-semibold">
                  Karşılaştırma: Orijinal vs Muadil
                </h2>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full border border-neutral-200 text-sm">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th className="border px-3 py-2 text-left">Kriter</th>
                        <th className="border px-3 py-2 text-left">Orijinal</th>
                        <th className="border px-3 py-2 text-left">Muadil</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-3 py-2">Baskı Kalitesi</td>
                        <td className="border px-3 py-2">Yüksek</td>
                        <td className="border px-3 py-2">Değişken</td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2">Fiyat</td>
                        <td className="border px-3 py-2">Yüksek</td>
                        <td className="border px-3 py-2">Düşük</td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2">Garanti</td>
                        <td className="border px-3 py-2">Uyumlu</td>
                        <td className="border px-3 py-2">Riskli</td>
                      </tr>
                      <tr>
                        <td className="border px-3 py-2">Yazıcı Sağlığı</td>
                        <td className="border px-3 py-2">Güvenli</td>
                        <td className="border px-3 py-2">Markaya bağlı</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-sm font-semibold text-neutral-900">
                    İlgili Kategoriler
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link
                      href="/urunler/kartus/hp-orijinal-kartus"
                      className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 shadow-sm hover:shadow"
                    >
                      HP Orijinal Kartuş
                    </Link>
                    <Link
                      href="/urunler/kartus/canon-orijinal-kartus"
                      className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 shadow-sm hover:shadow"
                    >
                      Canon Orijinal Kartuş
                    </Link>
                    <Link
                      href="/urunler/kartus/epson-orijinal-kartus"
                      className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 shadow-sm hover:shadow"
                    >
                      Epson Orijinal Kartuş
                    </Link>
                    <Link
                      href="/urunler/kartus/papirink-muadil-kartus"
                      className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 shadow-sm hover:shadow"
                    >
                      Muadil Kartuşlar
                    </Link>
                  </div>
                </div>

                <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">Sonuç</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    Baskı kalitesi ve garanti önceliğinizse orijinal kartuş; maliyet
                    önceliğinizse güvenilir muadil kartuş tercih edebilirsiniz.
                    Karar, kullanım yoğunluğu ve cihazınızın durumuna göre verilmelidir.
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
                    Bu yazı kimler için?
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                    <li>• Copy center işletmeleri</li>
                    <li>• Mimarlık & mühendislik ofisleri</li>
                    <li>• Teknik servisler</li>
                    <li>• Kurumsal satın alma</li>
                  </ul>
                  <Link
                    href="/iletisim"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white shadow-sm hover:opacity-95"
                  >
                    Kartuş Sor
                  </Link>
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
