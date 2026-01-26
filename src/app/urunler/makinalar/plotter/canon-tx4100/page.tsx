import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/canon-tx4100";

export const metadata: Metadata = {
  title: "Canon TX4100 Plotter | Papirink",
  description:
    "Canon TX4100 plotter: 44 inç geniş format, 5 renk pigment mürekkep ile CAD/GIS çizimleri ve teknik baskılarda hızlı ve net sonuçlar. Teklif için iletişime geçin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "Canon TX4100 Plotter Çizici",
  brand: "Canon",
  category: "Plotter Makinası",
  image: "/images/urunler/makinalar/plotter/canon-tx4100-plotter-cizici.jpg",

  description: `Canon TX4100; 44 inç baskı genişliği ve pigment mürekkep sistemiyle CAD/GIS çizimleri, mimari–mühendislik projeleri ve teknik poster uygulamalarında yüksek netlik hedefleyen profesyonel bir büyük format plotterdır.

Geniş medya uyumluluğu, güvenilir kâğıt besleme ve ağ bağlantı seçenekleriyle ofis içi üretimde verimliliği artırır. Teklif, kurulum ve doğru sarf seçimi için ekibimizle iletişime geçebilirsiniz.`,

  specs: [
    { k: "Yazıcı Türü", v: "44 inç (Geniş Format) – Pigment" },
    { k: "Baskı Genişliği", v: "44 inç (≈1118 mm)" },
    { k: "Baskı Teknolojisi", v: "Inkjet (Büyük format çizim/teknik baskı)" },
    { k: "Mürekkep Sistemi", v: "5 renk pigment (MBK / BK / C / M / Y)" },
    { k: "Baskı Çözünürlüğü", v: "2400 x 1200 dpi" },
    { k: "Çizgi Doğruluğu", v: "Teknik çizimler için yüksek çizgi doğruluğu (CAD odaklı)" },

    // Bağlantı
    { k: "USB", v: "Yüksek hızlı USB (PC bağlantısı)" },
    { k: "Ethernet", v: "10/100/1000Base-T" },
    { k: "Kablosuz", v: "Wi-Fi (WLAN)" },

    // Medya
    { k: "Medya Besleme", v: "Rulo ve tabaka kâğıt desteği" },
    { k: "Medya Genişliği", v: "Rulo/Tabaka: 203,2 mm – 1118 mm (44 inç)" },
    { k: "Medya Kalınlığı", v: "Teknik kâğıt, kuşe ve poster kâğıtları ile uyumlu" },

    // Kullanım alanı
    { k: "Kullanım Senaryosu", v: "CAD/GIS, teknik proje, plan–kesit, poster" },

    // Performans (genel ifade)
    { k: "Performans", v: "CAD çıktıları ve teknik baskılarda hızlı üretim için optimize" },

    // Bellek/Depolama (genel)
    { k: "Bellek", v: "Kurumsal iş akışları için yüksek bellek kapasitesi" },

    // Güç/Gürültü (genel)
    { k: "Güç & Gürültü", v: "Ofis kullanımı için optimize çalışma değerleri" },

    // Sarf (genel ifade – parça kodu yazmadan)
    {
      k: "Sarf Malzemeleri",
      v: "Pigment kartuş seti (MBK/BK/C/M/Y) • Baskı kafası ve bakım kartuşu (modele göre)",
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
