import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";
import { CONTACT } from "../../../lib/contact";
import AydingerClient from "./AydingerClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/kagit/aydingere";

export const metadata: Metadata = {
  title: "Aydınger Kağıtları | Rulo & Tabaka | Papirink",
  description:
    "Papirink aydınger kağıtları: rulo plotter aydıngeri 95 gr (50 mt), plan kopya aydıngeri 95 gr (150 mt) ve tabaka/paket aydınger-eskiz seçenekleri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Aydınger Kağıtları | Rulo & Tabaka | Papirink",
    description:
      "Aydınger ürünleri: rulo ve tabaka seçenekleri. Fiyat için iletişime geçin.",
    siteName: "Papirink",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ScrollToTopProgress />


      <AydingerClient contactHref="/iletisim" contact={CONTACT} />

      <Footer />
    </>
  );
}
