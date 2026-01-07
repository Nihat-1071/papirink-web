// src/app/urunler/murekkep/canon-uyumlu-murekkep/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";
import { CONTACT } from "../../../lib/contact";
import CanonUyumluMurekkepClient from "./CanonUyumluMurekkepClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/murekkep/canon-uyumlu-murekkep";

export const metadata: Metadata = {
  title: "Canon Uyumlu Mürekkep | Papirink",
  description:
    "Canon uyumlu mürekkep seçenekleri: A4 masaüstü yazıcı serisi (500 gr) ve Canon plotter mürekkepleri (1000 gr) Dye / Pigment çeşitleri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Canon Uyumlu Mürekkep | Papirink",
    description:
      "Canon uyumlu mürekkep seçenekleri: A4 masaüstü yazıcı serisi (500 gr) ve Canon plotter mürekkepleri (1000 gr) Dye / Pig’ment çeşitleri.",
    siteName: "Papirink",
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/urunler/murekkep/canon-uyumlu-murekkep/canon-black-a4-masaustu-yazici-serisi-murekkep.webp`,
        width: 1200,
        height: 630,
        alt: "Canon uyumlu mürekkep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canon Uyumlu Mürekkep | Papirink",
    description:
      "Canon uyumlu mürekkep seçenekleri: A4 masaüstü yazıcı serisi (500 gr) ve Canon plotter mürekkepleri (1000 gr) Dye / Pigment çeşitleri.",
    images: [
      `${baseUrl}/images/urunler/murekkep/canon-uyumlu-murekkep/canon-black-a4-masaustu-yazici-serisi-murekkep.webp`,
    ],
  },
};

export default function Page() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <ScrollToTopProgress />

        <div className="mx-auto w-full max-w-6xl px-4 py-6">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Ürünler", href: "/urunler" },
              { label: "Mürekkep", href: "/urunler/murekkep" },
              { label: "Canon Uyumlu Mürekkep", href: pagePath },
            ]}
          />

          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Canon Uyumlu Mürekkep
            </h1>
            <p className="mt-2 text-slate-600">
              Canon A4 masaüstü yazıcı serisi (500 gr) ve Canon plotter serileri
              için (1000 gr) Dye / Pigment mürekkep seçeneklerini inceleyin.
            </p>

          </div>

          <div className="mt-6">
            <CanonUyumluMurekkepClient />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
