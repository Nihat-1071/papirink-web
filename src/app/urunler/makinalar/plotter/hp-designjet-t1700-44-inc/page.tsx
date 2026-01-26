import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/hp-designjet-t1700-44-inc";

export const metadata: Metadata = {
  title: "HP DesignJet T1700 44-Inc Plotter | Papirink",
  description:
    "HP DesignJet T1700 44 inç plotter; CAD, GIS ve teknik baskılar için yüksek hız, gelişmiş güvenlik ve üstün renk doğruluğu sunan profesyonel geniş format yazıcı.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "HP DesignJet T1700 44-Inc Plotter Çizici",
  brand: "HP",
  category: "Plotter Makinası",
  image:
    "/images/urunler/makinalar/plotter/hp-designjet-t1700-44-inc-plotter-cizici.jpg",

  description: `HP DesignJet T1700; 44 inç (1118 mm) baskı genişliği, yüksek hız ve gelişmiş güvenlik özellikleriyle CAD, GIS ve teknik çizim uygulamaları için tasarlanmış profesyonel bir plotter çözümüdür.

Hızlı A1 baskı süreleri, yüksek çözünürlükte renkli çıktı kalitesi ve kurumsal ağ entegrasyonu sayesinde ofis içi üretimde maksimum verim sağlar.`,

  specs: [
    { k: "Model Boyutu", v: "1118 mm (44 inç)" },

    // Hız
    {
      k: "A1 Baskı Süresi",
      v: "26 sn (ekonomik mod, düz kağıt)",
    },
    {
      k: "Baskı Hızı",
      v: "Saatte 116 sayfa (A1, ekonomik mod)",
    },

    // Bellek & Disk
    { k: "Standart Bellek", v: "128 GB (sanal)" },
    {
      k: "Sabit Disk",
      v: "500 GB Kendinden Şifrelemeli Sürücü (SED)",
    },

    // Baskı
    {
      k: "Baskı Çözünürlüğü",
      v: "2400 × 1200 dpi (optimum)",
    },
    {
      k: "Baskı Teknolojisi",
      v: "HP Termal Mürekkep Püskürtmeli",
    },
    {
      k: "Mürekkep Kartuşu Sayısı",
      v: "6 (camgöbeği, macenta, sarı, fotoğraf siyahı, mat siyah, gri)",
    },

    // Kağıt
    {
      k: "Kağıt Besleme",
      v: "Yaprak besleme, rulo besleme, otomatik kesici",
    },
    {
      k: "Desteklenen Ortam Türleri",
      v: "Bond, kuşe, teknik kağıt, film, fotoğraf kağıdı, arkadan aydınlatmalı, kendinden yapışkanlı",
    },
    {
      k: "Önerilen Kağıt Ağırlığı",
      v: "60 – 328 g/m²",
    },

    // Bağlantı
    { k: "HP ePrint", v: "Var" },
    {
      k: "Ağ Bağlantısı",
      v: "Ethernet, Fast Ethernet, Gigabit Ethernet (10/100/1000Base-T)",
    },
    { k: "USB", v: "USB Type-A" },

    // Diller
    {
      k: "Baskı Dilleri",
      v: "HP-GL/2, TIFF, JPEG, URF, CALS G4",
    },

    // Güç
    {
      k: "Güç Tüketimi",
      v: "<100 W (çalışırken), <24 W (hazır), <0,3 W (uyku), 0,1 W (kapalı)",
    },
    {
      k: "Çalışma Sıcaklığı",
      v: "5 – 40 °C",
    },
    {
      k: "Çalışma Nem Aralığı",
      v: "%20 – %80 BN",
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
