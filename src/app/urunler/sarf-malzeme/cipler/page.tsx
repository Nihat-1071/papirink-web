// src/app/urunler/sarf-malzemeleri/cipler/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import CiplerClient from "./CiplerClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/sarf-malzemeleri/cipler";

export const metadata: Metadata = {
  title: "Çipler | Papirink",
  description:
    "Epson ve HP uyumlu kartuş çipleri, atık tank çipleri ve özel (süper/one-time) çip seçenekleri. Modelinize göre filtreleyin, hızlı teklif alın.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Çipler | Papirink",
    description:
      "Epson/HP uyumlu çipler: atık tank çipi, kartuş çipi, one-time set ve süper çip seçenekleri.",
  },
};

export default function CiplerPage() {
  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <CiplerClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
