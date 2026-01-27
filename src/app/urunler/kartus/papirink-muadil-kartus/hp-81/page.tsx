// src/app/urunler/kartus/papirink-muadil-kartus/hp-81/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import Hp81Client from "./Hp81Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/papirink-muadil-kartus/hp-81";

export const metadata: Metadata = {
  title: "HP 81 Muadil Kartuş (Papirink) | Papirink",
  description:
    "Papirink HP 81 muadil kartuş (tüm renkler) – HP DesignJet 5500 uyumlu, 680 ml kapasite ve hızlı teklif.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP 81 Muadil Kartuş (Papirink) | Papirink",
    description:
      "HP DesignJet 5500 için Papirink HP 81 muadil kartuş: renk seçimi, ürün bilgisi ve hızlı fiyat teklifi.",
  },
};

export default function Hp81Page() {
  return (
    <>
      <Header />

      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <Hp81Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
