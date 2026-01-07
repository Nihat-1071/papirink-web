// src/app/urunler/kartus/papirink-muadil-kartus/hp-91/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import Breadcrumb from "../../../../components/Breadcrumb";
import Hp91Client from "./Hp91Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/papirink-muadil-kartus/hp-91";

export const metadata: Metadata = {
  title: "HP 91 Muadil Kartuş (Tüm Renkler) | Papirink",
  description:
    "HP 91 muadil kartuş (tüm renkler) – HP DesignJet Z6100 uyumlu. Renk seçimi, ürün bilgisi ve hızlı teklif alın.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP 91 Muadil Kartuş (Tüm Renkler) | Papirink",
    description:
      "Papirink HP 91 muadil kartuş: tüm renkler, 775 ml kapasite ve Z6100 uyumluluğu.",
  },
};

export default function Hp91Page() {
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
                label: "Papirink Muadil Kartuş",
                href: "/urunler/kartus/papirink-muadil-kartus",
              },
              { label: "HP 91" },
            ]}
          />

          <Hp91Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
