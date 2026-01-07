// src/app/urunler/kartus/hp-orijinal-kartus/hp-727/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import Breadcrumb from "../../../../components/Breadcrumb";
import Hp727Client from "../hp-727/Hp727Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/hp-orijinal-kartus/hp-727";

export const metadata: Metadata = {
  title: "HP 727 Orijinal Kartuşlar | Papirink",
  description:
    "HP 727 orijinal kartuş serisi (C1Q12A, F9J76A, F9J77A, F9J78A, F9J79A, F9J80A) için uyumlu modeller ve ürün bilgileri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP 727 Orijinal Kartuşlar | Papirink",
    description:
      "HP 727 orijinal kartuşlar: kodlara göre ürün bilgisi, uyumlu yazıcılar ve hızlı teklif.",
  },
};

export default function Hp727Page() {
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
              { label: "HP 727" },
            ]}
          />

          <Hp727Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
