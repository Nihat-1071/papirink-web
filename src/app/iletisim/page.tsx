// src/app/iletisim/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BreadcrumbAuto from "../components/BreadcrumbAuto";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/iletisim";

const CONTACT = {
  phoneDisplay: "+90 501 032 04 06",
  /** sadece rakam (başında 90 ile) */
  phoneDigitsTR: "905010320406",
  email: "info@papirink.com",
  address: "Türkiye (Adres bilginizi buraya yazın)",
};

const CONTACT_LINKS = {
  phoneHref: `tel:+${CONTACT.phoneDigitsTR}`,
  whatsappHref: `https://wa.me/${CONTACT.phoneDigitsTR}`,
  emailHref: `mailto:${CONTACT.email}`,
};

/**
 * Google Maps embed linkini buraya koy:
 * Örn: https://www.google.com/maps/embed?pb=....
 */
const MAP_EMBED_URL = ""; // boşsa demo alan gösterilecek

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
    siteName: "Papirink",
  },
};

function buildWhatsAppMessage(params: {
  name: string;
  contact: string;
  product: string;
  message: string;
}) {
  const lines = [
    "Merhaba Papirink,",
    "",
    `Ad Soyad: ${params.name || "-"}`,
    `İletişim: ${params.contact || "-"}`,
    `Ürün/Model: ${params.product || "-"}`,
    "",
    `Mesaj: ${params.message || "-"}`,
  ];
  return encodeURIComponent(lines.join("\n"));
}

export default function IletisimPage() {
  // Bu sayfa server component; demo form alanları state tutmuyor.
  // “WhatsApp ile Gönder” için kullanıcıdan input alıp JS ile yönlendirmek istiyorsan,
  // bu bloğu client component’e taşırız. Şimdilik CTA üzerinden en hızlı akış.
  const quickWhatsappHref = `${CONTACT_LINKS.whatsappHref}?text=${encodeURIComponent(
    "Merhaba Papirink, teklif/bilgi almak istiyorum."
  )}`;

  return (
    <>
      <Header />

      <main className="bg-[#f5f7fb] text-slate-900">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          {/* Breadcrumb */}
          <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-6" />

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
                  href={quickWhatsappHref}
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
                  href={CONTACT_LINKS.phoneHref}
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
                    href={CONTACT_LINKS.phoneHref}
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-bold text-slate-500">E-posta</div>
                  <a
                    className="mt-1 block text-sm font-extrabold text-slate-900 hover:underline"
                    href={CONTACT_LINKS.emailHref}
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

              <div className="mt-6 text-xs text-slate-500">
                * En hızlı dönüş: WhatsApp → Telefon → E-posta
              </div>
            </div>

            {/* Right: Form-like card (statik, demo) */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-extrabold">Hızlı Mesaj</h2>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  Pratik
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Formu şimdilik backend’e bağlamadık. Aşağıdaki şablonu kopyalayıp WhatsApp’a
                gönderebilirsin.
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

                <a
                  href={`${CONTACT_LINKS.whatsappHref}?text=${buildWhatsAppMessage({
                    name: "Ad Soyad",
                    contact: "Telefon / E-posta",
                    product: "Ürün/Model",
                    message: "Mesaj",
                  })}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#22c55e] px-5 py-3 text-sm font-extrabold text-white hover:opacity-95"
                >
                  WhatsApp ile Gönder (Şablon)
                </a>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <div className="font-extrabold text-slate-900">İpucu</div>
                <ul className="mt-2 list-disc pl-5 space-y-1">
                  <li>Marka/model + ölçü + kullanım amacı yaz.</li>
                  <li>Örn: “Canon PRO-4000, 44 inç, teknik çizim.”</li>
                  <li>Kağıtta: “80 gr / 90 gr – 914mm – 50m” gibi.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
