// src/app/urunler/kartus/canon-orijinal-kartus/canon-320/page.tsx

import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import Canon320Client from "./Canon320Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/canon-orijinal-kartus/canon-320";

export const metadata: Metadata = {
  title: "Canon PFI-320 Orijinal Kartuşlar | Papirink",
  description:
    "Canon PFI-320 orijinal kartuş serisi (PFI-320BK, PFI-320C, PFI-320M, PFI-320MBK, PFI-320Y) için uyumlu modeller ve ürün bilgileri. TM-200 / TM-205 / TM-300 / TM-305 ile uyumludur.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Canon PFI-320 Orijinal Kartuşlar | Papirink",
    description:
      "Canon PFI-320 orijinal kartuşlar: kodlara göre ürün bilgisi, uyumlu yazıcılar ve hızlı teklif.",
  },
};

export default function Canon320Page() {
  return (
    <>
      <Header />

      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <Canon320Client />
        </section>
      </main>

      <Footer />
    </>
  );
}
