// src/app/urunler/kagit/pamuklu-kanvas-cotton/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import Breadcrumb from "../../../components/Breadcrumb";
import PamukluKanvasCottonClient from "./PamukluKanvasCottonClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kagit/pamuklu-kanvas-cotton";

export const metadata: Metadata = {
  title: "Pamuklu Kanvas (Cotton) | Papirink",
  description:
    "Pamuklu kanvas (cotton) 380 gr ürünleri: 62cm, 107cm, 112cm, 152cm ve 914cm ebat seçenekleri. Hızlı fiyat teklifi alın.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Pamuklu Kanvas (Cotton) | Papirink",
    description:
      "Pamuklu kanvas (cotton) 380 gr: ebatlara göre ürünleri inceleyin ve hızlı teklif alın.",
  },
};

export default function PamukluKanvasCottonPage() {
  return (
    <>
      <Header />

      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Ürünler", href: "/urunler" },
              { label: "Kağıt", href: "/urunler/kagit" },
              { label: "Pamuklu Kanvas (Cotton)" },
            ]}
          />

          <PamukluKanvasCottonClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
