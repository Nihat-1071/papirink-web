// src/app/urunler/murekkep/hp-uyumlu-murekkep/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import Breadcrumb from "../../../components/Breadcrumb";
import HpUyumluMurekkepClient from "./HpUyumluMurekkepClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/murekkep/hp-uyumlu-murekkep";

export const metadata: Metadata = {
  title: "HP Uyumlu Mürekkepler | Papirink",
  description:
    "HP uyumlu plotter mürekkepleri: Pigment, Dye ve PageWide serilerinde 500 gr seçenekleri. Renk ve seri bazlı ürün bilgileri ve hızlı teklif.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP Uyumlu Mürekkepler | Papirink",
    description:
      "HP uyumlu mürekkep çözümleri: Pigment/Dye/PageWide ürünleri; renk seçimi, uyumlu yazıcı serileri ve hızlı teklif.",
  },
};

export default function HpUyumluMurekkepPage() {
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
              { label: "Mürekkep", href: "/urunler/murekkep" },
              { label: "HP Uyumlu Mürekkep" },
            ]}
          />

          <HpUyumluMurekkepClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
