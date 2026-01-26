import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/canon-tx4200";

export const metadata: Metadata = {
  title: "Canon TX4200 Plotter | Papirink",
  description:
    "Canon TX4200 plotter: 44 inç geniş format, CAD/GIS ve teknik çizimler için hızlı ve net baskı performansı. Teklif için iletişime geçin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "Canon TX4200 Plotter Çizici",
  brand: "Canon",
  category: "Plotter Makinası",
  image: "/images/urunler/makinalar/plotter/canon-tx4200-plotter-cizici.jpg",

  description: `Canon TX4200; 44 inç baskı genişliğiyle CAD/GIS çizimleri, mimari–mühendislik projeleri ve teknik poster çıktıları için tasarlanmış profesyonel bir büyük format plotter çözümüdür.

Ofis içi üretimde verimlilik için rulo/tabaka medya desteği, güvenilir kağıt besleme ve ağ bağlantı seçenekleri sunar. Teklif, kurulum ve doğru sarf seçimi için ekibimizle iletişime geçebilirsiniz.`,

  specs: [
    { k: "Yazıcı Türü", v: "44 inç (Geniş Format) – Plotter" },
    { k: "Baskı Genişliği", v: "44 inç (≈1118 mm)" },
    { k: "Kullanım Senaryosu", v: "CAD/GIS, plan–kesit, teknik proje, poster" },
    { k: "Baskı Teknolojisi", v: "Inkjet (büyük format teknik baskı)" },
    { k: "Baskı Kalitesi", v: "Teknik çizimler için net çizgi ve keskin detay" },

    // Bağlantı
    { k: "USB", v: "Yüksek hızlı USB (PC bağlantısı)" },
    { k: "Ethernet", v: "10/100/1000Base-T" },
    { k: "Kablosuz", v: "Wi-Fi (WLAN)" },

    // Medya
    { k: "Medya Besleme", v: "Rulo ve tabaka kâğıt desteği" },
    { k: "Medya Genişliği", v: "Rulo/Tabaka: 203,2 mm – 1118 mm (44 inç)" },
    { k: "Medya Uyumluluğu", v: "Teknik kâğıt, kuşe ve poster kâğıtları ile uyumlu" },

    // Performans (genel ifade – yanlış sayı yazmıyoruz)
    { k: "Performans", v: "CAD çıktıları ve teknik baskılarda hızlı üretim için optimize" },

    // Sarf (genel)
    {
      k: "Sarf Malzemeleri",
      v: "Modele uygun pigment kartuş seti • Baskı kafası ve bakım kartuşu (modele göre)",
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
