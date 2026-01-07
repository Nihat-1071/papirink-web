// src/app/urunler/makinalar/tarayici/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import TarayiciClient from "../tarayici/TarayiciClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/makinalar/tarayici";

export const metadata: Metadata = {
  title: "Tarayıcılar | Papirink",
  description:
    "A0 geniş format tarayıcılar ve teknik çizim (CAD) tarama çözümleri. Colortrac ve Graphtec modellerini inceleyin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Tarayıcılar | Papirink",
    description:
      "A0 geniş format tarayıcılar: Colortrac ve Graphtec modelleri, hızlı destek ve doğru model seçimi.",
  },
};

export default function TarayiciPage() {
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
              { label: "Makinalar", href: "/urunler/makinalar" },
              { label: "Tarayıcı" },
            ]}
          />

          <TarayiciClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
