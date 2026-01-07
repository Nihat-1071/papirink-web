// src/app/urunler/makinalar/katlama-makinasi/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import KatlamaMakinesiClient from "../katlama-makinasi/KatlamaMakinesiClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/makinalar/katlama-makinasi";

export const metadata: Metadata = {
  title: "Katlama Makinası | Papirink",
  description:
    "Projeler, planlar ve teknik çizimler için katlama makinası çözümleri. Foldjet ve ROWE modellerini inceleyin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Katlama Makinası | Papirink",
    description:
      "Katlama makinası çözümleri: Foldjet ve ROWE modelleri, hızlı destek ve doğru model seçimi.",
  },
};

export default function KatlamaMakinesiPage() {
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
              { label: "Katlama Makinası" },
            ]}
          />

          <KatlamaMakinesiClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
