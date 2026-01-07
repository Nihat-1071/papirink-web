// app/page.tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

const HOME_CATEGORIES = [
  {
    title: "Makinalar",
    desc: "Plotter, tarayıcı ve katlama çözümleri",
    href: "/urunler/makinalar",
  },
  {
    title: "Kartuş",
    desc: "Orijinal ve muadil kartuş seçenekleri",
    href: "/urunler/kartus",
  },
  {
    title: "Kağıt",
    desc: "Plotter ve özel baskı kağıtları",
    href: "/urunler/kagit",
  },
  {
    title: "Bitmeyen Kartuş",
    desc: "Dolan kartuş sistemleri",
    href: "/urunler/bitmeyen-kartus",
  },
  {
    title: "Mürekkep",
    desc: "HP, Canon, Epson uyumlu mürekkepler",
    href: "/urunler/murekkep",
  },
  {
    title: "Sarf Malzeme",
    desc: "Çip, toner, bakım kiti ve diğerleri",
    href: "/urunler/sarf-malzeme",
  },
];

const WHY_PAPIRINK = [
  {
    title: "Geniş Ürün Yelpazesi",
    desc: "Makina, kartuş, kağıt, mürekkep ve sarf malzemelerini tek noktadan sunuyoruz.",
  },
  {
    title: "Uzman Teknik Destek",
    desc: "Satış öncesi ve sonrası teknik destek ile doğru çözüme yönlendiriyoruz.",
  },
  {
    title: "Hızlı Tedarik & Güvenilirlik",
    desc: "Stok gücü ve düzenli tedarik yapımızla işinizi aksatmıyoruz.",
  },
];

const HOME_GUIDES = [
  {
    title: "Plotter Alırken Nelere Dikkat Edilmeli?",
    desc: "Doğru cihazı seçmek için temel kriterler ve pratik ipuçları.",
    href: "/blog/plotter-alirken-nelere-dikkat-edilmeli",
    tag: "Rehber",
  },
  {
    title: "Plotter Kağıdı Nedir?",
    desc: "Kağıt türleri, kullanım alanları ve doğru seçim önerileri.",
    href: "/blog/plotter-kagidi-nedir",
    tag: "Rehber",
  },
  {
    title: "Orijinal mi Muadil mi Kartuş?",
    desc: "Maliyet, kalite ve riskler açısından karşılaştırma.",
    href: "/blog/orijinal-mi-muadil-mi-kartus",
    tag: "Rehber",
  },
];

export default function Home() {
  return (
    <>
      <Header />

<main className="mx-auto max-w-6xl px-4 py-16 space-y-24">
  
<section className="rounded-3xl bg-zinc-50 p-8 sm:p-12">
  <h3 className="text-2xl font-extrabold tracking-tight">
    Ürün Gruplarımız
  </h3>
  <p className="mt-2 max-w-2xl text-gray-600">
    Plotter ekosistemi için makina, sarf ve teknik çözümleri tek noktadan inceleyin.
  </p>

  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {HOME_CATEGORIES.map((cat) => (
      <Link
        key={cat.href}
        href={cat.href}
        className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md hover:border-black/20"
      >
        <div className="text-lg font-extrabold group-hover:underline">
          {cat.title}
        </div>
        <p className="mt-1 text-sm text-gray-600">
          {cat.desc}
        </p>

        <div className="mt-4 text-sm font-semibold text-black">
          İncele →
        </div>
      </Link>
    ))}
  </div>
</section>

<section className="px-2">
  <h3 className="text-2xl font-extrabold tracking-tight">
    Neden Papirink?
  </h3>
  <p className="mt-2 max-w-2xl text-gray-600">
    Plotter ekosistemi için güvenilir, sürdürülebilir ve profesyonel çözümler sunuyoruz.
  </p>

  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {WHY_PAPIRINK.map((item, idx) => (
      <div
        key={idx}
        className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
      >
        <div className="text-lg font-extrabold">
          {item.title}
        </div>
        <p className="mt-2 text-sm text-gray-600">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

<section className="rounded-3xl bg-zinc-100/70 p-8 sm:p-12">
  <div className="flex items-end justify-between gap-4">
    <div>
      <h3 className="text-2xl font-extrabold tracking-tight">
        Blog & Rehber
      </h3>
      <p className="mt-2 max-w-2xl text-gray-600">
        Plotter, kağıt, mürekkep ve sarf malzemeleri hakkında kısa ve net içerikler.
      </p>
    </div>

    <Link
      href="/blog"
      className="hidden sm:inline-flex rounded-xl border bg-white px-5 py-3 text-sm font-extrabold hover:bg-zinc-50"
    >
      Tüm Yazılar →
    </Link>
  </div>

  <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {HOME_GUIDES.map((p) => (
      <Link
        key={p.href}
        href={p.href}
        className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md hover:border-black/20"
      >
        <div className="inline-flex rounded-full border bg-white px-3 py-1 text-xs font-bold text-gray-700">
          {p.tag}
        </div>

        <div className="mt-3 text-lg font-extrabold group-hover:underline">
          {p.title}
        </div>

        <p className="mt-2 text-sm text-gray-600">
          {p.desc}
        </p>

        <div className="mt-4 text-sm font-semibold text-black">
          Oku →
        </div>
      </Link>
    ))}
  </div>

  <div className="mt-6 sm:hidden">
    <Link
      href="/blog"
      className="inline-flex w-full justify-center rounded-xl border bg-white px-5 py-3 text-sm font-extrabold hover:bg-zinc-50"
    >
      Tüm Yazılar →
    </Link>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
}
