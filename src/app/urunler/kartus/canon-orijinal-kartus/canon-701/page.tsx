// src/app/urunler/kartus/canon-orjinal-kartus/canon-701/page.tsx
import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "../../../../components/BreadcrumbAuto";
import ScrollToTopProgress from "../../../../components/ScrollToTopProgress";
import Canon701Client from "./Canon701Client";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kartus/canon-orjinal-kartus/canon-701";

export const metadata: Metadata = {
  title: "Canon PFI-701 Orjinal Kartuşlar | Papirink",
  description:
    "Canon imagePROGRAF iPF8000, iPF8000S, iPF8100, iPF9000, iPF9000S ve iPF9100 modelleri için Canon PFI-701 orjinal kartuş seçenekleri. Fiyat için teklif alın.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Canon PFI-701 Orjinal Kartuşlar | Papirink",
    description:
      "Canon imagePROGRAF iPF8000/8000S/8100/9000/9000S/9100 için Canon PFI-701 orjinal kartuşlar. Teklif alın.",
    siteName: "Papirink",
    type: "website",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Canon PFI-701 Orjinal Kartuşlar",
    url: `${baseUrl}${pagePath}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Papirink",
      url: baseUrl,
    },
  };

  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-6" />
      <main className="min-h-screen bg-white">
        <ScrollToTopProgress />

        <section className="mx-auto w-full max-w-6xl px-4 pb-10 pt-4">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Canon PFI-701 Orjinal Kartuş Serisi
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600">
            Canon imagePROGRAF yazıcılar için PFI-701 serisi orjinal kartuşlar.
            Uyumlu modeller: iPF8000 / iPF8000S / iPF8100 / iPF9000 / iPF9000S /
            iPF9100. Fiyat için hızlıca teklif alın.
          </p>

          <div className="mt-6">
            <Canon701Client />
          </div>
        </section>

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
      <Footer />
    </>
  );
}
