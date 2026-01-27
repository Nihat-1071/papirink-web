import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/hp-designjet-t1300";

export const metadata: Metadata = {
  title: "HP DesignJet T1300 44 inç Plotter | Papirink",
  description:
    "HP DesignJet T1300 PostScript 44 inç plotter: CAD/GIS için çift rulo, 6 mürekkep, ekonomik modda 28 sn’de A1/D baskı ve PostScript kalitesinde çıktı.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "HP DesignJet T1300 Plotter Çizici",
  brand: "HP",
  category: "Plotter Makinası",
  image: "/images/urunler/makinalar/plotter/hp-designjet-t1300-plotter-cizici.jpg",

  description: `HP DesignJet T1300 PostScript; profesyonel kalitede CAD ve GIS uygulamaları için 1118 mm (44 inç) genişliğinde, 6 mürekkepli ve çift rulo yapıda yüksek verimli bir plotter çözümüdür.

Akıllı değiştirme özelliğine sahip çift rulo yapılandırması sayesinde farklı medya türleri arasında hızlı geçiş yaparak üretimi kesintisiz sürdürür. Ekonomik modda 28 saniyede A1/D boyutunda baskı alabilir; PostScript® kalitesinde çıktı ve ePrint ile uzaktan/e-posta üzerinden baskı kolaylığı sunar. Teklif ve kurulum için ekibimizle iletişime geçebilirsiniz.`,

  specs: [
    { k: "Model", v: "HP DesignJet T1300 PostScript" },
    { k: "Kullanım Alanı", v: "Profesyonel CAD / GIS" },
    { k: "Baskı Genişliği", v: "1118 mm (44 inç)" },
    { k: "Mürekkep", v: "6 adet Orijinal HP mürekkebi" },
    {
      k: "Rulo Sistemi",
      v: "Akıllı değiştirme özellikli çift rulo yapılandırma",
    },
    { k: "Maks. Medya Genişliği", v: "44 inç (1118 mm) – yaprak veya rulo" },
    {
      k: "Baskı Hızı",
      v: "Ekonomik modda A1/D baskı: 28 saniye",
    },
    { k: "Çıktı Kalitesi", v: "PostScript® kalitesinde baskı" },
    { k: "Uzaktan Baskı", v: "HP ePrint ile e-postayla baskı desteği" },
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
                      <dt className="text-xs font-bold text-slate-500">{s.k}</dt>
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
