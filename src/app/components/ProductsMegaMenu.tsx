"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type MenuItem = { label: string; href: string };
type MenuGroup = { group: string; href: string; items: MenuItem[] };

type Feature = { title: string; desc: string; href: string; image: string };

type Props = {
  open: boolean;
  onClose: () => void;
  headerH: number;
  menu: MenuGroup[];
};

const MEGA_FEATURES: Record<string, Feature> = {
  Makinalar: {
    title: "Plotter Sistemleri",
    desc: "Büyük format baskıda doğru makina seçimi",
    href: "/urunler/makinalar/plotter",
    image: "/images/mega/makinalar-plotter.webp",
  },
  Kartuş: {
    title: "Orijinal Kartuşlar",
    desc: "Canon / HP / Epson serileri ve uyumluluk",
    href: "/urunler/kartus",
    image: "/images/mega/kartus.webp",
  },
  Kağıt: {
    title: "Plotter Kağıtları",
    desc: "80 gr, 90 gr ve özel seçenekler",
    href: "/urunler/kagit/plotter-kagitlari",
    image: "/images/mega/kagit-plotter.webp",
  },
  "Bitmeyen Kartuş": {
    title: "Dolan Kartuş Setleri",
    desc: "Uzun baskı süreçleri için ekonomik çözüm",
    href: "/urunler/bitmeyen-kartus",
    image: "/images/mega/bitmeyen.webp",
  },
  Mürekkep: {
    title: "Uyumlu Mürekkepler",
    desc: "Doğru seri, stabil baskı, net renkler",
    href: "/urunler/murekkep",
    image: "/images/mega/murekkep.webp",
  },
  "Sarf Malzemesi": {
    title: "Sarf & Yedek Parça",
    desc: "Baskı kafası, bakım kiti ve daha fazlası",
    href: "/urunler/sarf-malzeme",
    image: "/images/mega/sarf.webp",
  },
};

