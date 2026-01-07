// src/app/kurumsal/teslimat-bilgileri/page.tsx

import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTopProgress from "../../components/ScrollToTopProgress";
import { CONTACT } from "../../lib/contact";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/kurumsal/teslimat-bilgileri";

export const metadata: Metadata = {
  title: "Teslimat Bilgileri | Papirink",
  description:
    "Sipariş teslimat süreleri, stok durumu, ödeme yöntemleri ve kargo ücreti bilgilendirmeleri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Teslimat Bilgileri | Papirink",
    description:
      "Sipariş teslimat süreleri, stok durumu, ödeme yöntemleri ve kargo ücreti bilgilendirmeleri.",
    type: "website",
    siteName: "Papirink",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teslimat Bilgileri | Papirink",
    description:
      "Sipariş teslimat süreleri, stok durumu, ödeme yöntemleri ve kargo ücreti bilgilendirmeleri.",
  },
};

function IconTruck(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M3.6 6.6h10.4v9H3.6v-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 9.2h4.1l2.3 2.6v3.8H14V9.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7.2 18.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M17.6 18.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5.3 15.6h-1.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconShield(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M12 2.5 20 6v7.3c0 4.6-3.2 8.2-8 9.7-4.8-1.5-8-5.1-8-9.7V6l8-3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.2l1.9 1.9 3.8-4.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCard(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M4.5 8.3h15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6.8 16.2h4.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5.4 5.6h13.2c1 0 1.9.8 1.9 1.9v9.9c0 1-.8 1.9-1.9 1.9H5.4c-1 0-1.9-.8-1.9-1.9V7.5c0-1 .8-1.9 1.9-1.9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TeslimatBilgileriPage() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Kurumsal", href: "/kurumsal" },
    { label: "Teslimat Bilgileri", href: "/kurumsal/teslimat-bilgileri" },
  ];

  return (
    <>
      <Header />
      <ScrollToTopProgress />

      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />

          {/* HERO */}
          <section className="mt-5 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.55]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div className="relative grid gap-6 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700">
                    Kurumsal
                    <span className="h-1 w-1 rounded-full bg-neutral-400" />
                    Teslimat Bilgileri
                  </p>

                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    Teslimat Bilgileri
                  </h1>

                  <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-700">
                    Siparişlerinizin teslimat süreci, ödeme seçenekleri ve kargo
                    ücretlendirmeleri ile ilgili bilgilendirme metnini aşağıda
                    bulabilirsiniz.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="/iletisim"
                      className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                    >
                      İletişim
                    </a>
                    <a
                      href={`tel:${CONTACT?.phone ?? ""}`}
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                    >
                      Hızlı İletişim
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-sm">
                    <p className="text-sm font-semibold text-neutral-900">
                      Özet
                    </p>
                    <div className="mt-4 grid gap-3">
                      <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4">
                        <IconTruck className="h-8 w-8 text-neutral-900" />
                        <div>
                          <p className="text-sm font-semibold text-neutral-900">
                            Teslimat
                          </p>
                          <p className="text-xs text-neutral-600">
                            Süre ve kargo bilgileri
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4">
                        <IconCard className="h-8 w-8 text-neutral-900" />
                        <div>
                          <p className="text-sm font-semibold text-neutral-900">
                            Ödeme
                          </p>
                          <p className="text-xs text-neutral-600">
                            Kredi kartı / havale
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4">
                        <IconShield className="h-8 w-8 text-neutral-900" />
                        <div>
                          <p className="text-sm font-semibold text-neutral-900">
                            Güvenlik
                          </p>
                          <p className="text-xs text-neutral-600">
                            Güvenlik ön planda
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-4">
                      <p className="text-xs font-medium text-neutral-600">
                        Bilgi
                      </p>
                      <p className="mt-1 text-sm leading-6 text-neutral-800">
                        Lütfen iletişim bilgilerinizin doğru olduğundan emin olunuz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTENT */}
          <section className="mt-10">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-base leading-7 text-neutral-700">
                Papirink Kağıt Kırtasiye Makina Baskı Sistemleri Sanayi ve Ticaret
                Limited Şirketi'nin web sitesinden vermiş olduğunuz siparişler için
                kredi kartı ve havale işlemlerinizde güvenliğinizin ön planda
                olduğunu beyan ederiz.
              </p>

              <div className="mt-8 space-y-6">
                {/* Soru 1 */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <h2 className="text-lg font-semibold text-neutral-900">
                    Siparişim elime ne zaman ulaşır?
                  </h2>
                  <p className="mt-3 text-base leading-7 text-neutral-700">
                    Ankara içinde verilen siparişler saat 13:00 e kadar verildiği
                    taktirde öğle sonu; günün diğer saatlerinde verilen siparişler
                    ertesi gün adresinize firmamızca teslim edilecektir.Türkiye'nin
                    diğer bölgelerinden gelen siparişler - kargo kaynaklı problemler
                    hariç - 2 iş günü içinde tarafınıza ulaşacaktır. Cumartesi günü
                    saat 12:00 ye kadar verilen siparişler Ankara için aynı gün,
                    diğer bölgelere Pazartesi günü teslim edilecektir.
                  </p>
                </div>

                {/* Soru 2 */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <h2 className="text-lg font-semibold text-neutral-900">
                    Stok Problemi yaşar mıyım ?
                  </h2>
                  <p className="mt-3 text-base leading-7 text-neutral-700">
                    Verdiğiniz siparişler gerek Papirink LTD'nin gerekse tedarikçi
                    firmaların nadiren de olsa stoklarında olmamasından dolayı
                    gecikme yaşayabilir. Bu durum tarafınıza telefon ya da mail ile
                    bildirilecektir. İletişim bilgilerinizi doğru yazdığınızdan
                    emin olunuz.
                  </p>
                </div>

                {/* Soru 3 */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <h2 className="text-lg font-semibold text-neutral-900">
                    Nasıl Ödeme Yapabilirim ?
                  </h2>
                  <p className="mt-3 text-base leading-7 text-neutral-700">
                    Kredi kartı çekimi ya da havale yoluyla ödeme yapabilirsiniz.
                    Kargo ile kapıda ödeme şeklinde bir çalışmamız yoktur.
                  </p>
                </div>

                {/* Soru 4 */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <h2 className="text-lg font-semibold text-neutral-900">
                    Kargo Ücretini Ben mi Ödeyeceğim ?
                  </h2>
                  <p className="mt-3 text-base leading-7 text-neutral-700">
                    Ankara içi teslimatımız ücretsiz olup Türkiye'nin diğer
                    bölgelerine gönderilen 500 TL ve üzeri alışverişler de yine
                    ücretsizdir. 80 gr Plotter Kağıtları bu sınırlamanın dışındadır.
                    Ücret Alıcıya aittir.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="/kurumsal/banka-bilgilerimiz"
                  className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                >
                  Banka Bilgilerimiz
                </a>
                <a
                  href="/iletisim"
                  className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                >
                  Bize Ulaşın
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
