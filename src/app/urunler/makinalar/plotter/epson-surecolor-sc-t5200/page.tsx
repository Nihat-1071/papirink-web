import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/epson-surecolor-sc-t5200";

export const metadata: Metadata = {
  title: "Epson SureColor SC-T5200 Plotter | Papirink",
  description:
    "Epson SureColor SC-T5200 plotter: PrecisionCore TFP baskı kafası, UltraChrome XD pigment mürekkep ve 2880×1440 dpi çözünürlük ile CAD/GIS ve teknik çizimlerde net, hızlı çıktı.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "Epson SureColor SC-T5200 Plotter Çizici",
  brand: "Epson",
  category: "Plotter Makinası",
  image: "/images/urunler/makinalar/plotter/epson-surecolor-sc-t5200-plotter-cizici.jpg",

  description: `Epson SureColor SC-T5200; CAD/GIS çıktıları, teknik çizimler ve proje baskıları için geliştirilmiş profesyonel bir geniş format plotter çözümüdür.

PrecisionCore™ TFP baskı kafası ve UltraChrome® XD pigment mürekkep teknolojisi sayesinde keskin çizgiler, tutarlı renk üretimi ve dayanıklı çıktılar sağlar. PC ve MAC ortamında rahat kullanım sunar; farklı kâğıt formatları ve kalınlıklarıyla esnek üretim imkânı verir. Teklif ve uygun sarf seçimi için ekibimizle iletişime geçebilirsiniz.`,

  specs: [
    { k: "Baskı Yöntemi", v: "PrecisionCore™ TFP baskı kafası" },
    { k: "Mürekkep Teknolojisi", v: "UltraChrome® XD (Pigment)" },
    {
      k: "Renkler",
      v: "Fotoğraf Siyah, Mat Siyah, Cyan, Sarı, Magenta (Pigment)",
    },
    {
      k: "Kartuş Kapasiteleri",
      v: "110 ml / 350 ml / 700 ml (renge göre)",
    },
    {
      k: "Asgari Damlacık Boyutu",
      v: "3,5 pl (Değişken Boyutlu Damlacık Teknolojisi ile)",
    },
    { k: "Minimum Çizgi Genişliği", v: "0,02 mm" },
    { k: "Çizgi Doğruluğu", v: "+/- 0,26" },
    { k: "Baskı", v: "PC / MAC" },
    { k: "Nozül Yapılandırması", v: "Siyah 720 nozül • Renk başına 720 nozül" },
    { k: "Baskı Çözünürlüğü", v: "2880 x 1440 dpi" },

    {
      k: "Kâğıt Formatları",
      v: "A1, A2, A3+, A3, A4, B2, B3, B4, A0, 17\", 24\", 36\"",
    },
    {
      k: "Baskı Marjları",
      v: "Mod 1: 3 mm (üst), 3 mm (sağ), 14 mm (alt), 3 mm (sol)",
    },
    { k: "Uygun Kâğıt Kalınlığı", v: "0,08 mm – 1,5 mm" },
    { k: "Çift Taraflı", v: "Hayır" },
    {
      k: "Kenarsız Baskı",
      v: "10\"–35,98\" aralığında çeşitli genişlikler (modele göre)",
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
