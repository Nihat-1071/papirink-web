export type SubCategory = { slug: string; title: string; desc?: string };
export type Category = { slug: string; title: string; desc: string; subcategories: SubCategory[] };

export const CATEGORIES: Category[] = [
  {
    slug: "makinalar",
    title: "Makinalar",
    desc: "Plotter, masaüstü yazıcı, tarayıcı ve katlama çözümleri.",
    subcategories: [
      { slug: "plotter", title: "Plotter" },
      { slug: "masaustu-yazicilar", title: "Masaüstü Yazıcılar" },
      { slug: "tarayici", title: "Tarayıcı" },
      { slug: "katlama-makinasi", title: "Katlama Makinası" },
      { slug: "uv", title: "UV" },
      { slug: "etiket-makinalari", title: "Etiket Makinaları" },
    ],
  },
  {
    slug: "kartus",
    title: "Kartuş",
    desc: "Orijinal ve muadil kartuş seçenekleri.",
    subcategories: [
      { slug: "hp-orijinal-kartus", title: "HP Orijinal Kartuş" },
      { slug: "canon-orijinal-kartus", title: "Canon Orijinal Kartuş" },
      { slug: "epson-orijinal-kartus", title: "Epson Orijinal Kartuş" },
      { slug: "papirink-muadil-kartus", title: "Papirink Muadil Kartuş" },
    ],
  },
  {
    slug: "kagit",
    title: "Kağıt",
    desc: "Plotter kâğıtları, fotoğraf kâğıtları, kanvas ve özel yüzeyler.",
    subcategories: [
      { slug: "plotter-kagitlari", title: "Plotter Kağıtları" },
      { slug: "fotograf-kagitlari", title: "Fotoğraf Kağıtları" },
      { slug: "mat-coated-kagitlari", title: "Mat Coated Kağıtları" },
      { slug: "aydinger", title: "Aydınger" },
      { slug: "polyester", title: "Polyester" },
      { slug: "polyester-kanvas", title: "Polyester Kanvas" },
      { slug: "pamuklu-kanvas", title: "Pamuklu Kanvas (Cotton)", },
      { slug: "yapiskanli-kagitlar", title: "Yapışkanlı Kağıtlar" },
      { slug: "bayrak-bezi-takvim-bezi", title: "Bayrak Bezi - Takvim Bezi" },
      { slug: "fosforlu-kagitlar", title: "Fosforlu Kağıtlar" },
    ],
  },
  {
    slug: "bitmeyen-kartus",
    title: "Bitmeyen Kartuş",
    desc: "Dolan kartuş sistemleri ve uyumlu seçenekler.",
    subcategories: [
      { slug: "epson-icin-dolan-kartus", title: "Epson için Dolan Kartuş" },
      { slug: "hp-icin-dolan-kartus", title: "HP için Dolan Kartuş" },
      { slug: "canon-icin-dolan-kartus", title: "Canon için Dolan Kartuş" },
    ],
  },
  {
    slug: "murekkep",
    title: "Mürekkep",
    desc: "HP, Canon, Epson uyumlu mürekkep çözümleri.",
    subcategories: [
      { slug: "hp-uyumlu-murekkep", title: "HP Uyumlu Mürekkep" },
      { slug: "canon-uyumlu-murekkep", title: "Canon Uyumlu Mürekkep" },
      { slug: "epson-uyumlu-murekkep", title: "Epson Uyumlu Mürekkep" },
    ],
  },
  {
    slug: "sarf-malzeme",
    title: "Sarf Malzemesi",
    desc: "Baskı kafası, toner, çip ve bakım kitleri.",
    subcategories: [
      { slug: "baski-kafasi", title: "Baskı Kafası" },
      { slug: "toner", title: "Toner" },
      { slug: "cipler", title: "Çipler" },
      { slug: "bakim-kiti-kartusu", title: "Bakım Kiti / Kartuşu" },
      { slug: "drum-bicak", title: "Drum & Bıçak" },
    ],
  },
];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getSubCategory(categorySlug: string, subSlug: string) {
  const cat = getCategory(categorySlug);
  const sub = cat?.subcategories.find((s) => s.slug === subSlug);
  return { cat, sub };
}
