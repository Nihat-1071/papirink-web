// src/app/urunler/makinalar/uv/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import UvClient from "../uv/UvClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/makinalar/uv";

export const metadata: Metadata = {
  title: "UV Baskı Makinaları | Papirink",
  description:
    "Papjet UV baskı makinası çözümleri. Düz zemin, tabela, cam, ahşap ve promosyon ürünlerinde profesyonel UV baskı.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "UV Baskı Makinaları | Papirink",
    description:
      "Papjet UV baskı makinaları ile hızlı, dayanıklı ve yüksek kaliteli baskı çözümleri.",
  },
};

export default function UvPage() {
  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <UvClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
