"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SearchBox from "./SearchBox";
import TeklifAlButton from "@/app/components/TeklifAlButton";

const HERO_CATEGORIES = [
  { label: "Kartuş", href: "/urunler/kartus" },
  { label: "Kağıt", href: "/urunler/kagit" },
  { label: "Bitmeyen Kartuş", href: "/urunler/bitmeyen-kartus" },
  { label: "Mürekkep", href: "/urunler/murekkep" },
  { label: "Sarf Malzeme", href: "/urunler/sarf-malzeme" },
];

const PRODUCTS_MENU = [
  {
    group: "Makinalar",
    href: "/urunler/makinalar",
    items: [
      { label: "Plotter", href: "/urunler/makinalar/plotter" },
      { label: "Masaüstü Yazıcılar", href: "/urunler/makinalar/masaustu-yazicilar" },
      { label: "Tarayıcı", href: "/urunler/makinalar/tarayici" },
      { label: "Katlama Makinası", href: "/urunler/makinalar/katlama-makinasi" },
      { label: "UV", href: "/urunler/makinalar/uv" },
      { label: "Etiket Makinaları", href: "/urunler/makinalar/etiket-makinalari" },
    ],
  },
  {
    group: "Kartuş",
    href: "/urunler/kartus",
    items: [
      { label: "HP Orijinal Kartuş", href: "/urunler/kartus/hp-orijinal-kartus" },
      { label: "Canon Orijinal Kartuş", href: "/urunler/kartus/canon-orijinal-kartus" },
      { label: "Epson Orijinal Kartuş", href: "/urunler/kartus/epson-orijinal-kartus" },
      { label: "Papirink Muadil Kartuş", href: "/urunler/kartus/papirink-muadil-kartus" },
    ],
  },
  {
    group: "Kağıt",
    href: "/urunler/kagit",
    items: [
      { label: "Plotter Kağıtları", href: "/urunler/kagit/plotter-kagitlari" },
      { label: "Fotoğraf Kağıtları", href: "/urunler/kagit/fotograf-kagitlari" },
      { label: "Mat Coated Kağıtları", href: "/urunler/kagit/mat-coated-kagitlari" },
      { label: "Aydınger", href: "/urunler/kagit/aydinger" },
      { label: "Polyester", href: "/urunler/kagit/polyester" },
      { label: "Polyester Kanvas", href: "/urunler/kagit/polyester-kanvas" },
      { label: "Pamuklu Kanvas (Cotton)", href: "/urunler/kagit/pamuklu-kanvas-cotton" },
      { label: "Yapışkanlı Kağıtlar", href: "/urunler/kagit/yapiskanli-kagitlar" },
      { label: "Bayrak Bezi - Takvim Bezi", href: "/urunler/kagit/bayrak-bezi-takvim-bezi" },
      { label: "Fosforlu Kağıtlar", href: "/urunler/kagit/fosforlu-kagitlar" },
    ],
  },
  {
    group: "Bitmeyen Kartuş",
    href: "/urunler/bitmeyen-kartus",
    items: [
      { label: "Epson için Dolan Kartuş", href: "/urunler/bitmeyen-kartus/epson-icin-dolan-kartus" },
      { label: "HP için Dolan Kartuş", href: "/urunler/bitmeyen-kartus/hp-icin-dolan-kartus" },
      { label: "Canon için Dolan Kartuş", href: "/urunler/bitmeyen-kartus/canon-icin-dolan-kartus" },
    ],
  },
  {
    group: "Mürekkep",
    href: "/urunler/murekkep",
    items: [
      { label: "HP Uyumlu Mürekkep", href: "/urunler/murekkep/hp-uyumlu-murekkep" },
      { label: "Canon Uyumlu Mürekkep", href: "/urunler/murekkep/canon-uyumlu-murekkep" },
      { label: "Epson Uyumlu Mürekkep", href: "/urunler/murekkep/epson-uyumlu-murekkep" },
    ],
  },
  {
    group: "Sarf Malzemesi",
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

const CORPORATE_MENU = [
  { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
  { label: "Banka Bilgilerimiz", href: "/kurumsal/banka-bilgilerimiz" },
  { label: "Teslimat Bilgilerimiz", href: "/kurumsal/teslimat-bilgilerimiz" },
  { label: "Satış Sözleşmesi", href: "/kurumsal/satis-sozlesmesi" },
];

function useOutsideClose<T extends HTMLElement>(onClose: () => void) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) onClose();
    };
    window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, [onClose]);

  return ref;
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const forceCompact = !isHome; // ✅ ana sayfa dışı header hep küçük

  const [productsOpen, setProductsOpen] = useState(false);
  const [corpOpen, setCorpOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const headerBarRef = useRef<HTMLDivElement | null>(null);
  const [headerH, setHeaderH] = useState(80);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [activeGroup, setActiveGroup] = useState(PRODUCTS_MENU[0]?.group ?? "Makinalar");
  useEffect(() => {
    if (productsOpen) setActiveGroup(PRODUCTS_MENU[0]?.group ?? "Makinalar");
  }, [productsOpen]);

  // Mega menü açıkken body scroll lock
  useEffect(() => {
    if (!productsOpen && !mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [productsOpen, mobileOpen]);

  // Header yüksekliğini ölç (mega menü top offset için)
  useEffect(() => {
    const el = headerBarRef.current;
    if (!el) return;

    const update = () => setHeaderH(el.getBoundingClientRect().height);
    update();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // Scroll tracking (home’da aktif, diğer sayfalarda sabit kompakt)
  useEffect(() => {
    if (forceCompact) {
      setScrolled(true);
      setScrollY(999); // home hero yok ama state boş kalmasın
      return;
    }

    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrollY(y);
      setScrolled(y > 40);
    };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, [forceCompact]);

  const productsCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const corpCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const wrapRef = useOutsideClose<HTMLDivElement>(() => {
    setProductsOpen(false);
    setCorpOpen(false);
  });

  // Parallax: scroll aşağı indikçe video yukarı kayar (maks 180px)
  const parallaxY = -Math.min(scrollY * 0.25, 180);

  // Overlay koyulaşması (0.55 -> 0.75)
  const overlayAlpha = 0.55 + Math.min(scrollY / 800, 0.2);

  return (
    <>
      {/* HEADER BAR (sticky) */}
      <header className="sticky top-0 z-[999] w-full">
        <div
          ref={headerBarRef}
          className={`relative transition-all duration-300
            ${isHome && scrollY < 40
              ? "bg-transparent py-4"
              : "border-b border-white/10 bg-[#050914]/92 backdrop-blur-xl py-2 shadow-xl"
            }
          `}
        >
          {/* Home'da en üstteyken cam hissi (opsiyonel ama şık) */}
          {isHome && scrollY < 40 && (
            <div className="pointer-events-none absolute inset-0 bg-white/5 backdrop-blur-md" />
          )}

          <div className="relative">
            <div
              ref={wrapRef}
              className="relative mx-auto flex w-full max-w-[1400px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-10"
            >
              {/* LOGO */}
              <Link
                href="/"
                className={`group flex items-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/15
                  ${(forceCompact || scrolled) ? "px-2 py-1" : "px-3 py-2"}
                `}
              >
                <Image
                  src="/brand/papirink-logo.webp"
                  alt="Papirink | Kağıt & Mürekkep"
                  width={520}
                  height={160}
                  priority
                  className={`w-auto drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)] transition-all duration-300
                    ${(forceCompact || scrolled) ? "h-[52px] sm:h-[64px]" : "h-[76px] sm:h-[104px]"}
                  `}
                />
              </Link>

              {/* DESKTOP SEARCH */}
              <div className="hidden md:block w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-md">
                <SearchBox variant="header" />
              </div>

              {/* DESKTOP NAV */}
              <nav className="hidden md:flex flex-wrap items-center gap-6">
                <Link
                  href="/"
                  className={`text-sm font-semibold transition ${
                    pathname === "/"
                      ? "text-white border-b-2 border-cyan-300 pb-1"
                      : "text-white/80 hover:text-white hover:drop-shadow"
                  }`}
                >
                  Ana Sayfa
                </Link>

                {/* ÜRÜNLER */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setProductsOpen((v) => !v);
                      setCorpOpen(false);
                      setMobileOpen(false);
                    }}
                    className={`rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15
                      ${pathname.startsWith("/urunler") ? "ring-1 ring-white/30" : "text-white/90"}
                    `}
                    aria-haspopup="menu"
                    aria-expanded={productsOpen}
                  >
                    Ürünler ▾
                  </button>

                  {productsOpen && (
                    <div className="fixed inset-0 z-[9999]">
                      {/* backdrop */}
                      <button
                        aria-label="Kapat"
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setProductsOpen(false)}
                        type="button"
                      />

                      {/* panel */}
                      <div className="absolute left-0 right-0 pt-2" style={{ top: headerH, bottom: 0 }}>
                        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
                          <div
                            className="rounded-2xl border border-white/10 bg-[#0b1220] shadow-2xl max-h-[80vh] overflow-hidden"
                            role="menu"
                          >
                            {/* top strip */}
                            <div className="flex items-center justify-between border-b border-white/10 bg-zinc-950 px-5 py-3">
                              <Link
                                href="/urunler"
                                className="text-sm font-extrabold text-white hover:underline"
                                onClick={() => setProductsOpen(false)}
                              >
                                Tüm Ürünler →
                              </Link>

                              <button
                                type="button"
                                onClick={() => setProductsOpen(false)}
                                className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/10"
                              >
                                Kapat ✕
                              </button>
                            </div>

                            {/* content */}
                            <div className="bg-[#070b13]">
                              <div className="px-6 py-6">
                                {/* Açıklama / küçük başlık */}
                                <div className="mb-4 flex items-center justify-between">
                                  <div>
                                    <div className="text-xs font-semibold tracking-wide text-white/50">
                                      ÜRÜN KATEGORİLERİ
                                    </div>
                                    <div className="text-sm font-semibold text-white/80">
                                      İhtiyacınıza göre alt kategoriyi seçin.
                                    </div>
                                  </div>

                                  <Link
                                    href="/urunler"
                                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white hover:bg-white/10"
                                    onClick={() => setProductsOpen(false)}
                                  >
                                    Tüm Ürünler →
                                  </Link>
                                </div>

                                {/* Hover liste + sağ içerik */}
                                <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
                                  {/* SOL: ana kategori listesi */}
                                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2">
                                    {PRODUCTS_MENU.map((g) => {
                                      const active = g.group === activeGroup;
                                      return (
                                        <div key={g.group} className="px-1">
                                          <button
                                            type="button"
                                            onMouseEnter={() => setActiveGroup(g.group)}
                                            onFocus={() => setActiveGroup(g.group)}
                                            onClick={() => setActiveGroup(g.group)}
                                            className={`w-full rounded-xl px-4 py-3 text-left text-sm font-extrabold transition flex items-center justify-between
                                              ${active ? "bg-white text-black" : "text-white/85 hover:bg-white/10 hover:text-white"}`}
                                          >
                                            <span>{g.group}</span>
                                            <span className={`${active ? "text-black/50" : "text-white/30"}`}>→</span>
                                          </button>

                                          {/* Ana kategoriye git linki (opsiyonel, şık) */}
                                          <Link
                                            href={g.href}
                                            onClick={() => setProductsOpen(false)}
                                            className={`mt-1 block rounded-lg px-4 py-2 text-xs font-semibold transition
                                              ${active ? "text-black/70 hover:underline" : "text-white/45 hover:text-white/70"}`}
                                          >
                                            {g.group} sayfasına git
                                          </Link>
                                        </div>
                                      );
                                    })}
                                  </div>

                                  {/* SAĞ: seçilen grubun alt kategorileri */}
                                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                                    {PRODUCTS_MENU.filter((x) => x.group === activeGroup).map((group) => (
                                      <div key={group.group}>
                                        <div className="mb-3 flex items-center justify-between">
                                          <div className="text-sm font-extrabold text-white">{group.group}</div>
                                          <div className="text-xs font-semibold text-white/45">
                                            {group.items.length} alt kategori
                                          </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                          {group.items.map((it, idx) => (
                                            <Link
                                              key={`${group.group}-${it.href}-${idx}`}
                                              href={it.href}
                                              onClick={() => setProductsOpen(false)}
                                              className="rounded-full border border-cyan-200/15 bg-cyan-200/5 px-4 py-2 text-sm font-semibold text-white/85
                                                        transition hover:border-cyan-200/35 hover:bg-cyan-200/10 hover:text-white active:scale-[0.98]"
                                            >
                                              {it.label}
                                            </Link>
                                          ))}
                                        </div>

                                        {/* alt şerit */}
                                        <div className="mt-5 flex items-center justify-end">
                                          <button
                                            type="button"
                                            onClick={() => setProductsOpen(false)}
                                            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white hover:bg-white/10"
                                          >
                                            Kapat ✕
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* KURUMSAL */}
                <div
                  className="relative"
                  onMouseEnter={() => {
                    if (corpCloseTimerRef.current) {
                      clearTimeout(corpCloseTimerRef.current);
                      corpCloseTimerRef.current = null;
                    }
                    setCorpOpen(true);
                    setProductsOpen(false);
                  }}
                  onMouseLeave={() => {
                    corpCloseTimerRef.current = setTimeout(() => {
                      setCorpOpen(false);
                    }, 220);
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setCorpOpen((v) => !v)}
                    className={`text-sm font-semibold transition ${
                      pathname.startsWith("/kurumsal")
                        ? "text-white border-b-2 border-white pb-1"
                        : "text-white/80 hover:text-white"
                    }`}
                    aria-haspopup="menu"
                    aria-expanded={corpOpen}
                  >
                    Kurumsal ▾
                  </button>

                  {corpOpen && (
                    <div
                      role="menu"
                      onMouseEnter={() => {
                        if (corpCloseTimerRef.current) {
                          clearTimeout(corpCloseTimerRef.current);
                          corpCloseTimerRef.current = null;
                        }
                      }}
                      onMouseLeave={() => {
                        corpCloseTimerRef.current = setTimeout(() => {
                          setCorpOpen(false);
                        }, 220);
                      }}
                      className="absolute left-0 top-full z-[9999] mt-3 w-64 overflow-hidden rounded-xl border border-white/10 bg-[#0b1220] shadow-2xl"
                    >
                      {CORPORATE_MENU.map((it, idx) => (
                        <Link
                          key={`${it.href}-${idx}`}
                          href={it.href}
                          onClick={() => setCorpOpen(false)}
                          className="block px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 hover:text-white"
                        >
                          {it.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/blog"
                  className={`text-sm font-semibold transition ${
                    pathname.startsWith("/blog")
                      ? "text-white border-b-2 border-white pb-1"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Blog
                </Link>

                <Link
                  href="/iletisim"
                  className={`text-sm font-semibold transition ${
                    pathname === "/iletisim"
                      ? "text-white border-b-2 border-white pb-1"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  İletişim
                </Link>

                <TeklifAlButton
                  phone="903125801006" // istersen +90 dahil bile yazabilirsin, normalize ediyor
                  className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-black hover:bg-zinc-100"
                >
                  Teklif Al
                </TeklifAlButton>
              </nav>

              {/* MOBILE CTA + BURGER */}
              <div className="md:hidden flex items-center gap-2">
                <Link
                  href="/teklif-al"
                  className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-black"
                  onClick={() => setMobileOpen(false)}
                >
                  Teklif Al
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(true);
                    setProductsOpen(false);
                    setCorpOpen(false);
                  }}
                  className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15"
                  aria-label="Menüyü Aç"
                >
                  ☰
                </button>
              </div>
            </div>

            {/* MOBILE SEARCH under bar */}
            <div className="md:hidden px-4 pb-3">
              <SearchBox variant="header" />
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[99999] md:hidden">
          <button
            aria-label="Kapat"
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
            type="button"
          />

          <div className="absolute left-0 right-0 top-0 mx-auto w-full max-w-[680px] p-3 max-h-[100dvh] overflow-y-auto overscroll-contain">
            <div className="rounded-2xl border border-white/10 bg-[#0b1220] shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 bg-zinc-950 px-4 py-3">
                <div className="text-sm font-extrabold text-white">Menü</div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Kapat ✕
                </button>
              </div>

              <div className="p-4 space-y-4 max-h-[calc(100dvh-90px)] overflow-y-auto overscroll-contain">
                {/* Search */}
                <div className="rounded-2xl border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-md">
                  <SearchBox variant="header" />
                </div>

                {/* Quick links */}
                <div className="grid grid-cols-2 gap-2">
                  <Link onClick={() => setMobileOpen(false)} href="/" className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-bold text-white">
                    Ana Sayfa
                  </Link>
                  <Link onClick={() => setMobileOpen(false)} href="/blog" className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-bold text-white">
                    Blog
                  </Link>
                  <Link onClick={() => setMobileOpen(false)} href="/iletisim" className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-bold text-white">
                    İletişim
                  </Link>
                  <Link onClick={() => setMobileOpen(false)} href="/urunler" className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm font-bold text-white">
                    Ürünler
                  </Link>
                </div>

                {/* Products accordions */}
                <div className="space-y-2">
                  {PRODUCTS_MENU.map((group) => (
                    <details key={group.group} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                      <summary className="cursor-pointer list-none text-sm font-extrabold text-white flex items-center justify-between">
                        <span>{group.group}</span>
                        <span className="text-white/40">▾</span>
                      </summary>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <Link
                          href={group.href}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                        >
                          {group.group} →
                        </Link>

                        {group.items.map((it, idx) => (
                          <Link
                            key={`${group.group}-${it.href}-${idx}`}
                            href={it.href}
                            onClick={() => setMobileOpen(false)}
                            className="rounded-full border border-cyan-200/15 bg-cyan-200/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-cyan-200/10"
                          >
                            {it.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>

                {/* Corporate */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                  <div className="text-sm font-extrabold text-white mb-2">Kurumsal</div>
                  <div className="flex flex-wrap gap-2">
                    {CORPORATE_MENU.map((it, idx) => (
                      <Link
                        key={`${it.href}-${idx}`}
                        href={it.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <TeklifAlButton
                  phone="903125801006"
                  className="w-full rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-black hover:bg-zinc-100"
                >
                  Teklif Al
                </TeklifAlButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HOME HERO (big video background, header videonun içinde gibi görünür) */}
      {isHome && (
        <section className="relative -mt-[140px] w-full overflow-hidden">
          {/* -mt: header şeffafken video “arkaya” gelsin (140px güvenli bir değer) */}
          <div className="relative h-[80vh] min-h-[620px] overflow-hidden">
            {/* parallax video */}
            <div className="absolute inset-0 will-change-transform" style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}>
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/hero-poster.jpg"
              >
              <source
                src="https://yolrzcsly7vvo2vy.public.blob.vercel-storage.com/papirink.mp4"
                type="video/mp4"
              />
              </video>
            </div>

            {/* overlay (scroll ile koyulaşır) */}
            <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${overlayAlpha})` }} />

            {/* content */}
            <div
              className="relative mx-auto flex h-full w-full max-w-[1400px] flex-col justify-end items-start px-4 sm:px-6 lg:px-10 pb-10 sm:pb-14"
              style={{ paddingTop: headerH }}
            >
            <h1 className="max-w-3xl text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Plotter ekosistemi için tek noktadan çözüm
            </h1>

            <p className="mt-3 max-w-2xl text-base sm:text-lg text-white/85">
              Makina, mürekkep, kâğıt ve sarf malzemelerinde hızlı tedarik. Teknik servis desteğiyle birlikte.
            </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/urunler/makinalar"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-black hover:opacity-90"
                >
                  Makinalar
                </Link>

                <Link
                  href="/teklif-al"
                  className="rounded-xl border border-white/50 bg-white/0 px-5 py-2.5 text-sm font-extrabold text-white hover:bg-white/10"
                >
                  Teklif Al
                </Link>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {HERO_CATEGORIES.map((c) => (
                  <Link
                    key={`${c.label}-${c.href}`}
                    href={c.href}
                    className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs sm:text-sm font-semibold text-white/90 hover:bg-white/[0.10]"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
