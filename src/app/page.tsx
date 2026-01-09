// app/page.tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeShowcase from "./components/HomeShowcase";
import HomeDeals from "./components/HomeDeals";
import FeaturedProducts from "./components/FeaturedProducts";
import HomeTrust from "./components/HomeTrust";
import Link from "next/link";

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
      <HomeShowcase />
      <HomeDeals />
      <FeaturedProducts />
      <HomeTrust />


        <main className="mx-auto max-w-6xl px-4 py-16 space-y-24">

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
