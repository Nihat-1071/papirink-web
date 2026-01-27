import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/katlama-makinasi/rowe";

export const metadata: Metadata = {
  title: "ROWE Katlama Makinası | Papirink",
  description:
    "ROWE katlama makinası: baskı boyunca tek seferde katlama, ayarlanabilir katlama hızı (20/15/7,5 m/dk), 210–960 mm çalışma genişliği, 8 katlama programı ve USB 3.0 bağlantı.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "ROWE Katlama Makinası",
  brand: "ROWE",
  category: "Katlama Makinası",
  image:
    "/images/urunler/makinalar/katlama-makinasi/rowe-katlama-makinasi.jpg",

  description: `ROWE katlama makinası; uzun baskıları hızlı, düzgün ve standartlara uygun şekilde katlamak için tasarlanmış profesyonel bir katlama çözümüdür.

Baskı uzunluğu boyunca paftayı tek seferde katlayabilir ve katlama yerinde tam ezilme (düzgün kırma) sağlayarak düzenli sonuçlar üretir. Cross (çapraz) katlama desteği ile farklı katlama senaryolarına uyum sağlar.

Ayarlanabilir katlama hızı (servis ayarlarından) ve 8 farklı katlama programı sayesinde dosya payı veya paket katlama işlemlerini pratik biçimde yapabilirsiniz. USB 3.0 bağlantısı üzerinden kendi arayüzüne bağlantı kurularak ayarlamalar yapılabilir; opsiyonel yüksek kapasiteli sensörlü çıkış tablası ile uzun baskıların katlanarak düzgün biçimde sonlandırılması desteklenir.

Düşük enerji tüketimi avantajı sunar: boşta 0,8 W, tam çalışırken 58 W.`,

  specs: [
    { k: "Katlama", v: "Baskı uzunluğu boyunca tek seferde katlama" },
    { k: "Katlama Hızı", v: "20 m/dk • 15 m/dk • 7,5 m/dk (servis ayarlarından)" },
    { k: "Katlama Kalitesi", v: "Katlama yerinde tam ezilme (düzgün kırma)" },
    { k: "Cross Katlama", v: "2 kırımlı cross katlama (maks. 2500 mm)" },
    { k: "Katlama Tipi", v: "Sınırsız ve boşluksuz katlama" },
    { k: "Çalışma Genişliği", v: "210 – 960 mm" },
    { k: "Doküman Giriş Bölmesi", v: "Alüminyum plaka" },
    { k: "Programlar", v: "8 farklı katlama programı (dosya payı / paket katlama)" },
    { k: "Kağıt Gramajı", v: "60 – 120 gr aralığında baskıları katlama" },
    { k: "Motor", v: "Step motor ile sessiz çalışma" },
    { k: "Bağlantı", v: "USB 3.0 (arayüz üzerinden ayarlama)" },
    {
      k: "Opsiyonel",
      v: "Yüksek kapasiteli sensörlü çıkış tablası entegrasyonu",
    },
    { k: "Enerji Tüketimi", v: "Boşta 0,8 W • Tam çalışmada 58 W" },
  ],
};

export default function Page() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Makinalar", href: "/urunler/makinalar" },
    { label: "Katlama Makinası", href: "/urunler/makinalar/katlama-makinasi" },
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
