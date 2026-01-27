// src/app/urunler/kagit/yapiskanli-kagitlar/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";
import YapiskanliKagitlarClient from "./YapiskanliKagitlarClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kagit/yapiskanli-kagitlar";

export const metadata: Metadata = {
  title: "Yapışkanlı Kağıtlar | Papirink",
  description:
    "Mat ve parlak yapışkanlı kağıt seçenekleri: 61cm, 107cm, 91.4cm en; 30mt uzunluk; 150gr / 240gr alternatifleri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Yapışkanlı Kağıtlar | Papirink",
    description:
      "Mat/Parlak yapışkanlı kağıtlar: farklı en ve gramaj seçenekleriyle teklif alın.",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ScrollToTopProgress />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-6" />

      <main className="bg-white">
        <YapiskanliKagitlarClient contactHref="/iletisim" />
      </main>

      <Footer />
    </>
  );
}
