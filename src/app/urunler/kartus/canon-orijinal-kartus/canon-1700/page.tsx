// src/app/urunler/kartus/canon-orijinal-kartus/canon-1700/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import ScrollToTopProgress from "../../../../components/ScrollToTopProgress";
import Canon1700Client from "./Canon1700Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/kartus/canon-orijinal-kartus/canon-1700";

export const metadata: Metadata = {
  title: "Canon PFI-1700 Orijinal Kartuş | Papirink",
  description:
    "Canon imagePROGRAF Pro 2000 / 4000 / 4000S / 6000S için Canon PFI-1700 (700 ml) orijinal kartuşları inceleyin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Canon PFI-1700 Orijinal Kartuş | Papirink",
    description:
      "Canon imagePROGRAF Pro 2000 / 4000 / 4000S / 6000S için Canon PFI-1700 (700 ml) orijinal kartuşlar.",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ScrollToTopProgress />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16">
        <Breadcrumb
          items={[
            { label: "Anasayfa", href: "/" },
            { label: "Ürünler", href: "/urunler" },
            { label: "Kartuş", href: "/urunler/kartus" },
            {
              label: "Canon Orijinal Kartuş",
              href: "/urunler/kartus/canon-orijinal-kartus",
            },
            { label: "Canon PFI-1700", href: pagePath },
          ]}
        />

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
          <h1 className="text-3xl font-bold text-slate-900">
            Canon PFI-1700 Orijinal Kartuş
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Canon imagePROGRAF Pro 2000 / 4000 / 4000S / 6000S için 700 ml
            kapasiteli PFI-1700 serisi kartuşları kod bazında inceleyin.
          </p>
        </div>

        <Canon1700Client />
      </main>

      <Footer />
    </>
  );
}
