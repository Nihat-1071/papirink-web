import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath =
  "/urunler/makinalar/plotter/graphtec-csx530-600dpi-a0-36-inc";

export const metadata: Metadata = {
  title: 'Graphtec CSX530 600dpi A0 36" Tarayıcı | Papirink',
  description:
    "Graphtec CSX530 600 DPI A0 (36 inç) geniş format tarayıcı: CIS sensör, yüksek hassasiyet, CAD ve mühendislik taramaları için profesyonel çözüm.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: 'Graphtec CSX530 600dpi A0 Tarayıcı (36")',
  brand: "Graphtec",
  category: "Geniş Format Tarayıcı",
  image:
    "/images/urunler/makinalar/tarayici/graphtec-csx530-600dpi-a0-tarayici-36-inc.jpg",

  description: `Graphtec CSX530 geniş format tarayıcı; mühendislik, mimarlık ve CAD uygulamaları için geliştirilmiş, yüksek hassasiyetli ve güvenilir bir tarama çözümüdür.

(Stand hariç fiyatımızdır.)

600 dpi optik çözünürlüğe sahip CIS (Contact Image Sensor) tarama sistemi ile teknik çizimler, planlar ve dokümanlar yüksek doğrulukla dijital ortama aktarılır. Otomatik doküman algılama, farklı kağıt kalınlıklarıyla uyum ve hızlı tarama modları sayesinde yoğun çalışma ortamları için idealdir.

Graphtec CSX530; A0, A1, A2 ve ANSI formatlarını destekleyen profesyonel bir A0 tarayıcıdır.`,

  specs: [
    { k: "Model", v: "Graphtec CSX530" },
    { k: "Maks. Doküman Genişliği", v: "257 – 965 mm" },
    { k: "Efektif Tarama Genişliği", v: "50 – 932.2 mm" },
    {
      k: "Efektif Tarama Uzunluğu",
      v: "50 mm – 999.999 m (programlanabilir)",
    },
    {
      k: "Standart Doküman Boyutları",
      v: "ISO (A0–A4), JIS (B1–B4), DIN, ANSI (E–A)",
    },
    {
      k: "Tarama Sistemi",
      v: "CIS (Contact Image Sensor) – 5 adet zigzag A4 sensör",
    },
    { k: "Optik Çözünürlük", v: "600 dpi" },
    {
      k: "İnterpolasyon",
      v: "50 – 9600 dpi (1 dpi adımlarla)",
    },
    {
      k: "Renk Derinliği",
      v: "Renkli 48 bit / Gri 16 bit",
    },
    {
      k: "Tarama Hızı (A0 – Yüksek Hız)",
      v: "7 sn Mono/Gri – 17 sn Renkli",
    },
    {
      k: "Tarama Hızı (A0 – Normal)",
      v: "12 sn Mono/Gri – 31 sn Renkli",
    },
    {
      k: "Doküman Kalınlığı",
      v: "0.05 – 1.6 mm",
    },
    {
      k: "Renk Uzayı",
      v: "sRGB, Adobe RGB",
    },
    { k: "Bağlantı", v: "USB 2.0" },
    {
      k: "Güç Tüketimi",
      v: "42 W (beklemede 3 W)",
    },
    {
      k: "Boyut & Ağırlık (Stand Hariç)",
      v: "1097 × 160 × 322 mm / 25 kg",
    },
    {
      k: "Boyut & Ağırlık (Stand Dahil)",
      v: "1097 × 972 × 717 mm / 39 kg",
    },
    {
      k: "Uyumluluk",
      v: "UL, FCC, CE, CCC",
    },
    {
      k: "Yazılım",
      v: "Scanning Master Pro Color, Scanning ARTS 2 (Windows)",
    },
  ],
};

export default function Page() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Makinalar", href: "/urunler/makinalar" },
    { label: "Tarayıcı", href: "/urunler/makinalar/plotter" },
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
