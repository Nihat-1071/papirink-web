// src/app/urunler/makinalar/fotokopi-makinasi/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import FotokopiMakinasiClient from "./FotokopiMakinasiClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/makinalar/fotokopi-makinasi";

export const metadata: Metadata = {
  title: "Fotokopi Makineleri | Papirink",
  description:
    "Canon fotokopi makinesi modellerini inceleyin. A3 renkli, çok fonksiyon (baskı/tarama/fotokopi), kurumsal ofis çözümleri için hızlı destek ve teklif.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Fotokopi Makineleri | Papirink",
    description:
      "Canon A3 renkli fotokopi makinesi çözümleri: çok fonksiyonlu kullanım, kurulum ve teklif için hızlı iletişim.",
  },
};

export default function FotokopiMakinasiPage() {
  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="mx-auto max-w-7xl px-4 pt-8 pb-14 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Ürünler", href: "/urunler" },
              { label: "Makinalar", href: "/urunler/makinalar" },
              { label: "Fotokopi Makineleri" },
            ]}
          />

          {/* Client kısmı */}
          <FotokopiMakinasiClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
