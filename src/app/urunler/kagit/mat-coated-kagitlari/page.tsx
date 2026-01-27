// src/app/urunler/kagit/mat-coated-kagitlari/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";
import { CONTACT } from "../../../lib/contact";
import MatCoatedKagitlariClient from "./MatCoatedKagitlariClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: domain sabitle
const pagePath = "/urunler/kagit/mat-coated-kagitlari";

export const metadata: Metadata = {
  title: "Mat Coated Kağıtları | Papirink",
  description:
    "Papirink Mat Coated kağıtları: 62cm, 91.4cm, 107cm, 152cm en seçenekleri. 50 mt uzunluk; 120/170/230 gr seçenekleri. Fiyat için iletişime geçin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Mat Coated Kağıtları | Papirink",
    description:
      "Mat Coated rulo kağıt seçenekleri: 50 mt, 120/170/230 gr. Teknik ve görsel baskılar için ideal.",
    siteName: "Papirink",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ScrollToTopProgress />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-6" />

      <MatCoatedKagitlariClient contactHref="/iletisim" contact={CONTACT} />

      <Footer />
    </>
  );
}
