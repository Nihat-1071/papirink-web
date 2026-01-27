// src/app/urunler/kartus/epson-orijinal-kartus/epson-t-596/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import EpsonT596Client from "./EpsonT596Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/epson-orijinal-kartus/epson-t-596";

export const metadata: Metadata = {
  title: "Epson T596 Orijinal Kartuşlar | Papirink",
  description:
    "Epson T596 orijinal kartuş serisi (T596C White/Beyaz) için ürün bilgisi, baskı kapasitesi ve uyumlu yazıcı modelleri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Epson T596 Orijinal Kartuşlar | Papirink",
    description:
      "Epson T596 orijinal kartuşlar: kodlara göre ürün bilgisi, uyumlu modeller ve hızlı teklif.",
  },
};

export default function EpsonT596Page() {
  return (
    <>
      <Header />

      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <EpsonT596Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
