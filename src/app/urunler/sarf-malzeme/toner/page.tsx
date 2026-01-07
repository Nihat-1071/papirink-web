// src/app/urunler/sarf-malzemeleri/toner/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import TonerClient from "./TonerClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/sarf-malzemeleri/toner";

export const metadata: Metadata = {
  title: "Toner | Papirink",
  description:
    "Oce plotter toner çeşitleri: Plotwave muadil toner, Oce F3–F11 orijinal toner ve Oce B4–B5 muadil toner. Uyumlu yazıcı serileri ve hızlı teklif desteği.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Toner | Papirink",
    description:
      "Oce Plotwave muadil toner, Oce F3–F11 orijinal toner, Oce B4–B5 muadil toner seçenekleri. Hızlı destek ve teklif.",
  },
};

export default function TonerPage() {
  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <TonerClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
