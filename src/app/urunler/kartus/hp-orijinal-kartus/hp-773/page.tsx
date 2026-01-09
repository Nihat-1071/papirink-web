// src/app/urunler/kartus/hp-orjinal-kartus/hp-773/page.tsx
import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import ScrollToTopProgress from "../../../../components/ScrollToTopProgress";
import Hp773Client from "./Hp773Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/hp-orjinal-kartus/hp-773";

export const metadata: Metadata = {
  title: "HP 773C Orijinal Kartuş | Z6600 / Z6800 | Papirink",
  description:
    "HP 773C orijinal kartuşlar: Mat Siyah, Kromatik Kırmızı, Kırmızı, Sarı, Açık Kırmızı, Mavi, Foto Siyah ve Açık Gri seçenekleri. HP DesignJet Z6600 / Z6800 ile uyumludur.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP 773C Orijinal Kartuş | Z6600 / Z6800 | Papirink",
    description:
      "HP 773C orijinal kartuşlar. HP DesignJet Z6600 / Z6800 uyumlu.",
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
    { label: "HP 773C", href: pagePath },
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
            HP 773C Orijinal Kartuş (Z6600 / Z6800)
          </h1>
          <p className="mt-3 text-base text-slate-600">
            HP DesignJet Z6600 / Z6800 için HP 773C orijinal kartuş seçeneklerini
            kod bazlı görüntüleyin ve hızlıca teklif isteyin.
          </p>
        </section>

        <Hp773Client />
      </main>

      <Footer />
    </>
  );
}
