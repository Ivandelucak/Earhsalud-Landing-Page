"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackArrow() {
  const pathname = usePathname();
  if (pathname === "/") return null; // no mostrar en home

  return (
    <Link
      href="/"
      aria-label="Volver al inicio"
      className="
        fixed z-50
        right-4 bottom-4
        md:left-5 md:top-5 md:right-auto md:bottom-auto
        flex items-center justify-center
        rounded-full bg-white/80 backdrop-blur
        p-2 shadow-md hover:bg-neutral-100 active:scale-[0.96]
        transition
      "
      style={{
        // margen de seguridad para móviles con notch
        paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#b0b0b0" // gris claro
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
    </Link>
  );
}
