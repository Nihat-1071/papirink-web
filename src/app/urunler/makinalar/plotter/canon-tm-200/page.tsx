import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/canon-tm-200";

export const metadata: Metadata = {
  title: "Canon TM-200 Plotter | Papirink",
  description:
    "Canon TM-200 plotter: 24 inç, 5 renkli pigment mürekkep sistemiyle teknik çizim ve CAD çıktıları için kompakt ve profesyonel büyük format çözüm. Teklif için iletişime geçin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "Canon TM-200 Plotter Çizici",
  brand: "Canon",
  category: "Plotter Makinası",
  image: "/images/urunler/makinalar/plotter/canon-tm-200-plotter-cizici.jpg",

  description: `Canon TM-200; 24 inç (610 mm) baskı genişliği ve 5 renkli pigment mürekkep sistemiyle teknik çizim, CAD planları ve ofis içi büyük format baskılar için geliştirilmiş kompakt bir plotter çözümüdür.

Hassas çizgi doğruluğu ve yüksek çözünürlük sayesinde mimarlık ve mühendislik uygulamalarında verimli kullanım sunar. Uygun sarf seçimi ve teklif için ekibimizle iletişime geçebilirsiniz.`,

  specs: [
    { k: "Yazıcı Türü", v: "5 Renkli, 24 inç / 610 mm" },
    {
      k: "Baskı Teknolojisi",
      v: "Canon Bubblejet (6 renk entegre tür; 6 yonga/baskı kafası x 1 baskı kafası)",
    },
    { k: "Baskı Çözünürlüğü", v: "2400 x 1200 dpi" },
    {
      k: "Püskürtme Ucu Sayısı",
      v: "15.360 (MBK 5120 + diğer renkler her biri 2560)",
    },
    {
      k: "Çizgi Hassasiyeti",
      v: "±%0,1 veya daha az (ortam ve medya uyumuna bağlı)",
    },
    { k: "Püskürtme Ucu", v: "1200 dpi (2 satır)" },
    { k: "Mürekkep Damla Boyutu", v: "Minimum 5 pl/renk" },
    {
      k: "Mürekkep Kapasitesi",
      v: "Satış mürekkebi: 130 ml ve 300 ml",
    },
    {
      k: "Başlangıç Mürekkebi",
      v: "130 ml (Mat Siyah) / 90 ml (Siyah, Mavi, Eflatun, Sarı)",
    },
    {
      k: "Mürekkep Türü",
      v: "Pigment: Siyah, Mat Siyah, Mavi, Eflatun, Sarı",
    },
    {
      k: "İşletim Sistemi",
      v: "Windows 7/8.1/10 (32-bit), Windows 7/8.1/10 + Server 2008R2–2016 (64-bit), macOS 10.10.5–10.11 / macOS 10.13",
    },
    {
      k: "Yazıcı Dilleri",
      v: "SG Raster, HP-GL/2, HP RTL, JPEG (JFIF 1.02)",
    },
    { k: "Bağlantı", v: "USB B (Dahili yüksek hızlı USB)" },
    {
      k: "Ethernet",
      v: "IEEE 802.3 10/100/1000base-T (tam çift taraflı)",
    },
    { k: "Kablosuz LAN", v: "IEEE 802.11n / 802.11g / 802.11b" },
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
