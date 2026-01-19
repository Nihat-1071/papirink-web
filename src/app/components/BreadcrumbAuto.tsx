"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { label: string; href: string };

function titleCaseTR(s: string) {
  // Basit TR uyumlu titlecase
  return s
    .replace(/[-_]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toLocaleUpperCase("tr-TR") + w.slice(1))
    .join(" ");
}

const LABELS: Record<string, string> = {
  urunler: "Ürünler",
  makinalar: "Makinalar",
  plotter: "Plotter",
  "fotokopi-makinasi": "Fotokopi Makinası",
  tarayici: "Tarayıcı",
  "katlama-makinasi": "Katlama Makinası",
  uv: "UV",
  "etiket-makinalari": "Etiket Makinaları",

  kartus: "Kartuş",
  "hp-orijinal-kartus": "HP Orijinal Kartuş",
  "canon-orijinal-kartus": "Canon Orijinal Kartuş",
  "epson-orijinal-kartus": "Epson Orijinal Kartuş",
  "papirink-muadil-kartus": "Papirink Muadil Kartuş",

  kagit: "Kağıt",
  "plotter-kagitlari": "Plotter Kağıtları",
  "fotograf-kagitlari": "Fotoğraf Kağıtları",
  "mat-coated-kagitlari": "Mat Coated Kağıtları",
  aydinger: "Aydinger",
  polyester: "Polyester",
  "polyester-kanvas": "Polyester Kanvas",
  "pamuklu-kanvas-cotton": "Pamuklu Kanvas (Cotton)",
  "yapiskanli-kagitlar": "Yapışkanlı Kağıtlar",
  "bayrak-bezi-takvim-bezi": "Bayrak Bezi - Takvim Bezi",
  "fosforlu-kagitlar": "Fosforlu Kağıtlar",

  "bitmeyen-kartus": "Bitmeyen Kartuş",
  murekkep: "Mürekkep",
  "sarf-malzeme": "Sarf Malzeme",

  kurumsal: "Kurumsal",
  hakkimizda: "Hakkımızda",
  "banka-bilgilerimiz": "Banka Bilgilerimiz",
  "teslimat-bilgilerimiz": "Teslimat Bilgilerimiz",
  "satis-sozlesmesi": "Satış Sözleşmesi",

  iletisim: "İletişim",
};

export default function BreadcrumbAuto({
  className = "",
  showOnHome = false,
}: {
  className?: string;
  showOnHome?: boolean;
}) {
  const pathname = usePathname() || "/";
  const clean = pathname.split("?")[0].split("#")[0];
  const parts = clean.split("/").filter(Boolean);

  if (clean === "/" && !showOnHome) return null;

  const items: Item[] = [{ label: "Ana Sayfa", href: "/" }];

  let acc = "";
  for (const seg of parts) {
    acc += `/${seg}`;
    const label = LABELS[seg] ?? titleCaseTR(decodeURIComponent(seg));
    items.push({ label, href: acc });
  }

    return (
    <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((it, idx) => {
            const isLast = idx === items.length - 1;

            return (
            <li key={it.href} className="flex items-center gap-2">
                {idx !== 0 && (
                <span className="select-none text-gray-300" aria-hidden="true">
                    ›
                </span>
                )}

                {isLast ? (
                <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-semibold text-gray-900">
                    {it.label}
                </span>
                ) : (
                <Link
                    href={it.href}
                    className="
                    inline-flex items-center rounded-full border border-gray-200
                    bg-white px-3 py-1 font-medium text-gray-700
                    shadow-sm transition
                    hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900
                    active:scale-[0.98]
                    focus:outline-none focus:ring-2 focus:ring-blue-200
                    "
                >
                    {it.label}
                </Link>
                )}
            </li>
            );
        })}
        </ol>
    </nav>
    );
}
