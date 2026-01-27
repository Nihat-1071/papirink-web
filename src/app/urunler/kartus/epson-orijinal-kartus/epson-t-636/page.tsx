// src/app/urunler/kartus/epson-orijinal-kartus/epson-t-636/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import EpsonT636Client from "./EpsonT636Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/epson-orijinal-kartus/epson-t-636";

export const metadata: Metadata = {
  title: "Epson T636 Orijinal Kartuşlar | Papirink",
  description:
    "Epson T636 orijinal kartuş serisi (T6365, T6366, T6367, T636A, T636B) için ürün bilgileri, baskı kapasitesi ve uyumlu yazıcı modelleri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Epson T636 Orijinal Kartuşlar | Papirink",
    description:
      "Epson T636 orijinal kartuşlar: kod seçimiyle ürün bilgisi, uyumlu modeller ve hızlı teklif.",
  },
};

export default function EpsonT636Page() {
  return (
    <>
      <Header />

      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <EpsonT636Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
