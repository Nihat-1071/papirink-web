import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import Hp771Client from "./Hp771Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/papirink-muadil-kartus/hp-771";

export const metadata: Metadata = {
  title: "HP 771 Muadil Kartuş | Papirink",
  description:
    "HP 771 muadil kartuş (tüm renkler) için renk seçimi, baskı kapasitesi ve uyumlu yazıcı modeli bilgileri. HP DesignJet Z6200 ile uyumludur.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP 771 Muadil Kartuş | Papirink",
    description:
      "HP 771 muadil kartuş: tüm renk seçenekleri, 775 ml kapasite ve uyumlu yazıcılar. Hızlı teklif alın.",
  },
};

export default function Hp771Page() {
  return (
    <>
      <Header />

      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <Hp771Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
