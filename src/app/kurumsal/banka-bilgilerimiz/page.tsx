// src/app/kurumsal/banka-bilgilerimiz/page.tsx

import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ScrollToTopProgress from "../../components/ScrollToTopProgress";
import { CONTACT } from "../../lib/contact";

export const dynamic = "error";

const baseUrl = "https://papirink.com";
const pagePath = "/kurumsal/banka-bilgilerimiz";

export const metadata: Metadata = {
  title: "Banka Bilgilerimiz | Papirink",
  description:
    "Papirink banka bilgilerimiz: banka adı, IBAN, hesap no ve şube bilgileri.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
  openGraph: {
    url: `${baseUrl}${pagePath}`,
    title: "Banka Bilgilerimiz | Papirink",
    description:
      "Papirink banka bilgilerimiz: banka adı, IBAN, hesap no ve şube bilgileri.",
    type: "website",
    siteName: "Papirink",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banka Bilgilerimiz | Papirink",
    description:
      "Papirink banka bilgilerimiz: banka adı, IBAN, hesap no ve şube bilgileri.",
  },
};

export default function BankaBilgilerimizPage() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Kurumsal", href: "/kurumsal" },
    { label: "Banka Bilgilerimiz", href: "/kurumsal/banka-bilgilerimiz" },
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
                    Banka Bilgilerimiz
                  </p>

                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                    Banka Bilgilerimiz
                  </h1>

                  <p className="mt-3 max-w-3xl text-base leading-7 text-neutral-700">
                    Ödeme işlemleriniz için banka adı, IBAN, hesap numarası ve şube
                    bilgileri aşağıdadır.
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
                      Bilgilendirme
                    </p>
                    <p className="mt-2 text-sm leading-6 text-neutral-700">
                      EFT/Havale sırasında açıklama alanını sipariş bilginizle
                      doldurmanız işlemlerin hızlanmasına yardımcı olur.
                    </p>
                    <div className="mt-4 rounded-xl border border-neutral-200 bg-white p-4">
                      <p className="text-xs font-medium text-neutral-600">
                        Not
                      </p>
                      <p className="mt-1 text-sm leading-6 text-neutral-800">
                        Banka bilgileri güncellendiğinde bu sayfa üzerinden duyurulur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TABLE */}
          <section className="mt-10">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                Hesap Bilgileri
              </h2>

              <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead className="bg-neutral-50">
                      <tr>
                        <th className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-neutral-900">
                          Banka Adı
                        </th>
                        <th className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-neutral-900">
                          İban No
                        </th>
                        <th className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-neutral-900">
                          Hesap No
                        </th>
                        <th className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-neutral-900">
                          Şube İsmi / Şube No
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-neutral-200">
                      <tr className="bg-white">
                        <td className="px-5 py-5 text-sm font-medium text-neutral-900">
                          Ziraat Bankası
                        </td>
                        <td className="px-5 py-5 text-sm text-neutral-800">
                          <span className="font-mono">
                            TR36 0001 0019 2882 4632 5450 01
                          </span>
                        </td>
                        <td className="px-5 py-5 text-sm text-neutral-800">
                          82463254 - 5001
                        </td>
                        <td className="px-5 py-5 text-sm text-neutral-800">
                          Mecidiye - 1928
                        </td>
                      </tr>

                      <tr className="bg-white">
                        <td className="px-5 py-5 text-sm font-medium text-neutral-900">
                          Kuveyt Türk
                        </td>
                        <td className="px-5 py-5 text-sm text-neutral-800">
                          <span className="font-mono">
                            TR78 0020 5000 0946 6327 1000 01
                          </span>
                        </td>
                        <td className="px-5 py-5 text-sm text-neutral-800">
                          94663271
                        </td>
                        <td className="px-5 py-5 text-sm text-neutral-800">
                          Atisan - 0381
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footer callout */}
              <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-sm font-semibold text-neutral-900">
                  Destek
                </p>
                <p className="mt-1 text-sm leading-6 text-neutral-700">
                  Ödeme sonrası dekont/işlem bilgisi için bizimle iletişime geçebilirsiniz.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/iletisim"
                    className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-95"
                  >
                    İletişime Geç
                  </a>
                  <a
                    href="/kurumsal"
                    className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:shadow"
                  >
                    Kurumsal
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
