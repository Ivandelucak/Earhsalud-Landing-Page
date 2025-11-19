"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/internacion-domiciliaria", label: "Internación domiciliaria" },
  {
    href: "/consultorios-medicos-uruguay",
    label: "Consultorios Médicos Uruguay",
  },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Header() {
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
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 md:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-neutral-900"
          >
            <span>Earh Salud</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm underline-offset-4 transition ${
                    active
                      ? "font-semibold text-blue-700"
                      : "text-neutral-600 hover:text-blue-700 hover:underline"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contacto"
            className="inline-flex items-center rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Solicitar cotización
          </Link>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 bottom-0 z-50 w-72 max-w-[80%] bg-white border-r shadow-xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-14 items-center justify-between border-b px-4">
          <span className="text-sm font-semibold text-neutral-900">
            Menú Earh Salud
          </span>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="space-y-1 p-2">
          {navItems.map(({ href, label }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  active
                    ? "bg-neutral-100 font-semibold text-neutral-900"
                    : "text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                <span>{label}</span>
                <span aria-hidden>›</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
