// src/app/urunler/_data/products.ts

export type Product = {
  id: string;
  title: string;              // görünen ürün adı
  href: string;               // ürün sayfası linki (şimdilik kategori/altkategoriye de gidebilir)
  category?: string;          // "kagit", "kartus"...
  subcategory?: string;       // "plotter-kagitlari"...
  brand?: string;             // "HP", "Canon", "Epson"...
  sku?: string;               // "HP 91" gibi
  keywords?: string[];        // ekstra arama kelimeleri
};

export const PRODUCTS: Product[] = [
  // ŞİMDİLİK 5 örnek - sonra 250 ürünü buraya basacağız
  {
    id: "p1",
    title: "914mm*50mt Plotter Kağıdı 80 gr",
    href: "/urunler/kagit/plotter-kagitlari",
    category: "kagit",
    subcategory: "plotter-kagitlari",
    keywords: ["plotter", "80 gr", "914mm", "kağıt", "kagit"],
  },
  {
    id: "p2",
    title: "HP 91 Orijinal Kartuş (Tüm Renkler)",
    href: "/urunler/kartus/hp-orijinal-kartus",
    category: "kartus",
    subcategory: "hp-orijinal-kartus",
    brand: "HP",
    sku: "HP 91",
    keywords: ["designjet", "kartuş", "kartus", "hp91"],
  },
  {
    id: "p3",
    title: "Epson için Dolan Kartuş",
    href: "/urunler/bitmeyen-kartus/epson-icin-dolan-kartus",
    category: "bitmeyen-kartus",
    subcategory: "epson-icin-dolan-kartus",
    brand: "Epson",
    keywords: ["bitmeyen kartuş", "dolan kartuş", "ciss"],
  },
  {
    id: "p4",
    title: "Canon Uyumlu Mürekkep",
    href: "/urunler/murekkep/canon-uyumlu-murekkep",
    category: "murekkep",
    subcategory: "canon-uyumlu-murekkep",
    brand: "Canon",
    keywords: ["mürekkep", "murekkep"],
  },
  {
    id: "p5",
    title: "Baskı Kafası",
    href: "/urunler/sarf-malzeme/baski-kafasi",
    category: "sarf-malzeme",
    subcategory: "baski-kafasi",
    keywords: ["printhead", "kafa", "baski kafasi"],
  },
];
