// src/app/urunler/kartus/hp-orjinal-kartus/hp-771/page.tsx
import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import ScrollToTopProgress from "../../../../components/ScrollToTopProgress";
import Hp771Client from "./Hp771Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/hp-orjinal-kartus/hp-771";

export const metadata: Metadata = {
  title: "HP 771C Orijinal Kartuş (775 ml) | Papirink",
  description:
    "HP 771C (775 ml) orijinal kartuşlar: Mat Siyah, Foto Siyah, Gri, Sarı, Kırmızı, Açık Kırmızı, Açık Mavi ve Kromatik Kırmızı seçenekleri. HP DesignJet Z6200 ile uyumludur.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP 771C Orijinal Kartuş (775 ml) | Papirink",
    description:
      "HP 771C (775 ml) orijinal kartuşlar. HP DesignJet Z6200 uyumlu.",
    siteName: "Papirink",
    type: "website",
  },
};

export default function Page() {
  const crumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Kartuş", href: "/urunler/kartus" },
    { label: "HP Orijinal Kartuş", href: "/urunler/kartus/hp-orjinal-kartus" },
    { label: "HP 771C", href: pagePath },
  ];

  return (
    <>
      <Header />
      <ScrollToTopProgress />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8">
        <Breadcrumb items={crumbs} />

        {/* Hero */}
        <section className="mt-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            HP 771C Orijinal Kartuş (775 ml)
          </h1>
          <p className="mt-3 text-base text-slate-600">
            HP DesignJet Z6200 için 775 ml kapasiteli HP 771C orijinal kartuş
            seçeneklerini kod bazlı görüntüleyin ve hızlıca teklif isteyin.
          </p>
        </section>

        <Hp771Client />
      </main>

      <Footer />
    </>
  );
}
