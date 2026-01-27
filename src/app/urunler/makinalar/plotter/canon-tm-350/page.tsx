import type { Metadata } from "next";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import BreadcrumbAuto from "@/app/components/BreadcrumbAuto";
import ProductHeroClient from "./ProductHeroClient";

export const dynamic = "error";

const baseUrl = "https://www.papirink.com.tr";
const pagePath = "/urunler/makinalar/plotter/canon-tm-350";

export const metadata: Metadata = {
  title: "Canon TM-350 Plotter | Papirink",
  description:
    "Canon TM-350 plotter: 36 inç, 5 renk pigment mürekkep ile CAD ve poster baskıları için hızlı ve hassas büyük format çözüm. Teklif için iletişime geçin.",
  alternates: { canonical: `${baseUrl}${pagePath}` },
};

const product = {
  title: "Canon TM-350 Plotter Çizici",
  brand: "Canon",
  category: "Plotter Makinası",
  image: "/images/urunler/makinalar/plotter/canon-tm-350-plotter-cizici.jpg",

  description: `Canon TM-350; 36 inç baskı genişliği, 5 renkli pigment mürekkep sistemi ve yüksek çizgi doğruluğuyla CAD çizimleri, teknik projeler ve poster uygulamaları için tasarlanmış profesyonel bir büyük format plotter çözümüdür.

Hızlı çıktı süreleri, geniş medya uyumluluğu ve kurumsal bağlantı seçenekleriyle ofis içi üretimde verimliliği artırır. Teklif ve uygun sarf seçimi için ekibimizle iletişime geçebilirsiniz.`,

  specs: [
    { k: "Yazıcı Türü", v: "5 Renkli, 36 inç" },
    {
      k: "Baskı Teknolojisi",
      v: "Canon Bubblejet (6 renk entegre; 6 yonga/baskı kafası x 1 baskı kafası)",
    },
    { k: "Baskı Çözünürlüğü", v: "2400 x 1200 dpi" },
    {
      k: "Püskürtme Ucu Sayısı",
      v: "Toplam 15.360 (MBK 5.120; BK/C/M/Y her biri 2.560)",
    },
    { k: "Çizgi Doğruluğu", v: "±%0,1 veya daha az" },
    { k: "Püskürtme Ucu", v: "1200 dpi x 2 satır" },
    { k: "Mürekkep Damla Boyutu", v: "Minimum 5 pl/renk" },
    {
      k: "Mürekkep Kapasitesi",
      v: "Satış mürekkebi: 300/130 ml (MBK, BK, C, M, Y)",
    },
    {
      k: "Başlangıç Mürekkebi",
      v: "Toplam 490 ml (MBK 130 ml; BK/C/M/Y 90 ml x 4)",
    },
    { k: "Mürekkep Türü", v: "Pigment: MBK/BK/C/M/Y" },
    {
      k: "İşletim Sistemi",
      v: "Windows 7/8.1/10 (32-bit); Windows 7/8.1/10/11 + Server 2008R2–2022 (64-bit); macOS 10.15.7–macOS 13",
    },
    { k: "Diğer Protokoller", v: "Apple AirPrint" },
    {
      k: "Yazıcı Dilleri",
      v: "HP-GL/2, HP RTL, JPEG (JFIF 1.02), CALS G4 (yalnızca FTP ile)",
    },
    { k: "USB A", v: "Yok" },
    { k: "USB B", v: "Yüksek Hızlı USB" },
    {
      k: "Ethernet",
      v: "IEEE802.3ab (1000base-T), IEEE802.3u (100BASE-TX), IEEE802.3 (10BASE-T)",
    },
    { k: "Kablosuz LAN", v: "IEEE802.11n / IEEE802.11g / IEEE802.11b" },
    { k: "Standart Bellek", v: "2 GB" },
    { k: "Sabit Sürücü", v: "Yok" },

    // Baskı hızları (özet)
    { k: "CAD (A1) Düz Kağıt", v: "0:17 (Hızlı Ekonomi), dakikada 3,2 sayfa" },
    { k: "CAD (A0) Düz Kağıt", v: "0:32 (Hızlı Ekonomi) / 0:41 (Hızlı) / 1:08 (Standart)" },
    { k: "Poster (A0) Düz Kağıt", v: "0:37 (Hızlı Ekonomi) / 0:43 (Hızlı) / 1:18 (Standart)" },
    { k: "Ağır Kuşe (A0)", v: "1:40 (Hızlı) / 2:33 (Standart)" },

    // Medya (özet)
    { k: "Medya Besleme", v: "Rulo: Üstten yükleme, önden çıkış • Tabaka: Üstten yükleme, önden çıkış" },
    { k: "Medya Genişliği", v: "Rulo/Tabaka: 203,2 – 917 mm" },
    { k: "Medya Kalınlığı", v: "Rulo/Tabaka: 0,07 – 0,8 mm" },
    { k: "Maks. Rulo Çapı", v: "150 mm" },
    { k: "Rulo Göbek", v: "2 inç / 3 inç" },

    // Güç / gürültü (özet)
    { k: "Güç Kaynağı", v: "AC 100–240 V (50–60 Hz)" },
    { k: "Güç Tüketimi", v: "Çalışırken 65 W; Uyku 2,2 W; Kapalı 0,1 W" },
    { k: "Akustik Gürültü", v: "Çalışırken ~41 dB(A), Beklemede 35 dB(A)" },
    { k: "Sertifikalar", v: "EPEAT GOLD (ekrana göre)" },

    // Boyut/ağırlık (özet)
    {
      k: "Boyut & Ağırlık",
      v: "Standlı: 1285×885×1060 mm (sepet açık) / 1285×756×1060 mm (sepet kapalı) • 63,8 kg (rulo tutucu dahil; mürekkep/baskı kafası hariç)",
    },

    // Sarf (kritik)
    {
      k: "Sarf Malzemeleri",
      v: "Mürekkep: PFI-321 (300 ml) / PFI-121 (130 ml) • MBK/BK/C/Y: PFI-320 (300 ml) / PFI-120 (130 ml) • Baskı Kafası: PF-06 • Kesici: CT-08 • Bakım Kartuşu: MC-31",
    },
  ],
};

