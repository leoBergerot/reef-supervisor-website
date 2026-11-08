"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";

export function Shot({ src, alt, width, height, closeLabel }) {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState(null);
  const open = openPath === pathname;
  const titleId = useId();
  const animated = src.endsWith(".gif");

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenPath(pathname)}
        className="block w-full cursor-zoom-in rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          unoptimized={animated}
          className="h-auto max-h-64 w-full object-contain"
        />
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d709b]/80 p-4"
          role="presentation"
          onClick={() => setOpenPath(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-2xl bg-paper p-4 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <p id={titleId} className="sr-only">
              {alt}
            </p>
            <button
              type="button"
              onClick={() => setOpenPath(null)}
              className="absolute top-3 right-3 rounded-full bg-paper px-3 py-1 text-sm font-semibold text-sea-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
            >
              {closeLabel}
            </button>
            <Image
              src={src}
              alt=""
              width={width}
              height={height}
              unoptimized={animated}
              className="mt-8 h-auto w-full"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
