"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CONTACT } from "../../../lib/contact";

type SeriesKey =
  | "all"
  | "hp-70"
  | "hp-711"
  | "hp-72"
  | "hp-727"
  | "hp-728"
  | "hp-745"
  | "hp-771"
  | "hp-773"
  | "hp-831";

function detectSeries(title: string): Exclude<SeriesKey, "all"> {
  const t = title.toLowerCase();
  if (t.includes("hp 727") || t.includes("hp-727")) return "hp-727";
  if (t.includes("hp 728") || t.includes("hp-728")) return "hp-728";
  
  if (t.includes("hp 70") || t.includes("hp-70")) return "hp-70";
  if (t.includes("hp 711") || t.includes("hp-711")) return "hp-711";
  if (t.includes("hp 72") || t.includes("hp-72")) return "hp-72";
  if (t.includes("hp 727") || t.includes("hp-727")) return "hp-727";
  if (t.includes("hp 728") || t.includes("hp-728")) return "hp-728";
  if (t.includes("hp 745") || t.includes("hp-745")) return "hp-745";
  if (t.includes("hp 771") || t.includes("hp-771")) return "hp-771";
  if (t.includes("hp 773") || t.includes("hp-773")) return "hp-773";
  if (t.includes("hp 831") || t.includes("hp-831")) return "hp-831";
  return "hp-728";
}

function seriesLabel(k: Exclude<SeriesKey, "all">) {
  switch (k) {
    case "hp-70":
      return "HP 70";
    case "hp-711":
      return "HP 711";
    case "hp-72":
      return "HP 72";
    case "hp-727":
      return "HP 727";
    case "hp-728":
      return "HP 728";
    case "hp-745":
      return "HP 745";
    case "hp-771":
      return "HP 771";
    case "hp-773":
      return "HP 773";
    case "hp-831":
      return "HP 831";
  }
}

type Product = {
  title: string;
  desc: string;
  href: string;
  pills: string[];
  image?: { src: string; alt: string };
};

const HP72_HREF = "/urunler/kartus/hp-orijinal-kartus/hp-72";
const HP70_HREF = "/urunler/kartus/hp-orijinal-kartus/hp-70";
const HP728_HREF = "/urunler/kartus/hp-orijinal-kartus/hp-728";
const HP745_HREF = "/urunler/kartus/hp-orijinal-kartus/hp-745";
const HP771_HREF = "/urunler/kartus/hp-orijinal-kartus/hp-771";
const HP773_HREF = "/urunler/kartus/hp-orijinal-kartus/hp-773";
const HP831_HREF = "/urunler/kartus/hp-orijinal-kartus/hp-831";

