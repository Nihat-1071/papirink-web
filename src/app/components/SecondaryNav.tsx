"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type SubItem = { label: string; href: string };
type NavItem = { label: string; href: string; items: SubItem[] };

const OPEN_DELAY = 80;   // biraz daha “premium” his
const CLOSE_DELAY = 160;

function slugifyTR(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replaceAll("ı", "i")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ş", "s")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c")
    .replace(/&/g, "ve")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// NAV: senin verdiğin aynı (kısalttım, sende zaten var)
const NAV: NavItem[] = [
  {
    label: "Makinalar",
    href: "/urunler/makinalar",
    items: [
      { label: "Plotter", href: "/urunler/makinalar/plotter" },
      { label: "Fotokopi Makinası", href: "/urunler/makinalar/fotokopi-makinasi" },
      { label: "Tarayıcı", href: "/urunler/makinalar/tarayici" },
      { label: "Katlama Makinası", href: "/urunler/makinalar/katlama-makinasi" },
      { label: "UV", href: "/urunler/makinalar/uv" },
      { label: "Etiket Makinaları", href: "/urunler/makinalar/etiket-makinalari" },
    ],
  },
  {
    label: "Kartuş",
    href: "/urunler/kartus",
    items: [
      { label: "HP Orijinal Kartuş", href: "/urunler/kartus/hp-orijinal-kartus" },
      { label: "Canon Orijinal Kartuş", href: "/urunler/kartus/canon-orijinal-kartus" },
      { label: "Epson Orijinal Kartuş", href: "/urunler/kartus/epson-orijinal-kartus" },
      { label: "Papirink Muadil Kartuş", href: "/urunler/kartus/papirink-muadil-kartus" },
    ],
  },
  {
    label: "Kağıt",
    href: "/urunler/kagit",
    items: [
      { label: "Plotter Kağıtları", href: "/urunler/kagit/plotter-kagitlari" },
      { label: "Fotoğraf Kağıtları", href: "/urunler/kagit/fotograf-kagitlari" },
      { label: "Mat Coated Kağıtları", href: "/urunler/kagit/mat-coated-kagitlari" },
      { label: "Aydinger", href: "/urunler/kagit/aydinger" },
      { label: "Polyester", href: "/urunler/kagit/polyester" },
      { label: "Polyester Kanvas", href: "/urunler/kagit/polyester-kanvas" },
      { label: "Pamuklu Kanvas (Cotton)", href: "/urunler/kagit/pamuklu-kanvas-cotton" },
      { label: "Yapışkanlı Kağıtlar", href: "/urunler/kagit/yapiskanli-kagitlar" },
      { label: "Bayrak / Takvim Bezi", href: "/urunler/kagit/bayrak-takvim-bezi" },
      { label: "Fosforlu Kağıtlar", href: "/urunler/kagit/fosforlu-kagitlar" },
    ],
  },
  {
    label: "Bitmeyen Kartuş",
    href: "/urunler/bitmeyen-kartus",
    items: [
      { label: "Epson için Dolan Kartuş", href: "/urunler/bitmeyen-kartus/epson-icin-dolan-kartus" },
      { label: "HP için Dolan Kartuş", href: "/urunler/bitmeyen-kartus/hp-icin-dolan-kartus" },
      { label: "Canon için Dolan Kartuş", href: "/urunler/bitmeyen-kartus/canon-icin-dolan-kartus" },
    ],
  },
  {
    label: "Mürekkep",
    href: "/urunler/murekkep",
    items: [
      { label: "HP Uyumlu Mürekkep", href: "/urunler/murekkep/hp-uyumlu-murekkep" },
      { label: "Canon Uyumlu Mürekkep", href: "/urunler/murekkep/canon-uyumlu-murekkep" },
      { label: "Epson Uyumlu Mürekkep", href: "/urunler/murekkep/epson-uyumlu-murekkep" },
    ],
  },
  {
    label: "Sarf Malzeme",
    href: "/urunler/sarf-malzeme",
    items: [
      { label: "Baskı Kafası", href: "/urunler/sarf-malzeme/baski-kafasi" },
      { label: "Toner", href: "/urunler/sarf-malzeme/toner" },
      { label: "Çipler", href: "/urunler/sarf-malzeme/cipler" },
      { label: "Bakım Kiti / Kartuşu", href: "/urunler/sarf-malzeme/bakim-kiti-kartusu" },
      { label: "Drum & Bıçak", href: "/urunler/sarf-malzeme/drum-bicak" },
    ],
  },
];

