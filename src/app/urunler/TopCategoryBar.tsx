"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronRight,
  Printer,
  Droplets,
  FileText,
  Infinity,
  PaintBucket,
  Package,
} from "lucide-react";

type Item = { label: string; href: string };

type IconKey =
  | "printer"
  | "droplets"
  | "filetext"
  | "infinity"
  | "paintbucket"
  | "package";

type Group = {
  title: string;
  href: string;
  items: Item[];
  iconKey: IconKey;
};

const ICONS: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  printer: Printer,
  droplets: Droplets,
  filetext: FileText,
  infinity: Infinity,
  paintbucket: PaintBucket,
  package: Package,
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function TopCategoryBar({ groups }: { groups: Group[] }) {
  const [openTitle, setOpenTitle] = useState<string | null>(null);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

  const wrapRef = useRef<HTMLDivElement | null>(null);

  const openGroup = useMemo(
    () => groups.find((g) => g.title === openTitle) ?? null,
    [groups, openTitle]
  );

  // dışarı tıkla -> kapat
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) {
        setOpenTitle(null);
        setAnchorRect(null);
      }
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  // ESC -> kapat
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenTitle(null);
        setAnchorRect(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

const openAt = (title: string, el: HTMLElement | null) => {
  if (!el) return;
  const rect = el.getBoundingClientRect();
  setOpenTitle(title);
  setAnchorRect(rect);
};

  // Dropdown pozisyon (fixed) – viewport dışına taşmasın
  const dropdownStyle: React.CSSProperties | undefined = useMemo(() => {
    if (!anchorRect) return undefined;

    const vw = typeof window !== "undefined" ? window.innerWidth : 1200;
    const desiredW = 320; // desktop hedef
    const w = Math.min(desiredW, Math.floor(vw * 0.92)); // mobile: 92vw
    const left = clamp(Math.round(anchorRect.left), 12, vw - w - 12);
    const top = Math.round(anchorRect.bottom + 2);

    return { width: w, left, top, position: "fixed" as const };
  }, [anchorRect]);

  return (
    <div className="mt-6" ref={wrapRef}>
      {/* Bar container */}
      <div className="rounded-2xl border border-[#e5e7eb] bg-white shadow-sm p-2 md:p-3">

        {/* Desktop: wrap; Mobile: yatay scroll */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 overflow-x-auto whitespace-nowrap md:flex-nowrap md:overflow-x-visible md:justify-between [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {groups.map((g) => {
            const Icon = ICONS[g.iconKey];
            const isOpen = openTitle === g.title;

            return (
              <button
                key={g.title}
                type="button"
                className="
                  relative
                  inline-flex items-center gap-2 md:flex-1 md:justify-center
                  rounded-xl border border-[#e5e7eb] bg-white
                  px-3 py-2
                  text-sm font-extrabold text-slate-800
                  shadow-sm transition
                  hover:-translate-y-0.5 hover:shadow-md
                  hover:bg-blue-50 hover:text-[#2563eb]
                  focus:outline-none focus:ring-4 focus:ring-blue-100
                  min-w-[170px] md:min-w-0
                "
                onMouseEnter={(e) => openAt(g.title, e.currentTarget)}
                onFocus={(e) => openAt(g.title, e.currentTarget)}
                onClick={(e) => {
                  // Mobil/Touch: 1. tık aç, 2. tık kategoriye git
                  if (!isOpen) {
                    openAt(g.title, e.currentTarget);
                    return;
                  }
                  window.location.href = g.href;
                }}
                onTouchStart={(e) => {
                  if (!isOpen) openAt(g.title, e.currentTarget);
                }}
              >
                <span
                  className="
                    inline-flex h-8 w-8 items-center justify-center
                    rounded-xl bg-[#f5f7fb] border border-[#e5e7eb]
                    transition group-hover:border-blue-200 group-hover:bg-white
                  "
                >
                  <Icon className="h-4 w-4 text-slate-700" />
                </span>

                <span>{g.title}</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-2 text-xs text-slate-500">Hover veya tıkla → alt kategoriler.</p>

      {/* Dropdown (fixed) */}
      {openGroup && anchorRect && (
        <div
          style={dropdownStyle}
          className="
            z-[9999]
            rounded-2xl border border-[#e5e7eb] bg-white shadow-lg
            overflow-hidden
          "
          onMouseLeave={() => {
            setOpenTitle(null);
            setAnchorRect(null);
          }}
        >
          <div className="py-2 max-h-[50vh] overflow-auto">
            {openGroup.items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="
                  flex items-center justify-between gap-3
                  px-4 py-2.5
                  text-sm font-semibold text-slate-800
                  hover:bg-blue-50 hover:text-[#1d4ed8]
                  transition
                "
                onClick={() => {
                  setOpenTitle(null);
                  setAnchorRect(null);
                }}
              >
                <span>{it.label}</span>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
