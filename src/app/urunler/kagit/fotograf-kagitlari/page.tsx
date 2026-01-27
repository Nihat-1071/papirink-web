// src/app/urunler/kagit/fotograf-kagitlari/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";
import { CONTACT } from "../../../lib/contact";
import FotografKagitlariClient from "./FotografKagitlariClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: domain sabitle
const pagePath = "/urunler/kagit/fotograf-kagitlari";

export const metadata: Metadata = {
  title: "Fotoğraf Kağıtları | Parlak & Saten | Papirink",
  description:
    "Papirink fotoğraf kağıtları: parlak ve saten yüzey seçenekleri. 62cm, 91.4cm, 107cm, 106.7cm en; 30/50 mt uzunluk; 135/200/240 gr seçenekleri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Fotoğraf Kağıtları | Parlak & Saten | Papirink",
    description:
      "Rulo fotoğraf kağıdı seçenekleri: parlak/saten, 135/200/240 gr. Fiyat için iletişime geçin.",
    siteName: "Papirink",
    type: "website",
  },
};

export default function Page() {
  const crumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Kağıt", href: "/urunler/kagit" },
    { label: "Fotoğraf Kağıtları", href: pagePath },
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

      <FotografKagitlariClient contactHref="/iletisim" contact={CONTACT} />

      <Footer />
    </>
  );
}
