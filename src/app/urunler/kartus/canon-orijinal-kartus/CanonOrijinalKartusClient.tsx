// src/app/urunler/kartus/canon-orijinal-kartus/CanonOrijinalKartusClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

type SeriesKey =
  | "all"
  | "pfi-102"
  | "pfi-320"
  | "pfi-701"
  | "pfi-703"
  | "pfi-707"
  | "pfi-1700";

function detectSeries(title: string): Exclude<SeriesKey, "all"> {
  const t = title.toLowerCase();
  if (t.includes("pfi 1700") || t.includes("pfi-1700")) return "pfi-1700";
  if (t.includes("pfi 707") || t.includes("pfi-707")) return "pfi-707";
  if (t.includes("pfi 703") || t.includes("pfi-703")) return "pfi-703";
  if (t.includes("pfi 701") || t.includes("pfi-701")) return "pfi-701";
  if (t.includes("pfi 320") || t.includes("pfi-320")) return "pfi-320";
  if (t.includes("pfi 102") || t.includes("pfi-102")) return "pfi-102";
  return "pfi-701";
}

function seriesLabel(k: Exclude<SeriesKey, "all">) {
  switch (k) {
    case "pfi-102":
      return "Canon PFI-102";
    case "pfi-320":
      return "Canon PFI-320";
    case "pfi-701":
      return "Canon PFI-701";
    case "pfi-703":
      return "Canon PFI-703";
    case "pfi-707":
      return "Canon PFI-707";
    case "pfi-1700":
      return "Canon PFI-1700";
  }
}

type Product = {
  title: string;
  desc: string;
  href: string;
  pills: string[];
  image?: { src: string; alt: string };
};

// ✅ Alt klasör yapına göre düzeltildi
const PFI102_HREF = "/urunler/kartus/canon-orijinal-kartus/canon-pfi-102";
const PFI320_HREF = "/urunler/kartus/canon-orijinal-kartus/canon-320";
const PFI701_HREF = "/urunler/kartus/canon-orijinal-kartus/canon-701";
const PFI703_HREF = "/urunler/kartus/canon-orijinal-kartus/canon-pfi-703";
const PFI707_HREF = "/urunler/kartus/canon-orijinal-kartus/canon-pfi-707";
const PFI1700_HREF = "/urunler/kartus/canon-orijinal-kartus/canon-1700";

const IMG_BASE = "/images/urunler/kartus/canon-orijinal-kartus";

