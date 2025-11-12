// FILE: src/components/HeaderCmu.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/cmu/ubicacion", label: "Ubicación" },
  { href: "/contacto", label: "Contacto" },
];

export default function HeaderCmu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Bloquear scroll cuando el panel está abierto
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cerrar al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* HEADER (solo la barra superior) */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl h-14 px-4 sm:px-6 lg:px-8 flex items-center gap-3">
          {/* Hamburguesa (mobile) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="md:hidden inline-flex items-center justify-center rounded-md border px-2.5 py-2 text-neutral-700 hover:bg-neutral-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Marca / nombre */}
          <Link
            href="/cmu/clinica-privada"
            className="font-semibold tracking-tight text-neutral-900"
          >
            Consultorios Médicos Uruguay
          </Link>

          {/* Navegación (desktop) */}
          <nav className="hidden md:flex items-center gap-6 ml-6">
            {navItems.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm transition ${
                    active
                      ? "font-semibold text-blue-700"
                      : "text-neutral-600 hover:text-blue-700"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Acciones (desktop) */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <Link
              href="/"
              className="rounded-lg border px-3 py-1.5 text-sm font-medium text-neutral-700 hover:border-blue-500 hover:text-blue-600 transition"
            >
              Pág. principal
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
            >
              Turnos
            </Link>
          </div>

          {/* Espaciador para alinear en mobile */}
          <div className="md:hidden ml-auto" />
        </div>
      </header>

      {/* OVERLAY + DRAWER fuera del header para evitar stacking context */}
      {/* Overlay con z alto */}
      <div
        className={`fixed inset-0 z-[ ninety ] bg-black/40 transition-opacity duration-200 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Panel lateral con z aún mayor */}
      <aside
        className={`fixed left-0 top-0 bottom-0 z-[ 100 ] w-72 max-w-[85%] bg-white border-r shadow-lg md:hidden
                    transition-transform duration-300 ${
                      open ? "translate-x-0" : "-translate-x-full"
                    }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-14 px-4 flex items-center justify-between border-b">
          <span className="font-semibold text-neutral-900">Menú</span>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-md border px-2 py-1.5 text-neutral-700 hover:bg-neutral-50"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="px-2 py-3">
          {navItems.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm ${
                  active
                    ? "font-semibold text-blue-700 bg-blue-50"
                    : "text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                {label}
              </Link>
            );
          })}

          <div className="mt-3 border-t pt-3 space-y-2">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
            >
              Pág. principal
            </Link>
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Turnos
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
