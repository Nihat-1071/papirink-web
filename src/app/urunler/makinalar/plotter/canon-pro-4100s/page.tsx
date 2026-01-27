import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/canon-pro-4100s";

export const metadata: Metadata = {
  title: "Canon PRO-4100S Plotter | Papirink",
  description:
    "Canon PRO-4100S plotter: 44 inç, 8 renkli pigment mürekkep sistemiyle CAD ve grafik baskılar için profesyonel büyük format çözüm. Teklif almak için iletişime geçin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "Canon Pro 4100S Plotter Çizici",
  brand: "Canon",
  category: "Canon Plotter Makinası",
  image: "/images/urunler/makinalar/plotter/canon-pro-4100s-plotter-cizici.jpg",

  description: `Canon Pro 4100S; 44 inç (1118 mm) baskı genişliği ve 8 renkli pigment mürekkep sistemiyle CAD çizimler, teknik planlar ve grafik üretimleri için geliştirilmiş profesyonel bir büyük format plotter çözümüdür.

Yüksek çözünürlük, hassas çizgi doğruluğu ve geniş medya uyumluluğu sayesinde mimarlık, mühendislik ve baskı merkezlerinde güvenle kullanılabilir. Teklif ve uygun sarf seçimi için ekibimizle iletişime geçebilirsiniz.`,

  specs: [
    { k: "Yazıcı Türü", v: "8 Renkli, 44 inç / 1118 mm" },
    {
      k: "Baskı Teknolojisi",
      v: "Canon Bubblejet (8 renk entegre, 12 yonga/baskı kafası x 1 baskı kafası)",
    },
    { k: "Baskı Çözünürlüğü", v: "2400 x 1200 dpi" },
    {
      k: "Püskürtme Ucu Sayısı",
      v: "18.432 (1536 x 4 renk + 3072 x 4 renk)",
    },
    {
      k: "Mürekkep Damla Boyutu",
      v: "Minimum 4 pl/renk",
    },
    {
      k: "Mürekkep Türü",
      v: "Pigment: Siyah, Mat Siyah, Cam Göbeği, Eflatun, Sarı, Fotoğraf Cam Göbeği, Fotoğraf Eflatunu, Gri",
    },
    {
      k: "A0 Baskı Süresi",
      v: "Düz Kağıt: Hız 01:21 dk • Standart 02:24 dk",
    },
    {
      k: "Kuşe (A0) Baskı",
      v: "Standart 02:24 dk • Yüksek Kalite 05:34 dk",
    },
    {
      k: "Parlak Fotoğraf (A0)",
      v: "Standart 04:44 dk • Yüksek Kalite 05:34 dk (ISO JIS SCID N5)",
    },
    { k: "Güç Beslemesi", v: "AC 100–240 V (50–60 Hz)" },
    { k: "Standart Bellek", v: "3 GB" },
    { k: "Sabit Sürücü", v: "500 GB (Şifrelenmiş HDD)" },
    {
      k: "Opsiyonel / Sarf",
      v: "Mürekkep: PFI-1100 (160 ml), PFI-1300 (330 ml), PFI-1700 (700 ml) • Baskı Kafası: PF-10 • Kesici: CT-07 • Bakım Kartuşu: MC-30",
    },
    {
      k: "Boyut & Ağırlık",
      v: "1593×984×1168 mm (sepet açık) • 1593×766×1168 mm (sepet kapalı) • 143 kg (rulo tutucu dahil; mürekkep/baskı kafaları hariç)",
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