export default function Page() {
  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/urunler" },
    { label: "Makinalar", href: "/urunler/makinalar" },
    { label: "Plotter", href: "/urunler/makinalar/plotter" },
    { label: product.title, href: pagePath },
  ];

  return (
    <>
      <Header />
      <BreadcrumbAuto className="mx-auto w-full max-w-6xl px-4 pt-4" />

      <main className="min-h-screen bg-[#f5f7fb]">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ProductHeroClient
            title={product.title}
            brand={product.brand}
            category={product.category}
            image={product.image}
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Açıklama */}
            <section className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-4">
                <div className="h-10 w-1 rounded-full bg-[#dc2626]" />
                <h2 className="text-xl font-extrabold text-slate-900">
                  Ürün Açıklaması
                </h2>
              </div>

              <div className="px-6 py-5">
                <p className="text-slate-800 leading-7 whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            </section>

            {/* Teknik Özellikler */}
            <aside className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="border-b border-slate-200 px-6 py-4 bg-slate-50">
                <h3 className="text-sm font-extrabold tracking-wide text-slate-800">
                  TEKNİK ÖZELLİKLER
                </h3>
              </div>

              <div className="px-6 py-5">
                <dl className="space-y-3">
                  {product.specs.map((s) => (
                    <div key={s.k} className="grid grid-cols-3 gap-3">
                      <dt className="text-xs font-bold text-slate-500">
                        {s.k}
                      </dt>
                      <dd className="col-span-2 text-sm font-semibold text-slate-900">
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
