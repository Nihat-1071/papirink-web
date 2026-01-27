import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/hp-designjet-smart-tank-t908";

export const metadata: Metadata = {
  title: "HP DesignJet Smart Tank T908 (914 mm) | Papirink",
  description:
    "HP DesignJet Smart Tank T908 914 mm (36 inç) tarayıcı özellikli yazıcı: 575 ml mürekkep tankı, 4 renk orijinal HP mürekkep şişeleri, 21 sn’de 1 sayfaya varan hız ve önden yüklenen tarayıcı.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "HP DesignJet Smart Tank T908 914 mm tarayıcı özellikli yazıcı",
  brand: "HP",
  category: "Plotter Makinası",
  image:
    "/images/urunler/makinalar/plotter/hp-designjet-smart-tank-t908-914-mm-tarayici-ozellikli-yazici.png",

  description: `HP DesignJet Smart Tank T908; 914 mm (36 inç) geniş format üretim, yüksek hacimli mürekkep tankı ve önden yüklenen tarayıcı özelliğini tek cihazda sunan pratik bir çözümdür.

575 ml mürekkep tankı ve dökülmeyi önleyen 500 ml orijinal HP mürekkep şişeleri (4 renk) ile düşük maliyetli ve kesintisiz üretime odaklanır. 21 saniyede 1 sayfaya varan hız ve saatte 120 sayfaya kadar A1 baskı performansı sayesinde yoğun iş akışlarında verim sağlar. Teklif ve kurulum için ekibimizle iletişime geçebilirsiniz.`,

  specs: [
    { k: "Baskı Genişliği", v: "914 mm (36 inç)" },
    { k: "Mürekkep Tankı", v: "575 ml" },
    {
      k: "Mürekkep Şişesi",
      v: "Dökülmeyi önleyen 500 ml orijinal HP mürekkep şişesi (4 renk)",
    },
    {
      k: "Baskı Hızı",
      v: "21 saniyede 1 sayfaya kadar (A1) • Saatte 120 sayfaya kadar A1",
    },
    { k: "Tarayıcı", v: "Önden yüklenen tarayıcı" },
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
