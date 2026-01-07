// src/app/urunler/kagit/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTopProgress from "../../components/ScrollToTopProgress";
import CategoryImagePair from "../../components/CategoryImagePair";
import { CONTACT } from "../../lib/contact";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler/kagit";

export const metadata: Metadata = {
  title: "Kağıt | Papirink",
  description:
    "Plotter, fotoğraf, kanvas ve özel baskı uygulamaları için profesyonel kağıt çeşitlerini inceleyin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Kağıt | Papirink",
    description:
      "Plotter kağıtları, fotoğraf kağıtları, kanvas, yapışkanlı ve özel baskı kağıtları Papirink’te.",
  },
};

const CATS = [
  {
    id: "plotter-kagitlari",
    title: "Plotter Kağıtları",
    desc: "Teknik çizim ve büyük format baskılar için plotter kağıtları.",
    href: "/urunler/kagit/plotter-kagitlari",
    pills: ["80 gr", "90 gr", "Büyük Format"],
    images: [
      {
        src: "/images/urunler/kagit/plotter-kagit/plotter-kagidi.webp",
        alt: "Büyük format baskılar için plotter kağıdı",
      },
    ],
  },
  {
    id: "fotograf-kagitlari",
    title: "Fotoğraf Kağıtları",
    desc: "Parlak ve saten yüzey seçenekleriyle fotoğraf baskı kağıtları.",
    href: "/urunler/kagit/fotograf-kagitlari",
    pills: ["Parlak", "Saten", "135 gr", "200 gr", "240 gr"],
    images: [
      {
        src: "/images/urunler/kagit/fotograf-kagitlari/fotograf-kagidi.webp",
        alt: "Fotoğraf Kağıtları",
      },
    ],
  },
  {
    id: "mat-coated-kagitlari",
    title: "Mat Coated Kağıtları",
    desc: "Düşük yansımalı, teknik ve sunum baskıları için mat coated kağıtlar.",
    href: "/urunler/kagit/mat-coated-kagitlari",
    pills: ["Mat", "Coated", "Teknik Baskı"],
    images: [
      {
        src: "/images/urunler/kagit/mat-coated-kagitlari/mat-coated-kagidi.webp",
        alt: "Mat coated baskı kağıdı",
      },
    ],
  },
  {
    id: "aydinger",
    title: "Aydınger",
    desc: "Mimari ve teknik çizimler için şeffaf aydınger kağıtları.",
    href: "/urunler/kagit/aydinger",
    pills: ["Şeffaf", "Teknik Çizim"],
    images: [
      {
        src: "/images/urunler/kagit/aydinger/aydingeri-kagit.webp",
        alt: "Teknik çizim için aydınger kağıdı",
      },
      {
        src: "/images/urunler/kagit/aydinger/aydingeri-kagit-toplu-satis.webp",
        alt: "Teknik çizim için toplu aydınger kağıdı",
      },
    ],
  },
  {
    id: "polyester",
    title: "Polyester",
    desc: "Dayanıklı ve uzun ömürlü baskılar için polyester kağıtlar.",
    href: "/urunler/kagit/polyester",
    pills: ["Dayanıklı", "Suya Dayanıklı"],
    images: [
      {
        src: "/images/urunler/kagit/polyester/plotter-polyesteri.webp",
        alt: "Plotter baskılar için polyester kağıt",
      },
    ],
  },
  {
    id: "polyester-kanvas",
    title: "Polyester Kanvas",
    desc: "İç ve dış mekan baskıları için polyester kanvas çözümleri.",
    href: "/urunler/kagit/polyester-kanvas",
    pills: ["Kanvas", "Polyester"],
    images: [
      {
        src: "/images/urunler/kagit/polyester-kanvas/polyester-kanvas.webp",
        alt: "Polyester kanvas baskı malzemesi",
      },
    ],
  },
  {
    id: "pamuklu-kanvas",
    title: "Pamuklu Kanvas (Cotton)",
    desc: "Sanatsal ve profesyonel baskılar için pamuklu kanvas.",
    href: "/urunler/kagit/pamuklu-kanvas-cotton",
    pills: ["Cotton", "Sanatsal Baskı"],
    images: [
      {
        src: "/images/urunler/kagit/pamuklu-kanvas-cotton/cotton-kanvas.webp",
        alt: "Pamuklu cotton kanvas baskı malzemesi",
      },
    ],
  },
  {
    id: "yapiskanli-kagitlar",
    title: "Yapışkanlı Kağıtlar",
    desc: "Etiket, yönlendirme ve reklam uygulamaları için yapışkanlı kağıtlar.",
    href: "/urunler/kagit/yapiskanli-kagitlar",
    pills: ["Mat", "Parlak", "Etiket"],
    images: [
      {
        src: "/images/urunler/kagit/yapiskanli-kagitlar/mat-yapiskanli-kagit.webp",
        alt: "Mat yapışkanlı kağıt",
      },
      {
        src: "/images/urunler/kagit/yapiskanli-kagitlar/parlak-yapiskanli-kagit.webp",
        alt: "Parlak yapışkanlı kağıt",
      },
    ],
  },
  {
    id: "bayrak-bezi",
    title: "Bayrak Bezi / Takvim Bezi",
    desc: "Bayrak, flama ve takvim baskıları için özel bezler.",
    href: "/urunler/kagit/bayrak-bezi-takvim-bezi",
    pills: ["Bayrak", "Takvim", "Tekstil"],
    images: [
      {
        src: "/images/urunler/kagit/bayrak-bezi-takvim-bezi/bayrak-takvim-kirlangic-bezi.png",
        alt: "Bayrak ve takvim baskısı için özel bez",
      },
    ],
  },
  {
    id: "fosforlu-kagitlar",
    title: "Fosforlu Kağıtlar",
    desc: "Dikkat çekici ve yüksek görünürlüklü fosforlu kağıtlar.",
    href: "/urunler/kagit/fosforlu-kagitlar",
    pills: ["Sarı", "Fosforlu"],
    images: [
      {
        src: "/images/urunler/kagit/fosforlu-kagitlar/fosforlu-sari-kagit.webp",
        alt: "Fosforlu sarı baskı kağıdı",
      },
    ],
  },
] as const;

