// src/app/urunler/kagit/polyester-kanvas/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";
import { CONTACT } from "../../../lib/contact";
import PolyesterKanvasClient from "./PolyesterKanvasClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/kagit/polyester-kanvas";

export const metadata: Metadata = {
  title: "Polyester Kanvas | 230 / 260 gr | Papirink",
  description:
    "Papirink polyester kanvas: 62cm, 76cm, 91.4cm, 107cm, 112cm, 152cm en seçenekleri. 30 mt uzunluk; 230/260 gr alternatifleri. Fiyat için iletişime geçin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Polyester Kanvas | 230 / 260 gr | Papirink",
    description:
      "Polyester kanvas rulo seçenekleri: 30 mt, 230/260 gr. Fiyat alınız.",
    siteName: "Papirink",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ScrollToTopProgress />
      <PolyesterKanvasClient contactHref="/iletisim" contact={CONTACT} />

      <Footer />
    </>
  );
}
