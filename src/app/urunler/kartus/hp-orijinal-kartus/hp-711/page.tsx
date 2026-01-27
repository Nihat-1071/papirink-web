// src/app/urunler/kartus/hp-orijinal-kartus/hp-711/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import Hp711Client from "./Hp711Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/hp-orijinal-kartus/hp-711";

export const metadata: Metadata = {
  title: "HP 711 Orijinal Kartuşlar | Papirink",
  description:
    "HP 711 orijinal kartuş serisi (CZ130A, CZ131A, CZ132A, CZ133A) ve C1Q10A baskı kafası seti için uyumlu modeller ve ürün bilgileri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP 711 Orijinal Kartuşlar | Papirink",
    description:
      "HP 711 orijinal kartuşlar ve baskı kafası: kodlara göre ürün bilgisi, uyumlu yazıcılar ve hızlı teklif.",
  },
};

export default function Hp711Page() {
  return (
    <>
      <Header />

      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <Hp711Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
