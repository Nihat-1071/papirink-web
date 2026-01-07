// src/app/urunler/kagit/fosforlu-kagitlar/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";
import FosforluKagitlarClient from "./FosforluKagitlarClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/kagit/fosforlu-kagitlar";

export const metadata: Metadata = {
  title: "Fosforlu Kağıtlar | Papirink",
  description:
    "Fosforlu Sarı Kağıt 98 gr seçenekleri: 61cm, 91.4cm ve 107cm enlerinde 100mt rulolar. Teklif almak için iletişime geçin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Fosforlu Kağıtlar | Papirink",
    description:
      "Fosforlu Sarı Kağıt 98 gr: 61cm / 91.4cm / 107cm enlerinde 100mt rulolar.",
    siteName: "Papirink",
    type: "website",
  },
};

export default function Page() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Kağıt", href: "/urunler/kagit" },
    { label: "Fosforlu Kağıtlar", href: "/urunler/kagit/fosforlu-kagitlar" },
  ];

  return (
    <>
      <Header />
      <ScrollToTopProgress />

      <div className="mx-auto max-w-6xl px-4 pt-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <FosforluKagitlarClient contactHref="/iletisim" />

      <Footer />
    </>
  );
}
