// src/app/urunler/kartus/papirink-muadil-kartus/hp-761/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import Hp761Client from "./Hp761Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/papirink-muadil-kartus/hp-761";

export const metadata: Metadata = {
  title: "HP 761 Muadil Kartuşlar | Papirink",
  description:
    "Papirink HP 761 muadil kartuşlar: siyah (775 ml) ve diğer renkler (400 ml) için ürün bilgileri ve hızlı teklif.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP 761 Muadil Kartuşlar | Papirink",
    description:
      "HP 761 muadil kartuş: ürün seçimiyle kapasite/uyumluluk bilgisi ve hızlı fiyat teklifi.",
  },
};

export default function Hp761Page() {
  return (
    <>
      <Header />

      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <Hp761Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
