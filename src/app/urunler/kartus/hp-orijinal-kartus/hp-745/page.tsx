// src/app/urunler/kartus/hp-orjinal-kartus/hp-745/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import ScrollToTopProgress from "../../../../components/ScrollToTopProgress";
import Hp745Client from "../hp-745/Hp745Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/kartus/hp-orjinal-kartus/hp-745";

export const metadata: Metadata = {
  title: "HP 745 Orijinal Kartuş | Papirink",
  description:
    "HP 745 (300 ml) orijinal kartuşlar: Kırmızı, Sarı, Mavi, Foto Siyah ve Mat Siyah seçenekleri. DesignJet Z2600 / Z5600 uyumlu.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP 745 Orijinal Kartuş | Papirink",
    description:
      "HP 745 (300 ml) orijinal kartuşlar: Kırmızı, Sarı, Mavi, Foto Siyah ve Mat Siyah seçenekleri. DesignJet Z2600 / Z5600 uyumlu.",
    siteName: "Papirink",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ScrollToTopProgress />
      <main>
<BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-6" />

        <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900">
          HP 745 Orijinal Kartuş (300 ml)
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          DesignJet Z2600 / Z5600 uyumlu 300 ml HP 745 kartuş seçeneklerini koduna göre seçin.
        </p>

        <Hp745Client />
      </main>

      <Footer />
    </>
  );
}
