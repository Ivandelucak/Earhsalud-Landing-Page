// FILE: src/app/servicios/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Servicios – Earh Salud",
  description:
    "Conocé nuestros servicios de asistencia médica a domicilio y Policonsultorio. Atención profesional, humana y coordinada.",
};

export default function ServiciosPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Servicios</h1>
        <p className="text-neutral-600">
          Elegí la opción que mejor se adapte a tus necesidades. Ambas secciones
          cuentan con atención humana, rápida y profesional.
        </p>
      </header>

      {/* Contenedores verticales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BannerCard
          href="/asistencia-medica"
          title="Asistencia médica"
          body="Profesionales para atención domiciliaria, seguimiento y coordinación de cuidados."
          imageSrc="/servicios-asistencia.jpg"
        />
        <BannerCard
          href="/clinica-privada"
          title="Policonsultorio"
          body="Atención médica integral con profesionales especializados, turnos rápidos y seguimiento coordinado en nuestros consultorios."
          imageSrc="/servicios-clinica.jpg"
        />
      </div>
    </section>
  );
}

function BannerCard({
  href,
  title,
  body,
  imageSrc,
}: {
  href: string;
  title: string;
  body: string;
  imageSrc: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block w-full overflow-hidden rounded-2xl border shadow-sm
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
      aria-label={title}
    >
      {/* Imagen */}
      <div className="relative w-full">
        <div className="aspect-[3/4] sm:aspect-[3/4] w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] group-active:scale-[1.02]"
            priority={false}
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent
                     transition-opacity duration-300 group-hover:from-black/70 group-hover:via-black/40"
          aria-hidden
        />

        {/* Texto superpuesto */}
        <div className="absolute inset-0 p-5 sm:p-8 flex items-end">
          <div className="text-white drop-shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {title}
            </h2>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-white/90 max-w-3xl">
              {body}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/95">
              Ingresar
              <span
                className="inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              >
                →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Elevación */}
      <div
        className="absolute inset-0 ring-0 transition-all duration-300
                   group-hover:-translate-y-0.5 group-hover:shadow-lg group-active:translate-y-0"
        aria-hidden
      />
    </Link>
  );
}
