// app/lib/productsIndex.ts

export type ProductIndexItem = {
  id: string;
  title: string;
  slug: string;
  category: string;
  keywords?: string[];
};

export const PRODUCTS_INDEX: ProductIndexItem[] = [
  {
    id: "canon-pro-4000",
    title: "Canon PRO-4000 Plotter",
    slug: "/urunler/makinalar/plotter/canon-pro-4000",
    category: "Makinalar / Plotter",
    keywords: ["canon", "pro 4000", "pro-4000", "plotter", "büyük format"],
  },
  {
    id: "epson-b6000-cip",
    title: "Epson B6000 Atık Tank Çipi",
    slug: "/urunler/sarf-malzemeleri/cipler/epson-b6000-cip",
    category: "Sarf Malzemeleri / Çipler",
    keywords: ["epson", "b6000", "atık tank", "çip", "chip", "waste tank"],
  },
];