export default function KagitPage() {
  return (
    <>
      <Header />

      <main className="bg-slate-50 text-slate-900 scroll-smooth">
        <section className="mx-auto max-w-7xl px-4 pt-4 pb-14 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Ürünler", href: "/urunler" },
              { label: "Kağıt" },
            ]}
          />

          <div className="mt-3 rounded-xl border border-slate-200 bg-white px-6 py-6 sm:px-8">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Kağıt
            </h1>

            <p className="mt-3 max-w-3xl text-slate-600">
              Plotter, fotoğraf, kanvas ve özel baskı uygulamaları için kağıt
              çözümleri. Alt kategorilerden ihtiyacınıza uygun ürünü
              inceleyebilirsiniz.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={CONTACT.tel}
                className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Teklif Al / Hemen Ara
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
              >
                WhatsApp
              </a>
              <Link
                href="/iletisim"
                className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                İletişim
              </Link>
            </div>
          </div>

          {/* Sticky bar */}
          <div className="sticky top-[72px] z-40 mt-3">
            <div className="rounded-xl border bg-white/90 backdrop-blur">
              <div className="flex gap-2 px-4 py-3 overflow-x-auto">
                {CATS.map((c) => (
                  <Link
                    key={c.id}
                    href={`#${c.id}`}
                    className="shrink-0 rounded-md border bg-slate-50 px-4 py-2 text-sm hover:bg-white"
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {CATS.map((c) => (
              <section
                key={c.id}
                id={c.id}
                className="scroll-mt-[140px] rounded-xl border bg-white p-6"
              >
                <div className="grid gap-6 lg:grid-cols-[1.1fr_1.3fr]">
                  <div>
                    <h2 className="text-xl font-semibold">{c.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">{c.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.pills.map((p) => (
                        <span
                          key={p}
                          className="rounded-md border bg-slate-50 px-3 py-1.5 text-xs"
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={c.href}
                      className="mt-4 inline-block rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                      Kategoriye Git →
                    </Link>
                  </div>

                  {c.images.length > 0 && (
                    <CategoryImagePair images={c.images} />
                  )}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      <ScrollToTopProgress />
      <Footer />
    </>
  );
}
