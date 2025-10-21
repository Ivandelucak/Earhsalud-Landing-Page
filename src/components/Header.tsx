"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/ubicacion", label: "Ubicación" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Cerrar con animación
  const handleClose = (delay = 0) => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 250 + delay);
  };

  // Cerrar si se toca fuera del panel
  useEffect(() => {
    const handleTouchOutside = (e: TouchEvent) => {
      const aside = document.querySelector("aside[data-sidebar]");
      if (aside && !aside.contains(e.target as Node)) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("touchstart", handleTouchOutside);
    } else {
      document.removeEventListener("touchstart", handleTouchOutside);
    }

    return () => {
      document.removeEventListener("touchstart", handleTouchOutside);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">
        {/* Botón menú (solo mobile) */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 -ml-2 md:hidden hover:bg-neutral-100"
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5 text-neutral-700" />
        </button>

        {/* Branding */}
        <Link href="/" className="font-semibold tracking-tight">
          Earh Salud
        </Link>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm hover:underline underline-offset-4 ${
                pathname === href ? "font-semibold" : "text-neutral-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA derecha */}
        <Link
          href="/contacto"
          className="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
        >
          Solicitar cotización
        </Link>
      </div>

      {/* Sidebar Mobile */}
      {(open || isClosing) && (
        <>
          {/* Overlay */}
          <div
            className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
              isClosing ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => handleClose()}
          />

          {/* Panel */}
          <aside
            data-sidebar
            className={`
              fixed left-0 top-0 z-50 h-dvh w-72 max-w-[80%] md:hidden
              bg-white shadow-xl border-r transform transition-transform duration-300
              ${isClosing ? "-translate-x-full" : "translate-x-0"}
            `}
            role="dialog"
            aria-modal="true"
          >
            <div className="h-14 flex items-center justify-between px-4 border-b">
              <span className="font-semibold">Menú</span>
              <button
                onClick={() => handleClose()}
                aria-label="Cerrar menú"
                className="rounded-md p-2 hover:bg-neutral-100"
              >
                <X className="h-5 w-5 text-neutral-700" />
              </button>
            </div>

            <nav className="p-2">
              {nav.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <button
                    key={href}
                    onClick={() => {
                      handleClose(100); // animación + breve pausa
                      setTimeout(() => router.push(href), 100);
                    }}
                    className={`
                      w-full text-left flex items-center justify-between
                      rounded-lg px-3 py-3 text-sm transition-colors
                      ${
                        active
                          ? "bg-neutral-100 font-semibold"
                          : "hover:bg-neutral-50 text-neutral-700"
                      }
                    `}
                  >
                    {label}
                    <span aria-hidden>›</span>
                  </button>
                );
              })}
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}
