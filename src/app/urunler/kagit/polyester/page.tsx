// src/app/urunler/kagit/plotter-polyesteri/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";
import { CONTACT } from "../../../lib/contact";
import PlotterPolyesteriClient from "./PlotterPolyesteriClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/kagit/plotter-polyesteri";

export const metadata: Metadata = {
  title: "Plotter Polyesteri | 125 / 150 Micron | Papirink",
  description:
    "Papirink plotter polyest eri: 61cm ve 91.4cm en seçenekleri. 30 mt (150 micron) ve 50 mt plan kopya (125 micron) alternatifleri. Fiyat için iletişime geçin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Plotter Polyesteri | 125 / 150 Micron | Papirink",
    description:
      "Plotter ve plan kopya uygulamaları için polyester rulo seçenekleri. Fiyat alınız.",
    siteName: "Papirink",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ScrollToTopProgress />

      <PlotterPolyesteriClient contactHref="/iletisim" contact={CONTACT} />

      <Footer />
    </>
  );
}
