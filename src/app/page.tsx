import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Earh Salud – Asistencia médica y clínica privada",
  description:
    "Empresa de salud con cobertura en CABA y GBA. Consultas y turnos.",
};

export default function Page() {
  return (
    <section className="space-y-20">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Cuidado y asistencia a tu medida
          </h1>
          <p className="mt-3 sm:mt-4 text-neutral-600 max-w-2xl mx-auto text-base sm:text-lg">
            Earh Salud brinda asistencia y servicios de policonsultorio en CABA
            y GBA. Atención humana y profesional.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#contacto"
              className="rounded-lg px-5 py-2.5 text-sm font-medium bg-blue-600 text-white hover:scale-[1.02] active:scale-100 transition"
            >
              Solicitar cotización
            </Link>

            <Link
              href="/servicios"
              className="rounded-lg px-5 py-2.5 text-sm font-medium border hover:bg-neutral-50"
            >
              Ver servicios
            </Link>

            {/* Botón LLAMAR (placeholder) */}
            <a
              href="tel:+5491100000000" // ← reemplazar luego por número real
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium border border-neutral-300 hover:bg-neutral-50"
              aria-label="Llamar por teléfono"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                aria-hidden
                className="-mt-px"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.77.54 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.47a2 2 0 0 1 2.11-.45c.84.24 1.71.42 2.61.54A2 2 0 0 1 22 16.92Z"
                  fill="currentColor"
                />
              </svg>
              LLÁMENOS
            </a>

            {/* Botón WhatsApp (placeholder) */}
            <a
              href="https://wa.me/5491100000000?text=Hola%20quiero%20una%20cotizacion" // ← reemplazar luego
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium bg-green-600 text-white/95 hover:opacity-90"
              aria-label="Escribir por WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0 12 12 0 0 0 2.1 18.36L0 24l5.82-2.04A11.94 11.94 0 0 0 12.06 24a12 12 0 0 0 8.46-20.52ZM12.06 22a9.86 9.86 0 0 1-5-1.36l-.36-.21-3.45 1.2 1.2-3.36-.24-.36A9.95 9.95 0 1 1 22 12.06 9.93 9.93 0 0 1 12.06 22Zm5.7-7.36c-.3-.15-1.77-.87-2.04-.96s-.48-.15-.69.15-.78.96-.96 1.17-.36.21-.66.06a8.1 8.1 0 0 1-2.4-1.47 8.78 8.78 0 0 1-1.62-2.01c-.18-.3 0-.45.12-.6s.3-.36.45-.57.21-.3.3-.51.03-.39-.03-.54c-.06-.15-.69-1.65-.96-2.25s-.51-.51-.69-.51-.39 0-.6 0A1.16 1.16 0 0 0 6 7.5a4.8 4.8 0 0 0-.99 3.54 8.32 8.32 0 0 0 1.77 3.15 18.94 18.94 0 0 0 3.45 3.27 11.5 11.5 0 0 0 2.82 1.5 6.47 6.47 0 0 0 2.97.39c.9-.09 1.77-.72 2.01-1.41s.24-1.29.18-1.41-.27-.24-.48-.33Z"
                  fill="currentColor"
                />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* NUEVA SECCIÓN: Imagen + texto */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
          {/* Reemplazá /about.jpg por tu imagen en /public */}
          <Image
            src="/about.jpg"
            alt="Cuidado y asistencia con calidez humana"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <p className="text-sm tracking-wide text-blue-700 font-semibold mb-1">
            ATENCIÓN DOMICILIARIA Y POLICONSULTORIO
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Cuidado integral para tu bienestar
          </h2>
          <p className="text-neutral-700 leading-7">
            En <strong>Earh Salud</strong> trabajamos para mejorar tu calidad de
            vida, brindando soluciones de atención médica confiables y humanas.
            Ofrecemos <strong>asistencia domiciliaria</strong> para adultos y
            personas mayores con cuidadores capacitados, y un{" "}
            <strong>servicio de policonsultorio </strong>
            que permite acceder a profesionales de primer nivel sin demoras ni
            esperas prolongadas. Nuestro compromiso es garantizar una atención
            rápida, segura y personalizada, adaptada a cada necesidad y
            situación.
          </p>
        </div>
      </section>

      {/* VIÑETAS */}
      <section className="grid gap-6 sm:gap-8 md:grid-cols-2">
        <FeatureCard
          title="Asistencia médica"
          body="Profesionales para atención domiciliaria, seguimiento y coordinación de cuidados."
          href="/asistencia-medica"
          cta="Ver asistencia médica"
        />
        <FeatureCard
          title="Policonsultorio"
          body="Servicios de clínica médica privada: turnos, estudios y coordinación integral."
          href="/clinica-privada"
          cta="Ver clínica privada"
        />
      </section>

      {/* CONTACTO (centrado en Home) */}
      <section id="contacto" className="scroll-mt-20 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2">
          Contacto
        </h2>
        <p className="text-neutral-600 text-center mb-6 max-w-2xl mx-auto">
          Dejanos tus datos y te respondemos a la brevedad.
        </p>
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* LEGAL */}
      <section className="border-t pt-10 text-sm text-neutral-600">
        <p>
          Información legal y de privacidad. Encontrá los detalles en{" "}
          <Link href="/legal" className="underline underline-offset-4">
            Política de Privacidad
          </Link>
          .
        </p>
      </section>
    </section>
  );
}

function FeatureCard({
  title,
  body,
  href,
  cta,
}: {
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-neutral-200 p-6 sm:p-7 bg-white/80 backdrop-blur shadow-sm
                 hover:bg-neutral-700 hover:border-neutral-700 hover:shadow-lg hover:scale-[1.02]
                 focus-visible:ring-2 focus-visible:ring-blue-500/30
                 active:bg-neutral-700 active:border-neutral-700 active:shadow-md active:scale-[0.99]
                 touch-manipulation"
    >
      <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-neutral-900 group-hover:text-white group-active:text-white transition-colors">
        {title}
      </h3>
      <p className="text-neutral-600 mb-5 sm:mb-6 group-hover:text-neutral-200 group-active:text-neutral-200 transition-colors">
        {body}
      </p>
      <div className="inline-flex items-center gap-2 text-blue-600 group-hover:text-blue-300 group-active:text-blue-300 font-medium transition-colors">
        {cta}
        <span
          aria-hidden
          className="translate-x-0 group-hover:translate-x-0.5 group-active:translate-x-0.5 transition-transform"
        >
          →
        </span>
      </div>
    </Link>
  );
}
