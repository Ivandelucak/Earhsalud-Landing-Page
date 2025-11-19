"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/consultorios-medicos-uruguay", label: "Policonsultorio" },
  { href: "/ubicacion", label: "Ubicación" },
  { href: "/contacto", label: "Contacto" },
];

function isActive(pathname: string, href: string) {
  if (href === "/consultorios-medicos-uruguay")
    return pathname === "/consultorios-medicos-uruguay";
  return pathname.startsWith(href);
}

export default function HeaderCmu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border px-2.5 py-2 text-neutral-700 hover:bg-neutral-50 md:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </button>

          <Link
            href="/cmu/clinica-privada"
            className="flex items-center gap-2 font-semibold tracking-tight text-neutral-900"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-xs font-semibold text-white">
              CMU
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm">Consultorios Médicos Uruguay</span>
              <span className="text-xs font-normal text-neutral-600">
                Uruguay 266 · Microcentro
              </span>
            </div>
          </Link>

          <nav className="ml-6 hidden items-center gap-6 md:flex">
            {navItems.map(({ href, label }) => {
              const active = isActive(pathname, href);
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

          <div className="ml-auto hidden items-center gap-3 md:flex">
            <Link
              href="/"
              className="rounded-lg border px-3 py-1.5 text-sm font-medium text-neutral-700 hover:border-blue-500 hover:text-blue-600"
            >
              Earh Salud
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Turnos
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 bottom-0 z-50 w-72 max-w-[85%] border-r bg-white shadow-lg transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-14 items-center justify-between border-b px-4">
          <span className="text-sm font-semibold text-neutral-900">
            Menú CMU
          </span>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-md border px-2 py-1.5 text-neutral-700 hover:bg-neutral-50"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="space-y-1 px-2 py-3">
          {navItems.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm ${
                  active
                    ? "bg-blue-50 font-semibold text-blue-700"
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
              className="block rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Turnos
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
