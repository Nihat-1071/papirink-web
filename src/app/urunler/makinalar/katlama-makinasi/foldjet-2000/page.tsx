import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/katlama-makinasi/foldjet-2000";

export const metadata: Metadata = {
  title: "Foldjet 2000 Katlama Makinası | Papirink",
  description:
    "Foldjet 2000 katlama makinası: 920 mm’e kadar genişlik, DIN katlama A3’ten A0’a, yaklaşık 12 m/dk katlama hızı ve 1 mm ayar hassasiyeti ile plan/proje katlama çözümü.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "Foldjet 2000 Katlama Makinası",
  brand: "Foldjet",
  category: "Katlama Makinası",
  image:
    "/images/urunler/makinalar/katlama-makinasi/foldjet-2000-katlama-makinasi.jpg",

  description: `Foldjet 2000 katlama makinası; plotter çıktıları, diazo, PPC ve teknik çizim/plan gibi dokümanların hızlı ve düzenli şekilde katlanması için tasarlanmış profesyonel bir çözümdür.

920 mm’e kadar doküman genişliğini destekler ve DIN katlama modunda A3’ten A0’a kadar ciltli/ciltsiz kenar seçenekleri sunar. Yaklaşık 12 metre/dakika katlama hızı ve 1 mm aralıklarla ayarlanabilen katlama seçenekleri ile yoğun ofis ortamlarında verimliliği artırır.

Katlama, paket katlama ve serbest format gibi farklı senaryolara uyum sağlar; mm/inç birim desteği ve çoklu dil seçenekleri ile kullanım kolaylığı sunar.`,

  specs: [
    { k: "Katlama Materyali", v: "Maks. genişlik: 920 mm • Maks. uzunluk: 30 m" },
    {
      k: "Materyal",
      v: "Opak kağıt 70–110 g/m • E boyutu (20lb bond) (örn: diazo, ppc ve plotter kağıdı)",
    },
    {
      k: "Katlama Uzunluğu",
      v: "DIN katlama: A3’ten A0’a (ciltli/ciltsiz kenar)",
    },
    {
      k: "Paket Katlama (190/210)",
      v: "95’ten 330/350 mm’ye (4–13/14 inç)",
    },
    { k: "Serbest Format (190)", v: "95’ten 330 mm’ye (ciltli/ciltsiz)" },
    { k: "Serbest Format (210)", v: "95’ten 330 mm’ye (ciltli/ciltsiz)" },
    { k: "Kenar Ciltlemesi", v: "10 mm’den 50 mm’ye kadar" },
    { k: "Katlama Hızı", v: "Yaklaşık 12 metre/dakika" },
    { k: "Ayarlar", v: "Tüm katlamalar 1 mm aralıklarla ayarlanabilir" },
    {
      k: "Ekran Dilleri",
      v: "Almanca, İngilizce, Fransızca, İtalyanca, Hollandaca, İsveççe",
    },
    { k: "Uzunluk Ölçüleri", v: "mm veya inç" },
    {
      k: "Ölçüler",
      v: "Genişlik: 1128 mm • Uzunluk (masayla): 1395 mm • Masa kapalıyken: 715 mm",
    },
    { k: "Yükseklik", v: "Toplam: 1030 mm • Çalışma yüksekliği: 910 mm" },
    { k: "Ağırlık", v: "168 kg" },
    { k: "Güç", v: "230 V" },
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
