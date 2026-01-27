import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import PapirinkMuadilKartusClient from "./PapirinkMuadilKartusClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/kartus/papirink-muadil-kartus";

export const metadata: Metadata = {
  title: "Papirink Muadil Kartuş | Papirink",
  description:
    "HP plotter serileri için Papirink muadil kartuşlar: HP 81, HP 91, HP 761, HP 771. Seri bazında filtreleyin ve hızlı destek alın.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Papirink Muadil Kartuş | Papirink",
    description:
      "HP plotter serileri için muadil kartuş seçenekleri. Seri bazında filtreleme ve hızlı destek.",
  },
};

export default function PapirinkMuadilKartusPage() {
  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <PapirinkMuadilKartusClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
