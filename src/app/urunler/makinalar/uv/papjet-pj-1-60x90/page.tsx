import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/uv/papjet-pj-1-60x90";

export const metadata: Metadata = {
  title: "Papjet PJ-1 60x90 UV Baskı Makinası | Papirink",
  description:
    "Papjet PJ-1 60x90 UV baskı makinası: 60×90 cm baskı alanı, 8 cm baskı yüksekliği, 48 m²/saat hız, Ricoh GH2220 baskı kafası ve LED UV kurutma teknolojisi.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "Papjet PJ-1 60x90 UV",
  brand: "Papirink",
  category: "UV Baskı Makinası",
  image: "/images/urunler/makinalar/uv/papjet-pj-1-60x90-uv.jpg",

  description: `Papjet PJ-1 60x90 UV baskı makinası; yüksek hassasiyet, güçlü vakum emiş sistemi ve yeni nesil LED UV kurutma teknolojisi ile profesyonel UV baskı çözümleri sunar.

60 × 90 cm baskı alanı ve 8 cm’ye kadar baskı yüksekliği sayesinde hem düz hem de farklı kalınlıktaki malzemeler üzerinde net ve dayanıklı baskılar alabilirsiniz. Ricoh GH2220 baskı kafası teknolojisi ile değişken damlacık kontrolü sağlanır; bu da daha keskin detaylar ve doğru renkler anlamına gelir.

Cam, ahşap, MDF, pleksi, metal, PVC, leksan, ayna, folyo, canvas, branda, duratrans, fotoğraf kağıdı ve daha birçok yüzeye baskı yapabilme kabiliyeti ile reklam, promosyon ve endüstriyel üretim alanlarında geniş kullanım sunar.`,

  specs: [
    { k: "Baskı Alanı", v: "60 × 90 cm" },
    { k: "Baskı Yüksekliği", v: "8 cm’ye kadar" },
    { k: "Üretim Hızı", v: "48 m² / saat" },
    { k: "Vakum Sistemi", v: "Yüksek vakum emiş gücü" },
    { k: "Baskı Kafası", v: "3 – 8 adet baskı kafası opsiyonu" },
    { k: "Çözünürlük", v: "720 × 2400 dpi • 3 pt yazı baskı kabiliyeti" },
    {
      k: "Kafa Teknolojisi",
      v: "Ricoh GH2220 • 3 – 18 pl değişken damlacık",
    },
    { k: "Renk Yönetimi", v: "Gelişmiş gri denge yönetimi" },
    { k: "Yükseklik Ölçümü", v: "Otomatik malzeme yüksekliği ölçme" },
    {
      k: "Çarpma Koruması",
      v: "Wrinkle Analyzer opsiyonu",
    },
    {
      k: "Basınç Sistemi",
      v: "Mürekkep damlamasını önleyen negatif basınç",
    },
    {
      k: "Kurutma",
      v: "Yeni nesil LED UV • düşük enerji tüketimi",
    },
    { k: "Soğutma", v: "LED lambalar için su soğutma ünitesi" },
    {
      k: "Yüzey Uyumu",
      v: "Emici ve emici olmayan yüzeylerde baskı",
    },
    {
      k: "Mürekkep",
      v: "Esnek ve sert yüzeyler için UV mürekkep",
    },
    {
      k: "Renk Seçenekleri",
      v: "CMYK+W veya CMYK+W+V",
    },
    {
      k: "Baskı Yapılabilen Malzemeler",
      v: "Cam, ahşap, MDF, pleksi, metal, PVC, leksan, kalem, çakmak, ayna, folyo, canvas, branda, barisol, lightbox, duratrans, fotoğraf kağıdı, cep telefonu kabı, ajanda vb.",
    },
    {
      k: "Beyaz Mürekkep",
      v: "Donma önleyici sistem",
    },
    { k: "Taşıma Kapasitesi", v: "30 kg" },
  ],
};

export default function Page() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Makinalar", href: "/urunler/makinalar" },
    { label: "UV Baskı Makinaları", href: "/urunler/makinalar/uv" },
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