export default function SecondaryNav() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const mql = window.matchMedia?.("(hover: none)");
    const update = () => setIsTouch(!!mql?.matches);
    update();
    mql?.addEventListener?.("change", update);
    return () => mql?.removeEventListener?.("change", update);
  }, []);

  function scheduleOpen(key: string) {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    openTimer.current = window.setTimeout(() => setOpenKey(key), OPEN_DELAY);
  }

  function scheduleClose() {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenKey(null), CLOSE_DELAY);
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenKey(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="border-b bg-zinc-900 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="relative">
          <ul className="flex flex-wrap items-center gap-2 py-3">
            {NAV.map((cat) => {
              const key = slugifyTR(cat.label);
              const isOpen = openKey === key;

              return (
                <li
                  key={key}
                  className="relative"
                  onMouseEnter={() => !isTouch && scheduleOpen(key)}
                  onMouseLeave={() => !isTouch && scheduleClose()}
                >
                  {/* BUTONLAR BÜYÜDÜ */}
                  <button
                    type="button"
                    className={[
                      "group flex items-center gap-2 rounded-xl",
                      "px-4 py-3 text-base font-bold",
                      "text-white/90 hover:text-white hover:bg-white/10",
                      "transition-colors duration-150",
                      isOpen ? "bg-white/10 text-white" : "",
                    ].join(" ")}
                    onClick={() => {
                      if (!isTouch) return; // desktop hover
                      setOpenKey((prev) => (prev === key ? null : key));
                    }}
                    aria-expanded={isOpen}
                    aria-controls={`menu-${key}`}
                  >
                    {cat.label}
                    <span
                      className={[
                        "text-white/60 transition-transform duration-150",
                        isOpen ? "rotate-180" : "",
                      ].join(" ")}
                    >
                      ▾
                    </span>
                  </button>

                  {/* DROPDOWN - ALT ALTA */}
                  {isOpen && (
                    <div
                      id={`menu-${key}`}
                      className={[
                        "absolute left-0 top-full z-50 mt-2",
                        "w-[min(380px,92vw)] overflow-hidden rounded-2xl border",
                        "bg-white text-zinc-900 shadow-xl ring-1 ring-black/5",
                      ].join(" ")}
                      onMouseEnter={() => !isTouch && scheduleOpen(key)}
                      onMouseLeave={() => !isTouch && scheduleClose()}
                    >
                      <div className="flex items-center justify-between border-b bg-zinc-50 px-5 py-4">
                        <div className="text-sm font-extrabold tracking-tight">
                          {cat.label}
                        </div>
                        <Link
                          href={cat.href}
                          className="text-sm font-bold hover:underline"
                          onClick={() => setOpenKey(null)}
                        >
                          Tümünü Gör →
                        </Link>
                      </div>

                      <ul className="p-2">
                        {cat.items.map((it) => (
                          <li key={it.href}>
                            <Link
                              href={it.href}
                              className={[
                                "block rounded-xl px-4 py-3 text-sm font-semibold",
                                "text-zinc-800 hover:bg-zinc-100 hover:text-zinc-950",
                                "transition-colors duration-150",
                              ].join(" ")}
                              onClick={() => setOpenKey(null)}
                            >
                              {it.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* ✅ FLICKER FIX: overlay sadece TOUCH/MOBIL'de */}
          {isTouch && openKey && (
            <button
              aria-label="Menüyü kapat"
              className="fixed inset-0 z-40 cursor-default bg-transparent"
              onClick={() => setOpenKey(null)}
            />
          )}
        </nav>
      </div>
    </div>
  );
}
