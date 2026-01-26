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
    // ✅ MAKİNALAR (6 kart)
    {
      title: "Plotter",
      href: "/urunler/makinalar/plotter",
      imageSrc: "/images/ana-sayfa-ilk-gorseller/plotter-modelleri-teknik-servis-papirink.webp", // sen güncellersin
      imageAlt: "Plotter yazıcı ve çizici çözümleri",
      badge: "Popüler",
    },
    {
      title: "Fotokopi Makinası",
      href: "/urunler/makinalar/fotokopi-makinasi",
      imageSrc: "/images/ana-sayfa-ilk-gorseller/makine.webp", // sen güncellersin
      imageAlt: "Fotokopi makinası modelleri",
      badge: "Popüler",
    },
    {
      title: "Katlama Makinası",
      href: "/urunler/makinalar/katlama-makinasi",
      imageSrc: "/images/ana-sayfa-ilk-gorseller/makine.webp", // sen güncellersin
      imageAlt: "Katlama makinası çözümleri",
      badge: "Popüler",
    },
    {
      title: "Tarayıcı",
      href: "/urunler/makinalar/tarayici",
      imageSrc: "/images/ana-sayfa-ilk-gorseller/makine.webp", // sen güncellersin
      imageAlt: "A0/A1 tarayıcı (scanner) çözümleri",
      badge: "Popüler",
    },
    {
      title: "UV",
      href: "/urunler/makinalar/uv",
      imageSrc: "/images/ana-sayfa-ilk-gorseller/makine.webp", // sen güncellersin
      imageAlt: "UV baskı makinası çözümleri",
      badge: "Popüler",
    },
    {
      title: "Etiket Makinaları",
      href: "/urunler/makinalar/etiket-makinalari",
      imageSrc: "/images/ana-sayfa-ilk-gorseller/makine.webp", // sen güncellersin
      imageAlt: "Etiket baskı makinası çözümleri",
      badge: "Popüler",
    },

    // ✅ MÜREKKEP (2 kart)
    {
      title: "HP Uyumlu Mürekkep",
      href: "/urunler/murekkep/hp-uyumlu-murekkep",
      imageSrc: "/images/ana-sayfa-ilk-gorseller/plotter-murekkep.webp", // sen güncellersin
      imageAlt: "HP uyumlu mürekkep seçenekleri",
      badge: "Popüler",
    },
    {
      title: "Epson Uyumlu Mürekkep",
      href: "/urunler/murekkep/epson-uyumlu-murekkep",
      imageSrc: "/images/ana-sayfa-ilk-gorseller/plotter-murekkep.webp", // sen güncellersin
      imageAlt: "Epson uyumlu mürekkep seçenekleri",
      badge: "Popüler",
    },
  ];

  return (
    <section className="w-full pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6">
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
                      <div className="absolute left-3 top-3 rounded-full bg-orange-200 px-3 py-1 text-xs font-extrabold text-orange-950">
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
                    className="inline-flex w-full items-center justify-center rounded-xl bg-orange-200 px-4 py-2.5 text-sm font-extrabold text-orange-950 transition hover:brightness-95"
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
