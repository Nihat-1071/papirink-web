// src/app/components/FeaturedProducts.tsx
import Image from "next/image";
import Link from "next/link";

type FeaturedItem = {
  title: string;
  href: string; // ürün/detay ya da kategori sayfası
  imageSrc: string;
  imageAlt: string;
  tag?: string; // "Popüler", "Yeni" gibi
};

export default function FeaturedProducts() {
  // Not: görsel yollarını senin public/images altına göre yaz.
  // Şimdilik örnek. İstersen bunları senin gerçek ürün görsellerinle değiştiririz.
  const items: FeaturedItem[] = [
    {
      title: "Papirink Matte Black HP Uyumlu Plotter Mürekkebi 500 gr",
      href: "/urunler/murekkep",
      imageSrc: "/images/ana-sayfa-ilk-gorseller/murekkep.webp",
      imageAlt: "Matte Black plotter mürekkebi",
      tag: "Öne Çıkan",
    },
    {
      title: "45cm × 50mt Plotter Kağıdı 80 gr",
      href: "/urunler/kagit/plotter-kagitlari",
      imageSrc: "/images/urunler/kagit/plotter-kagit/plotter-kagidi.webp",
      imageAlt: "Plotter kağıdı 45 cm 50 mt 80 gr",
      tag: "Fırsat",
    },
    {
      title: "62cm × 50mt Plotter Kağıdı 80 gr",
      href: "/urunler/kagit/plotter-kagitlari",
      imageSrc: "/images/urunler/kagit/plotter-kagit/plotter-kagidi.webp",
      imageAlt: "Plotter kağıdı 62 cm 50 mt 80 gr",
    },
    {
      title: "75cm × 50mt Plotter Kağıdı 80 gr",
      href: "/urunler/kagit/plotter-kagitlari",
      imageSrc: "/images/urunler/kagit/plotter-kagit/plotter-kagidi.webp",
      imageAlt: "Plotter kağıdı 75 cm 50 mt 80 gr",
    },
    {
      title: "91cm × 50mt Plotter Kağıdı 80 gr",
      href: "/urunler/kagit/plotter-kagitlari",
      imageSrc: "/images/urunler/kagit/plotter-kagit/plotter-kagidi.webp",
      imageAlt: "Plotter kağıdı 91 cm 50 mt 80 gr",
    },
    {
      title: "1067cm × 50mt Plotter Kağıdı 80 gr",
      href: "/urunler/kagit/plotter-kagitlari",
      imageSrc: "/images/urunler/kagit/plotter-kagit/plotter-kagidi.webp",
      imageAlt: "Plotter kağıdı 1067 cm 50 mt 80 gr",
    },
    {
      title: "45cm × 100mt Plotter Kağıdı 80 gr",
      href: "/urunler/kagit/plotter-kagitlari",
      imageSrc: "/images/urunler/kagit/plotter-kagit/plotter-kagidi.webp",
      imageAlt: "Plotter kağıdı 45 cm 100 mt 80 gr",
    },
    {
      title: "62cm × 100mt Plotter Kağıdı 80 gr",
      href: "/urunler/kagit/plotter-kagitlari",
      imageSrc: "/images/urunler/kagit/plotter-kagit/plotter-kagidi.webp",
      imageAlt: "Plotter kağıdı 62 cm 100 mt 80 gr",
      tag: "Popüler",
    },
  ];

  return (
    <section className="w-full pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
              Öne Çıkan Ürünler
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              En çok sorulan ve hızlı tedarik edilen ürünleri öne aldık.
            </p>
          </div>

          <Link
            href="/urunler"
            className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-900 hover:bg-slate-50 sm:inline-flex"
          >
            Tüm Ürünler →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <article
              key={p.title}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* üst görsel + ürün link */}
              <Link href={p.href} className="block">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  {p.tag && (
                    <div className="absolute left-3 top-3 rounded-full bg-blue-200 px-3 py-1 text-xs font-extrabold text-blue-950">
                      {p.tag}
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="line-clamp-2 text-sm font-extrabold text-slate-900">
                    {p.title}
                  </h3>
                </div>
              </Link>

              {/* CTA ayrı link: /iletisim */}
              <div className="mt-auto px-4 pb-4">
                <Link
                  href="/iletisim"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-extrabold text-white transition hover:bg-blue-700"
                >
                  Fiyat Alınız →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 sm:hidden">
          <Link
            href="/urunler"
            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
          >
            Tüm Ürünler →
          </Link>
        </div>
      </div>
    </section>
  );
}
