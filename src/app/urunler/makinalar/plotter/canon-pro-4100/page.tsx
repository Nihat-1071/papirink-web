import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/canon-pro-4100";

export const metadata: Metadata = {
  title: "Canon PRO-4100 Plotter | Papirink",
  description:
    "Canon PRO-4100 plotter: 44 inç genişliğinde, 12 renkli büyük format baskı, CAD ve grafik üretimleri için profesyonel çözüm.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "Canon Pro 4100 Plotter Çizici",
  brand: "Canon",
  category: "Plotter Makinası",
  image:
    "/images/urunler/makinalar/plotter/canon-pro-4100-plotter-cizici.jpg",

  description: `Canon Pro 4100; 44 inç genişliğinde, 12 renkli pigment mürekkep sistemiyle CAD çizimler, grafikler ve fotoğraf baskıları için geliştirilmiş profesyonel bir plotter çözümüdür.

Yüksek çözünürlük, hassas çizgi doğruluğu ve geniş medya desteği sayesinde teknik ofisler, mimarlık ve mühendislik uygulamaları için idealdir.`,

  specs: [
    { k: "Yazıcı Türü", v: "12 Renkli, 44 inç / 1118 mm" },
    {
      k: "Baskı Teknolojisi",
      v: "Canon Bubblejet (12 renk entegre, 12 nozul / baskı kafası)",
    },
    { k: "Baskı Çözünürlüğü", v: "2400 x 1200 dpi" },
    {
      k: "Püskürtme Ucu Sayısı",
      v: "18.432 (1536 x 12 renk)",
    },
    {
      k: "Çizgi Hassasiyeti",
      v: "±%0,1 veya daha az (ortam ve medya uyumuna bağlı)",
    },
    {
      k: "Desteklenen Medya",
      v: "Düz kağıt, CAD aydınger, kuşe kağıt, yarı saydam mat film",
    },
    {
      k: "Mürekkep Türü",
      v: "Pigment (Siyah, Mat Siyah, Cam Göbeği, Eflatun, Sarı, Fotoğraf Cam Göbeği, Fotoğraf Eflatunu, Gri, Fotoğraf Grisi, Kırmızı, Mavi, Chroma Optimiser)",
    },
    {
      k: "Mürekkep Kapasitesi",
      v: "160 ml / 330 ml / 700 ml",
    },
    {
      k: "Bağlantılar",
      v: "USB A, USB B (USB 2.0), Ethernet (10/100/1000)",
    },
    {
      k: "Kablosuz",
      v: "IEEE 802.11n / 802.11g / 802.11b",
    },
    {
      k: "İşletim Sistemi",
      v: "Windows 7/8/8.1/10, Windows Server 2008–2019, macOS 10.11.6 – 10.15",
    },
    {
      k: "Dosya Dilleri",
      v: "SG Raster, PDF 1.7, JPEG (JFIF 1.02)",
    },
  ],
};

export default function Page() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Makinalar", href: "/urunler/makinalar" },
    { label: "Plotter", href: "/urunler/makinalar/plotter" },
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
            {/* Açıklama */}
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
