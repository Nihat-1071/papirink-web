// src/app/urunler/makinalar/masaustu-yazicilar/page.tsx

import type { Metadata } from "next";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import BreadcrumbAuto from "../../../components/BreadcrumbAuto";
import MasaustuYazicilarClient from "../masaustu-yazicilar/MasaustuYazicilarClient";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/makinalar/masaustu-yazicilar";

const product = {
  title: "Canon G4400 Tanklı Yazıcı Tarayıcı Fotokopi Fax WiFi",
  brand: "Canon",
  category: "Masaüstü Yazıcılar",
  image:
    "/images/urunler/makinalar/masaustu-yazicilar/canon-g4400-tankli-yazici-tarayici-fotokopi-fax-wifi.jpg",

  phoneHref: "tel:+905010320406",
  whatsappHref: "https://wa.me/905067529090",

  description:
    "Canon G4400; tanklı mürekkep sistemiyle düşük maliyetli çıktı, tarayıcı/fotokopi ve Fax özelliklerini bir arada sunan masaüstü çok fonksiyonlu çözümdür.",
};

export const metadata: Metadata = {
  title: "Masaüstü Yazıcılar | Papirink",
  description:
    "Canon ve Epson masaüstü yazıcı modellerini inceleyin. Tanklı mürekkep, foto baskı (6 renk), A4/A3 ve çok fonksiyon (tara/kopya/fax) çözümleri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Masaüstü Yazıcılar | Papirink",
    description:
      "Canon ve Epson masaüstü yazıcı çözümleri: tanklı yazıcılar, A4/A3 ve çok fonksiyon modelleri için hızlı destek.",
  },
};

export default function MasaustuYazicilarPage() {
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
              { label: "Makinalar", href: "/urunler/makinalar" },
              { label: "Masaüstü Yazıcılar" },
            ]}
          />

          {/* Client kısmı */}
          <MasaustuYazicilarClient />
        </section>
      </main>

      <Footer />
    </>
  );
}
