import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/earhsalud/?hl=es";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div className="space-y-3">
          <h3 className="text-base font-semibold text-earh-blue-900">
            Earh Salud SRL
          </h3>
          <p className="max-w-md text-sm leading-6 text-neutral-600">
            Atención en salud con enfoque humano a través de Internación
            Domiciliaria, Asistencia Domiciliaria y Consultorios Médicos
            Uruguay.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-earh-blue-900">
            Navegación
          </h4>
          <div className="flex flex-col gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-earh-blue-700 hover:underline">
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="hover:text-earh-blue-700 hover:underline"
            >
              Servicios
            </Link>
            <Link
              href="/internacion-domiciliaria"
              className="hover:text-earh-blue-700 hover:underline"
            >
              Internación Domiciliaria
            </Link>
            <Link
              href="/asistencia-domiciliaria"
              className="hover:text-earh-blue-700 hover:underline"
            >
              Asistencia Domiciliaria
            </Link>
            <Link
              href="/consultorios-medicos-uruguay"
              className="hover:text-earh-blue-700 hover:underline"
            >
              Consultorios Médicos Uruguay
            </Link>
            <Link
              href="/contacto"
              className="hover:text-earh-blue-700 hover:underline"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-earh-blue-900">Contacto</h4>

          <div className="flex flex-col gap-2 text-sm text-neutral-600">
            <a
              href="tel:+541147432525"
              className="flex items-center gap-2 hover:text-earh-blue-700"
            >
              <Phone className="h-4 w-4" />
              <span>+54 11 4743-2525</span>
            </a>

            <a
              href="mailto:idearhsalud@gmail.com"
              className="flex items-center gap-2 hover:text-earh-blue-700"
            >
              <Mail className="h-4 w-4" />
              <span>idearhsalud@gmail.com</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Earh Salud"
              className="flex items-center gap-2 hover:text-earh-blue-700"
            >
              <Instagram className="h-4 w-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-neutral-500 sm:px-6 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} Earh Salud. Todos los derechos
            reservados.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/legal"
              className="hover:text-earh-blue-700 hover:underline"
            >
              Información legal
            </Link>
            <Link
              href="/contacto"
              className="hover:text-earh-blue-700 hover:underline"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
