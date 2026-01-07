"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

type Img = { src: string; alt: string };

export default function CategoryImagePair({
  images,
}: {
  images?: readonly Img[];
}) {
  // 🔹 Artık 3 görsel
  const imgs = (images ?? []).slice(0, 3);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Img | null>(null);

  if (imgs.length === 0) return null;

  const onOpen = (img: Img) => {
    setActive(img);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setActive(null);
  };

  return (
    <>
      {/* Responsive grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 justify-items-start">
        {imgs.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onOpen(img)}
            className="group w-full overflow-hidden rounded-lg border border-slate-200 bg-white text-left"
            aria-label={`${img.alt} görselini büyüt`}
            title="Büyüt"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="
                w-full
                h-20
                sm:h-24
                md:h-28
                lg:h-32
                object-cover
                transition
                group-hover:scale-105
              "
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <ImageLightbox open={open} onClose={onClose} image={active} />
    </>
  );
}
