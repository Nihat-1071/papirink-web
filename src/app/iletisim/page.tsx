// src/app/iletisim/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";

export const dynamic = "error";

const baseUrl = "https://papirink.com"; // TODO: kendi domaininle değiştir
const pagePath = "/iletisim";

export const metadata: Metadata = {
  title: "İletişim | Papirink",
  description:
    "Papirink ile iletişime geçin. Plotter, kartuş, mürekkep, kâğıt ve sarf malzemeleri için hızlı destek ve teklif alın.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "İletişim | Papirink",
    description:
      "Plotter çözümleri, sarf malzemeleri ve teknik destek için Papirink’e ulaşın.",
  },
};

const CONTACT = {
  phoneDisplay: "+90 5XX XXX XX XX",
  phoneHref: "tel:+905XXXXXXXXX",
  whatsappHref: "https://wa.me/90XXXXXXXXXX",
  email: "info@papirink.com",
  emailHref: "mailto:info@papirink.com",
  address: "Türkiye (Adres bilginizi buraya yazın)",
};

export default function IletisimPage() {
  return (
    <>
      <Header />

      <main className="bg-[#f5f7fb] text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[{ label: "Ana Sayfa", href: "/" }, { label: "İletişim" }]}
          />

          {/* Hero */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                İletişim
              </h1>
              <p className="mt-3 max-w-xl text-slate-600">
                Plotter makinası, kartuş, mürekkep, kâğıt ve sarf malzemeleri için
                hızlıca bilgi alın. Model/ölçü/gramaj ile yazarsanız daha hızlı döneriz.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#22c55e] px-5 py-3 text-sm font-extrabold text-white hover:opacity-95"
                >
                  WhatsApp’tan Yaz
                </a>

                <Link
                  href="/teklif-al"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-blue-700"
                >
                  Teklif Al
                </Link>

                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                >
                  Ara
                </a>
              </div>

              <div className="mt-8 grid gap-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-bold text-slate-500">Telefon</div>
                  <a
                    className="mt-1 block text-sm font-extrabold text-slate-900 hover:underline"
                    href={CONTACT.phoneHref}
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-bold text-slate-500">E-posta</div>
                  <a
                    className="mt-1 block text-sm font-extrabold text-slate-900 hover:underline"
                    href={CONTACT.emailHref}
                  >
                    {CONTACT.email}
                  </a>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-bold text-slate-500">Adres</div>
                  <div className="mt-1 text-sm font-semibold text-slate-800">
                    {CONTACT.address}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form-like card (statik, demo) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-extrabold">Hızlı Mesaj</h2>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  Demo
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Şimdilik formu backend’e bağlamadık. En hızlı iletişim WhatsApp veya telefon.
              </p>

              <div className="mt-5 grid gap-3">
                <input
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                  placeholder="Ad Soyad"
                />
                <input
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                  placeholder="Telefon / E-posta"
                />
                <input
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                  placeholder="İlgilendiğiniz ürün (örn: HP T1700, 80 gr 914mm)"
                />
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                  placeholder="Mesajınız..."
                />
                <button
                  type="button"
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-blue-700"
                >
                  Mesaj Gönder (Demo)
                </button>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <div className="font-extrabold text-slate-900">İpucu</div>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Marka/model + ölçü + kullanım amacı yaz.</li>
                  <li>Örn: “Canon PRO-4000, 44 inç, teknik çizim.”</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-extrabold">Konum</h2>
              <span className="text-xs text-slate-500">
                (Google Maps embed ekleyebiliriz)
              </span>
            </div>
            <div className="mt-4 rounded-xl bg-slate-100 p-10 text-center text-slate-500">
              Harita Alanı (Demo)
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
