// src/lib/productsIndex.ts
export type SearchItem = {
  title: string;
  href: string;
  category: string;     // kullanıcıya göstermek için
  keywords: string[];   // aramada yakalasın diye
};

export const PRODUCTS_INDEX: SearchItem[] = [
  // =========================
  // ÜRÜNLER (ana)
  // =========================
  {
    title: "Ürünler",
    href: "/urunler",
    category: "Genel",
    keywords: ["urunler", "tüm ürünler", "papirink", "ürün"],
  },

  // =========================
  // MAKİNALAR
  // =========================
  {
    title: "Makinalar",
    href: "/urunler/makinalar",
    category: "Makinalar",
    keywords: ["makina", "makinalar", "yazici", "plotter", "tarayici", "uv", "etiket", "katlama"],
  },
  {
    title: "Plotter",
    href: "/urunler/makinalar/plotter",
    category: "Makinalar • Plotter",
    keywords: ["plotter", "genis format", "cad", "çizici", "printer", "büyük yazıcı"],
  },
  {
    title: "Canon Pro 4000 Plotter Çizici",
    href: "/urunler/makinalar/plotter/canon-pro-4000",
    category: "Makinalar • Plotter",
    keywords: ["canon", "pro 4000", "plotter", "cizici", "geniş format", "imageprograf"],
  },
  {
    title: "Fotokopi Makinası",
    href: "/urunler/makinalar/fotokopi-makinasi",
    category: "Makinalar",
    keywords: ["masaustu", "yazici", "printer", "ofis"],
  },
  {
    title: "Tarayıcı",
    href: "/urunler/makinalar/tarayici",
    category: "Makinalar",
    keywords: ["tarayici", "scanner", "tarama"],
  },
  {
    title: "UV",
    href: "/urunler/makinalar/uv",
    category: "Makinalar",
    keywords: ["uv", "uv yazici", "uv baski", "flatbed"],
  },
  {
    title: "Etiket Makinaları",
    href: "/urunler/makinalar/etiket-makinalari",
    category: "Makinalar",
    keywords: ["etiket", "etiket yazici", "label", "barkod", "termal"],
  },
  {
    title: "Katlama Makinası",
    href: "/urunler/makinalar/katlama-makinasi",
    category: "Makinalar",
    keywords: ["katlama", "katlama makinasi", "folding"],
  },

  // =========================
  // KARTUŞ
  // =========================
  {
    title: "Kartuş",
    href: "/urunler/kartus",
    category: "Kartuş",
    keywords: ["kartus", "kartuş", "orijinal kartus", "muadil kartus", "hp", "canon", "epson"],
  },

  // Canon Orijinal
  {
    title: "Canon Orijinal Kartuş",
    href: "/urunler/kartus/canon-orijinal-kartus",
    category: "Kartuş • Canon Orijinal",
    keywords: ["canon", "orijinal", "kartus", "kartuş", "pfi", "imageprograf"],
  },
  { title: "Canon PFI-102", href: "/urunler/kartus/canon-orijinal-kartus/canon-pfi-102", category: "Kartuş • Canon", keywords: ["canon", "pfi-102", "pfi 102", "kartus"] },
  { title: "Canon PFI-320", href: "/urunler/kartus/canon-orijinal-kartus/canon-320", category: "Kartuş • Canon", keywords: ["canon", "pfi-320", "pfi 320", "320", "kartus"] },
  { title: "Canon PFI-701", href: "/urunler/kartus/canon-orijinal-kartus/canon-701", category: "Kartuş • Canon", keywords: ["canon", "pfi-701", "pfi 701", "701", "kartus"] },
  { title: "Canon PFI-703", href: "/urunler/kartus/canon-orijinal-kartus/canon-pfi-703", category: "Kartuş • Canon", keywords: ["canon", "pfi-703", "pfi 703", "703", "kartus"] },
  { title: "Canon PFI-707", href: "/urunler/kartus/canon-orijinal-kartus/canon-pfi-707", category: "Kartuş • Canon", keywords: ["canon", "pfi-707", "pfi 707", "707", "kartus"] },
  { title: "Canon PFI-1700", href: "/urunler/kartus/canon-orijinal-kartus/canon-1700", category: "Kartuş • Canon", keywords: ["canon", "pfi-1700", "pfi 1700", "1700", "kartus"] },

  // Epson Orijinal
  {
    title: "Epson Orijinal Kartuş",
    href: "/urunler/kartus/epson-orijinal-kartus",
    category: "Kartuş • Epson Orijinal",
    keywords: ["epson", "orijinal", "kartus", "t596", "t636", "t694", "t714"],
  },
  { title: "Epson T596", href: "/urunler/kartus/epson-orijinal-kartus/epson-t-596", category: "Kartuş • Epson", keywords: ["epson", "t596", "t-596", "kartus"] },
  { title: "Epson T636", href: "/urunler/kartus/epson-orijinal-kartus/epson-t-636", category: "Kartuş • Epson", keywords: ["epson", "t636", "t-636", "kartus"] },
  { title: "Epson T694", href: "/urunler/kartus/epson-orijinal-kartus/epson-t-694", category: "Kartuş • Epson", keywords: ["epson", "t694", "t-694", "kartus"] },
  { title: "Epson T714", href: "/urunler/kartus/epson-orijinal-kartus/epson-t-714", category: "Kartuş • Epson", keywords: ["epson", "t714", "t-714", "kartus"] },

  // HP Orijinal
  {
    title: "HP Orijinal Kartuş",
    href: "/urunler/kartus/hp-orijinal-kartus",
    category: "Kartuş • HP Orijinal",
    keywords: ["hp", "orijinal", "kartus", "70", "711", "72", "727", "728", "745", "771", "773", "831"],
  },
  { title: "HP 70", href: "/urunler/kartus/hp-orijinal-kartus/hp-70", category: "Kartuş • HP", keywords: ["hp", "70", "c9390a", "c9448a", "kartus"] },
  { title: "HP 711", href: "/urunler/kartus/hp-orijinal-kartus/hp-711", category: "Kartuş • HP", keywords: ["hp", "711", "kartus"] },
  { title: "HP 72", href: "/urunler/kartus/hp-orijinal-kartus/hp-72", category: "Kartuş • HP", keywords: ["hp", "72", "cart", "kartus"] },
  { title: "HP 727", href: "/urunler/kartus/hp-orijinal-kartus/hp-727", category: "Kartuş • HP", keywords: ["hp", "727", "kartus"] },
  { title: "HP 728", href: "/urunler/kartus/hp-orijinal-kartus/hp-728", category: "Kartuş • HP", keywords: ["hp", "728", "kartus"] },
  { title: "HP 745", href: "/urunler/kartus/hp-orijinal-kartus/hp-745", category: "Kartuş • HP", keywords: ["hp", "745", "kartus"] },
  { title: "HP 771", href: "/urunler/kartus/hp-orijinal-kartus/hp-771", category: "Kartuş • HP", keywords: ["hp", "771", "kartus"] },
  { title: "HP 773", href: "/urunler/kartus/hp-orijinal-kartus/hp-773", category: "Kartuş • HP", keywords: ["hp", "773", "kartus"] },
  { title: "HP 831", href: "/urunler/kartus/hp-orijinal-kartus/hp-831", category: "Kartuş • HP", keywords: ["hp", "831", "kartus"] },

  // Papirink Muadil Kartuş
  {
    title: "Papirink Muadil Kartuş",
    href: "/urunler/kartus/papirink-muadil-kartus",
    category: "Kartuş • Muadil",
    keywords: ["muadil", "uyumlu", "papirink", "hp 761", "hp 771", "hp 81", "hp 91"],
  },
  { title: "HP 761 Muadil", href: "/urunler/kartus/papirink-muadil-kartus/hp-761", category: "Kartuş • Muadil", keywords: ["hp", "761", "muadil", "uyumlu"] },
  { title: "HP 771 Muadil", href: "/urunler/kartus/papirink-muadil-kartus/hp-771", category: "Kartuş • Muadil", keywords: ["hp", "771", "muadil", "uyumlu"] },
  { title: "HP 81 Muadil", href: "/urunler/kartus/papirink-muadil-kartus/hp-81", category: "Kartuş • Muadil", keywords: ["hp", "81", "muadil", "uyumlu"] },
  { title: "HP 91 Muadil", href: "/urunler/kartus/papirink-muadil-kartus/hp-91", category: "Kartuş • Muadil", keywords: ["hp", "91", "muadil", "uyumlu"] },

  // =========================
  // BİTMEYEN KARTUŞ
  // =========================
  {
    title: "Bitmeyen Kartuş",
    href: "/urunler/bitmeyen-kartus",
    category: "Bitmeyen Kartuş",
    keywords: ["bitmeyen", "dolan", "dolum", "ciss", "kartus", "kartuş"],
  },
  {
    title: "Canon İçin Dolan Kartuş",
    href: "/urunler/bitmeyen-kartus/canon-icin-dolan-kartus",
    category: "Bitmeyen Kartuş",
    keywords: ["canon", "dolan", "bitmeyen", "kartus", "ciss"],
  },
  {
    title: "Epson İçin Dolan Kartuş",
    href: "/urunler/bitmeyen-kartus/epson-icin-dolan-kartus",
    category: "Bitmeyen Kartuş",
    keywords: ["epson", "dolan", "bitmeyen", "kartus", "ciss"],
  },
  {
    title: "HP İçin Dolan Kartuş",
    href: "/urunler/bitmeyen-kartus/hp-icin-dolan-kartus",
    category: "Bitmeyen Kartuş",
    keywords: ["hp", "dolan", "bitmeyen", "kartus", "ciss"],
  },

  // =========================
  // KAĞIT
  // =========================
  {
    title: "Kağıt",
    href: "/urunler/kagit",
    category: "Kağıt",
    keywords: ["kagit", "kağıt", "plotter kağıdı", "fotoğraf kağıdı", "kanvas", "coated", "yapışkan"],
  },
  { title: "Plotter Kağıtları", href: "/urunler/kagit/plotter-kagitlari", category: "Kağıt", keywords: ["plotter", "kagit", "kağıt", "rulo", "80 gr", "90 gr"] },
  { title: "Fotoğraf Kağıtları", href: "/urunler/kagit/fotograf-kagitlari", category: "Kağıt", keywords: ["fotoğraf", "fotograf", "kagit", "parlak", "saten"] },
  { title: "Mat Coated Kağıtları", href: "/urunler/kagit/mat-coated-kagitlari", category: "Kağıt", keywords: ["mat coated", "coated", "kagit"] },
  { title: "Pamuklu Kanvas (Cotton)", href: "/urunler/kagit/pamuklu-kanvas-cotton", category: "Kağıt", keywords: ["pamuklu", "kanvas", "cotton", "canvas"] },
  { title: "Polyester", href: "/urunler/kagit/polyester", category: "Kağıt", keywords: ["polyester", "film", "rulo"] },
  { title: "Polyester Kanvas", href: "/urunler/kagit/polyester-kanvas", category: "Kağıt", keywords: ["polyester", "kanvas", "canvas"] },
  { title: "Yapışkanlı Kağıtlar", href: "/urunler/kagit/yapiskanli-kagitlar", category: "Kağıt", keywords: ["yapiskan", "yapışkan", "etiket", "sticker"] },
  { title: "Fosforlu Kağıtlar", href: "/urunler/kagit/fosforlu-kagitlar", category: "Kağıt", keywords: ["fosforlu", "neon", "kagit"] },
  { title: "Bayrak Bezi / Takvim Bezi", href: "/urunler/kagit/bayrak-bezi-takvim-bezi", category: "Kağıt", keywords: ["bayrak bezi", "takvim bezi", "bez", "kumas", "kumaş"] },
  { title: "Aydıngere", href: "/urunler/kagit/aydingere", category: "Kağıt", keywords: ["aydingere", "aydinger", "kagit"] },

  // =========================
  // MÜREKKEP
  // =========================
  {
    title: "Mürekkep",
    href: "/urunler/murekkep",
    category: "Mürekkep",
    keywords: ["murekkep", "mürekkep", "ink", "canon", "epson", "hp"],
  },
  { title: "Canon Uyumlu Mürekkep", href: "/urunler/murekkep/canon-uyumlu-murekkep", category: "Mürekkep", keywords: ["canon", "uyumlu", "muadil", "ink"] },
  { title: "Epson Uyumlu Mürekkep", href: "/urunler/murekkep/epson-uyumlu-murekkep", category: "Mürekkep", keywords: ["epson", "uyumlu", "muadil", "ink"] },
  { title: "HP Uyumlu Mürekkep", href: "/urunler/murekkep/hp-uyumlu-murekkep", category: "Mürekkep", keywords: ["hp", "uyumlu", "muadil", "ink"] },

  // =========================
  // SARF MALZEME
  // =========================
  {
    title: "Sarf Malzeme",
    href: "/urunler/sarf-malzeme",
    category: "Sarf Malzeme",
    keywords: ["sarf", "malzeme", "toner", "drum", "bıçak", "cip", "çip", "baski kafasi", "bakim kiti"],
  },
  { title: "Toner", href: "/urunler/sarf-malzeme/toner", category: "Sarf Malzeme", keywords: ["toner", "toz toner", "laser"] },
  { title: "Çipler", href: "/urunler/sarf-malzeme/cipler", category: "Sarf Malzeme", keywords: ["cip", "çip", "chip"] },
  { title: "Bakım Kiti / Kartuşu", href: "/urunler/sarf-malzeme/bakim-kiti-kartusu", category: "Sarf Malzeme", keywords: ["bakim kiti", "bakım kiti", "maintenance kit"] },
  { title: "Drum / Bıçak", href: "/urunler/sarf-malzeme/drum-bicak", category: "Sarf Malzeme", keywords: ["drum", "bıçak", "bicak", "blade"] },
  { title: "Baskı Kafası", href: "/urunler/sarf-malzeme/baski-kafasi", category: "Sarf Malzeme", keywords: ["baski kafasi", "baskı kafası", "printhead", "kafa"] },
];
