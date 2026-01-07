// src/app/urunler/kartus/hp-orijinal-kartus/hp-70/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import Breadcrumb from "../../../../components/Breadcrumb";
import Hp70Client from "../hp-70/Hp70Client"; // <- client bileşenin burada olmalı (hp-70 klasöründe)

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/hp-orijinal-kartus/hp-70";

export const metadata: Metadata = {
  title: "HP 70 Orijinal Kartuşlar | Papirink",
  description:
    "HP 70 orijinal kartuş serisi (C9390A, C9448A, C9449A, C9451A, C9453A, C9454A, C9455A, C9458A) için uyumlu modeller ve ürün bilgileri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP 70 Orijinal Kartuşlar | Papirink",
    description:
      "HP 70 orijinal kartuşlar: kodlara göre ürün bilgisi, uyumlu yazıcılar ve hızlı teklif.",
  },
};

export default function Hp70Page() {
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
              {
                label: "HP Orijinal Kartuş",
                href: "/urunler/kartus/hp-orijinal-kartus",
              },
              { label: "HP 70" },
            ]}
          />

          <Hp70Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
