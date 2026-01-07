// src/app/blog/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ScrollToTopProgress from "../components/ScrollToTopProgress";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/blog";

export const metadata: Metadata = {
  title: "Blog | Papirink",
  description:
    "Plotter, kartuş, mürekkep, kâğıt ve servis konularında kısa, pratik ve satın almaya yardımcı rehberler. Doğru ürün seçimi ve kullanım ipuçları.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Blog | Papirink",
    description:
      "Plotter ekosistemi için rehber içerikler: seçim, kullanım, bakım, sarf malzemeleri ve uyumluluk.",
    type: "website",
    siteName: "Papirink",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Papirink",
    description:
      "Plotter, kartuş, mürekkep, kâğıt ve servis konularında kısa, pratik rehber içerikler.",
  },
};

type PostCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  dateISO: string; // YYYY-MM-DD
  featured?: boolean;
};

const FEATURED: PostCard[] = [
  {
    slug: "/blog/plotter-alirken-nelere-dikkat-edilmeli",
    title: "Plotter Alırken Nelere Dikkat Edilmeli?",
    excerpt:
      "Baskı genişliği (inç), kullanım amacı (CAD/afiş), aylık sarf tüketimi ve servis ihtiyacına göre doğru modeli seçme rehberi.",
    category: "Plotter Seçimi",
    readTime: "6 dk",
    dateISO: "2025-12-26",
    featured: true,
  },
  {
    slug: "/blog/plotter-kagidi-nedir",
    title: "Plotter Kağıdı Nedir? Nerede Kullanılır?",
    excerpt:
      "Plotter kağıdı hangi işlerde tercih edilir, dayanım ve çıktı kalitesinde nelere bakılır? Kısa ve net açıklama.",
    category: "Kağıt Rehberi",
    readTime: "4 dk",
    dateISO: "2025-12-26",
    featured: true,
  },
  {
    slug: "/blog/orijinal-mi-muadil-mi-kartus",
    title: "Orijinal mi Muadil mi? Kartuş Seçiminde Doğru Kriterler",
    excerpt:
      "Maliyet, garanti, renk tutarlılığı ve kafa sağlığı açısından orijinal vs muadil kartuş karşılaştırması.",
    category: "Mürekkep & Kartuş",
    readTime: "5 dk",
    dateISO: "2025-12-26",
    featured: true,
  },
];

// İstersen bunu sonra Excel’den otomatik üretiriz.
// Şimdilik ürün ağacına göre SEO kümeleri:
const GUIDE_CLUSTERS = [
  {
    title: "Plotter & Makinalar",
    desc: "Plotter seçimi, tarayıcı, katlama, UV ve etiket makinelerinde doğru cihazı seçmek için hızlı rehberler.",
    links: [
      { label: "Plotter", href: "/urunler/makinalar/plotter" },
      { label: "Masaüstü Yazıcılar", href: "/urunler/makinalar/masaustu-yazicilar" },
      { label: "Tarayıcı", href: "/urunler/makinalar/tarayici" },
      { label: "Katlama Makinası", href: "/urunler/makinalar/katlama-makinasi" },
      { label: "UV", href: "/urunler/makinalar/uv" },
      { label: "Etiket Makinaları", href: "/urunler/makinalar/etiket-makinalari" },
    ],
  },
  {
    title: "Kartuş Rehberi",
    desc: "HP/Canon/Epson orijinal kartuşlar, muadil kartuşlar ve uyumluluk kriterleri. Doğru seçimle hem maliyet hem kalite yönetimi.",
    links: [
      { label: "HP Orijinal Kartuş", href: "/urunler/kartus/hp-orijinal-kartus" },
      { label: "Canon Orijinal Kartuş", href: "/urunler/kartus/canon-orijinal-kartus" },
      { label: "Epson Orijinal Kartuş", href: "/urunler/kartus/epson-orijinal-kartus" },
      { label: "Papirink Muadil Kartuş", href: "/urunler/kartus/papirink-muadil-kartus" },
    ],
  },
  {
    title: "Kağıt & Medya",
    desc: "Plotter kağıtları, fotoğraf kağıtları, coated/aydinger/kanvas ve özel medya seçiminde dikkat edilmesi gerekenler.",
    links: [
      { label: "Plotter Kağıtları", href: "/urunler/kagit/plotter-kagitlari" },
      { label: "Fotoğraf Kağıtları", href: "/urunler/kagit/fotograf-kagitlari" },
      { label: "Mat Coated", href: "/urunler/kagit/mat-coated-kagitlari" },
      { label: "Aydinger", href: "/urunler/kagit/aydinger" },
      { label: "Polyester", href: "/urunler/kagit/polyester" },
      { label: "Yapışkanlı Kağıtlar", href: "/urunler/kagit/yapiskanli-kagitlar" },
    ],
  },
  {
    title: "Mürekkep & Uyum",
    desc: "HP/Canon/Epson uyumlu mürekkeplerde doğru tip, doğru kullanım ve baskı kafası sağlığını koruyan pratik öneriler.",
    links: [
      { label: "HP Uyumlu Mürekkep", href: "/urunler/murekkep/hp-uyumlu-murekkep" },
      { label: "Canon Uyumlu Mürekkep", href: "/urunler/murekkep/canon-uyumlu-murekkep" },
      { label: "Epson Uyumlu Mürekkep", href: "/urunler/murekkep/epson-uyumlu-murekkep" },
    ],
  },
  {
    title: "Bitmeyen Kartuş & Dolum",
    desc: "Dolan kartuş sistemleri, dolum düzeni ve sürdürülebilir baskı maliyeti. Hangi marka için hangi çözüm?",
    links: [
      { label: "Epson için Dolan Kartuş", href: "/urunler/bitmeyen-kartus/epson-icin-dolan-kartus" },
      { label: "HP için Dolan Kartuş", href: "/urunler/bitmeyen-kartus/hp-icin-dolan-kartus" },
      { label: "Canon için Dolan Kartuş", href: "/urunler/bitmeyen-kartus/canon-icin-dolan-kartus" },
    ],
  },
  {
    title: "Sarf Malzemeleri & Bakım",
    desc: "Baskı kafası, toner, çipler, bakım kiti ve drum/bıçak gibi sarf ürünlerinde doğru seçim ve bakım ipuçları.",
    links: [
      { label: "Baskı Kafası", href: "/urunler/sarf-malzeme/baski-kafasi" },
      { label: "Toner", href: "/urunler/sarf-malzeme/toner" },
      { label: "Çipler", href: "/urunler/sarf-malzeme/cipler" },
      { label: "Bakım Kiti / Kartuşu", href: "/urunler/sarf-malzeme/bakim-kiti-kartusu" },
      { label: "Drum & Bıçak", href: "/urunler/sarf-malzeme/drum-bicak" },
    ],
  },
] as const;

