// src/app/urunler/murekkep/epson-uyumlu-murekkep/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";
import { CONTACT } from "../../../lib/contact";
import EpsonUyumluMurekkepClient from "./EpsonUyumluMurekkepClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: domain sabitle
const pagePath = "/urunler/murekkep/epson-uyumlu-murekkep";

export const metadata: Metadata = {
  title: "Epson Uyumlu Mürekkep | Papirink",
  description:
    "Epson L serisi masaüstü yazıcı mürekkepleri, Epson sublimasyon mürekkebi ve Epson HDR / K3 uyumlu plotter mürekkeplerini inceleyin. 500 gr seçenekleriyle.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Epson Uyumlu Mürekkep | Papirink",
    description:
      "Epson L serisi, sublimasyon, HDR ve K3 uyumlu mürekkep seçenekleri. 500 gr ürünler ve uyumluluk bilgileri.",
    siteName: "Papirink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epson Uyumlu Mürekkep | Papirink",
    description:
      "Epson L serisi, sublimasyon, HDR ve K3 uyumlu mürekkep seçenekleri. 500 gr ürünler ve uyumluluk bilgileri.",
  },
};

export default function Page() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white">
        <ScrollToTopProgress />

        <div className="mx-auto w-full max-w-6xl px-4 pt-6">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Ürünler", href: "/urunler" },
              { label: "Mürekkep", href: "/urunler/murekkep" },
              { label: "Epson Uyumlu Mürekkep", href: pagePath },
            ]}
          />

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
              Epson Uyumlu Mürekkep
            </h1>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Epson L serisi masaüstü yazıcı mürekkepleri, sublimasyon mürekkebi
              ve Epson HDR / K3 uyumlu plotter mürekkeplerini tek sayfada
              inceleyin. Fiyat/teklif için bizimle iletişime geçebilirsiniz.
            </p>
          </div>

          <EpsonUyumluMurekkepClient />
        </div>
      </main>

      <Footer />
    </>
  );
}