const PRODUCTS: Product[] = [
  // ======================
  // HP 70
  // ======================
  {
    title: "HP 70-C9390A Açık Mavi Orijinal Kartuş",
    desc: "HP 70 serisi için orijinal kartuş (Açık Mavi).",
    href: HP70_HREF,
    pills: ["HP 70", "C9390A", "Açık Mavi"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-70-c9390a-acik-mavi-orjinal-kartus.jpg",
      alt: "HP 70 C9390A Açık Mavi orijinal kartuş",
    },
  },
  {
    title: "HP 70-C9448A Mat Siyah Orijinal Kartuş",
    desc: "HP 70 serisi için orijinal kartuş (Mat Siyah).",
    href: HP70_HREF,
    pills: ["HP 70", "C9448A", "Mat Siyah"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-70-c9448a-mat-siyah-orjinal-kartus.jpg",
      alt: "HP 70 C9448A Mat Siyah orijinal kartuş",
    },
  },
  {
    title: "HP 70-C9449A Foto Siyah Orijinal Kartuş",
    desc: "HP 70 serisi için orijinal kartuş (Foto Siyah).",
    href: HP70_HREF,
    pills: ["HP 70", "C9449A", "Foto Siyah"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-70-c9449a-foto-siyah-orjinal-kartus.jpg",
      alt: "HP 70 C9449A Foto Siyah orijinal kartuş",
    },
  },
  {
    title: "HP 70-C9451A Açık Gri Orijinal Kartuş",
    desc: "HP 70 serisi için orijinal kartuş (Açık Gri).",
    href: HP70_HREF,
    pills: ["HP 70", "C9451A", "Açık Gri"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-70-c9451a-acik-gri-orjinal-kartus.jpg",
      alt: "HP 70 C9451A Açık Gri orijinal kartuş",
    },
  },
  {
    title: "HP 70-C9453A Kırmızı Orijinal Kartuş",
    desc: "HP 70 serisi için orijinal kartuş (Kırmızı).",
    href: HP70_HREF,
    pills: ["HP 70", "C9453A", "Kırmızı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-70-c9453a-kirmizi-orjinal-kartus.jpg",
      alt: "HP 70 C9453A Kırmızı orijinal kartuş",
    },
  },
  {
    title: "HP 70-C9454A Sarı Orijinal Kartuş",
    desc: "HP 70 serisi için orijinal kartuş (Sarı).",
    href: HP70_HREF,
    pills: ["HP 70", "C9454A", "Sarı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-70-c9454a-sari-orjinal-kartus.jpg",
      alt: "HP 70 C9454A Sarı orijinal kartuş",
    },
  },
  {
    title: "HP 70-C9455A Açık Kırmızı Orijinal Kartuş",
    desc: "HP 70 serisi için orijinal kartuş (Açık Kırmızı).",
    href: HP70_HREF,
    pills: ["HP 70", "C9455A", "Açık Kırmızı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-70-c9455a-acik-kirmizi-orjinal-kartus.jpg",
      alt: "HP 70 C9455A Açık Kırmızı orijinal kartuş",
    },
  },
  {
    title: "HP 70-C9458A Mavi Orijinal Kartuş",
    desc: "HP 70 serisi için orijinal kartuş (Mavi).",
    href: HP70_HREF,
    pills: ["HP 70", "C9458A", "Mavi"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-70-c9458a-mavi-orjinal-kartus.jpg",
      alt: "HP 70 C9458A Mavi orijinal kartuş",
    },
  },

  // ======================
  // HP 72
  // ======================
  {
    title: "HP 72 C9370A Foto Siyah Orijinal Plotter Kartuşu",
    desc: "HP 72 serisi için orijinal plotter kartuşu (Foto Siyah).",
    href: HP72_HREF,
    pills: ["HP 72", "C9370A", "Foto Siyah"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-72-c9370a-foto-siyah-orijinal-plotter-kartusu.jpg",
      alt: "HP 72 C9370A Foto Siyah orijinal plotter kartuşu",
    },
  },
  {
    title: "HP 72 C9371A Mavi Renkli Orijinal Kartuş",
    desc: "HP 72 serisi için orijinal kartuş (Mavi).",
    href: HP72_HREF,
    pills: ["HP 72", "C9371A", "Mavi"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-72-c9371a-mavi-renkli-orijinal-kartus.jpg",
      alt: "HP 72 C9371A Mavi orijinal kartuş",
    },
  },
  {
    title: "HP 72 C9372A Kırmızı Orijinal Kartuş",
    desc: "HP 72 serisi için orijinal kartuş (Kırmızı).",
    href: HP72_HREF,
    pills: ["HP 72", "C9372A", "Kırmızı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-72-c9372a-kirmizi-orijinal-kartus.jpg",
      alt: "HP 72 C9372A Kırmızı orijinal kartuş",
    },
  },
  {
    title: "HP 72 C9373A Sarı Renkli Orijinal Plotter Kartuşu",
    desc: "HP 72 serisi için orijinal plotter kartuşu (Sarı).",
    href: HP72_HREF,
    pills: ["HP 72", "C9373A", "Sarı"],
    image: {
      // ✅ klasördeki gerçek isim: ...-plotter-kartus.jpg  (kartusu değil)
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-72-c9373a-sari-renkli-orijinal-plotter-kartus.jpg",
      alt: "HP 72 C9373A Sarı orijinal plotter kartuşu",
    },
  },
  {
    title: "HP 72 C9374A Gri Renkli Orijinal Kartuş",
    desc: "HP 72 serisi için orijinal kartuş (Gri).",
    href: HP72_HREF,
    pills: ["HP 72", "C9374A", "Gri"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-72-c9374a-gri-renkli-orijinal-kartus.jpg",
      alt: "HP 72 C9374A Gri orijinal kartuş",
    },
  },
  {
    title: "HP 72 C9403A Mat Siyah Orijinal Plotter Kartuşu 2’li Kutu",
    desc: "HP 72 serisi için orijinal plotter kartuşu (Mat Siyah) 2'li kutu.",
    href: HP72_HREF,
    pills: ["HP 72", "C9403A", "Mat Siyah", "2'li"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-72-c9403a-mat-siyah-orijinal-plotter-kartusu-2-li-kutu.jpg",
      alt: "HP 72 C9403A Mat Siyah orijinal plotter kartuşu 2'li kutu",
    },
  },

  // ======================
  // HP 711
  // ======================
  {
    title: "HP 711 C1Q10A Baskı Kafası Değiştirme Takımı DesignJet T120 / T520",
    desc: "DesignJet T120 / T520 için baskı kafası değiştirme takımı.",
    href: "/urunler/kartus/hp-orijinal-kartus/hp-711",
    pills: ["HP 711", "C1Q10A", "Baskı Kafası"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-711-c1q10a-baski-kafasi-degistirme-takimi-designjet-t120-t520.jpg",
      alt: "HP 711 C1Q10A baskı kafası değiştirme takımı",
    },
  },
  {
    title: "HP 711 CZ130A Mavi Orijinal Kartuş T120 / T520",
    desc: "DesignJet T120 / T520 için orijinal kartuş (Mavi).",
    href: "/urunler/kartus/hp-orijinal-kartus/hp-711",
    pills: ["HP 711", "CZ130A", "Mavi"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-711-cz130a-mavi-orjinal-kartus-t120-t520.jpg",
      alt: "HP 711 CZ130A Mavi orijinal kartuş",
    },
  },
  {
    title: "HP 711 CZ131A Kırmızı Orijinal Kartuş T120 / T520",
    desc: "DesignJet T120 / T520 için orijinal kartuş (Kırmızı).",
    href: "/urunler/kartus/hp-orijinal-kartus/hp-711",
    pills: ["HP 711", "CZ131A", "Kırmızı"],
    image: {
      // ✅ klasördeki gerçek isim: orijinal-kartus (orjinal değil)
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-711-cz131a-kirmizi-orjinal-kartus-t120-t520.jpg",
      alt: "HP 711 CZ131A Kırmızı orijinal kartuş",
    },
  },
  {
    title: "HP 711 CZ132A Sarı Orijinal Kartuş",
    desc: "DesignJet T120 / T520 için orijinal kartuş (Sarı).",
    href: "/urunler/kartus/hp-orijinal-kartus/hp-711",
    pills: ["HP 711", "CZ132A", "Sarı"],
    image: {
      // ✅ klasördeki gerçek isim: ...-orijinal-kartus.jpg
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-711-cz132a-sari-orjinal-kartus.jpg",
      alt: "HP 711 CZ132A Sarı orijinal kartuş",
    },
  },
  {
    title: "HP 711 CZ133A Siyah Orijinal Kartuş 80 ml DesignJet T120 / T520",
    desc: "DesignJet T120 / T520 için orijinal kartuş (Siyah) 80 ml.",
    href: "/urunler/kartus/hp-orijinal-kartus/hp-711",
    pills: ["HP 711", "CZ133A", "Siyah", "80 ml"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-711-cz133a-siyah-orjinal-kartus-80-ml-designjet-t120-t520.jpg",
      alt: "HP 711 CZ133A Siyah 80 ml orijinal kartuş",
    },
  },

  // ======================
  // HP 727
  // ======================
  {
    title: "HP 727 C1Q12A Mat Siyah Kartuş 300 ml T920 / T1500 / T2500",
    desc: "T920 / T1500 / T2500 için 300 ml Mat Siyah orijinal kartuş.",
    href: "/urunler/kartus/hp-orijinal-kartus/hp-727",
    pills: ["HP 727", "C1Q12A", "300 ml", "Mat Siyah"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-727-c1q12a-mat-siyah-kartus-300-ml-t920-t1500-t2500.jpg",
      alt: "HP 727 C1Q12A Mat Siyah 300 ml orjinal kartuş",
    },
  },
  {
    title: "HP 727 F9J76A Mavi Orijinal Kartuş 300 ml T920 / T1500 / T2500",
    desc: "T920 / T1500 / T2500 için 300 ml Mavi orijinal kartuş.",
    href: "/urunler/kartus/hp-orijinal-kartus/hp-727",
    pills: ["HP 727", "F9J76A", "300 ml", "Mavi"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-727-f9j76a-mavi-orijinal-kartus-300-ml-t920-t1500-t2500.jpg",
      alt: "HP 727 F9J76A Mavi 300 ml orijinal kartuş",
    },
  },
  {
    title: "HP 727 F9J77A Kırmızı Orijinal Kartuş 300 ml T920 / T1500 / T2500",
    desc: "T920 / T1500 / T2500 için 300 ml Kırmızı orijinal kartuş.",
    href: "/urunler/kartus/hp-orijinal-kartus/hp-727",
    pills: ["HP 727", "F9J77A", "300 ml", "Kırmızı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-727-f9j77a-kirmizi-orijinal-kartus-300-ml-t920-t1500-t2500.jpg",
      alt: "HP 727 F9J77A Kırmızı 300 ml orijinal kartuş",
    },
  },
  {
    title: "HP 727 F9J78A Sarı Orijinal Kartuş 300 ml T920 / T1500 / T2500",
    desc: "T920 / T1500 / T2500 için 300 ml Sarı orijinal kartuş.",
    href: "/urunler/kartus/hp-orijinal-kartus/hp-727",
    pills: ["HP 727", "F9J78A", "300 ml", "Sarı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-727-f9j78a-sari-orijinal-kartus-300-ml-t920-t1500-t2500.jpg",
      alt: "HP 727 F9J78A Sarı 300 ml orijinal kartuş",
    },
  },
  {
    title: "HP 727 F9J79A Foto Siyah Orijinal Kartuş 300 ml T920 / T1500 / T2500",
    desc: "T920 / T1500 / T2500 için 300 ml Foto Siyah orijinal kartuş.",
    href: "/urunler/kartus/hp-orijinal-kartus/hp-727",
    pills: ["HP 727", "F9J79A", "300 ml", "Foto Siyah"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-727-f9j79a-foto-siyah-orijinal-kartus-300-ml-t920-t1500-t2500.jpg",
      alt: "HP 727 F9J79A Foto Siyah 300 ml orijinal kartuş",
    },
  },
  {
    title: "HP 727 F9J80A Gri Orijinal Kartuş 300 ml T920 / T1500 / T2500",
    desc: "T920 / T1500 / T2500 için 300 ml Gri orijinal kartuş.",
    href: "/urunler/kartus/hp-orijinal-kartus/hp-727",
    pills: ["HP 727", "F9J80A", "300 ml", "Gri"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-727-f9j80a-gri-orijinal-kartus-300-ml-t920-t1500-t2500.jpg",
      alt: "HP 727 F9J80A Gri 300 ml orijinal kartuş",
    },
  },

  // ======================
  // HP 728
  // ======================
  {
    title: "HP 728 F9J68A Mat Siyah Orijinal Mürekkep Kartuşu 300 ml",
    desc: "HP 728 serisi için 300 ml Mat Siyah orijinal mürekkep kartuşu.",
    href: HP728_HREF,
    pills: ["HP 728", "F9J68A", "300 ml", "Mat Siyah"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-728-300-ml-mat-siyah-designjet-murekkep-kartusu-f9j68a.jpg",
      alt: "HP 728 F9J68A Mat Siyah 300 ml orijinal mürekkep kartuşu",
    },
  },
  {
    title: "HP 728 F9K15A Sarı (Yellow) Orijinal Mürekkep Kartuşu 300 ml",
    desc: "HP 728 serisi için 300 ml Sarı (Yellow) orijinal mürekkep kartuşu.",
    href: HP728_HREF,
    pills: ["HP 728", "F9K15A", "300 ml", "Sarı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-728-300-ml-sari-yellow-designjet-murekkep-kartusu-f9k15a.jpg",
      alt: "HP 728 F9K15A Sarı (Yellow) 300 ml orijinal mürekkep kartuşu",
    },
  },
  {
    title: "HP 728 F9K17A Orijinal Mavi Kartuş",
    desc: "HP 728 serisi için orijinal Mavi kartuş.",
    href: HP728_HREF,
    pills: ["HP 728", "F9K17A", "Mavi"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-728-f9k17a-orijinal-mavi-kartus.jpg",
      alt: "HP 728 F9K17A orijinal mavi kartuş",
    },
  },
  {
    title: "HP 728 F9J67A Cam Göbeği Orijinal Mürekkep Kartuşu",
    desc: "HP 728 serisi için Cam Göbeği (Cyan) orijinal mürekkep kartuşu.",
    href: HP728_HREF,
    pills: ["HP 728", "F9J67A", "Cam Göbeği"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-728-orijinal-cam-gobegi-murekkep-kartusu-f9j67a.jpg",
      alt: "HP 728 F9J67A Cam Göbeği orijinal mürekkep kartuşu",
    },
  },

  // ======================
  // HP 745
  // ======================
  {
    title: "HP 745 F9K01A Kırmızı Orijinal Kartuş 300 ml (Z2600 / Z5600)",
    desc: "DesignJet Z2600 / Z5600 için 300 ml Kırmızı orijinal kartuş.",
    href: HP745_HREF,
    pills: ["HP 745", "F9K01A", "300 ml", "Kırmızı"],
    image: {
      // ✅ klasördeki gerçek isim: orijinal-kartus (orjinal değil)
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-745-f9k01a-kirmizi-orijinal-kartus-300-ml-designjet-z2600-z5600.jpg",
      alt: "HP 745 F9K01A Kırmızı 300 ml orijinal kartuş",
    },
  },
  {
    title: "HP 745 F9K02A Sarı Orijinal Kartuş 300 ml (Z2600 / Z5600)",
    desc: "DesignJet Z2600 / Z5600 için 300 ml Sarı orijinal kartuş.",
    href: HP745_HREF,
    pills: ["HP 745", "F9K02A", "300 ml", "Sarı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-745-f9k02a-sari-orijinal-kartus-300-ml-designjet-z2600-z5600.jpg",
      alt: "HP 745 F9K02A Sarı 300 ml orijinal kartuş",
    },
  },
  {
    title: "HP 745 F9K03A Mavi Orijinal Kartuş 300 ml (Z2600 / Z5600)",
    desc: "DesignJet Z2600 / Z5600 için 300 ml Mavi orijinal kartuş.",
    href: HP745_HREF,
    pills: ["HP 745", "F9K03A", "300 ml", "Mavi"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-745-f9k03a-mavi-orijinal-kartus-300-ml-designjet-z2600-z5600.jpg",
      alt: "HP 745 F9K03A Mavi 300 ml orijinal kartuş",
    },
  },
  {
    title: "HP 745 F9K04A Foto Siyah Orijinal Kartuş 300 ml (Z2600 / Z5600)",
    desc: "DesignJet Z2600 / Z5600 için 300 ml Foto Siyah orijinal kartuş.",
    href: HP745_HREF,
    pills: ["HP 745", "F9K04A", "300 ml", "Foto Siyah"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-745-f9k04a-foto-siyah-orijinal-kartus-300-ml-designjet-z2600-z5600.jpg",
      alt: "HP 745 F9K04A Foto Siyah 300 ml orijinal kartuş",
    },
  },
  {
    title: "HP 745 F9K05A Mat Siyah Orijinal Kartuş 300 ml (Z2600 / Z5600)",
    desc: "DesignJet Z2600 / Z5600 için 300 ml Mat Siyah orijinal kartuş.",
    href: HP745_HREF,
    pills: ["HP 745", "F9K05A", "300 ml", "Mat Siyah"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-745-f9k05a-mat-siyah-orijinal-kartus-designjet-z2600-z5600.jpg",
      alt: "HP 745 F9K05A Mat Siyah 300 ml orijinal kartuş",
    },
  },
  {
    title: "HP 745 F9K06A Kromatik Kırmızı Orijinal Kartuş 300 ml (Z2600 / Z5600)",
    desc: "DesignJet Z2600 / Z5600 için 300 ml Kromatik Kırmızı orijinal kartuş.",
    href: HP745_HREF,
    pills: ["HP 745", "F9K06A", "300 ml", "Kromatik Kırmızı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-745-f9k06a-kromatik-kirmizi-orijinal-kartus-300-ml-designjet-z2600-z5600.jpg",
      alt: "HP 745 F9K06A Kromatik Kırmızı 300 ml orijinal kartuş",
    },
  },

  // ======================
  // HP 771C
  // ======================
  {
    title: "HP 771C B6Y07A Mat Siyah Kartuş",
    desc: "HP 771C serisi için Mat Siyah kartuş.",
    href: HP771_HREF,
    pills: ["HP 771C", "B6Y07A", "Mat Siyah"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-771c-b6y07a-mat-siyah-kartus.jpg",
      alt: "HP 771C B6Y07A Mat Siyah kartuş",
    },
  },
  {
    title: "HP 771C B6Y08A Kromatik Kırmızı Kartuş",
    desc: "HP 771C serisi için Kromatik Kırmızı kartuş.",
    href: HP771_HREF,
    pills: ["HP 771C", "B6Y08A", "Kromatik Kırmızı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-771c-b6y08a-kromatik-kirmizi.jpg",
      alt: "HP 771C B6Y08A Kromatik Kırmızı kartuş",
    },
  },
  {
    title: "HP 771C B6Y09A Kırmızı Plotter Kartuşu",
    desc: "HP 771C serisi için Kırmızı plotter kartuşu.",
    href: HP771_HREF,
    pills: ["HP 771C", "B6Y09A", "Kırmızı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-771c-b6y09a-kirmizi-plotter-kartusu.jpg",
      alt: "HP 771C B6Y09A Kırmızı plotter kartuşu",
    },
  },
  {
    title: "HP 771C B6Y10A Sarı Plotter Kartuşu",
    desc: "HP 771C serisi için Sarı plotter kartuşu.",
    href: HP771_HREF,
    pills: ["HP 771C", "B6Y10A", "Sarı"],
    image: {
      // ✅ klasördeki gerçek isim: kartusu (kartusu değil)
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-771c-b6y10a-sari-plotter-kartusu.jpg",
      alt: "HP 771C B6Y10A Sarı plotter kartuşu",
    },
  },
  {
    title: "HP 771C B6Y11A Açık Kırmızı Plotter Kartuşu",
    desc: "HP 771C serisi için Açık Kırmızı plotter kartuşu.",
    href: HP771_HREF,
    pills: ["HP 771C", "B6Y11A", "Açık Kırmızı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-771c-b6y11a-acik-kirmizi-plotter-kartusu.jpg",
      alt: "HP 771C B6Y11A Açık Kırmızı plotter kartuşu",
    },
  },
  {
    title: "HP 771C B6Y12A Açık Mavi Plotter Kartuşu",
    desc: "HP 771C serisi için Açık Mavi plotter kartuşu.",
    href: HP771_HREF,
    pills: ["HP 771C", "B6Y12A", "Açık Mavi"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-771c-b6y12a-acik-mavi-plotter-kartusu.jpg",
      alt: "HP 771C B6Y12A Açık Mavi plotter kartuşu",
    },
  },
  {
    title: "HP 771C B6Y13A Foto Siyah Kartuş",
    desc: "HP 771C serisi için Foto Siyah kartuş.",
    href: HP771_HREF,
    pills: ["HP 771C", "B6Y13A", "Foto Siyah"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-771c-b6y13a-foto-siyah-kartus.jpg",
      alt: "HP 771C B6Y13A Foto Siyah kartuş",
    },
  },
  {
    title: "HP 771C B6Y14A Gri Plotter Kartuşu",
    desc: "HP 771C serisi için Gri plotter kartuşu.",
    href: HP771_HREF,
    pills: ["HP 771C", "B6Y14A", "Gri"],
    image: {
      // ✅ klasördeki gerçek isim: kartusu
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-771c-b6y14a-gri-plotter-kartusu.jpg",
      alt: "HP 771C B6Y14A Gri plotter kartuşu",
    },
  },

  // ======================
  // HP 773C (Z6600 / Z6800)
  // ======================
  {
    title: "HP 773C C1Q37A Mat Siyah Orijinal Kartuş (Z6600 / Z6800)",
    desc: "DesignJet Z6600 / Z6800 için Mat Siyah orijinal kartuş.",
    href: HP773_HREF,
    pills: ["HP 773C", "C1Q37A", "Mat Siyah", "Z6600", "Z6800"],
    image: {
      // ✅ klasördeki gerçek isim: orijinal-kartus (orjinal değil)
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-773c-c1q37a-mat-siyah-orijinal-kartus-designjet-z6600-z6800.jpg",
      alt: "HP 773C C1Q37A Mat Siyah orijinal kartuş Z6600 Z6800",
    },
  },
  {
    title: "HP 773C C1Q38A Kromatik Kırmızı Orijinal Kartuş (Z6600 / Z6800)",
    desc: "DesignJet Z6600 / Z6800 için Kromatik Kırmızı orijinal kartuş.",
    href: HP773_HREF,
    pills: ["HP 773C", "C1Q38A", "Kromatik Kırmızı", "Z6600", "Z6800"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-773c-c1q38a-kromatik-kirmizi-orijinal-kartus-designjet-z6600-z6800.jpg",
      alt: "HP 773C C1Q38A Kromatik Kırmızı orijinal kartuş Z6600 Z6800",
    },
  },
  {
    title: "HP 773C C1Q39A Kırmızı Orijinal Kartuş (Z6600 / Z6800)",
    desc: "DesignJet Z6600 / Z6800 için Kırmızı orijinal kartuş.",
    href: HP773_HREF,
    pills: ["HP 773C", "C1Q39A", "Kırmızı", "Z6600", "Z6800"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-773c-c1q39a-kirmizi-orijinal-kartus-designjet-z6600-z6800.jpg",
      alt: "HP 773C C1Q39A Kırmızı orijinal kartuş Z6600 Z6800",
    },
  },
  {
    title: "HP 773C C1Q40A Sarı Orijinal Kartuş (Z6600 / Z6800)",
    desc: "DesignJet Z6600 / Z6800 için Sarı orijinal kartuş.",
    href: HP773_HREF,
    pills: ["HP 773C", "C1Q40A", "Sarı", "Z6600", "Z6800"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-773c-c1q40a-sari-orijinal-kartus-designjet-z6600-z6800.jpg",
      alt: "HP 773C C1Q40A Sarı orijinal kartuş Z6600 Z6800",
    },
  },
  {
    title: "HP 773C C1Q41A Açık Kırmızı Orijinal Kartuş (Z6600 / Z6800)",
    desc: "DesignJet Z6600 / Z6800 için Açık Kırmızı orijinal kartuş.",
    href: HP773_HREF,
    pills: ["HP 773C", "C1Q41A", "Açık Kırmızı", "Z6600", "Z6800"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-773c-c1q41a-acik-kirmizi-orijinal-kartus-designjet-z6600-z6800.jpg",
      alt: "HP 773C C1Q41A Açık Kırmızı orijinal kartuş Z6600 Z6800",
    },
  },
  {
    title: "HP 773C C1Q42A Mavi Orijinal Kartuş (Z6600 / Z6800)",
    desc: "DesignJet Z6600 / Z6800 için Mavi orijinal kartuş.",
    href: HP773_HREF,
    pills: ["HP 773C", "C1Q42A", "Mavi", "Z6600", "Z6800"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-773c-c1q42a-mavi-orijinal-kartus-designjet-z6600-z6800.jpg",
      alt: "HP 773C C1Q42A Mavi orijinal kartuş Z6600 Z6800",
    },
  },
  {
    title: "HP 773C C1Q43A Foto Siyah Orijinal Kartuş (Z6600 / Z6800)",
    desc: "DesignJet Z6600 / Z6800 için Foto Siyah orijinal kartuş.",
    href: HP773_HREF,
    pills: ["HP 773C", "C1Q43A", "Foto Siyah", "Z6600", "Z6800"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-773c-c1q43a-foto-siyah-orijinal-kartus-designjet-z6600-z6800.jpg",
      alt: "HP 773C C1Q43A Foto Siyah orijinal kartuş Z6600 Z6800",
    },
  },
  {
    title: "HP 773C C1Q44A Açık Gri Orijinal Kartuş (Z6600 / Z6800)",
    desc: "DesignJet Z6600 / Z6800 için Açık Gri orijinal kartuş.",
    href: HP773_HREF,
    pills: ["HP 773C", "C1Q44A", "Açık Gri", "Z6600", "Z6800"],
    image: {
      // ✅ klasördeki gerçek isim: orijinal-kartus (orjinal değil)
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-773c-c1q44a-acik-gri-orijinal-kartus-designjet-z6600-z6800.jpg",
      alt: "HP 773C C1Q44A Açık Gri orijinal kartuş Z6600 Z6800",
    },
  },

  // ======================
  // HP 831C (Latex)
  // ======================
  {
    title: "HP 831C CZ694A Siyah Orijinal Lateks Kartuş",
    desc: "HP Latex yazıcılar için orijinal lateks kartuş (Siyah).",
    href: HP831_HREF,
    pills: ["HP 831C", "CZ694A", "Latex", "Siyah"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-831c-cz694a-siyah-orijinal-lateks-kartus.jpg",
      alt: "HP 831C CZ694A Siyah orijinal lateks kartuş",
    },
  },
  {
    title: "HP 831C CZ695A Mavi Lateks Kartuş",
    desc: "HP Latex yazıcılar için orijinal lateks kartuş (Mavi).",
    href: HP831_HREF,
    pills: ["HP 831C", "CZ695A", "Latex", "Mavi"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-831c-cz695a-mavi-lateks-kartus.jpg",
      alt: "HP 831C CZ695A Mavi lateks kartuş",
    },
  },
  {
    title: "HP 831C CZ696A Kırmızı Orijinal Latex Kartuş",
    desc: "HP Latex yazıcılar için orijinal lateks kartuş (Kırmızı).",
    href: HP831_HREF,
    pills: ["HP 831C", "CZ696A", "Latex", "Kırmızı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-831c-cz696a-kirmizi-orijinal-latex-kartus.jpg",
      alt: "HP 831C CZ696A Kırmızı orijinal lateks kartuş",
    },
  },
  {
    title: "HP 831C CZ697A Sarı Orijinal Latex Kartuş",
    desc: "HP Latex yazıcılar için orijinal lateks kartuş (Sarı).",
    href: HP831_HREF,
    pills: ["HP 831C", "CZ697A", "Latex", "Sarı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-831c-cz697a-sari-orijinal-latex-kartus.jpg",
      alt: "HP 831C CZ697A Sarı orijinal lateks kartuş",
    },
  },
  {
    title: "HP 831C CZ698A Açık Mavi Latex Kartuş",
    desc: "HP Latex yazıcılar için lateks kartuş (Açık Mavi).",
    href: HP831_HREF,
    pills: ["HP 831C", "CZ698A", "Latex", "Açık Mavi"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-831c-cz698a-acik-mavi-latex-kartus.jpg",
      alt: "HP 831C CZ698A Açık Mavi lateks kartuş",
    },
  },
  {
    title: "HP 831C CZ699A Açık Kırmızı Orijinal Latex Kartuş",
    desc: "HP Latex yazıcılar için orijinal lateks kartuş (Açık Kırmızı).",
    href: HP831_HREF,
    pills: ["HP 831C", "CZ699A", "Latex", "Açık Kırmızı"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-831c-cz699a-acik-kirmizi-orijinal-latex-kartus.jpg",
      alt: "HP 831C CZ699A Açık Kırmızı orijinal lateks kartuş",
    },
  },
  {
    title: "HP 831C CZ706A Optimizer Latex Kartuş",
    desc: "HP Latex yazıcılar için Optimizer kartuşu.",
    href: HP831_HREF,
    pills: ["HP 831C", "CZ706A", "Optimizer", "Latex"],
    image: {
      src: "/images/urunler/kartus/hp-orjinal-kartus/hp-831c-cz706a-optimizer-latex-kartus.jpg",
      alt: "HP 831C CZ706A Optimizer lateks kartuş",
    },
  },
];


