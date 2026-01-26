// src/app/components/AnaSayfa2.tsx
import Image from "next/image";
import Link from "next/link";

type DealItem = {
  title: string;
  href: string; // kategori/detay sayfası
  imageSrc: string;
  imageAlt: string;
  badge?: string;
};

export default function HomeDeals() {
  const items: DealItem[] = [
    {
      title: "Mat Coated Kağıtları",
      href: "/urunler/kagit/mat-coated-kagitlari",
      imageSrc:
        "/images/urunler/kagit/mat-coated-kagitlari/mat-coated-kagidi.webp",
      imageAlt: "Mat coated kağıdı rulo",
      badge: "Popüler",
    },
    {
      title: "Plotter Kağıtları",
      href: "/urunler/kagit/plotter-kagitlari",
      imageSrc: "/images/urunler/kagit/plotter-kagit/plotter-kagidi.webp",
      imageAlt: "Plotter kağıdı rulo",
      badge: "Fırsat",
    },
    {
      title: "Fotoğraf Kağıtları",
      href: "/urunler/kagit/fotograf-kagitlari",
      imageSrc: "/images/urunler/kagit/fotograf-kagitlari/fotograf-kagidi.webp",
      imageAlt: "Fotoğraf kağıdı çeşitleri",
    },
    {
      title: "Pamuklu Kanvas (Cotton)",
      href: "/urunler/kagit/pamuklu-kanvas-cotton",
      imageSrc: "/images/urunler/kagit/pamuklu-kanvas-cotton/cotton-kanvas.webp",
      imageAlt: "Pamuklu kanvas rulo",
      badge: "Yeni",
    },
    {
      title: "Polyester Kanvas",
      href: "/urunler/kagit/polyester-kanvas",
      imageSrc: "/images/urunler/kagit/polyester-kanvas/polyester-kanvas.webp",
      imageAlt: "Polyester kanvas rulo",
    },
    {
      title: "Yapışkanlı Kağıtlar",
      href: "/urunler/kagit/yapiskanli-kagitlar",
      imageSrc:
        "/images/urunler/kagit/yapiskanli-kagitlar/mat-yapiskanli-kagit.webp",
      imageAlt: "Yapışkanlı kağıt mat",
    },
  ];

return (
  <section className="w-full pb-14">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6">
        {/* SAĞ GRID */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <div
              key={p.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <Link href={p.href} className="block">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  {p.badge && (
                    <div className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
                      {p.badge}
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="line-clamp-2 text-sm font-extrabold text-slate-900">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-xs text-slate-500">
                    Aynı gün dönüş • WhatsApp / Telefon
                  </p>
                </div>
              </Link>

              <div className="mt-auto px-4 pb-4">
                <Link
                  href="/iletisim"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-extrabold text-white hover:opacity-90"
                >
                  Fiyat Alınız →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

}
