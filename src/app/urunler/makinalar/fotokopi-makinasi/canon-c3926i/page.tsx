import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import CanonC3926iClient from "./CanonC3926iClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/makinalar/fotokopi-makinasi/canon-c3926i";

export const metadata: Metadata = {
  title: "Canon c3926i Fotokopi Makinası | Papirink",
  description:
    "Canon c3926i A3 renkli çok fonksiyonlu fotokopi makinası. 26 kopya/dk, çift taraf baskı, USB/Ethernet, yüksek toner kapasitesi. Hızlı teklif ve kurulum için iletişime geçin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Canon c3926i Fotokopi Makinası | Papirink",
    description:
      "Canon c3926i: A3 renkli çok fonksiyon, 26 kopya/dk, USB/Ethernet, yüksek toner kapasitesi. Kurulum ve teklif için hızlı destek.",
    images: [
      {
        url: `${baseUrl}/images/urunler/makinalar/fotokopi-makinasi/canon-c3926i-fotokopi-makinasi.webp`,
        width: 1200,
        height: 630,
        alt: "Canon c3926i fotokopi makinası",
      },
    ],
  },
};

export default function CanonC3926iPage() {
  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="mx-auto max-w-7xl px-4 pt-8 pb-14 sm:px-6 lg:px-8">
          <CanonC3926iClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