const ITEM_IMAGES: Record<string, string> = {
  // Makinalar
  Plotter: "/images/urunler/makinalar/plotter/canon-pro-4100-plotter-cizici.jpg",

  "Fotokopi Makinası":
    "/images/urunler/makinalar/fotokopi-makinasi/canon-c3926i-fotokopi-makinasi.webp",

  Tarayıcı:
    "/images/urunler/makinalar/tarayici/graphtec-csx550-1200dpi-a0-tarayici-36-inc.jpg",

  "Katlama Makinası":
    "/images/urunler/makinalar/katlama-makinasi/foldjet-2000-katlama-makinasi-2-el.jpg",

  UV:
    "/images/urunler/makinalar/uv/papjet-pj-1-60x90-uv.jpg",

  "Etiket Makinaları":
    "/images/urunler/makinalar/etiket-makinalari/papjet-pj33x48-etiket-makinasi.jpg",

  // Kartuşlar
  "HP Orijinal Kartuş": "/images/urunler/kartus/hp-orjinal-kartus/hp-70-c9390a-acik-mavi-orjinal-kartus.jpg",
  "Canon Orijinal Kartuş": "/images/urunler/kartus/canon-orijinal-kartus/canon-pfi-102bk-parlak-siyah-kartus-ipf500-ipf600.jpg",
  "Epson Orijinal Kartuş": "/images/urunler/kartus/epson-orijinal-kartus/epson-t7141-siyah-orijinal-kartus-surecolor-s70610.jpg",
  "Papirink Muadil Kartuş": "/images/urunler/kartus/papirink-muadil-kartus/hp-761-muadil-kartus-siyah-black.png",

  // Kağıt kategorileri
  "Aydınger": "/images/urunler/kagit/aydinger/aydingeri-kagit-toplu-satis.webp",
  "Bayrak & Bez": "/images/urunler/kagit/bayrak-bezi-takvim-bezi/bayrak-takvim-kirlangic-bezi.png",
  "Fosforlu Kağıtlar": "/images/urunler/kagit/fosforlu-kagitlar/fosforlu-sari-kagit.webp",
  "Fotoğraf Kağıtları": "/images/urunler/kagit/fotograf-kagitlari/fotograf-kagidi.webp",
  "Mat Coated Kağıtları": "/images/urunler/kagit/mat-coated-kagitlari/mat-coated-kagidi.webp",
  "Pamuklu Kanvas (Cotton)": "/images/urunler/kagit/pamuklu-kanvas-cotton/cotton-kanvas.webp",
  "Plotter Kağıtları": "/images/urunler/kagit/plotter-kagit/plotter-kagidi.webp",
  "Polyester": "/images/urunler/kagit/polyester/plotter-polyesteri.webp",
  "Polyester Kanvas": "/images/urunler/kagit/polyester-kanvas/polyester-kanvas.webp",
  "Yapışkanlı Kağıtlar": "/images/urunler/kagit/yapiskanli-kagitlar/mat-yapiskanli-kagit.webp",

    // Bitmeyen Kartuş
  "Canon için Dolan Kartuş":
    "/images/urunler/bitmeyen-kartus/canon-icin-dolan-kartus/canon-icin-uyumlu-kolay-dolan-kartus.webp",

  "Epson için Dolan Kartuş":
    "/images/urunler/bitmeyen-kartus/epson-icin-dolan-kartus/epson-4900-uyumlu-kolay-dolan-kartus-11-renk.webp",

  "HP için Dolan Kartuş":
    "/images/urunler/bitmeyen-kartus/hp-icin-dolan-kartus/hp-10-82-uyumlu-kolay-dolan-kartus-4-renk.webp",

    // Mürekkep
  "Canon Uyumlu Mürekkep":
    "/images/urunler/murekkep/canon-uyumlu-murekkep/canon-cyan-a4-masaustu-yazici-serisi-murekkep.webp",

  "Canon Plotter Mürekkebi":
    "/images/urunler/murekkep/canon-uyumlu-murekkep/papirink-cyan-canon-uyumlu-plotter-murekkebi-1000-gr-dye.webp",

  "Epson Uyumlu Mürekkep":
    "/images/urunler/murekkep/epson-uyumlu-murekkep/epson-cyan-masaustu-yazici-murekkebi-500-gr.webp",

  "Epson Plotter Mürekkebi":
    "/images/urunler/murekkep/epson-uyumlu-murekkep/papirink-epson-hdr-uyumlu-plotter-murekkebi-500-gr.webp",

  "HP Uyumlu Mürekkep":
    "/images/urunler/murekkep/hp-uyumlu-murekkep/papirink-cyan-hp-pagewide-a4-yazici-serisi-murekkep.webp",

    // Sarf Malzemeleri
  "Bakım Kiti / Kartuşu":
    "/images/urunler/sarf-malzemeleri/bakim-kiti-kartusu/epson-t3200-t5200-t7200-uyumlu-atik-tank-kutusu.webp",

  "Baskı Kafası":
    "/images/urunler/sarf-malzemeleri/baski-kafasi/hp-70-c9408a-mavi-ve-yesil-baski-kafasi.webp",

  "Çipler":
    "/images/urunler/sarf-malzemeleri/cipler/epson-cip.webp",

  "Drum & Bıçak":
    "/images/urunler/sarf-malzemeleri/drum-bicak/oce-uyumlu-drum.webp",

  "Toner":
    "/images/urunler/sarf-malzemeleri/toner/oce-plotwave-muadil-toner.webp",

};


