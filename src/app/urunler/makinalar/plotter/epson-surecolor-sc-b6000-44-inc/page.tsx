import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/epson-surecolor-sc-b6000";

export const metadata: Metadata = {
  title: "Epson SureColor SC-B6000 (44\") Plotter | Papirink",
  description:
    "Epson SureColor SC-B6000 44 inç plotter: yüksek performanslı POS ve poster baskıları için Micro Piezo TFP kafa, 69,5 m²/saat baskı hızı ve düşük maliyetli üretim.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: 'Epson SureColor SC-B6000 (44")',
  brand: "Epson",
  category: "Plotter Makinası",
  image:
    "/images/urunler/makinalar/plotter/epson-surecolor-sc-b6000-44-inc.jpg",

  description: `Epson SureColor SC-B6000; POS uygulamaları, posterler, afişler ve tanıtım materyalleri için geliştirilmiş yüksek performanslı ve güvenilir bir 44 inç geniş format plotterdır.

Epson Micro Piezo TFP yazıcı kafası, 1,5 litrelik mürekkep tankı ve saatte 69,5 m²’ye varan baskı hızı sayesinde düşük maliyetli ve kesintisiz üretim sunar. Operasyon kolaylığı, medya yükleme pratikliği ve uzaktan durum bildirimleri ile yoğun baskı ortamları için ideal bir çözümdür.`,

  specs: [
    { k: "Yazıcı Türü", v: "44 inç Geniş Format Plotter" },
    { k: "Kullanım Alanı", v: "POS, poster, afiş, tanıtım materyalleri" },
    { k: "Baskı Genişliği", v: "44 inç (≈1118 mm)" },
    { k: "Baskı Hızı", v: "69,5 m² / saat" },
    { k: "Yazıcı Kafası", v: "Epson Micro Piezo TFP" },
    { k: "Mürekkep Sistemi", v: "1,5 litrelik mürekkep tankı" },
    { k: "Baskı Maliyeti", v: "Düşük maliyetli üretim için optimize" },
    { k: "Kontrol Paneli", v: "Tam ön kontrollü, renkli LCD ekran" },
    { k: "Kullanım Kolaylığı", v: "Kolay medya yükleme ve operasyon" },
    {
      k: "Bildirim Sistemi",
      v: "E-posta bildirimleri ile yazıcı durum uyarıları",
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