function formatTR(iso: string) {
  const d = new Date(`${iso}T00:00:00.000Z`);
  return d.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export default function BlogPage() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Blog", href: "/blog" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}${pagePath}` },
        ],
      },
      {
        "@type": "Blog",
        name: "Papirink Blog",
        url: `${baseUrl}${pagePath}`,
        description:
          "Plotter, kartuş, mürekkep, kâğıt ve teknik servis hakkında rehber içerikler.",
        publisher: {
          "@type": "Organization",
          name: "Papirink",
          url: baseUrl,
        },
      },
      {
        "@type": "ItemList",
        name: "Öne Çıkan Blog Yazıları",
        itemListElement: FEATURED.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${baseUrl}${p.slug}`,
          name: p.title,
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
          <Breadcrumb items={breadcrumbItems} />

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
                    Rehber
                    <span className="h-1 w-1 rounded-full bg-neutral-400" />
                    Blog
                  </p>

                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    Blog
                  </h1>

                  <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-700">
                    Plotter, kartuş, mürekkep, kâğıt ve servis hakkında kısa, pratik ve
                    satın almaya yardımcı rehber içerikler.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/iletisim"
                      className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                    >
                      Hızlı Destek
                    </Link>
                    <Link
                      href="/urunler"
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                    >
                      Ürünlere Git
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-sm">
                    <p className="text-sm font-semibold text-neutral-900">
                      Blog neden var?
                    </p>
                    <p className="mt-2 text-sm leading-6 text-neutral-700">
                      Amacımız, doğru ürüne en kısa yoldan ulaşmanı sağlamak:
                      uyumluluk, kullanım, bakım ve maliyet konularında net rehberler.
                    </p>

                    <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-4">
                      <p className="text-xs font-medium text-neutral-600">
                        Hızlı Başlangıç
                      </p>
                      <p className="mt-1 text-sm leading-6 text-neutral-800">
                        Aşağıdan kategori seçip ilgili ürün sayfalarına da geçebilirsin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* GUIDE CLUSTERS */}
          <section className="mt-10">
            <div className="flex items-center gap-3">
              <div className="h-10 w-1 rounded-full bg-neutral-900" />
              <h2 className="text-2xl font-semibold">Rehber Kümeleri</h2>
            </div>

            <div className="mt-5 grid gap-6 lg:grid-cols-2">
              {GUIDE_CLUSTERS.map((c) => (
                <div
                  key={c.title}
                  className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-700">
                        {c.desc}
                      </p>
                    </div>
                    <div
                      aria-hidden="true"
                      className="h-10 w-10 rounded-2xl border border-neutral-200 bg-neutral-50"
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-800 shadow-sm transition hover:shadow"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-neutral-500">
                      Blog yazıları bu kümelere göre planlanır.
                    </span>
                    <Link
                      href="/iletisim"
                      className="text-xs font-semibold text-neutral-900"
                    >
                      Soru sor →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FEATURED */}
          <section className="mt-12">
            <div className="flex items-center gap-3">
              <div className="h-10 w-1 rounded-full bg-[#dc2626]" />
              <h2 className="text-2xl font-semibold text-[#dc2626]">
                Öne Çıkan Yazılar
              </h2>
            </div>

            <div className="mt-5 grid gap-6 lg:grid-cols-3">
              {FEATURED.map((p) => (
                <Link
                  key={p.slug}
                  href={p.slug}
                  className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition
                             hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-neutral-100 blur-3xl opacity-0 transition group-hover:opacity-100"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-800">
                        {p.category}
                      </span>
                      <span className="text-xs font-medium text-neutral-500">
                        {p.readTime}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                      {p.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-neutral-700">
                      {p.excerpt}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
                      <time dateTime={p.dateISO}>{formatTR(p.dateISO)}</time>
                      <span className="font-semibold text-neutral-900">Oku →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-10">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold text-neutral-900">
                Doğru ürünü seçmekte kararsız mısınız?
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-700">
                Model/ölçü ve kullanım amacını yazın; size uygun cihaz + sarf önerisini
                hızlıca iletelim.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/teklif-al"
                  className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                >
                  Teklif Al
                </Link>
                <Link
                  href="/urunler"
                  className="rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                >
                  Ürünlere Git
                </Link>
              </div>
            </div>
          </section>
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
