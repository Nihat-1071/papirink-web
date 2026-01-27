// app/urunler/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

import TopCategoryBar from "./TopCategoryBar";
import SearchBox from "../components/SearchBox";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/urunler";

export const metadata: Metadata = {
  title: "Ürünler | Papirink",
  description:
    "Makinalar, kartuş, kâğıt, bitmeyen kartuş, mürekkep ve sarf malzemeleri için alt kategorilere hızlıca ulaşın.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Ürünler | Papirink",
    description:
      "Plotter ekosistemi için makina, kartuş, mürekkep, kâğıt ve sarf malzemelerinde doğru ürüne hızlıca ulaşın.",
  },
};

const GROUPS = [
  {
    title: "Makinalar",
    desc: "Plotter, tarayıcı ve katlama çözümleri.",
    href: "/urunler/makinalar",
    iconKey: "printer",
    items: [
      { label: "Plotter", href: "/urunler/makinalar/plotter" },
      { label: "Fotokopi Makinası", href: "/urunler/makinalar/fotokopi-makinasi" },
      { label: "Tarayıcı", href: "/urunler/makinalar/tarayici" },
      { label: "Katlama Makinası", href: "/urunler/makinalar/katlama-makinasi" },
      { label: "UV", href: "/urunler/makinalar/uv" },
      { label: "Etiket Makinaları", href: "/urunler/makinalar/etiket-makinalari" },
    ],
  },
  {
    title: "Kartuş",
    desc: "Orijinal ve muadil kartuş seçenekleri.",
    href: "/urunler/kartus",
    iconKey: "droplets",
    items: [
      { label: "HP Orijinal Kartuş", href: "/urunler/kartus/hp-orijinal-kartus" },
      { label: "Canon Orijinal Kartuş", href: "/urunler/kartus/canon-orijinal-kartus" },
      { label: "Epson Orijinal Kartuş", href: "/urunler/kartus/epson-orijinal-kartus" },
      { label: "Papirink Muadil Kartuş", href: "/urunler/kartus/papirink-muadil-kartus" },
    ],
  },
  {
    title: "Kağıt",
    desc: "Plotter kâğıtları, fotoğraf kâğıtları, kanvas ve özel yüzeyler.",
    href: "/urunler/kagit",
    iconKey: "filetext",
    items: [
      { label: "Plotter Kağıtları", href: "/urunler/kagit/plotter-kagitlari" },
      { label: "Fotoğraf Kağıtları", href: "/urunler/kagit/fotograf-kagitlari" },
      { label: "Mat Coated Kağıtları", href: "/urunler/kagit/mat-coated-kagitlari" },
      { label: "Aydınger", href: "/urunler/kagit/aydinger" },
      { label: "Polyester", href: "/urunler/kagit/polyester" },
      { label: "Polyester Kanvas", href: "/urunler/kagit/polyester-kanvas" },
      { label: "Pamuklu Kanvas (Cotton)", href: "/urunler/kagit/pamuklu-kanvas-cotton" },
      { label: "Yapışkanlı Kağıtlar", href: "/urunler/kagit/yapiskanli-kagitlar" },
      { label: "Bayrak Bezi - Takvim Bezi", href: "/urunler/kagit/bayrak-bezi-takvim-bezi" },
      { label: "Fosforlu Kağıtlar", href: "/urunler/kagit/fosforlu-kagitlar" },
    ],
  },
  {
    title: "Bitmeyen Kartuş",
    desc: "Dolan kartuş sistemleri ve uyumlu seçenekler.",
    href: "/urunler/bitmeyen-kartus",
    iconKey: "infinity",
    items: [
      { label: "Epson için Dolan Kartuş", href: "/urunler/bitmeyen-kartus/epson-icin-dolan-kartus" },
      { label: "HP için Dolan Kartuş", href: "/urunler/bitmeyen-kartus/hp-icin-dolan-kartus" },
      { label: "Canon için Dolan Kartuş", href: "/urunler/bitmeyen-kartus/canon-icin-dolan-kartus" },
    ],
  },
  {
    title: "Mürekkep",
    desc: "HP, Canon, Epson uyumlu mürekkep çözümleri.",
    href: "/urunler/murekkep",
    iconKey: "paintbucket",
    items: [
      { label: "HP Uyumlu Mürekkep", href: "/urunler/murekkep/hp-uyumlu-murekkep" },
      { label: "Canon Uyumlu Mürekkep", href: "/urunler/murekkep/canon-uyumlu-murekkep" },
      { label: "Epson Uyumlu Mürekkep", href: "/urunler/murekkep/epson-uyumlu-murekkep" },
    ],
  },
  {
    title: "Sarf Malzemesi",
    desc: "Baskı kafası, toner, çip ve bakım kitleri.",
    href: "/urunler/sarf-malzeme",
    iconKey: "package",
    items: [
      { label: "Baskı Kafası", href: "/urunler/sarf-malzeme/baski-kafasi" },
      { label: "Toner", href: "/urunler/sarf-malzeme/toner" },
      { label: "Çipler", href: "/urunler/sarf-malzeme/cipler" },
      { label: "Bakım Kiti / Kartuşu", href: "/urunler/sarf-malzeme/bakim-kiti-kartusu" },
      { label: "Drum & Bıçak", href: "/urunler/sarf-malzeme/drum-bicak" },
    ],
  },
] as const;

export default function UrunlerPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f5f7fb] text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">

          {/* Hero */}
          <div className="mt-6 flex flex-col gap-5">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ürünler</h1>
              <p className="mt-3 max-w-3xl text-slate-600">
                Makina, kartuş, mürekkep, kâğıt ve sarf malzemelerinde doğru ürünü hızlıca bulun.
                Kategori seçerek alt başlıklara inebilir veya arama ile hızlanabilirsiniz.
              </p>
            </div>

            {/* Search UI (şimdilik görsel) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-3 md:p-4 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-center">
                <div className="flex-1">
                  <SearchBox />
                </div>

                <Link
                  href="/iletisim"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-blue-700 text-center"
                >
                  Hızlı Destek
                </Link>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                İpucu: Marka/model (HP, Canon, Epson) veya gramaj/ölçü (80 gr, 914mm) ile arat.
              </p>
            </div>
          </div>

{/* Top Category Bar (full-bleed ama sayfa gridine hizalı) */}
<div className="mt-6">
  <TopCategoryBar groups={GROUPS as any} />
</div>




          {/* Cards */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {GROUPS.map((g) => (
              <div
                key={g.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition
                           hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* soft glow */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue-100 blur-3xl opacity-0 transition group-hover:opacity-100" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-extrabold">{g.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">{g.desc}</p>
                  </div>

                  <Link
                    href={g.href}
                    className="shrink-0 rounded-xl bg-blue-600 px-4 py-2 text-sm font-extrabold text-white hover:bg-blue-700"
                  >
                    İncele →
                  </Link>
                </div>

                <div className="relative mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm
                                 transition hover:-translate-y-0.5 hover:shadow-md hover:bg-blue-50 hover:text-blue-700"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/teklif-al"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-blue-700"
            >
              Teklif Al
            </Link>
            <Link
              href="/iletisim"
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              İletişim
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
