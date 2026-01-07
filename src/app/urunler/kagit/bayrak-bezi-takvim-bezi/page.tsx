// src/app/urunler/kagit/bayrak-bezi-takvim-bezi/page.tsx
import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import ScrollToTopProgress from "../../../components/ScrollToTopProgress";
import BayrakTakvimBeziClient from "./BayrakTakvimBeziClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/kagit/bayrak-bezi-takvim-bezi";

export const metadata: Metadata = {
  title: "Bayrak Bezi & Takvim Bezi | Papirink",
  description:
    "Bayrak bezi / takvim bezi / kırlangıç bezi 125 gr seçenekleri: 107cm*50mt ve 152cm*50mt rulo ürünler.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Bayrak Bezi & Takvim Bezi | Papirink",
    description:
      "125 gr bayrak-takvim-kırlangıç bezi: 107cm*50mt ve 152cm*50mt rulo seçenekleri.",
    siteName: "Papirink",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <ScrollToTopProgress />

      <main className="bg-white">
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-6">
            <Breadcrumb
              items={[
                { label: "Ana Sayfa", href: "/" },
                { label: "Ürünler", href: "/urunler" },
                { label: "Kağıt", href: "/urunler/kagit" },
                { label: "Bayrak Bezi / Takvim Bezi" },
              ]}
            />
          </div>
        </section>

        <BayrakTakvimBeziClient contactHref="/iletisim" />
      </main>

      <Footer />
    </>
  );
}