export default function ProductsMegaMenu({ open, onClose, headerH, menu }: Props) {
  const [activeGroup, setActiveGroup] = useState(menu[0]?.group ?? "Makinalar");

  // Menü açılınca ilk gruba dönsün (daha deterministik)
  useMemo(() => {
    if (open) setActiveGroup(menu[0]?.group ?? "Makinalar");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  const active = menu.find((x) => x.group === activeGroup) ?? menu[0];
  const feature = active ? MEGA_FEATURES[active.group] : undefined;

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* backdrop */}
      <button
        aria-label="Kapat"
        className="absolute inset-0 bg-black/20"
        onClick={onClose}
        type="button"
      />

      {/* panel */}
      <div className="absolute left-0 right-0 pt-3" style={{ top: headerH, bottom: 0 }}>
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div
            className="
              rounded-3xl border border-slate-200 bg-white
              shadow-[0_20px_70px_rgba(2,6,23,0.18)]
              max-h-[82vh] overflow-hidden
            "
            role="menu"
          >
            {/* top strip */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-2xl bg-[#0b1b3a] text-white grid place-items-center text-sm font-extrabold">
                  P
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#0b1b3a]">Ürünler</div>
                  <div className="text-xs font-semibold text-slate-500">
                    Kategoriyi seç, alt seçenekleri hızlıca gez.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/urunler"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-[#0b1b3a] hover:bg-slate-50"
                  onClick={onClose}
                >
                  Tüm Ürünler →
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl bg-[#0b1b3a] px-4 py-2 text-xs font-extrabold text-white hover:opacity-90"
                >
                  Kapat ✕
                </button>
              </div>
            </div>

            {/* content */}
            <div className="bg-white">
              <div className="px-6 py-6">
                <div className="grid gap-4 lg:grid-cols-[340px_1fr]">
                  {/* SOL */}
                  <div className="rounded-3xl border border-slate-200 bg-white p-2">
                    {menu.map((g) => {
                      const isActive = g.group === activeGroup;
                      return (
                        <div key={g.group} className="px-1">
                          <button
                            type="button"
                            onMouseEnter={() => setActiveGroup(g.group)}
                            onFocus={() => setActiveGroup(g.group)}
                            onClick={() => setActiveGroup(g.group)}
                            className={`
                              w-full rounded-2xl px-4 py-3 text-left text-sm font-extrabold transition
                              flex items-center justify-between
                              ${
                                isActive
                                  ? "bg-[#0b1b3a] text-white shadow-[0_10px_25px_rgba(11,27,58,0.25)]"
                                  : "text-[#0b1b3a] hover:bg-slate-50"
                              }
                            `}
                          >
                            <span>{g.group}</span>
                            <span className={isActive ? "text-white/70" : "text-slate-400"}>→</span>
                          </button>

                        </div>
                      );
                    })}
                  </div>

                  {/* SAĞ */}
                  {active && (
                    <div className="rounded-3xl border border-slate-200 bg-white p-5 max-h-[68vh] overflow-auto">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <div className="text-sm font-extrabold text-[#0b1b3a]">{active.group}</div>
                          <div className="text-xs font-semibold text-slate-500">
                            {active.items.length} alt kategori
                          </div>
                        </div>

                        <Link
                          href={active.href}
                          onClick={onClose}
                          className="rounded-xl bg-[#0b1b3a] px-4 py-2 text-xs font-extrabold text-white hover:opacity-90"
                        >
                          {active.group} →
                        </Link>
                      </div>

                      {/* 2 kolon: chipler + tek görsel kart */}
                      <div>
{/* dikey liste (başlık + küçük görsel alanı) */}
<div className="space-y-2">
  {active.items.map((it, idx) => (
    <Link
      key={`${active.group}-${it.href}-${idx}`}
      href={it.href}
      onClick={onClose}
className="
  group grid w-1/2 grid-cols-[1fr_72px] items-center
  rounded-2xl border border-slate-200 bg-white
  px-5 py-4
  min-h-[72px]
  transition hover:bg-slate-50 hover:border-[#0b1b3a]/25 hover:shadow-sm
"
    >
      {/* SOL: sadece başlık */}
      <span className="text-sm font-extrabold text-[#0b1b3a]">
        {it.label}
      </span>

      {/* SAĞ: küçük görsel alanı (sen resim koyacaksın) */}
        <span
        className="
            relative h-10 w-14 sm:h-12 sm:w-16
            shrink-0 overflow-hidden rounded-xl
            border border-slate-200 bg-slate-100
        "
        >
        <Image
            src={ITEM_IMAGES[it.label] ?? "/images/mega/items/placeholder.webp"}
            alt={it.label}
            fill
            className="object-cover transition group-hover:scale-[1.05]"
            sizes="64px"
        />
        </span>
    </Link>
  ))}
</div>

                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-[#0b1b3a] via-slate-200 to-[#0b1b3a]" />
          </div>
        </div>
      </div>
    </div>
  );
}
