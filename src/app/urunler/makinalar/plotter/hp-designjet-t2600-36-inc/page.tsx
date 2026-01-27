import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/hp-designjet-t2600-36-inc";

export const metadata: Metadata = {
  title: "HP DesignJet T2600 36 inç Plotter | Papirink",
  description:
    "HP DesignJet T2600 36 inç PostScript çok işlevli plotter: baskı, fotokopi, tarama; saatte 180 A1 hız, 6 mürekkep, 2400×1200 dpi ve güvenli 500 GB depolama.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "HP DesignJet T2600 Plotter Çizici 36 inç",
  brand: "HP",
  category: "Plotter Makinası",
  image:
    "/images/urunler/makinalar/plotter/hp-designjet-t2600-36-inc-plotter-cizici.jpg",

  description: `HP DesignJet T2600 36 inç PostScript Çok İşlevli Yazıcı; baskı, fotokopi ve tarama süreçlerini tek cihazda birleştirerek teknik ofislerin üretkenliğini artırır.

Saatte 180 A1’e varan baskı hızı, 2400 × 1200 dpi’ye kadar optimize edilmiş renkli baskı kalitesi ve 6 kartuşlu mürekkep sistemiyle CAD/GIS, harita ve sunum çıktılarında yüksek performans sunar. 500 GB kendinden şifrelemeli depolama (SED) ile kurumsal güvenlik gereksinimlerini destekler.`,

  specs: [
    // İşlev
    { k: "İşlevler", v: "Baskı, fotokopi, tarama" },

    // Hız
    { k: "Baskı Hızı", v: "180 A1/saat • 19,3 sn/A1" },

    // Mürekkep / Kartuş
    { k: "Mürekkep Damlası", v: "6 pl (C, M, Y, G, pK) • 9 pl (mK)" },
    {
      k: "Kartuş Hacmi",
      v: "300 ml (C, M, Y, G, pK, mK) • 130 ml (C, M, Y, G, pK, mK)",
    },
    { k: "Mürekkep Türleri", v: "Boya bazlı (C, M, Y, pK, G) • Pigment bazlı (mK)" },
    { k: "Kartuş Sayısı", v: "6 (C, M, Y, G, pK, mK)" },
    { k: "Yazıcı Kafası", v: "1 evrensel baskı kafası" },
    {
      k: "Sarf Renkleri",
      v: "Camgöbeği, macenta, sarı, fotoğraf siyahı, mat siyah, gri",
    },

    // Kalite
    { k: "Baskı Kalitesi", v: "2400 × 1200 dpi’ye kadar (optimize)" },

    // Çıktı / Kesim
    {
      k: "Biten Çıktı İşlemleri",
      v: "Yaprak besleme • otomatik önden yüklemeli rulo • tümleşik çıktı istifleyici • baskı malzemesi bölmesi • otomatik yatay kesici",
    },
    {
      k: "Tarayıcı",
      v: "Yaprak ve karton orijinaller için düz kağıt tarama yolu",
    },

    // Medya / Rulo
    { k: "Ortam Boyutları (metrik rulolar)", v: "279 – 914 mm" },
    { k: "Rulo Dış Çapı", v: "140 mm" },
    { k: "Maks. Rulo Girişi", v: "1" },
    { k: "Maks. Rulo Ağırlığı", v: "11,9 kg" },
    { k: "Baskı Malzemesi Kalınlığı", v: "En fazla 19,7 mil" },
    { k: "Ortam Kalınlığı (metrik)", v: "0,5 mm’ye kadar" },
    { k: "Maks. Ortam Genişliği", v: "914 mm" },

    // Uygulamalar
    {
      k: "Desteklenen Ana Uygulamalar",
      v: "Çizimler, Haritalar, Ortofotolar, Sunumlar, Modeller",
    },

    // Yazdırılamayan alan
    { k: "Yazdırılamayan Alan (yaprak)", v: "3 × 22 × 3 × 3 mm" },
    { k: "Yazdırılamayan Alan (rulo)", v: "3 × 3 × 3 × 3 mm" },

    // Boyutlar
    { k: "Ortam Boyutları (özel)", v: "210 × 279 – 914 × 1219 mm" },
    { k: "Desteklenen Ortam Boyutları", v: "A4, A3, A2, A1, A0" },

    // Medya türleri
    {
      k: "Baskı Malzemesi Türleri",
      v: "Bond/kuşe (kalın kuşe dahil), teknik kağıt, film (şeffaf/mat), polyester, fotoğraf kağıdı, duratrans, kendinden yapışkanlı (çift yönlü yapışkan film), iç mekan kağıdı, polipropilen, vinil",
    },

    // Depolama
    { k: "Dahili Depolama", v: "500 GB (kendi kendine şifreleme / SED)" },
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
