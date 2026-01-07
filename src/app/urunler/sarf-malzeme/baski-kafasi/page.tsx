// src/app/urunler/sarf-malzemeleri/baski-kafasi/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import BaskiKafasiClient from "./BaskiKafasiClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/sarf-malzemeleri/baski-kafasi";

export const metadata: Metadata = {
  title: "Baskı Kafası | Papirink",
  description:
    "HP (70, 72, 771, 831) ve Canon (PF-03, PF-05) baskı kafaları. Seri bazında filtreleyin; tüm ürünler tek sayfada listelenir. Hızlı destek ve teklif.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Baskı Kafası | Papirink",
    description:
      "HP ve Canon yazıcılar için baskı kafaları: seri bazında filtreleme, uyumlu model bilgisi ve hızlı destek.",
  },
};

export default function BaskiKafasiPage() {
  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <BaskiKafasiClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
