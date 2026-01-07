"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  /** Scroll başladıktan kaç px sonra gözüksün */
  showAfter?: number;
  /** Sağdan mesafe (Tailwind class) */
  rightClassName?: string;
  /** Alttan mesafe (Tailwind class) */
  bottomClassName?: string;
};

export default function ScrollToTopProgress({
  showAfter = 320,
  rightClassName = "right-6",
  bottomClassName = "bottom-6",
}: Props) {
  const [progress, setProgress] = useState(0); // 0..1
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;

      const p = scrollable > 0 ? Math.min(1, Math.max(0, y / scrollable)) : 0;

      setProgress(p);
      setVisible(y >= showAfter);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const ringStyle = useMemo(() => {
    const deg = Math.round(progress * 360);
    return {
      background: `conic-gradient(#1d4ed8 ${deg}deg, #e5e7eb 0deg)`,
    } as React.CSSProperties;
  }, [progress]);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Sayfanın en üstüne çık"
      title="Yukarı çık"
      className={`fixed ${rightClassName} ${bottomClassName} z-50`}
    >
      {/* Progress ring */}
      <span
        className="grid h-12 w-12 place-items-center rounded-full p-[3px] shadow-md"
        style={ringStyle}
      >
        {/* Inner button */}
        <span className="grid h-full w-full place-items-center rounded-full bg-white border border-slate-300">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-800"
            aria-hidden="true"
            >
            <polyline points="18 15 12 9 6 15" />
            </svg>
        </span>
      </span>
    </button>
  );
}
