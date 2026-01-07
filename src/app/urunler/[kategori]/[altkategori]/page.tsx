import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Breadcrumb from "@/app/components/Breadcrumb";
import { getSubCategory } from "@/app/urunler/_data";
import OfferCTA from "@/app/components/OfferCTA";

export const dynamic = "error";
const baseUrl = "https://papirink.com";

export async function generateMetadata(
  { params }: { params: Promise<{ kategori: string; altkategori: string }> }
): Promise<Metadata> {
  const { kategori, altkategori } = await params;
  const { cat, sub } = getSubCategory(kategori, altkategori);
  if (!cat || !sub) return {};
  const canonical = `${baseUrl}/urunler/${kategori}/${altkategori}`;
  return {
    title: `${sub.title} | ${cat.title} | Papirink`,
    description: sub.desc || `${sub.title} ürünlerini inceleyin. Teknik destek ve teklif için iletişime geçin.`,
    alternates: { canonical },
  };
}

export default async function AltKategoriPage(
  { params }: { params: Promise<{ kategori: string; altkategori: string }> }
) {
  const { kategori, altkategori } = await params;
  const { cat, sub } = getSubCategory(kategori, altkategori);
  if (!cat || !sub) notFound();

  return (
    <>
      <Header />

      <main className="bg-[#f5f7fb] text-slate-900">
        <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-8 pb-12">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Ürünler", href: "/urunler" },
              { label: cat.title, href: "/urunler" }, // istersen sonra /urunler/[kategori] ekleriz
              { label: sub.title },
            ]}
          />

          <div className="mt-6">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {sub.title}
            </h1>
            <p className="mt-3 max-w-3xl text-slate-600">
              {sub.desc || `${sub.title} kategorisindeki ürünleri burada listeleyeceğiz.`}
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-600">
              Ürünler yakında burada listelenecek. Şimdilik teklif/uyumluluk için bize yazabilirsin.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/teklif-al"
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-blue-700"
              >
                Teklif Al
              </Link>
              <OfferCTA />
              <Link
                href="/iletisim"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
              >
                İletişim
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
