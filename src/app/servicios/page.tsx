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
    <section className="space-y-10">
      {/* Encabezado */}
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

      {/* Resumen de servicios */}
      <section className="rounded-2xl border bg-white/90 p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          ¿Qué ofrece cada servicio?
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Asistencia médica</h3>
            <ul className="space-y-2 text-neutral-700">
              <Bullet>Visita médica domiciliaria y seguimiento clínico.</Bullet>
              <Bullet>
                Coordinación con kinesiología, enfermería y cuidadores.
              </Bullet>
              <Bullet>
                Planes personalizados para adultos y personas mayores.
              </Bullet>
              <Bullet>Comunicación activa con paciente y familia.</Bullet>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Policonsultorio</h3>
            <ul className="space-y-2 text-neutral-700">
              <Bullet>Turnos rápidos con profesionales especializados.</Bullet>
              <Bullet>
                Clínica médica, cardiología, ortopedia, infectología,
                traumatología y rayos.
              </Bullet>
              <Bullet>Derivación y coordinación de estudios.</Bullet>
              <Bullet>
                Ubicación Microcentro (Uruguay 266) – fácil acceso.
              </Bullet>
            </ul>
          </div>
        </div>
      </section>

      {/* Cómo solicitar un servicio */}
      <section className="rounded-2xl border bg-neutral-50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          ¿Cómo solicito un servicio?
        </h2>
        <ol className="list-decimal pl-5 space-y-2 text-neutral-700">
          <li>
            <strong>Contanos tu necesidad:</strong> elegí Asistencia médica o
            Policonsultorio.
          </li>
          <li>
            <strong>Coordinamos el turno/visita:</strong> te proponemos día y
            horario.
          </li>
          <li>
            <strong>Seguimiento:</strong> mantenemos la comunicación y ajustamos
            el plan.
          </li>
        </ol>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/contacto"
            className="rounded-lg px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:opacity-90"
          >
            Solicitar cotización
          </Link>
          <a
            href="https://wa.me/5491100000000?text=Hola%20Earh%20Salud%2C%20quiero%20hacer%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-2 text-sm font-medium border hover:bg-neutral-50"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* FAQ específico de Servicios */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">
          Preguntas frecuentes
        </h2>

        <FAQ
          q="¿Atienden con obra social o prepaga?"
          a="Trabajamos con particulares y podemos coordinar con obras sociales y prepagas según cada caso y cobertura."
        />
        <FAQ
          q="¿Qué zonas cubren?"
          a="CABA y Gran Buenos Aires (Norte, Sur y Oeste). Consultanos por tu barrio o partido."
        />
        <FAQ
          q="¿Cuánto demora un turno?"
          a="Buscamos ofrecer turnos rápidos. En Policonsultorio suele ser dentro de los próximos días hábiles; en domicilio coordinamos según disponibilidad."
        />
        <FAQ
          q="¿Puedo elegir al profesional?"
          a="Hacemos el mejor match según la especialidad y la necesidad clínica. Si tenés preferencia la contemplamos."
        />
      </section>

      {/* CTA final */}
      <section className="rounded-2xl border p-6 sm:p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">¿Listo para coordinar?</h3>
        <p className="text-neutral-700 mb-4">
          Escribinos y te respondemos a la brevedad.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contacto"
            className="rounded-lg px-5 py-2.5 text-sm font-medium bg-blue-600 text-white hover:opacity-90"
          >
            Contacto
          </Link>
          <Link
            href="/clinica-privada"
            className="rounded-lg px-5 py-2.5 text-sm font-medium border hover:bg-neutral-50"
          >
            Ver Policonsultorio
          </Link>
        </div>
      </section>
    </section>
  );
}

/* ------------------ UI helpers (del archivo) ------------------ */

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <svg
        className="mt-1 h-4 w-4 shrink-0 text-blue-600"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          d="M20 6L9 17l-5-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{children}</span>
    </li>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border bg-white open:bg-blue-50 p-4 shadow-sm transition-colors duration-300 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex w-full cursor-pointer items-center justify-between gap-4 text-left">
        <span className="font-medium text-neutral-900">{q}</span>
        <svg
          className="h-5 w-5 shrink-0 text-neutral-500 transition-transform group-open:rotate-45"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            d="M12 5v14M5 12h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </summary>
      <div className="mt-3 border-t pt-3 font-medium text-neutral-800">{a}</div>
    </details>
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
