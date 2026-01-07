"use client";

import { useEffect } from "react";

type LightboxImage = { src: string; alt: string };

type Props = {
  open: boolean;
  onClose: () => void;
  image: LightboxImage | null;
};

export default function ImageLightbox({ open, onClose, image }: Props) {
  // ESC ile kapat
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Açıkken arka plan scroll kilidi
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open || !image) return null;

  return (
    <div
      className="fixed inset-0 z-[9999]"
      role="dialog"
      aria-modal="true"
      aria-label="Görsel Önizleme"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Kapat"
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
        <div className="relative w-full max-w-6xl">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-3 -right-3 sm:top-2 sm:right-2 z-10 grid h-10 w-10 place-items-center
                       rounded-full bg-white text-slate-900 shadow-md border border-slate-200
                       hover:bg-slate-50"
            aria-label="Kapat"
            title="Kapat"
          >
            ✕
          </button>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[82vh] w-full object-contain bg-black"
            />
          </div>

          {/* Caption */}
          <div className="mt-3 text-center text-sm text-white/80">
            {image.alt}
          </div>
        </div>
      </div>
    </div>
  );
}
