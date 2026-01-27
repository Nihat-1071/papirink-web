// src/app/urunler/kartus/canon-orijinal-kartus/canon-pfi-102/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import CanonPfi102Client from "./CanonPfi102Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/kartus/canon-orijinal-kartus/canon-pfi-102";

export const metadata: Metadata = {
  title: "Canon PFI-102 Orijinal Kartuşlar | Papirink",
  description:
    "Canon PFI-102 orijinal kartuş serisi (PFI-102BK, PFI-102MBK, PFI-102C, PFI-102M, PFI-102Y) için uyumlu ImagePROGRAF iPF yazıcı modelleri ve ürün bilgileri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Canon PFI-102 Orijinal Kartuşlar | Papirink",
    description:
      "Canon PFI-102 orijinal kartuşlar: kod seçimi, uyumlu yazıcılar ve hızlı fiyat/teklif.",
  },
};

export default function CanonPfi102Page() {
  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <CanonPfi102Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
