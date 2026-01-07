// src/app/urunler/kartus/hp-orjinal-kartus/hp-728/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import ScrollToTopProgress from "../../../../components/ScrollToTopProgress";
import Hp728Client from "./Hp728Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/kartus/hp-orjinal-kartus/hp-728";

export const metadata: Metadata = {
  title: "HP 728 Orijinal Kartuşlar (300 ml) | Papirink",
  description:
    "HP 728 serisi 300 ml orijinal kartuş seçenekleri için kod seçin, görseli inceleyin ve fiyat alın.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP 728 Orijinal Kartuşlar (300 ml) | Papirink",
    description:
      "HP 728 serisi 300 ml orijinal kartuş seçenekleri için kod seçin, görseli inceleyin ve fiyat alın.",
    type: "website",
  },
};

export default function Page() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Kartuş", href: "/urunler/kartus" },
    { label: "HP Orijinal Kartuş", href: "/urunler/kartus/hp-orjinal-kartus" },
    { label: "HP 728", href: pagePath },
  ];

  return (
    <>
      <Header />
      <ScrollToTopProgress />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mt-4 flex items-end justify-between gap-3 flex-wrap">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              HP 728 Orijinal Kartuşlar (300 ml)
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Kod seçerek ürün bilgisi, uyumluluk ve görseli tek sayfada inceleyin.
            </p>
          </div>

          <Link
            href="/urunler/kartus/hp-orjinal-kartus"
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            HP Orijinal Kartuşlara Dön
          </Link>
        </div>

        <Hp728Client />
      </main>

      <Footer />
    </>
  );
}
