import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/etiket-makinalari/papjet-pj33x48";

export const metadata: Metadata = {
  title: "Papjet PJ33x48 Etiket Makinası | Papirink",
  description:
    "Papjet PJ33x48 etiket makinası: Wi-Fi/USB kesim, CorelDRAW ile direkt kesim, otomatik beslemeli sistem ve 33×48 tabaka etiket kesim özellikleri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "Papjet PJ33x48 Etiket Makinası",
  brand: "Papirink",
  category: "Etiket Makinası",
  image:
    "/images/urunler/makinalar/etiket-makinalari/papjet-pj33x48-etiket-makinasi.jpg",

  description: `Papjet PJ33x48 etiket makinası; tabaka etiket kesim süreçlerini hızlandırmak için tasarlanmış, kullanımı kolay ve yüksek verim sağlayan bir çözümdür.

Dokunmatik ekranı ve Türkçe arayüzü sayesinde operatör kullanımını kolaylaştırır. Wi-Fi ve USB üzerinden kesim alabilir; CorelDRAW ile direkt kesim desteği sayesinde iş akışını pratik hale getirir. Otomatik beslemeli sistemiyle 33×48 tabaka etiket kesim işlemlerinde düzenli ve stabil sonuçlar sunar.`,

  specs: [
    { k: "Ekran", v: "Full fonksiyonel dokunmatik ekran" },
    { k: "Bağlantı", v: "Wi-Fi ve USB flaştan kesim" },
    { k: "Yazılım", v: "CorelDRAW ile direkt kesim" },
    { k: "Besleme", v: "Otomatik beslemeli sistem" },
    { k: "Kesim Tipi", v: "33 × 48 tabaka etiket kesim" },
    { k: "Panel", v: "Tam fonksiyon LCD ekran" },
    { k: "Arayüz", v: "Basit ve anlaşılır Türkçe arayüz" },
  ],
};

export default function Page() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Makinalar", href: "/urunler/makinalar" },
    { label: "Etiket Makinaları", href: "/urunler/makinalar/etiket-makinalari" },
    { label: product.title, href: pagePath },
  ];

  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="min-h-screen bg-[#f5f7fb]">
        <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <ProductHeroClient
            title={product.title}
            brand={product.brand}
            category={product.category}
            image={product.image}
          />

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Ürün Açıklaması */}
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:col-span-2">
              <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-4">
                <div className="h-10 w-1 rounded-full bg-[#dc2626]" />
                <h2 className="text-xl font-extrabold text-slate-900">
                  Ürün Açıklaması
                </h2>
              </div>

              <div className="px-6 py-5">
                <p className="whitespace-pre-line leading-7 text-slate-800">
                  {product.description}
                </p>
              </div>
            </section>

            {/* Teknik Özellikler */}
            <aside className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
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
