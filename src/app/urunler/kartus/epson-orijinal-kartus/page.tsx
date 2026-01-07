import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import EpsonOrijinalKartusClient from "./EpsonOrijinalKartusClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/kartus/epson-orijinal-kartus";

export const metadata: Metadata = {
  title: "Epson Orijinal Kartuş | Papirink",
  description:
    "Epson SureColor ve Stylus Pro yazıcılar için orijinal kartuşlar: Epson T596, T636, T684 (T694), T714 serileri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Epson Orijinal Kartuş | Papirink",
    description:
      "Epson plotter yazıcılar için orijinal kartuş seçenekleri. Seri bazlı filtreleme ve hızlı destek.",
  },
};

export default function EpsonOrijinalKartusPage() {
  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="bg-slate-50 text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Ürünler", href: "/urunler" },
              { label: "Kartuş", href: "/urunler/kartus" },
              { label: "Epson Orijinal Kartuş" },
            ]}
          />

          <EpsonOrijinalKartusClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
