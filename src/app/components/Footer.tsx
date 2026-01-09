import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Printer, Building2 } from "lucide-react";

export default function Footer() {
  const productLinks = [
    { label: "Makinalar", href: "/urunler/makinalar" },
    { label: "Kartuş", href: "/urunler/kartus" },
    { label: "Kağıt", href: "/urunler/kagit" },
    { label: "Bitmeyen Kartuş", href: "/urunler/bitmeyen-kartus" },
    { label: "Mürekkep", href: "/urunler/murekkep" },
    { label: "Sarf Malzeme", href: "/urunler/sarf-malzeme" },
  ];

  const corporateLinks = [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Banka Bilgilerimiz", href: "/banka-bilgilerimiz" },
    { label: "Teslimat Bilgileri", href: "/teslimat-bilgileri" },
    { label: "Satış Sözleşmesi", href: "/satis-sozlesmesi" },
  ];

  return (
    <footer className="relative border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* ÜST: Sol (logo kartı) + Orta (CTA) + Sağ (linkler) */}
        <div className="grid gap-8 py-12 md:grid-cols-12">
          {/* SOL: Logo kartı */}
          <div className="md:col-span-4">
            <div className="relative h-[210px] overflow-hidden rounded-2xl border border-slate-200 bg-white md:h-[260px]">
              {/* açık pattern + hafif glow */}
              <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_25%_20%,rgba(56,189,248,0.14),transparent_55%),radial-gradient(600px_circle_at_70%_80%,rgba(0,0,0,0.04),transparent_60%)]" />
              <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="relative h-40 w-[420px] sm:h-44 sm:w-[480px] md:h-48 md:w-[560px]">
                  <Image
                    src="/brand/papirink-logo.webp"
                    alt="Papirink"
                    fill
                    className="object-contain scale-[1.05] drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)]"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ORTA: Yazı + CTA */}
          <div className="md:col-span-4">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="max-w-md text-sm leading-6 text-slate-600">
                Plotter ürünleri, sarf malzemeleri ve teknik servis çözümleri.
                <br />
                Kurumsal ve güvenilir tedarik için bizimle iletişime geçin.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/teklif-al"
                  className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-extrabold text-white shadow-sm hover:bg-slate-800"
                >
                  Teklif Al
                </Link>

                <Link
                  href="/iletisim"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-extrabold text-slate-900 shadow-sm hover:bg-slate-50"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>

          {/* SAĞ: Link blokları */}
          <div className="md:col-span-4">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="text-base font-extrabold tracking-tight text-slate-900">
                  Ürün Kategorileri
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {productLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-base font-extrabold tracking-tight text-slate-900">
                  Kurumsal
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {corporateLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ALT: İletişim + Harita */}
        <div className="grid gap-8 pb-12 md:grid-cols-12">
          {/* İletişim */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-extrabold uppercase tracking-wide text-slate-700">
                İletişim Bilgileri
              </div>

              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Adres:</strong>{" "}
                    Kanuni Mahallesi, Bademlik Yolu Cd. 118/A Keçiören / Ankara
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Posta Kodu:</strong> 06300
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <a
                    href="mailto:info@papirink.com.tr"
                    className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4"
                  >
                    info@papirink.com.tr
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-slate-400" />
                  <a
                    href="tel:+903125801006"
                    className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-4"
                  >
                    +90 312 580 10 06
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Printer className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Faks:</strong> +90 312 580
                    10 07
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Harita */}
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="px-4 py-3 text-sm font-extrabold text-slate-900">
                Konum
              </div>
              <div className="h-[260px] w-full">
                <iframe
                  title="Papirink Konum"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.527753727992!2d32.8625484!3d40.018995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34d50e26e9c61%3A0xee2b8623074c49b4!2zUGFwaXJpbmsgS2HEn8SxdCwgTcO8cmVra2VwIHZlIEJhc2vEsSBNYWtpbmVsZXJpIEx0ZCDFnnRp!5e0!3m2!1str!2str!4v1767373393982!5m2!1str!2str"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALT BAR */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-10">
          <span>© {new Date().getFullYear()} Papirink</span>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kvkk"
              className="hover:text-slate-900 hover:underline underline-offset-4"
            >
              KVKK
            </Link>
            <Link
              href="/gizlilik"
              className="hover:text-slate-900 hover:underline underline-offset-4"
            >
              Gizlilik Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
