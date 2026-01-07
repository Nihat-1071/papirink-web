// src/app/urunler/kartus/epson-orijinal-kartus/epson-t-694/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import Breadcrumb from "../../../../components/Breadcrumb";
import EpsonT694Client from "./EpsonT694Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/epson-orijinal-kartus/epson-t-694";

export const metadata: Metadata = {
  title: "Epson T694 Orijinal Kartuşlar | Papirink",
  description:
    "Epson T694 orijinal kartuş serisi (T6941, T6942, T6943, T6944, T6945) için ürün bilgileri, baskı kapasitesi ve uyumlu yazıcı modelleri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Epson T694 Orijinal Kartuşlar | Papirink",
    description:
      "Epson T694 orijinal kartuşlar: kod seçimiyle ürün bilgisi, uyumlu modeller ve hızlı teklif.",
  },
};

export default function EpsonT694Page() {
  return (
    <>
      <Header />

      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Ürünler", href: "/urunler" },
              { label: "Kartuş", href: "/urunler/kartus" },
              {
                label: "Epson Orijinal Kartuş",
                href: "/urunler/kartus/epson-orijinal-kartus",
              },
              { label: "Epson T694" },
            ]}
          />

          <EpsonT694Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
