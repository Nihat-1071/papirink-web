// src/app/urunler/sarf-malzemeleri/drum-bicak/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import DrumBicakClient from "./DrumBicakClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/sarf-malzemeleri/drum-bicak";

export const metadata: Metadata = {
  title: "Drum / Bıçak / Developer | Papirink",
  description:
    "Oce uyumlu drum, bıçak (blade) ve developer ürünleri. TDS serileri için sarf malzemelerini kategori bazında filtreleyin ve hızlı teklif alın.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Drum / Bıçak / Developer | Papirink",
    description:
      "Oce TDS serileri için drum, bıçak (blade) ve developer çözümleri. Kategori bazında listeleyin, hızlı destek/teklif alın.",
  },
};

export default function DrumBicakPage() {
  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <DrumBicakClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
