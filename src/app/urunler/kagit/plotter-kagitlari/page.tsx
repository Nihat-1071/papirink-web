// src/app/urunler/kagit/plotter-kagitlari/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";
import { CONTACT } from "../../../lib/contact";
import PlotterKagitlariClient from "./PlotterKagitlariClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: domain sabitle
const pagePath = "/urunler/kagit/plotter-kagitlari";

export const metadata: Metadata = {
  title: "Plotter Kağıtları 80 gr | Papirink",
  description:
    "Papirink yerli üretim 80 gr plotter (proje) kağıtları: farklı en ve uzunluk seçenekleri. Teknik baskılar ve CAD/plot çıktıları için uygundur.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Plotter Kağıtları 80 gr | Papirink",
    description:
      "80 gr plotter kağıdı seçenekleri: 31cm–152cm en, 50/100 mt uzunluk. Fiyat için iletişime geçin.",
    siteName: "Papirink",
    type: "website",
  },
};

export default function Page() {
  const crumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Kağıt", href: "/urunler/kagit" },
    { label: "Plotter Kağıtları", href: pagePath },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: c.label,
      item: `${baseUrl}${c.href}`,
    })),
  };

  return (
    <>
      <Header />
      <ScrollToTopProgress />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-6" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PlotterKagitlariClient contactHref="/iletisim" contact={CONTACT} />

      <Footer />
    </>
  );
}
