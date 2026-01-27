// src/app/urunler/makinalar/plotter/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PlotterClient from "./PlotterClient";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/makinalar/plotter";

export const metadata: Metadata = {
  title: "Plotter Makineleri | Papirink",
  description:
    "Canon, HP ve Epson plotter çözümlerini inceleyin. Teknik çizim ve büyük format baskı ihtiyaçları için uygun modeli bulun.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Plotter Makineleri | Papirink",
    description:
      "Canon, HP ve Epson plotter çözümleri: büyük format çizici/yazıcı modelleri ve hızlı destek.",
  },
};

export default function PlotterPage() {
  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />
      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">

          {/* Client kısmı */}
          <PlotterClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
