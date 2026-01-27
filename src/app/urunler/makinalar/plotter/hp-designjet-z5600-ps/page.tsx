import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/hp-designjet-z5600-ps";

export const metadata: Metadata = {
  title: 'HP DesignJet Z5600 PS 44" Plotter Çizici | Papirink',
  description:
    "HP DesignJet Z5600 PS 44 inç PostScript plotter: Yüksek hızlı, çoklu rulo destekli, pigment bazlı HP Vivid mürekkeplerle profesyonel grafik ve CAD baskı çözümü.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: 'HP DesignJet Z5600 PS 44" Plotter Çizici',
  brand: "HP",
  category: "Plotter Makinası",
  image:
    "/images/urunler/makinalar/plotter/hp-designjet-z5600-ps-44-inc-plotter-cizici.jpg",

  description: `HP DesignJet Z5600 PostScript® Yazıcı; yüksek hacimli grafik, CAD ve harita baskıları için geliştirilmiş, 44 inç (1118 mm) genişliğe sahip profesyonel bir plotter çözümüdür.

Çoklu rulo yazıcı medya sistemi sayesinde farklı işler arasında hızlı geçiş sağlar ve üretkenliği artırır. Saatte 60 m’ye varan baskı hızı ile yoğun baskı ortamları için idealdir.

Kromatik kırmızı dahil altı pigment bazlı HP Vivid Fotoğraf Mürekkepleri; canlı renkler, doğru çizgiler ve uzun ömürlü baskılar sunar. Adobe® PostScript®/PDF ve HP-GL/2 desteği ile güvenilir ve tutarlı çıktı alınmasını sağlar.`,

  specs: [
    { k: "Seri", v: "HP DesignJet Z5600 PS" },
    { k: "Maks. Baskı Genişliği", v: "1118 mm (44 inç)" },
    { k: "Baskı Hızı", v: "Saatte 60 m (650 ft²/saat)" },
    { k: "Disk / Bellek", v: "320 GB sabit disk, 64 GB sanal bellek" },
    {
      k: "Mürekkep Sistemi",
      v: "Altı pigment bazlı HP Vivid Fotoğraf Mürekkepleri (kromatik kırmızı dahil)",
    },
    {
      k: "Dil Desteği",
      v: "Adobe PostScript®, PDF, HP-GL/2",
    },
    {
      k: "Renk Yönetimi",
      v: "HP Profesyonel PANTONE® renk emülasyonu",
    },
    {
      k: "Medya Sistemi",
      v: "Otomatik çoklu rulo yazıcı",
    },
    {
      k: "Kullanım Alanı",
      v: "Grafik, CAD, GIS ve harita baskıları",
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
