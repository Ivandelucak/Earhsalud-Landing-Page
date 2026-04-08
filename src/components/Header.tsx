"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import Image from "next/image";

const INSTAGRAM_URL = "https://www.instagram.com/earhsalud/?hl=es";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/internacion-domiciliaria", label: "Internación domiciliaria" },
  { href: "/asistencia-domiciliaria", label: "Asistencia domiciliaria" },
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
      <header className="sticky top-0 z-50 border-b bg-zinc-50/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 md:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link href="/" className="shrink-0">
            <Image
              src="/imagenes/logo-earh-full.png"
              alt="Earh Salud"
              width={190}
              height={48}
              className="h-11 w-auto sm:h-12"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map(({ href, label }) => {
              const active = isActive(pathname, href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm underline-offset-4 transition ${
                    active
                      ? "font-semibold text-earh-blue-700"
                      : "text-neutral-600 hover:text-earh-blue-700 hover:underline"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Earh Salud"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-earh-blue-100 bg-white text-earh-blue-700 transition hover:border-earh-blue-200 hover:bg-earh-blue-50 hover:text-earh-blue-800"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>

            <Link
              href="/contacto"
              className="inline-flex items-center rounded-lg bg-earh-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-earh-blue-700"
            >
              Solicitar cotización
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Earh Salud"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-earh-blue-100 bg-white text-earh-blue-700 transition hover:bg-earh-blue-50"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 w-72 max-w-[80%] border-r bg-white shadow-xl transition-transform duration-300 md:hidden ${
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

        <div className="border-b p-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-earh-blue-100 bg-white px-3 py-2 text-sm font-medium text-earh-blue-700 transition hover:bg-earh-blue-50"
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
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

        <div className="mt-auto border-t p-3">
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-lg bg-earh-blue-600 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-earh-blue-700"
          >
            Solicitar cotización
          </Link>
        </div>
      </aside>
    </>
  );
}
