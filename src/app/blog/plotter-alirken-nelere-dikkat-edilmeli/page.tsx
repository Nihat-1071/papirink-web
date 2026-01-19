// src/app/blog/plotter-alirken-nelere-dikkat-edilmeli/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTopProgress from "../../components/ScrollToTopProgress";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/blog/plotter-alirken-nelere-dikkat-edilmeli";
const title = "Plotter Alırken Nelere Dikkat Edilmeli? | Papirink Blog";
const description =
  "Plotter alırken baskı genişliği (inç), CAD/afiş kullanım amacı, hız, sarf maliyeti, kartuş/mürekkep uyumu, servis ve garanti gibi kritik kriterleri adım adım öğrenin.";

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

export default function BlogPostPlotterGuide() {
  const publishedISO = "2025-12-26";
  const updatedISO = "2025-12-26";

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Plotter Alırken Nelere Dikkat Edilmeli?" },
  ];

  const faq = [
    {
      q: "Hangi inç plotter almalıyım (24/36/44)?",
      a: "Genellikle 24 inç CAD çizim için yeterlidir. Proje paftaları ve yoğun kullanımda 36 inç tercih edilir. Afiş/posta/renkli görsellerde 44 inç daha esnektir.",
    },
    {
      q: "CAD için mi afiş için mi plotter seçmeliyim?",
      a: "CAD odaklı kullanımda çizgi netliği, hız ve ekonomik sarf öne çıkar. Afişte renk gamut, fotoğraf kalitesi ve medya uyumluluğu daha kritiktir.",
    },
    {
      q: "Sarf maliyeti nasıl hesaplanır?",
      a: "Kartuş hacmi, baskı kafası ömrü, bakım kitleri ve ortalama sayfa/mt baskı maliyeti birlikte değerlendirilir. Ucuz cihaz pahalı sarf ile toplam maliyeti artırabilir.",
    },
    {
      q: "Tarayıcılı (MFP) plotter almaya değer mi?",
      a: "Sık sık kopyalama/tarama yapıyorsanız iş akışını ciddi hızlandırır. Nadiren tarıyorsanız bağımsız A0 tarayıcı daha mantıklı olabilir.",
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
            name: "Plotter Alırken Nelere Dikkat Edilmeli?",
            item: `${baseUrl}${pagePath}`,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: "Plotter Alırken Nelere Dikkat Edilmeli?",
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
                    Plotter Seçimi
                    <span className="h-1 w-1 rounded-full bg-neutral-400" />
                    Rehber
                    <span className="h-1 w-1 rounded-full bg-neutral-400" />
                    {formatTR(publishedISO)}
                  </p>

                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    Plotter Alırken Nelere Dikkat Edilmeli?
                  </h1>

                  <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-700">
                    Plotter seçimi; sadece cihaz fiyatı değil, baskı genişliği (inç),
                    kullanım amacı, sarf maliyeti, servis ve uyumluluk gibi kriterlerin
                    toplamıdır. Aşağıdaki checklist ile doğru modele hızlıca
                    yaklaşırsınız.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/urunler/makinalar/plotter"
                      className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                    >
                      Plotter Modelleri
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
                      Hızlı Kontrol Listesi
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                      <li>• 24/36/44 inç ihtiyacı</li>
                      <li>• CAD mi afiş mi?</li>
                      <li>• Aylık çıktı yoğunluğu</li>
                      <li>• Kartuş/mürekkep maliyeti</li>
                      <li>• Servis/kurulum/garanti</li>
                      <li>• Kağıt/medya uyumu</li>
                    </ul>
                    <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-4">
                      <p className="text-xs font-medium text-neutral-600">
                        Not
                      </p>
                      <p className="mt-1 text-sm leading-6 text-neutral-800">
                        “Ucuz cihaz” toplam maliyeti düşürmeyebilir. Sarf + bakım
                        kalemlerini mutlaka hesaba katın.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTENT */}
          <article className="mt-10 grid gap-8 lg:grid-cols-12">
            {/* Main */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-semibold">1) Baskı genişliği: 24 / 36 / 44 inç</h2>
                <p className="mt-3 leading-7 text-neutral-700">
                  İlk karar, hangi genişlikte baskı alacağınız. CAD çizimleri ve proje
                  paftalarında çoğunlukla 24–36 inç yeterliyken; poster, sunum,
                  fotoğraf ve reklam işlerinde 44 inç daha esnek olur.
                </p>

                <h2 className="mt-8 text-2xl font-semibold">2) Kullanım amacı: CAD mi, afiş mi?</h2>
                <p className="mt-3 leading-7 text-neutral-700">
                  CAD odaklı işlerde çizgi netliği, hız ve ekonomik sarf tüketimi öne
                  çıkar. Afiş ve fotoğraf işlerinde ise renk doğruluğu, medya uyumu ve
                  görüntü kalitesi belirleyicidir.
                </p>

                <h2 className="mt-8 text-2xl font-semibold">3) Hız ve aylık çıktı yoğunluğu</h2>
                <p className="mt-3 leading-7 text-neutral-700">
                  Günlük/haftalık baskı adetleri arttıkça hız ve dayanıklılık kritik hale
                  gelir. Yoğun kullanımda bakım periyotları, kafa ömrü ve servis hızı
                  satın alma kararını doğrudan etkiler.
                </p>

                <h2 className="mt-8 text-2xl font-semibold">4) Sarf maliyeti: kartuş, mürekkep, bakım</h2>
                <p className="mt-3 leading-7 text-neutral-700">
                  Toplam maliyet hesabında kartuş hacmi, baskı kafası ve bakım kitleri
                  mutlaka yer almalı. Özellikle yoğun kullanımda “sarf maliyeti” cihaz
                  fiyatını birkaç ayda geride bırakabilir.
                </p>

                <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-sm font-semibold text-neutral-900">
                    İlgili sayfalar:
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link
                      href="/urunler/kartus"
                      className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 shadow-sm hover:shadow"
                    >
                      Kartuşlar
                    </Link>
                    <Link
                      href="/urunler/murekkep"
                      className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 shadow-sm hover:shadow"
                    >
                      Mürekkepler
                    </Link>
                    <Link
                      href="/urunler/sarf-malzeme"
                      className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 shadow-sm hover:shadow"
                    >
                      Sarf Malzemeler
                    </Link>
                    <Link
                      href="/urunler/kagit"
                      className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 shadow-sm hover:shadow"
                    >
                      Kağıt & Medya
                    </Link>
                  </div>
                </div>

                <h2 className="mt-8 text-2xl font-semibold">5) Kağıt/medya uyumluluğu</h2>
                <p className="mt-3 leading-7 text-neutral-700">
                  Plotter kağıdı (80 gr), mat coated, polyester, kanvas, yapışkanlı medya
                  gibi ürünlerde uyumluluk; baskı kalitesi ve tıkanma riskini etkiler.
                  Satın almadan önce hangi medyaları kullanacağınızı netleştirin.
                </p>

                <h2 className="mt-8 text-2xl font-semibold">6) Servis, kurulum ve garanti</h2>
                <p className="mt-3 leading-7 text-neutral-700">
                  Servis ağı, yedek parça bulunabilirliği, kurulum desteği ve garanti
                  şartları özellikle profesyonel kullanımda kritik. Aynı gün destek,
                  yerinde servis ve hızlı parça tedariki iş kaybını azaltır.
                </p>

                <h2 className="mt-8 text-2xl font-semibold">7) Tarayıcılı (MFP) seçenekler</h2>
                <p className="mt-3 leading-7 text-neutral-700">
                  Sık sık kopyalama/tarama işiniz varsa tarayıcılı plotterlar (MFP)
                  iş akışını hızlandırır. Eğer tarama ihtiyacı sınırlıysa bağımsız A0
                  tarayıcı seçeneği maliyet açısından daha mantıklı olabilir.
                </p>

                <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">Sonuç</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    Plotter seçimi bir “toplam maliyet” işidir. İnç + kullanım amacı +
                    sarf + servis dörtlüsünü netleştirirseniz doğru cihazı hızla bulursunuz.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/urunler/makinalar/plotter"
                      className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                    >
                      Plotter Kategorisine Git
                    </Link>
                    <Link
                      href="/iletisim"
                      className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                    >
                      Model Sor (Ücretsiz)
                    </Link>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-semibold">Sık Sorulanlar</h2>

                <div className="mt-4 space-y-4">
                  {faq.map((x) => (
                    <details
                      key={x.q}
                      className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                    >
                      <summary className="cursor-pointer select-none text-sm font-semibold text-neutral-900">
                        {x.q}
                      </summary>
                      <p className="mt-3 text-sm leading-6 text-neutral-700">{x.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-neutral-900">İlgili Kategoriler</p>
                  <div className="mt-3 flex flex-col gap-2">
                    <Link
                      href="/urunler/makinalar/plotter"
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                    >
                      Plotter
                    </Link>
                    <Link
                      href="/urunler/makinalar/fotokopi-makinasi"
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                    >
                      Fotokopi Makinası
                    </Link>
                    <Link
                      href="/urunler/makinalar/tarayici"
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                    >
                      Tarayıcı
                    </Link>
                    <Link
                      href="/urunler/kagit/plotter-kagitlari"
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                    >
                      Plotter Kağıtları
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-neutral-900">Bu rehber kimlere uygun?</p>
                  <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                    <li>• Mimarlık / Mühendislik ofisleri</li>
                    <li>• Copy center / baskı merkezi</li>
                    <li>• Reklam / afiş üretimi</li>
                    <li>• Teknik servis ve kurumsal satın alma</li>
                  </ul>
                  <Link
                    href="/iletisim"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                  >
                    Hemen Sor
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
