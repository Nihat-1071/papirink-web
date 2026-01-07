import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import Breadcrumb from "../../../../components/Breadcrumb";
import ScrollToTopProgress from "../../../../components/ScrollToTopProgress";
import CanonPfi707Client from "./Canon707Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/canon-orjinal-kartus/canon-pfi-707";

export const metadata: Metadata = {
  title: "Canon PFI-707MBK Orijinal Kartuş | Papirink",
  description:
    "Canon PFI-707MBK (Mat Siyah) orijinal kartuş: Canon imagePROGRAF iPF830 / iPF840 / iPF850 uyumlu, 700 ml.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Canon PFI-707MBK Orijinal Kartuş | Papirink",
    description:
      "Canon PFI-707MBK (Mat Siyah) orijinal kartuş: Canon imagePROGRAF iPF830 / iPF840 / iPF850 uyumlu, 700 ml.",
  },
};

export default function Page() {
  const items = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Kartuş", href: "/urunler/kartus" },
    { label: "Canon Orijinal Kartuş", href: "/urunler/kartus/canon-orjinal-kartus" },
    { label: "Canon PFI-707", href: pagePath },
  ];

  return (
    <>
      <Header />
      <ScrollToTopProgress />

      <main className="mx-auto w-full max-w-7xl px-4 py-10">
        <Breadcrumb items={items} />

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          Canon PFI-707MBK Orijinal Kartuş
        </h1>
        <p className="mt-2 text-slate-600">
          Canon imagePROGRAF iPF830 / iPF840 / iPF850 modelleri için PFI-707MBK
          (Mat Siyah) 700 ml orijinal kartuş.
        </p>

        <CanonPfi707Client />
      </main>

      <Footer />
    </>
  );
}
