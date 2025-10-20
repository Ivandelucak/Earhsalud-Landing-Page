"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/ubicacion", label: "Ubicación" }, // ← nuevo
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">
        {/* Marca */}
        <Link href="/" className="font-semibold tracking-tight">
          Earh Salud
        </Link>

        {/* Navegación (desktop/tablet) */}
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

        {/* Acciones derechas */}
        <div className="flex items-center gap-2">
          {/* Botón Mapa (solo mobile) → abre Google Maps directo */}
          <a
            href="https://maps.app.goo.gl/pRbhoexwHyosGZAj7"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm hover:bg-neutral-50"
            aria-label="Abrir ubicación en Google Maps"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
              <path
                d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                fill="currentColor"
              />
            </svg>
            Mapa
          </a>

          {/* CTA principal */}
          <Link
            href="/contacto"
            className="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
          >
            Solicitar cotización
          </Link>
        </div>
      </div>
    </header>
  );
}
