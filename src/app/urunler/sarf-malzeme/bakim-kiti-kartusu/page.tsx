// src/app/urunler/sarf-malzemeleri/bakim-kiti-kartusu/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import BakimKitiKartusuClient from "./BakimKitiKartusuClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/sarf-malzemeleri/bakim-kiti-kartusu";

export const metadata: Metadata = {
  title: "Bakım Kiti / Kartuşu | Papirink",
  description:
    "Plotter ve geniş format yazıcılar için bakım kiti, bakım kartuşu ve atık tank kutusu seçeneklerini tek sayfada kategori bazında inceleyin. Hızlı teklif alın.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Bakım Kiti / Kartuşu | Papirink",
    description:
      "HP ve Epson uyumlu bakım kiti/kartuşu ve atık tank kutusu ürünleri. Kategori filtreleme ve hızlı destek.",
  },
};

export default function BakimKitiKartusuPage() {
  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <BakimKitiKartusuClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
