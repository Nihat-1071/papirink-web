// src/app/urunler/kartus/canon-orijinal-kartus/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import CanonOrijinalKartusClient from "./CanonOrijinalKartusClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/urunler/kartus/canon-orijinal-kartus";

export const metadata: Metadata = {
  title: "Canon Orijinal Kartuş | Papirink",
  description:
    "Canon imagePROGRAF serileri için orijinal kartuşlar: PFI-102, PFI-320, PFI-701, PFI-703, PFI-707, PFI-1700 ve daha fazlası.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Canon Orijinal Kartuş | Papirink",
    description:
      "Canon plotter yazıcılar için orijinal kartuş seçenekleri. Seri bazında filtreleyin, doğru ürünü hızlıca bulun.",
  },
};

export default function CanonOrijinalKartusPage() {
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
              { label: "Canon Orijinal Kartuş" },
            ]}
          />

          <CanonOrijinalKartusClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
