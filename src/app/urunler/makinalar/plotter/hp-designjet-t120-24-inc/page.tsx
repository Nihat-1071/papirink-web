import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/hp-designjet-t120";

export const metadata: Metadata = {
  title: "HP DesignJet T120 24 inç Plotter | Papirink",
  description:
    "HP DesignJet T120 24 inç plotter: CAD uygulamaları ve genel amaçlı işler için kompakt tasarım, kablosuz bağlantı, 4,3 inç dokunmatik ekran ve saatte 40 A1 baskı.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "HP DesignJet T120 24 inç Plotter Çizici",
  brand: "HP",
  category: "Plotter Makinası",
  image:
    "/images/urunler/makinalar/plotter/hp-designjet-t120-24-inc-plotter-cizici.jpg",

  description: `HP DesignJet T120; CAD uygulamaları ve genel amaçlı baskı ihtiyaçları için tasarlanmış, 610 mm (24 inç) genişliğinde kompakt ve kullanıcı dostu bir plotter çözümüdür.

Dahili A3/B+ tepsi ve önden yüklemeli rulo sistemi sayesinde farklı medya türleriyle esnek kullanım sunar. 4,3 inç renkli dokunmatik ekranı, kablosuz bağlantı desteği ve mobil cihazlardan kolay baskı özellikleriyle küçük ofisler ve bireysel kullanıcılar için ideal bir çözümdür.`,

  specs: [
    { k: "Baskı Genişliği", v: "610 mm (24 inç)" },
    { k: "Kullanım Alanı", v: "CAD uygulamaları, teknik çizim, genel amaçlı baskı" },
    {
      k: "Medya Besleme",
      v: "Dahili A3/B+ tepsi + önden yüklemeli baskı rulosu",
    },
    {
      k: "Kontrol Paneli",
      v: "4,3 inç (109 mm) renkli dokunmatik ekran",
    },
    {
      k: "Maksimum Baskı Boyutu",
      v: "D / A1",
    },
    {
      k: "Baskı Hızı",
      v: "Saatte 40 adet D/A1 baskı",
    },
    {
      k: "Mürekkep Sistemi",
      v: "4 adet orijinal HP mürekkep kartuşu",
    },
    {
      k: "Baskı Kafası",
      v: "Uzun ömürlü HP baskı kafası",
    },
    {
      k: "Bağlantı",
      v: "Kablosuz bağlantı (Wi-Fi)",
    },
    {
      k: "Mobil Baskı",
      v: "Akıllı telefon ve tabletten kolay baskı",
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