const PRODUCTS: Product[] = [
  // ======================
  // Canon PFI-102 (iPF500 / iPF600)
  // ======================
  {
    title: "Canon PFI-102 BK Parlak Siyah Orijinal Kartuş (iPF500 / iPF600)",
    desc: "Canon imagePROGRAF iPF500 / iPF600 için PFI-102BK parlak siyah orijinal kartuş.",
    href: PFI102_HREF,
    pills: ["PFI-102", "BK", "Parlak Siyah", "iPF500", "iPF600"],
    image: {
      src: `${IMG_BASE}/canon-pfi-102bk-parlak-siyah-kartus-ipf500-ipf600.jpg`,
      alt: "Canon PFI-102BK parlak siyah orijinal kartuş iPF500 iPF600",
    },
  },
  {
    title: "Canon PFI-102 C Mavi Orijinal Kartuş (iPF500 / iPF600)",
    desc: "Canon imagePROGRAF iPF500 / iPF600 için PFI-102C mavi (cyan) orijinal kartuş.",
    href: PFI102_HREF,
    pills: ["PFI-102", "C", "Mavi", "iPF500", "iPF600"],
    image: {
      src: `${IMG_BASE}/canon-pfi-102c-mavi-orijinal-kartus-ipf500-ipf600.jpg`,
      alt: "Canon PFI-102C mavi orijinal kartuş iPF500 iPF600",
    },
  },
  {
    title: "Canon PFI-102 M Kırmızı Orijinal Kartuş (iPF500 / iPF600)",
    desc: "Canon imagePROGRAF iPF500 / iPF600 için PFI-102M kırmızı orijinal kartuş.",
    href: PFI102_HREF,
    pills: ["PFI-102", "M", "Kırmızı", "iPF500", "iPF600"],
    image: {
      src: `${IMG_BASE}/canon-pfi-102m-kirmizi-orijinal-kartus-ipf500-ipf600.jpg`,
      alt: "Canon PFI-102M kırmızı orijinal kartuş iPF500 iPF600",
    },
  },
  {
    title: "Canon PFI-102 MBK Mat Siyah Orijinal Kartuş (iPF500 / iPF600)",
    desc: "Canon imagePROGRAF iPF500 / iPF600 için PFI-102MBK mat siyah orijinal kartuş.",
    href: PFI102_HREF,
    pills: ["PFI-102", "MBK", "Mat Siyah", "iPF500", "iPF600"],
    image: {
      src: `${IMG_BASE}/canon-pfi-102mbk-mat-siyah-kartus-ipf500-ipf600.jpg`,
      alt: "Canon PFI-102MBK mat siyah orijinal kartuş iPF500 iPF600",
    },
  },
  {
    title: "Canon PFI-102 Y Sarı Orijinal Kartuş (iPF500 / iPF600)",
    desc: "Canon imagePROGRAF iPF500 / iPF600 için PFI-102Y sarı orijinal kartuş.",
    href: PFI102_HREF,
    pills: ["PFI-102", "Y", "Sarı", "iPF500", "iPF600"],
    image: {
      src: `${IMG_BASE}/canon-pfi-102y-sari-orijinal-kartus-ipf500-ipf600.jpg`,
      alt: "Canon PFI-102Y sarı orijinal kartuş iPF500 iPF600",
    },
  },

  // ======================
  // Canon PFI-320 (TM-200 / TM-205)
  // ======================
  {
    title: "Canon PFI-320 BK Siyah Orijinal Kartuş (TM-200 / TM-205)",
    desc: "Canon imagePROGRAF TM-200 / TM-205 için PFI-320BK siyah orijinal kartuş.",
    href: PFI320_HREF,
    pills: ["PFI-320", "BK", "Siyah", "TM-200", "TM-205"],
    image: {
      src: `${IMG_BASE}/canon-pfi-320bk-siyah-orijinal-kartus-tm-200-tm-205.jpg`,
      alt: "Canon PFI-320BK siyah orijinal kartuş TM-200 TM-205",
    },
  },
  {
    title: "Canon PFI-320 C Mavi Orijinal Kartuş (TM-200 / TM-205)",
    desc: "Canon imagePROGRAF TM-200 / TM-205 için PFI-320C mavi (cyan) orijinal kartuş.",
    href: PFI320_HREF,
    pills: ["PFI-320", "C", "Mavi", "TM-200", "TM-205"],
    image: {
      src: `${IMG_BASE}/canon-pfi-320c-mavi-orijinal-kartus-tm-200-tm-205.jpg`,
      alt: "Canon PFI-320C mavi orijinal kartuş TM-200 TM-205",
    },
  },
  {
    title: "Canon PFI-320 M Kırmızı Orijinal Kartuş (TM-200 / TM-205)",
    desc: "Canon imagePROGRAF TM-200 / TM-205 için PFI-320M kırmızı (magenta) orijinal kartuş.",
    href: PFI320_HREF,
    pills: ["PFI-320", "M", "Kırmızı", "TM-200", "TM-205"],
    image: {
      src: `${IMG_BASE}/canon-pfi-320m-kirmizi-orijinal-kartus-tm-200-tm-205.jpg`,
      alt: "Canon PFI-320M kırmızı orijinal kartuş TM-200 TM-205",
    },
  },
  {
    title: "Canon PFI-320 MBK Mat Siyah Orijinal Kartuş (TM-200 / TM-205)",
    desc: "Canon imagePROGRAF TM-200 / TM-205 için PFI-320MBK mat siyah orijinal kartuş.",
    href: PFI320_HREF,
    pills: ["PFI-320", "MBK", "Mat Siyah", "TM-200", "TM-205"],
    image: {
      src: `${IMG_BASE}/canon-pfi-320mbk-mat-siyah-orijinal-kartus-tm-200-tm-205.jpg`,
      alt: "Canon PFI-320MBK mat siyah orijinal kartuş TM-200 TM-205",
    },
  },
  {
    title: "Canon PFI-320 Y Sarı Orijinal Kartuş (TM-200 / TM-205)",
    desc: "Canon imagePROGRAF TM-200 / TM-205 için PFI-320Y sarı orijinal kartuş.",
    href: PFI320_HREF,
    pills: ["PFI-320", "Y", "Sarı", "TM-200", "TM-205"],
    image: {
      src: `${IMG_BASE}/canon-pfi-320y-sari-orijinal-kartus-tm-200-tm-205.jpg`,
      alt: "Canon PFI-320Y sarı orijinal kartuş TM-200 TM-205",
    },
  },

  // ======================
  // Canon PFI-701
  // ======================
  {
    title: "Canon PFI-701 BK Siyah Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-701BK siyah orijinal kartuş.",
    href: PFI701_HREF,
    pills: ["PFI-701", "BK", "Siyah"],
    image: {
      src: `${IMG_BASE}/canon-pfi-701-bk-siyah-orijinal-kartus.jpg`,
      alt: "Canon PFI-701BK siyah orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-701 C Mavi Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-701C mavi (cyan) orijinal kartuş.",
    href: PFI701_HREF,
    pills: ["PFI-701", "C", "Mavi"],
    image: {
      src: `${IMG_BASE}/canon-pfi-701-c-mavi-orijinal-kartus.jpg`,
      alt: "Canon PFI-701C mavi orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-701 G Yeşil Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-701G yeşil orijinal kartuş.",
    href: PFI701_HREF,
    pills: ["PFI-701", "G", "Yeşil"],
    image: {
      src: `${IMG_BASE}/canon-pfi-701-g-yesil-orijinal-kartus.jpg`,
      alt: "Canon PFI-701G yeşil orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-701 GY Gri Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-701GY gri orijinal kartuş.",
    href: PFI701_HREF,
    pills: ["PFI-701", "GY", "Gri"],
    image: {
      src: `${IMG_BASE}/canon-pfi-701-gy-gri-orijinal-kartus.jpg`,
      alt: "Canon PFI-701GY gri orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-701 M Kırmızı Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-701M kırmızı (magenta) orijinal kartuş.",
    href: PFI701_HREF,
    pills: ["PFI-701", "M", "Kırmızı"],
    image: {
      src: `${IMG_BASE}/canon-pfi-701-m-kirmizi-orijinal-kartus.jpg`,
      alt: "Canon PFI-701M kırmızı orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-701 MBK Mat Siyah Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-701MBK mat siyah orijinal kartuş.",
    href: PFI701_HREF,
    pills: ["PFI-701", "MBK", "Mat Siyah"],
    image: {
      src: `${IMG_BASE}/canon-pfi-701-mbk-mat-siyah-orijinal-kartus.jpg`,
      alt: "Canon PFI-701MBK mat siyah orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-701 PC Foto Mavi Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-701PC foto mavi orijinal kartuş.",
    href: PFI701_HREF,
    pills: ["PFI-701", "PC", "Foto Mavi"],
    image: {
      src: `${IMG_BASE}/canon-pfi-701-pc-foto-mavi-orijinal-kartus.jpg`,
      alt: "Canon PFI-701PC foto mavi orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-701 PGY Foto Gri Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-701PGY foto gri orijinal kartuş.",
    href: PFI701_HREF,
    pills: ["PFI-701", "PGY", "Foto Gri"],
    image: {
      src: `${IMG_BASE}/canon-pfi-701-pgy-foto-gri-orijinal-kartus.jpg`,
      alt: "Canon PFI-701PGY foto gri orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-701 PM Foto Kırmızı Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-701PM foto kırmızı orijinal kartuş.",
    href: PFI701_HREF,
    pills: ["PFI-701", "PM", "Foto Kırmızı"],
    image: {
      src: `${IMG_BASE}/canon-pfi-701-pm-foto-kirmizi-orijinal-kartus.jpg`,
      alt: "Canon PFI-701PM foto kırmızı orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-701 R Kırmızı Orijinal Kartuş (Red)",
    desc: "Canon imagePROGRAF serileri için PFI-701R kırmızı (red) orijinal kartuş.",
    href: PFI701_HREF,
    pills: ["PFI-701", "R", "Kırmızı", "Red"],
    image: {
      src: `${IMG_BASE}/canon-pfi-701-r-kirmizi-red-orijinal-kartus.jpg`,
      alt: "Canon PFI-701R kırmızı orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-701 Y Sarı Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-701Y sarı orijinal kartuş.",
    href: PFI701_HREF,
    pills: ["PFI-701", "Y", "Sarı"],
    image: {
      src: `${IMG_BASE}/canon-pfi-701-y-sari-orijinal-kartus.jpg`,
      alt: "Canon PFI-701Y sarı orijinal kartuş",
    },
  },

  // ======================
  // Canon PFI-703
  // ======================
  {
    title: "Canon PFI-703 C Mavi Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-703C mavi (cyan) orijinal kartuş.",
    href: PFI703_HREF,
    pills: ["PFI-703", "C", "Mavi"],
    image: {
      src: `${IMG_BASE}/canon-pfi-703-mavi-kartus.jpg`,
      alt: "Canon PFI-703C mavi orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-703 M Kırmızı Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-703M kırmızı (magenta) orijinal kartuş.",
    href: PFI703_HREF,
    pills: ["PFI-703", "M", "Kırmızı"],
    image: {
      src: `${IMG_BASE}/canon-pfi-703y-kirmizi-kartus.jpg`,
      alt: "Canon PFI-703M kırmızı orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-703 MBK Mat Siyah Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-703MBK mat siyah orijinal kartuş.",
    href: PFI703_HREF,
    pills: ["PFI-703", "MBK", "Mat Siyah"],
    image: {
      src: `${IMG_BASE}/canon-pfi-703y-mat-siyah-kartus.jpg`,
      alt: "Canon PFI-703MBK mat siyah orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-703 Y Sarı Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-703Y sarı orijinal kartuş.",
    href: PFI703_HREF,
    pills: ["PFI-703", "Y", "Sarı"],
    image: {
      src: `${IMG_BASE}/canon-pfi-703y-sari-kartus.jpg`,
      alt: "Canon PFI-703Y sarı orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-703 BK Siyah Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-703BK siyah orijinal kartuş.",
    href: PFI703_HREF,
    pills: ["PFI-703", "BK", "Siyah"],
    image: {
      src: `${IMG_BASE}/canon-pfi-703y-siyah-kartus.jpg`,
      alt: "Canon PFI-703BK siyah orijinal kartuş",
    },
  },

  // ======================
  // Canon PFI-707 (iPF830 / iPF840 / iPF850)
  // ======================
  {
    title: "Canon PFI-707 MBK Siyah Orijinal Kartuş (iPF830 / iPF840 / iPF850)",
    desc: "Canon imagePROGRAF iPF830 / iPF840 / iPF850 için PFI-707MBK siyah (mat siyah) orijinal kartuş.",
    href: PFI707_HREF,
    pills: ["PFI-707", "MBK", "Siyah", "iPF830", "iPF840", "iPF850"],
    image: {
      src: `${IMG_BASE}/canon-pfi-707mbk-siyah-orijinal-kartus-ipf830-ipf840-ipf850.jpg`,
      alt: "Canon PFI-707MBK siyah orijinal kartuş iPF830 iPF840 iPF850",
    },
  },

  // ======================
  // Canon PFI-1700 (0774C001 ... 0781C001)
  // ======================
  {
    title: "Canon PFI-1700 C 0776C001 Mavi Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-1700C (0776C001) mavi orijinal kartuş.",
    href: PFI1700_HREF,
    pills: ["PFI-1700", "C", "0776C001", "Mavi"],
    image: {
      src: `${IMG_BASE}/canon-pfi-1700c-0776c001-mavi-orijinal-kartus.jpg`,
      alt: "Canon PFI-1700C 0776C001 mavi orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-1700 M 0777C001 Kırmızı Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-1700M (0777C001) kırmızı orijinal kartuş.",
    href: PFI1700_HREF,
    pills: ["PFI-1700", "M", "0777C001", "Kırmızı"],
    image: {
      src: `${IMG_BASE}/canon-pfi-1700m-0777c001-kirmizi-orijinal-kartus.jpg`,
      alt: "Canon PFI-1700M 0777C001 kırmızı orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-1700 Y 0778C001 Sarı Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-1700Y (0778C001) sarı orijinal kartuş.",
    href: PFI1700_HREF,
    pills: ["PFI-1700", "Y", "0778C001", "Sarı"],
    image: {
      src: `${IMG_BASE}/canon-pfi-1700y-0778c001-sari-orijinal-kartus.jpg`,
      alt: "Canon PFI-1700Y 0778C001 sarı orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-1700 GY 0781C001 Gri Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-1700GY (0781C001) gri orijinal kartuş.",
    href: PFI1700_HREF,
    pills: ["PFI-1700", "GY", "0781C001", "Gri"],
    image: {
      src: `${IMG_BASE}/canon-pfi-1700gy-0781c001-gri-orijinal-kartus.jpg`,
      alt: "Canon PFI-1700GY 0781C001 gri orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-1700 MBK 0774C001 Mat Siyah Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-1700MBK (0774C001) mat siyah orijinal kartuş.",
    href: PFI1700_HREF,
    pills: ["PFI-1700", "MBK", "0774C001", "Mat Siyah"],
    image: {
      src: `${IMG_BASE}/canon-pfi-1700mbk-0774c001-mat-siyah-orijinal-kartus.jpg`,
      alt: "Canon PFI-1700MBK 0774C001 mat siyah orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-1700 PBK 0775C001 Foto Siyah Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-1700PBK (0775C001) foto siyah orijinal kartuş.",
    href: PFI1700_HREF,
    pills: ["PFI-1700", "PBK", "0775C001", "Foto Siyah"],
    image: {
      src: `${IMG_BASE}/canon-pfi-1700pbk-0775c001-foto-siyah-orijinal-kartus.jpg`,
      alt: "Canon PFI-1700PBK 0775C001 foto siyah orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-1700 PC 0779C001 Foto Mavi Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-1700PC (0779C001) foto mavi orijinal kartuş.",
    href: PFI1700_HREF,
    pills: ["PFI-1700", "PC", "0779C001", "Foto Mavi"],
    image: {
      src: `${IMG_BASE}/canon-pfi-1700pc-0779c001-foto-mavi-orijinal-kartus.jpg`,
      alt: "Canon PFI-1700PC 0779C001 foto mavi orijinal kartuş",
    },
  },
  {
    title: "Canon PFI-1700 PM 0780C001 Foto Kırmızı Orijinal Kartuş",
    desc: "Canon imagePROGRAF serileri için PFI-1700PM (0780C001) foto kırmızı orijinal kartuş.",
    href: PFI1700_HREF,
    pills: ["PFI-1700", "PM", "0780C001", "Foto Kırmızı"],
    image: {
      src: `${IMG_BASE}/canon-pfi-1700pm-0780c001-foto-kirmizi-orijinal-kartus.jpg`,
      alt: "Canon PFI-1700PM 0780C001 foto kırmızı orijinal kartuş",
    },
  },
];

export default function CanonOrijinalKartusClient() {
  const [active, setActive] = useState<SeriesKey>("all");

  const grouped = useMemo(() => {
    const buckets: Record<Exclude<SeriesKey, "all">, Product[]> = {
      "pfi-102": [],
      "pfi-320": [],
      "pfi-701": [],
      "pfi-703": [],
      "pfi-707": [],
      "pfi-1700": [],
    };

    PRODUCTS.forEach((p) => {
      const s = detectSeries(p.title);
      buckets[s].push(p);
    });

    return buckets;
  }, []);

  const visibleGroups = useMemo(() => {
    const allGroups = ([
      { key: "pfi-102", items: grouped["pfi-102"] },
      { key: "pfi-320", items: grouped["pfi-320"] },
      { key: "pfi-701", items: grouped["pfi-701"] },
      { key: "pfi-703", items: grouped["pfi-703"] },
      { key: "pfi-707", items: grouped["pfi-707"] },
      { key: "pfi-1700", items: grouped["pfi-1700"] },
    ] as const).filter((g) => g.items.length > 0);

    if (active === "all") return allGroups;
    return allGroups.filter((g) => g.key === active);
  }, [active, grouped]);

  const FILTERS: { key: SeriesKey; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "pfi-102", label: "PFI-102" },
    { key: "pfi-320", label: "PFI-320" },
    { key: "pfi-701", label: "PFI-701" },
    { key: "pfi-703", label: "PFI-703" },
    { key: "pfi-707", label: "PFI-707" },
    { key: "pfi-1700", label: "PFI-1700" },
  ];

  return (
    <>
      {/* Hero */}
      <div className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white px-6 py-6 sm:px-8">
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            Alt Kategori
          </p>

          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Canon Orijinal Kartuş
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            Canon imagePROGRAF plotter yazıcılar için orijinal kartuşları seri
            bazında filtreleyin. Doğru seri/renk seçimi için hızlı destek
            alabilirsiniz.
          </p>

          <div className="mt-6 h-px w-full bg-slate-100" />

          {/* Quick actions */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={CONTACT.tel}
              className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Hızlı Destek / Teklif Al
            </a>

            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
            >
              WhatsApp
            </a>

            <Link
              href="/iletisim"
              className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              İletişim kanallarımız
            </Link>
          </div>

          {/* Filters */}
          <div className="mt-6">
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
              Seriler
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {FILTERS.map((f) => {
                const isActive = active === f.key;
                return (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setActive(f.key)}
                    className={
                      "rounded-md border px-4 py-2 text-sm font-medium transition " +
                      (isActive
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-white hover:border-slate-300")
                    }
                    aria-pressed={isActive}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Groups */}
      <div className="mt-10 space-y-10">
        {visibleGroups.map((g) => (
          <section key={g.key} className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-slate-900">
                {seriesLabel(g.key)}
              </h2>
              <span className="text-xs text-slate-500">
                {g.items.length} ürün
              </span>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {g.items.map((p) => (
                <Link
                  key={`${p.href}-${p.title}`}
                  href={p.href}
                  className="group block rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-sm transition"
                >
                  <div className="flex gap-5">
                    {/* SOL */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:underline">
                        {p.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {p.desc}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.pills.map((pill) => (
                          <span
                            key={`${p.title}-${pill}`}
                            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 h-px w-full bg-slate-100" />

                      <div className="mt-4 text-xs text-slate-500">
                        Ürün detayı
                      </div>
                    </div>

                    {/* SAĞ */}
                    <div className="relative hidden sm:block w-44 md:w-48 lg:w-56">
                      <div className="relative h-32 md:h-36 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                        <Image
                          src={p.image?.src ?? "/images/urunler/placeholder.webp"}
                          alt={p.image?.alt ?? p.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 224px, 192px"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Doğru kartuşu bulamadınız mı?
        </h3>

        <p className="mt-2 max-w-3xl text-sm text-slate-600 leading-relaxed">
          Yazıcı modelinizi (ör. iPF500/iPF600, TM-200/TM-205, iPF830/840/850 vb.)
          ve ihtiyacınız olan rengi paylaşın; doğru Canon orijinal kartuşu hızlıca
          netleştirelim.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={CONTACT.tel}
            className="rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            Hızlı Destek Al
          </a>

          <Link
            href="/urunler"
            className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Tüm Ürünler
          </Link>
        </div>
      </div>
    </>
  );
}
