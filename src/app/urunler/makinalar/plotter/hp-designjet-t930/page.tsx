import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/hp-designjet-t930";

export const metadata: Metadata = {
  title: "HP DesignJet T930 Plotter Çizici | Papirink",
  description:
    "HP DesignJet T930 36 inç plotter: Profesyonel CAD ve GIS uygulamaları için 6 mürekkepli, yüksek hızlı, güvenli ve mobil uyumlu geniş format yazıcı.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "HP DesignJet T930 Plotter Çizici",
  brand: "HP",
  category: "Plotter Makinası",
  image:
    "/images/urunler/makinalar/plotter/hp-designjet-t930-plotter-cizici.jpg",

  description: `HP DesignJet T930 Yazıcı Serisi; profesyonel kalitede CAD ve GIS uygulamaları için tasarlanmış, 914 mm (36 inç) baskı genişliğine sahip gelişmiş bir plotter çözümüdür.

50 sayfalık tümleşik istifleme tepsisi ve gerçek önden rulo yükleme sistemi sayesinde yoğun ofis ve proje ortamlarında kesintisiz çalışma imkânı sunar. 6 mürekkepli sistem ile teknik çizimlerde netlik ve renk doğruluğu sağlar.

Gelişmiş güvenlik protokolleri, yüksek işlem gücü ve HP Mobil Baskı desteği sayesinde iOS ve Android cihazlardan kolay baskı alınabilir.`,

  specs: [
    { k: "Seri", v: "HP DesignJet T930" },
    { k: "Maks. Baskı Genişliği", v: "914 mm (36 inç)" },
    { k: "Kullanım", v: "CAD ve GIS uygulamaları" },
    { k: "Mürekkep Sistemi", v: "6 adet Orijinal HP mürekkep (300 ml’ye kadar)" },
    { k: "Baskı Hızı", v: "21 saniyede D/A1 baskı" },
    { k: "Çözünürlük", v: "E/A0 boyutuna kadar destek" },
    { k: "Bellek", v: "64 GB sanal bellek (paralel dosya işleme)" },
    {
      k: "Güvenlik",
      v: "IPSec, 802.1x, SNMPv3, PIN ile baskı",
    },
    {
      k: "Medya Yükleme",
      v: "Gerçek önden rulo yükleme, 50 sayfalık istifleme tepsisi",
    },
    {
      k: "Mobil Baskı",
      v: "HP Mobil Baskı – iOS ve Android uyumlu",
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
