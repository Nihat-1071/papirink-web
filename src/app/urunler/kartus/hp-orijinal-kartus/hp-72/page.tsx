// src/app/urunler/kartus/hp-orijinal-kartus/hp-72/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import Breadcrumb from "../../../../components/Breadcrumb";
import Hp72Client from "./Hp72Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/hp-orijinal-kartus/hp-72";

export const metadata: Metadata = {
  title: "HP 72 Orijinal Kartuşlar | Papirink",
  description:
    "HP 72 orijinal kartuş serisi (C9370A, C9371A, C9372A, C9373A, C9374A, C9403A) için uyumlu modeller ve ürün bilgileri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP 72 Orijinal Kartuşlar | Papirink",
    description:
      "HP 72 orijinal kartuşlar: kodlara göre ürün bilgisi, uyumlu yazıcılar ve hızlı teklif.",
  },
};

export default function Hp72Page() {
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
              { label: "Kartuş", href: "/urunler/kartus" },
              { label: "HP Orijinal Kartuş", href: "/urunler/kartus/hp-orijinal-kartus" },
              { label: "HP 72" },
            ]}
          />

          <Hp72Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
