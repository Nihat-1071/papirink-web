// src/app/components/HomeDeals.tsx
import Image from "next/image";
import Link from "next/link";

type DealItem = {
  title: string;
  href: string; // detay sayfası varsa oraya, yoksa /iletisim
  imageSrc: string;
  imageAlt: string;
  badge?: string;
};

export default function HomeDeals() {
  // Not: görselleri sen koyacaksın. Şimdilik örnek path verdim.
  // İstersen hepsini aynı klasöre at: /public/images/firsat/
const items: DealItem[] = [
  {
    title: "Mat Coated Kağıtları",
    href: "/urunler/kagit/mat-coated-kagitlari",
    imageSrc: "/images/urunler/kagit/mat-coated-kagitlari/mat-coated-kagidi.webp",
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
    imageSrc: "/images/urunler/kagit/yapiskanli-kagitlar/mat-yapiskanli-kagit.webp",
    imageAlt: "Yapışkanlı kağıt mat",
  },
];

  return (
    <section className="mx-auto w-full max-w-[1400px] px-3 sm:px-6 pb-14">
      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        {/* SOL PANEL */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative min-h-[360px] bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 p-7 text-white">
            <div className="absolute inset-0 opacity-25">
              <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_30%_80%,rgba(0,0,0,0.12),transparent_55%)]" />
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold">
                <span className="h-2 w-2 rounded-full bg-white" />
                Sınırlı Stok / Güncel Fiyat
              </div>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight">
                Fırsat Ürünleri
              </h2>
              <p className="mt-2 max-w-xs text-sm text-white/90">
                Kalite–fiyat dengesi yüksek ürünler. Fiyat ve stok için hızlıca teklif al.
              </p>

              <div className="mt-6 flex flex-col gap-2">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-extrabold text-slate-900 hover:opacity-95"
                >
                  Fiyat Al / Teklif İste →
                </Link>
                <Link
                  href="/urunler/kagit"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm font-extrabold hover:bg-white/15"
                >
                  Kağıt Kategorisini Aç →
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center pt-2 pb-6">
            <Image
              src="/brand/papirink-logo.webp"
              alt="Papirink"
              width={220}
              height={80}
              className="h-auto w-auto opacity-90"
            />
          </div>
        </div>

        {/* SAĞ GRID */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <div
              key={p.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
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

                  <div className="mt-3">
                    <Link
                    href="/iletisim"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-extrabold text-white hover:opacity-90"
                    >
                    Fiyat Alınız →
                    </Link>
                  </div>

                  <p className="mt-3 text-xs text-slate-500">
                    Aynı gün dönüş • WhatsApp / Telefon
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
