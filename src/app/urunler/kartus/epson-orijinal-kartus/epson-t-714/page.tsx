// src/app/urunler/kartus/epson-orijinal-kartus/epson-t-714/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import EpsonT714Client from "./EpsonT714Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/epson-orijinal-kartus/epson-t-714";

export const metadata: Metadata = {
  title: "Epson T714 Orijinal Kartuşlar | Papirink",
  description:
    "Epson T714 orijinal kartuş serisi (T7141, T7142, T7143, T7144) için ürün bilgileri, baskı kapasitesi ve uyumlu yazıcı modeli (SureColor SC-S70610).",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Epson T714 Orijinal Kartuşlar | Papirink",
    description:
      "Epson T714 orijinal kartuşlar: kod seçimiyle ürün bilgisi, uyumlu model ve hızlı teklif.",
  },
};

export default function EpsonT714Page() {
  return (
    <>
      <Header />

      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <EpsonT714Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
