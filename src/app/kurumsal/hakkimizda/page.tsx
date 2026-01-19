// src/app/kurumsal/hakkimizda/page.tsx

import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTopProgress from "../../components/ScrollToTopProgress";
import { CONTACT } from "../../lib/contact";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/kurumsal/hakkimizda";

export const metadata: Metadata = {
  title: "Hakkımızda | Papirink",
  description:
    "Papirink; geniş format ve masaüstü yazıcı sarf malzemelerinde güvenilir tedarik hedefiyle kurulmuştur. Hakkımızda ve güvenlik yaklaşımımızı inceleyin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Hakkımızda | Papirink",
    description:
      "Geniş format ve masaüstü yazıcı sarf malzemelerinde güvenilir tedarik. Hakkımızda, önceliğimiz ve güvenlik yaklaşımımız.",
    type: "website",
    siteName: "Papirink",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda | Papirink",
    description:
      "Geniş format ve masaüstü yazıcı sarf malzemelerinde güvenilir tedarik. Hakkımızda, önceliğimiz ve güvenlik yaklaşımımız.",
  },
};

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

function IconLock(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M7.5 10.2V8.4a4.5 4.5 0 0 1 9 0v1.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6.8 10.2h10.4c.9 0 1.6.7 1.6 1.6v7.4c0 .9-.7 1.6-1.6 1.6H6.8c-.9 0-1.6-.7-1.6-1.6v-7.4c0-.9.7-1.6 1.6-1.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.1v3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
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

export default function HakkimizdaPage() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Kurumsal", href: "/kurumsal" },
    { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
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
              {/* subtle pattern */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.55]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700">
                    Kurumsal
                    <span className="h-1 w-1 rounded-full bg-neutral-400" />
                    Hakkımızda
                  </p>

                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    Hakkımızda
                  </h1>

                  <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-700">
                    Baskı sektörü için güvenilir ve sürdürülebilir tedarik
                    yaklaşımımızı; kim olduğumuzu, önceliğimizi ve güvenlik
                    prensiplerimizi burada paylaşıyoruz.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`tel:${CONTACT?.phone ?? ""}`}
                      className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                    >
                      Hızlı İletişim
                    </a>
                    <a
                      href="/iletisim"
                      className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                    >
                      İletişim Sayfası
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-neutral-200 bg-white/70 p-5 shadow-sm">
                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                      <div className="flex items-center gap-3">
                        <IconShield className="h-9 w-9 text-neutral-800" />
                        <div>
                          <p className="text-sm font-semibold text-neutral-900">
                            Güven
                          </p>
                          <p className="text-xs text-neutral-600">
                            Şeffaf yaklaşım
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <IconLock className="h-9 w-9 text-neutral-800" />
                        <div>
                          <p className="text-sm font-semibold text-neutral-900">
                            Güvenlik
                          </p>
                          <p className="text-xs text-neutral-600">
                            SSL ile koruma
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <IconCard className="h-9 w-9 text-neutral-800" />
                        <div>
                          <p className="text-sm font-semibold text-neutral-900">
                            Alışveriş
                          </p>
                          <p className="text-xs text-neutral-600">
                            Güvenli deneyim
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-4">
                      <p className="text-xs font-medium text-neutral-600">
                        Not
                      </p>
                      <p className="mt-1 text-sm leading-6 text-neutral-800">
                        Kurumsal sayfalarımızı modern ve sade bir tasarım
                        yaklaşımıyla güncelliyoruz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTENT */}
          <section className="mt-10 grid gap-6 lg:grid-cols-12">
            {/* Biz Kimiz */}
            <article className="lg:col-span-12">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-10 w-1 rounded-full bg-neutral-900/80" />
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                      Biz kimiz?
                    </h2>
                    <p className="mt-4 max-w-5xl text-base leading-7 text-neutral-700">
                      Papirink olarak biz, Geniş format ve Fotokopi Makinasıının{" "}
                      tedariki noktasında ülkemizin bu alanda ihtiyac duyduğu
                      kağıt, kartus, mürekkep ve diğer sarf malzemelerini
                      karşılama amacI ile kurulduk. Baskı sektöründeki firmaların
                      ihtiyac duyduğu ürünleri orijinal ve muadil olmak üzere her
                      bütçeye uygun olacak şekilde tedarik etmeyi ve internet
                      üzerinden alışverişi güvenli kılmayı kendimize hedef edindik.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Önceliğimiz + Vurgu kutuları */}
            <article className="lg:col-span-7">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                  Önceliğimiz Nedir?
                </h2>
                <p className="mt-4 text-base leading-7 text-neutral-700">
                  Bizim önceliğimiz, çalışma arkadaşlarımızın mutlu olmasıdır.{" "}
                  Bu noktada temel gayemiz güvenilir firma algısını oluşturup,{" "}
                  ihtiyaçları yerinde ve zamanında tedarik etmektir.
                </p>
              </div>
            </article>

            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold text-neutral-900">
                  Odak Noktalarımız
                </p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <p className="text-sm font-medium text-neutral-900">
                      Güvenilir firma algısı
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-700">
                      Şeffaf iletişim ve tutarlı hizmet anlayışı.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <p className="text-sm font-medium text-neutral-900">
                      Yerinde ve zamanında tedarik
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-700">
                      İhtiyaç duyulan ürünleri doğru zamanda ulaştırma hedefi.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <p className="text-sm font-medium text-neutral-900">
                      Çalışan memnuniyeti
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-700">
                      Mutlu ekip, güçlü hizmet zinciri.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Güvenilir mi */}
            <article className="lg:col-span-12">
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-4xl">
                    <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                      Papirink.com güvenilir mi ?
                    </h2>
                    <p className="mt-4 text-base leading-7 text-neutral-700">
                      Alışverişinizi daha güvenli yapabilmeniz için papirink.com
                      SSL güvenlik sertifikası kullanmaktadır. Kart bilgilerinizin
                      yaptığınız alışveriş haricinde başka bir uygulama için kayıt
                      altında tutulmadığını beyan ederiz.
                    </p>
                  </div>

                  <div className="grid w-full gap-3 sm:grid-cols-3 lg:w-[420px] lg:grid-cols-1">
                    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                      <div className="flex items-center gap-3">
                        <IconLock className="h-8 w-8 text-neutral-900" />
                        <div>
                          <p className="text-sm font-semibold text-neutral-900">
                            SSL Koruması
                          </p>
                          <p className="text-xs text-neutral-600">
                            Şifreli bağlantı
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                      <div className="flex items-center gap-3">
                        <IconCard className="h-8 w-8 text-neutral-900" />
                        <div>
                          <p className="text-sm font-semibold text-neutral-900">
                            Kart Güvenliği
                          </p>
                          <p className="text-xs text-neutral-600">
                            Kayıt altında tutulmaz
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                      <div className="flex items-center gap-3">
                        <IconShield className="h-8 w-8 text-neutral-900" />
                        <div>
                          <p className="text-sm font-semibold text-neutral-900">
                            Güvenli Alışveriş
                          </p>
                          <p className="text-xs text-neutral-600">
                            Sağlam altyapı yaklaşımı
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/iletisim"
                    className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                  >
                    Bize Ulaşın
                  </a>
                  <a
                    href="/kurumsal"
                    className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                  >
                    Kurumsal Sayfalar
                  </a>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
