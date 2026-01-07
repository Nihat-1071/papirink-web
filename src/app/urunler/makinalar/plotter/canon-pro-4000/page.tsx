import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import ProductHeroClient from "./ProductHeroClient";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/canon-pro-4000";

export const metadata: Metadata = {
  title: "Canon PRO-4000 Plotter | Papirink",
  description:
    "Canon PRO-4000 plotter: büyük format baskı, grafik ve teknik çizim çıktıları için profesyonel çözüm. Teklif ve tedarik için iletişime geçin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "Canon Pro 4000 Plotter Çizici",
  brand: "Canon",
  category: "Plotter Makinası",
  image: "/images/urunler/makinalar/plotter/canon-pro-4000-plotter-cizici.jpg",

  // Telefon/WhatsApp linklerini buradan yönet
  phoneHref: "tel:+90XXXXXXXXXX",
  whatsappHref: "https://wa.me/90XXXXXXXXXX",

  // Açıklama + teknik bilgiler (istersen burayı çoğalt)
  description:
    "Canon Pro 4000; büyük format baskı, grafik ve teknik çizim çıktıları için profesyonel bir çözümdür. Uygun konfigürasyon, sarf seçimi ve teklif için ekibimizle iletişime geçebilirsiniz.",

  specs: [
    { k: "Yazıcı Türü", v: "12 renkli, 44 inç / 1118 mm" },
    { k: "Baskı Çözünürlüğü", v: "2400 x 1200 dpi" },
    { k: "Mürekkep", v: "Pigment mürekkep sistemi (çoklu renk)" },
    { k: "Bağlantı", v: "USB / Ethernet / Kablosuz (modele göre)" },
    { k: "Kullanım", v: "CAD çizimler, poster, grafik ve fotoğraf baskı" },
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
        {/* Breadcrumb */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Breadcrumb items={breadcrumbItems} />
        </section>

        {/* Ürün üst alan (kurumsal hero) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ProductHeroClient
            title={product.title}
            brand={product.brand}
            category={product.category}
            image={product.image}
            phoneHref={product.phoneHref}
            whatsappHref={product.whatsappHref}
          />

          {/* İçerik kartları */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Açıklama */}
            <section className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-4 bg-white">
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
                      <dt className="col-span-1 text-xs font-bold text-slate-500">
                        {s.k}
                      </dt>
                      <dd className="col-span-2 text-sm font-semibold text-slate-900">
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 leading-6">
                  Detaylı teknik tablo ve sarf uyumu için “Teklif Al” üzerinden
                  bilgi isteyebilirsiniz.
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
