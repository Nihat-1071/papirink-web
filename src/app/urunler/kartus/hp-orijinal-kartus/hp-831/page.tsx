// src/app/urunler/kartus/hp-orjinal-kartus/hp-831/page.tsx
import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import ScrollToTopProgress from "../../../../components/ScrollToTopProgress";
import Hp831Client from "./Hp831Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/hp-orjinal-kartus/hp-831";

export const metadata: Metadata = {
  title: "HP 831C Orijinal Lateks Kartuş | Papirink",
  description:
    "HP 831C orijinal lateks kartuşlar: Siyah, Mavi, Kırmızı, Sarı, Açık Mavi, Açık Kırmızı ve Optimizer seçenekleri. HP Latex 310/330/360/315/335/365/370/375/560/570 ile uyumludur.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "HP 831C Orijinal Lateks Kartuş | Papirink",
    description:
      "HP 831C orijinal lateks kartuşlar. HP Latex 310/330/360/315/335/365/370/375/560/570 uyumlu.",
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
    { label: "HP 831C", href: pagePath },
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
            HP 831C Orijinal Lateks Kartuş
          </h1>
          <p className="mt-3 text-base text-slate-600">
            HP Latex yazıcılar için HP 831C orijinal lateks kartuş seçeneklerini
            kod bazlı görüntüleyin ve hızlıca teklif isteyin.
          </p>
        </section>

        <Hp831Client />
      </main>

      <Footer />
    </>
  );
}
