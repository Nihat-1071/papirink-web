// src/app/urunler/kartus/hp-orijinal-kartus/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import HpOrijinalKartusClient from "../hp-orijinal-kartus/HpOrijinalKartusClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/kartus/hp-orijinal-kartus";

export const metadata: Metadata = {
  title: "HP Orijinal Kartuş | Papirink",
  description:
    "HP DesignJet ve Latex serileri için orijinal kartuşlar: HP 70, 711, 72, 727, 728, 745, 771, 773, 831 ve daha fazlası.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP Orijinal Kartuş | Papirink",
    description:
      "HP plotter ve latex yazıcılar için orijinal kartuş seçenekleri. Hızlı destek ve doğru seri seçimi.",
  },
};

export default function HpOrijinalKartusPage() {
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
              { label: "HP Orijinal Kartuş" },
            ]}
          />

          <HpOrijinalKartusClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
