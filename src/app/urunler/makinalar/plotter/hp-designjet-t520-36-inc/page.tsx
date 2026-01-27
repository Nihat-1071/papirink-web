import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/hp-designjet-t520-36-inc";

export const metadata: Metadata = {
  title: "HP DesignJet T520 36 inç Plotter | Papirink",
  description:
    "HP DesignJet T520 36 inç (914 mm) Wi-Fi plotter: CAD ve genel amaçlı baskılar için pratik 4,3 inç dokunmatik ekran, önden yüklemeli rulo ve hızlı D/A1 çıktı.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "HP DesignJet T520 36 inç Plotter Çizici",
  brand: "HP",
  category: "Plotter Makinası",
  image:
    "/images/urunler/makinalar/plotter/hp-designjet-t520-36-inc-plotter-cizici.jpg",

  description: `HP DesignJet T520 Yazıcı Serisi; CAD uygulamaları ve genel amaçlı işler için 610 mm (24 inç) veya 914 mm (36 inç) seçenekleri bulunan Wi-Fi özellikli bir plotter çözümüdür.

Önden yüklemeli baskı malzemesi rulosu, dahili B+/A3 tepsisi ve pratik 4,3 inç (109 mm) renkli dokunmatik ekranıyla günlük çizim ve proje çıktılarında kullanım kolaylığı sağlar. Akıllı telefon veya tabletten kolay baskı desteği ile ofis içi üretkenliği artırır.`,

  specs: [
    { k: "Seri", v: "HP DesignJet T520" },
    { k: "Maks. Baskı Genişliği", v: "914 mm (36 inç)" },
    { k: "Kullanım", v: "CAD ve genel amaçlı baskılar" },
    { k: "Bağlantı", v: "Kablosuz (Wi-Fi)" },
    { k: "Tepsi", v: "Dahili B+/A3 tepsisi" },
    { k: "Medya Yükleme", v: "Önden yüklemeli baskı malzemesi rulosu" },
    { k: "Ekran", v: "4,3 inç (109 mm) renkli dokunmatik ekran" },
    { k: "Hız", v: "35 saniyede D/A1 boyutunda baskı" },
    { k: "Sarf", v: "4 adet orijinal HP mürekkebi • uzun ömürlü baskı kafası" },
    { k: "Mobil Baskı", v: "Akıllı telefon/tabletten kolay baskı" },
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