export default function HpOrijinalKartusClient() {
  const [active, setActive] = useState<SeriesKey>("all");

  const grouped = useMemo(() => {
    const buckets: Record<Exclude<SeriesKey, "all">, Product[]> = {
      "hp-70": [],
      "hp-711": [],
      "hp-72": [],
      "hp-727": [],
      "hp-728": [],
      "hp-745": [],
      "hp-771": [],
      "hp-773": [],
      "hp-831": [],
    };

    PRODUCTS.forEach((p) => {
      const s = detectSeries(p.title);
      buckets[s].push(p);
    });

    return buckets;
  }, []);

  const visibleGroups = useMemo(() => {
    const allGroups = ([
      { key: "hp-70", items: grouped["hp-70"] },
      { key: "hp-711", items: grouped["hp-711"] },
      { key: "hp-72", items: grouped["hp-72"] },
      { key: "hp-727", items: grouped["hp-727"] },
      { key: "hp-728", items: grouped["hp-728"] },
      { key: "hp-745", items: grouped["hp-745"] },
      { key: "hp-771", items: grouped["hp-771"] },
      { key: "hp-773", items: grouped["hp-773"] },
      { key: "hp-831", items: grouped["hp-831"] },
    ] as const).filter((g) => g.items.length > 0);

    if (active === "all") return allGroups;
    return allGroups.filter((g) => g.key === active);
  }, [active, grouped]);

  const FILTERS: { key: SeriesKey; label: string }[] = [
    { key: "all", label: "Tümü" },
    { key: "hp-70", label: "HP 70" },
    { key: "hp-711", label: "HP 711" },
    { key: "hp-72", label: "HP 72" },
    { key: "hp-727", label: "HP 727" },
    { key: "hp-728", label: "HP 728" },
    { key: "hp-745", label: "HP 745" },
    { key: "hp-771", label: "HP 771" },
    { key: "hp-773", label: "HP 773" },
    { key: "hp-831", label: "HP 831" },
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
            HP Orijinal Kartuş
          </h1>

          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            HP DesignJet ve Latex yazıcılar için orijinal kartuşları seri bazında
            filtreleyin. Doğru seri/renk seçimi için hızlı destek alabilirsiniz.
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
              <span className="text-xs text-slate-500">{g.items.length} ürün</span>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {g.items.map((p) => (
                  <Link
                    key={`${p.href}-${p.title}`}  // ✅ unique
                    href={p.href}
                    className="group block ..."
                  >
                  <div className="flex gap-5">
                    {/* SOL */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {p.title}
                      </h3>

                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {p.desc}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.pills.map((pill) => (
                          <span
                            key={pill}
                            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 h-px w-full bg-slate-100" />

                      <div className="mt-4 text-xs text-slate-500">Ürün detayı</div>
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
          Yazıcı modelinizi (ör. DesignJet T120/T520, Z serisi, Latex vb.) ve
          ihtiyacınız olan rengi paylaşın; doğru HP orijinal kartuşu hızlıca
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
