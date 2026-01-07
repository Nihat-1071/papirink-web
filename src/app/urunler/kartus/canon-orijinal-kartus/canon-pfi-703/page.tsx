// src/app/urunler/kartus/canon-orjinal-kartus/canon-pfi-703/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import ScrollToTopProgress from "../../../../components/ScrollToTopProgress";
import Canon703Client from "./Canon703Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/canon-orjinal-kartus/canon-pfi-703";

export const metadata: Metadata = {
  title: "Canon PFI-703 Orijinal Kartuş | Papirink",
  description:
    "Canon PFI-703 serisi orijinal plotter kartuşlar: Mavi, Kırmızı, Mat Siyah, Sarı ve Siyah. iPF810 / iPF815 / iPF820 / iPF825 ile uyumlu.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Canon PFI-703 Orijinal Kartuş | Papirink",
    description:
      "Canon PFI-703 serisi orijinal plotter kartuşlar: Mavi, Kırmızı, Mat Siyah, Sarı ve Siyah.",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ScrollToTopProgress />

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Ürünler", href: "/urunler" },
            { label: "Kartuş", href: "/urunler/kartus" },
            { label: "Canon Orijinal Kartuş", href: "/urunler/kartus/canon-orjinal-kartus" },
            { label: "Canon PFI-703", href: pagePath },
          ]}
        />

        <h1 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
          Canon PFI-703 Orijinal Plotter Kartuş
        </h1>

        <p className="mt-3 text-slate-600">
          Canon iPF810 / iPF815 / iPF820 / iPF825 modelleri için Canon PFI-703 serisi
          orijinal kartuşları kod seçerek inceleyin ve teklif alın.
        </p>

        <Canon703Client />
      </main>

      <Footer />
    </>
  );
}
