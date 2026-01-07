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
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-[#0b1220] via-[#0e1628] to-[#0b1220] text-white">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* ÜST: Sol (logo kartı tam dolu) + Orta (CTA ortalı) + Sağ (link blokları sol hizalı) */}
        <div className="grid gap-8 py-12 md:grid-cols-12">
          {/* SOL: Papirink görseli tam kaplasın (logo ile modern kart) */}
          <div className="md:col-span-4">
            <div className="relative h-[210px] overflow-hidden rounded-2xl border border-white/10 bg-white/14 md:h-[260px]">
              {/* arka plan: hafif pattern + glow */}
              <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_25%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(600px_circle_at_70%_80%,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:48px_48px]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-black/25" />

              {/* Logo büyük - “tam kaplasın” hissi */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="relative h-40 w-[420px] sm:h-44 sm:w-[480px] md:h-48 md:w-[560px]">
                <Image
                  src="/brand/papirink-logo.webp"
                  alt="Papirink"
                  fill
                  className="object-contain scale-[1.05] drop-shadow-[0_18px_36px_rgba(0,0,0,0.5)]"
                  priority={false}
                />
              </div>
              </div>
            </div>
          </div>

          {/* ORTA: Yazı + CTA tam ortaya */}
          <div className="md:col-span-4">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="max-w-md text-sm leading-6 text-white/75">
                Plotter ürünleri, sarf malzemeleri ve teknik servis çözümleri.
                <br />
                Kurumsal ve güvenilir tedarik için bizimle iletişime geçin.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/teklif-al"
                  className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#0b1220] shadow-sm hover:opacity-90"
                >
                  Teklif Al
                </Link>

                <Link
                  href="/iletisim"
                  className="rounded-xl border border-white/15 bg-white/8 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/10"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>

          {/* SAĞ: Ürün Kategorileri + Kurumsal (en sola hizalı) */}
          <div className="md:col-span-4">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="text-base font-extrabold tracking-tight text-white">
                  Ürün Kategorileri
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {productLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-white/75 hover:text-white hover:underline underline-offset-4"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-base font-extrabold tracking-tight text-white">
                  Kurumsal
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {corporateLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-white/75 hover:text-white hover:underline underline-offset-4"
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

        {/* ALT: İletişim + Harita (aynen) */}
        <div className="grid gap-8 pb-12 md:grid-cols-12">
          {/* İletişim */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-extrabold uppercase tracking-wide text-white/80">
                İletişim Bilgileri
              </div>

              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 text-white/60" />
                  <span className="text-white/75">
                    <strong className="text-white">Adres:</strong>{" "}
                    Kanuni Mahallesi, Bademlik Yolu Cd. 118/A Keçiören / Ankara
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-white/60" />
                  <span className="text-white/75">
                    <strong className="text-white">Posta Kodu:</strong> 06300
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-white/60" />
                  <a
                    href="mailto:info@papirink.com.tr"
                    className="text-white/75 hover:text-white hover:underline underline-offset-4"
                  >
                    info@papirink.com.tr
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white/60" />
                  <a
                    href="tel:+903125801006"
                    className="text-white/75 hover:text-white hover:underline underline-offset-4"
                  >
                    +90 312 580 10 06
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Printer className="h-5 w-5 text-white/60" />
                  <span className="text-white/75">
                    <strong className="text-white">Faks:</strong> +90 312 580 10
                    07
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Harita (güncel embed aynen) */}
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="px-4 py-3 text-sm font-semibold text-white/90">
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
      <div className="border-t border-white/10 bg-[#0b1220]">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-10">
          <span>© {new Date().getFullYear()} Papirink</span>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kvkk"
              className="hover:text-white hover:underline underline-offset-4"
            >
              KVKK
            </Link>
            <Link
              href="/gizlilik"
              className="hover:text-white hover:underline underline-offset-4"
            >
              Gizlilik Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
