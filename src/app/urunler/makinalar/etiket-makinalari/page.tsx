// src/app/urunler/makinalar/etiket-makinalari/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import EtiketMakinalariClient from "../etiket-makinalari/EtiketMakinalariClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/makinalar/etiket-makinalari";

export const metadata: Metadata = {
  title: "Etiket Makinaları | Papirink",
  description:
    "Papjet etiket makinası çözümleri. Rulo etiket baskı, hızlı üretim ve profesyonel etiketleme ihtiyaçları için ideal çözümler.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Etiket Makinaları | Papirink",
    description:
      "Papjet etiket makinaları ile hızlı, net ve dayanıklı etiket baskı çözümleri.",
  },
};

export default function EtiketMakinalariPage() {
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
              { label: "Etiket Makinaları" },
            ]}
          />

          <EtiketMakinalariClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
