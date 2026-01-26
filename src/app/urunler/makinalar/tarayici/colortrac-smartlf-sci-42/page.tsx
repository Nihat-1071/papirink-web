import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/colortrac-smartlf-sci-42";

export const metadata: Metadata = {
  title: "Colortrac SmartLF SCi 42 Geniş Format Tarayıcı | Papirink",
  description:
    "Colortrac SmartLF SCi 42 geniş format tarayıcı: 42 inç tarama genişliği, 1200 DPI çözünürlük ve sınırsız tarama uzunluğu ile CAD ve grafik taramaları için ideal çözüm.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "Colortrac SmartLF SCi 42",
  brand: "Colortrac",
  category: "Geniş Format Tarayıcı",
  image:
    "/images/urunler/makinalar/tarayici/colortrac-smartlf-sci-42.jpg",

  description: `Colortrac SmartLF SCi 42; güvenilir ve yüksek kaliteli tarama özelliklerine sahip, uygun maliyetli SingleSensor geniş format tarayıcıdır.

42 inç (107 cm) tarama genişliğine kadar teknik çizimleri, haritaları ve renkli grafikleri yüksek hassasiyetle yakalar. 1200 DPI optik çözünürlüğü sayesinde detay kaybı olmadan profesyonel taramalar elde edilir.

Hızlı, sezgisel ve yerden tasarruf sağlayan ergonomik tasarımı ile yoğun ofis ve proje ortamlarında günlük tarama ihtiyaçları için ideal bir çözümdür.`,

  specs: [
    { k: "Model", v: "Colortrac SmartLF SCi 42" },
    { k: "Tarama Genişliği", v: "42 inç / 107 cm" },
    { k: "Tarama Türü", v: "SingleSensor geniş format tarayıcı" },
    { k: "Optik Çözünürlük", v: "1200 DPI" },
    { k: "Tarama Uzunluğu", v: "Sınırsız" },
    { k: "Renk Desteği", v: "Renkli ve siyah-beyaz tarama" },
    { k: "Kullanım Alanı", v: "CAD çizimleri, haritalar, teknik ve grafik belgeler" },
    { k: "Tasarım", v: "Kompakt, yerden tasarruf sağlayan yapı" },
    { k: "Kullanım Yoğunluğu", v: "Günlük ve yoğun tarama ortamları" },
  ],
};

export default function Page() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Makinalar", href: "/urunler/makinalar" },
    { label: "Plotter & Tarayıcı", href: "/urunler/makinalar/plotter" },
    { label: product.title, href: pagePath },
  ];

  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="min-h-screen bg-[#f5f7fb]">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumb items={breadcrumbItems} />
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ProductHeroClient
            title={product.title}
            brand={product.brand}
            category={product.category}
            image={product.image}
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Ürün Açıklaması */}
            <section className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-4">
                <div className="h-10 w-1 rounded-full bg-[#dc2626]" />
                <h2 className="text-xl font-extrabold text-slate-900">
                  Ürün Açıklaması
                </h2>
              </div>

              <div className="px-6 py-5">
                <p className="text-slate-800 leading-7 whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            </section>

            {/* Teknik Özellikler */}
            <aside className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="border-b border-slate-200 px-6 py-4 bg-slate-50">
                <h3 className="text-sm font-extrabold tracking-wide text-slate-800">
                  TEKNİK ÖZELLİKLER
                </h3>
              </div>

              <div className="px-6 py-5">
                <dl className="space-y-3">
                  {product.specs.map((s) => (
                    <div key={s.k} className="grid grid-cols-3 gap-3">
                      <dt className="text-xs font-bold text-slate-500">
                        {s.k}
                      </dt>
                      <dd className="col-span-2 text-sm font-semibold text-slate-900">
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
