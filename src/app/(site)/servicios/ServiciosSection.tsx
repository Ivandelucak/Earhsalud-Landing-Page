// FILE: src/app/(site)/servicios/ServiciosSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const heroAnim = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
} as const;

const sectionInView = {
  initial: { opacity: 1, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
} as const;

const WHATSAPP_HREF =
  "https://wa.me/541130031247?text=Hola%20Earh%20Salud%2C%20quiero%20hacer%20una%20consulta%20sobre%20sus%20servicios";

export default function ServiciosSection() {
  return (
    <section className="space-y-10">
      {/* HEADER: siempre visible, animación simple */}
      <motion.header {...heroAnim} className="space-y-3">
        <p className="text-xs font-semibold tracking-wide text-blue-700">
          SERVICIOS DE EARH SALUD
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Internación domiciliaria y Policonsultorio
        </h1>
        <p className="max-w-3xl text-neutral-700">
          Earh Salud ofrece internación domiciliaria en CABA y Gran Buenos Aires
          y atención en consultorios en Uruguay 266 (Microcentro). Acá podés ver
          qué incluye cada servicio y elegir la opción que mejor se adapte a tu
          situación.
        </p>
      </motion.header>

      {/* TARJETAS PRINCIPALES */}
      <motion.section
        {...sectionInView}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <BannerCard
          href="/internacion-domiciliaria"
          title="Internación domiciliaria"
          body="Cuidado en el hogar para personas adultas y mayores, con cuidadores capacitados, coordinación profesional y seguimiento continuo."
          imageSrc="/servicios-asistencia.jpg"
        />
        <BannerCard
          href="/consultorios-medicos-uruguay"
          title="Consultorios Médicos Uruguay"
          body="Consultas clínicas y de especialidades, turnos ágiles en Microcentro, CABA."
          imageSrc="/servicios-clinica.jpg"
        />
      </motion.section>

      {/* QUÉ INCLUYE CADA SERVICIO */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          ¿Qué incluye cada servicio?
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Internación domiciliaria</h3>
            <p className="mt-1 text-sm text-neutral-700">
              Pensada para personas que necesitan cuidados sostenidos, pero
              pueden permanecer en su hogar con acompañamiento adecuado.
            </p>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <Bullet>
                Cuidadores capacitados y equipo interdisciplinario.
              </Bullet>
              <Bullet>
                Asistencia en higiene, movilidad y actividades cotidianas.
              </Bullet>
              <Bullet>
                Seguimiento de indicaciones médicas externas y coordinación con
                profesionales.
              </Bullet>
              <Bullet>
                Comunicación continua con la familia y ajustes del plan según
                evolución.
              </Bullet>
            </ul>
            <Link
              href="/internacion-domiciliaria"
              className="mt-4 inline-flex items-center text-sm font-medium text-blue-700 underline-offset-4 hover:underline"
            >
              Ver más sobre internación domiciliaria
              <span aria-hidden className="ml-1">
                →
              </span>
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Policonsultorio Uruguay 266
            </h3>
            <p className="mt-1 text-sm text-neutral-700">
              Consultorios Médicos Uruguay: espacio de atención ambulatoria en
              Microcentro, con turnos coordinados.
            </p>
            <ul className="mt-3 space-y-2 text-neutral-700">
              <Bullet>
                Consultas de clínica médica y especialidades seleccionadas.
              </Bullet>
              <Bullet>
                Cardiología, ortopedia, traumatología, infectología y rayos,
                entre otras.
              </Bullet>
              <Bullet>
                Derivación y coordinación de estudios complementarios.
              </Bullet>
              <Bullet>
                Ubicación estratégica en Uruguay 266, 1º E, CABA, con fácil
                acceso en transporte público.
              </Bullet>
            </ul>
            <Link
              href="/cmu"
              className="mt-4 inline-flex items-center text-sm font-medium text-blue-700 underline-offset-4 hover:underline"
            >
              Ver más sobre el Policonsultorio
              <span aria-hidden className="ml-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* COMPARACIÓN DE SERVICIOS */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-neutral-50 p-6 sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          ¿Qué servicio es más adecuado para cada caso?
        </h2>
        <div className="overflow-hidden rounded-xl border bg-white">
          <div className="grid text-sm font-semibold text-neutral-900 sm:grid-cols-3">
            <div className="border-b px-4 py-3 sm:border-b-0 sm:border-r">
              Situación
            </div>
            <div className="border-b px-4 py-3 sm:border-b-0 sm:border-r">
              Internación domiciliaria
            </div>
            <div className="px-4 py-3">Policonsultorio Uruguay 266</div>
          </div>
          <div className="divide-y text-sm text-neutral-700">
            <ComparisonRow
              situation="Persona mayor que requiere ayuda diaria pero puede permanecer en su casa."
              home="Cuidadores en domicilio, coordinación con profesionales."
              clinic="Consultas puntuales de control, si el traslado es posible."
            />
            <ComparisonRow
              situation="Alta hospitalaria reciente con necesidad de seguimiento cercano."
              home="Plan de cuidados en el hogar y reducción de reinternaciones."
              clinic="Controles médicos programados y estudios según indicación."
            />
            <ComparisonRow
              situation="Consulta clínica o por especialidad sin internación."
              home="No suele ser la primera opción."
              clinic="Turno en consultorio con profesional correspondiente."
            />
          </div>
        </div>
      </motion.section>

      {/* CÓMO SOLICITAR UN SERVICIO */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          ¿Cómo solicitar un servicio?
        </h2>
        <ol className="space-y-2 list-decimal pl-5 text-neutral-700">
          <li>
            Indicanos si la consulta es por{" "}
            <strong>internación domiciliaria</strong> o{" "}
            <strong>Policonsultorio</strong>.
          </li>
          <li>
            Contanos brevemente la situación clínica y la zona de residencia.
          </li>
          <li>
            Te proponemos alternativas de turnos o modalidades de atención y
            coordinamos el circuito.
          </li>
        </ol>
        <p className="mt-3 text-sm text-neutral-600">
          Cuanta más información inicial tengamos, más fácil es definir el
          circuito adecuado para cada caso.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/contacto"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Completar formulario
          </Link>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section {...sectionInView} className="space-y-3">
        <h2 className="mb-2 text-2xl font-semibold text-blue-700">
          Preguntas frecuentes sobre los servicios
        </h2>

        <FAQ
          q="¿Atienden con obra social o prepaga?"
          a="Trabajamos con pacientes particulares y coordinamos con coberturas médicas según cada caso. En cada consulta inicial revisamos la cobertura y los circuitos administrativos necesarios."
        />
        <FAQ
          q="¿Qué zonas cubre la internación domiciliaria?"
          a="CABA y Gran Buenos Aires. Según la complejidad del caso y la dirección, confirmamos la disponibilidad del equipo en la zona."
        />
        <FAQ
          q="¿La internación domiciliaria reemplaza al sanatorio?"
          a="No en todos los casos. Es una alternativa cuando la condición clínica permite continuar el tratamiento en el hogar con cuidados adecuados y supervisión profesional."
        />
        <FAQ
          q="¿Cuánto demora en coordinarse un turno?"
          a="Buscamos ofrecer turnos rápidos. En consultorios, suele ser dentro de los próximos días hábiles; en domicilio, depende de la disponibilidad del equipo y la complejidad del caso."
        />
      </motion.section>

      {/* CTA FINAL */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 text-center shadow-sm sm:p-8"
      >
        <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">
          ¿No sabés qué servicio es el indicado?
        </h2>
        <p className="mx-auto mb-5 max-w-2xl text-neutral-700">
          Podés contarnos la situación de la persona, la zona y el tipo de
          acompañamiento que necesitan. Te ayudamos a definir si corresponde
          internación domiciliaria, atención en consultorios o una combinación
          de ambas.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contacto"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Hacer una consulta
          </Link>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </motion.section>
    </section>
  );
}

/* ---- helpers ---- */

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
    <details className="group rounded-xl border bg-white p-4 shadow-sm transition-colors duration-300 open:bg-blue-50 [&_summary::-webkit-details-marker]:hidden">
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
      <div className="mt-3 border-t pt-3 text-sm font-medium text-neutral-800">
        {a}
      </div>
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
      className="group relative block w-full overflow-hidden rounded-2xl border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
      aria-label={title}
    >
      <div className="relative w-full">
        <div className="aspect-[3/4] w-full sm:aspect-[3/4]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] group-active:scale-[1.02]"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/70 group-hover:via-black/40"
          aria-hidden
        />
        <div className="absolute inset-0 flex items-end p-5 sm:p-8">
          <div className="text-white">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
            <p className="mt-1 max-w-3xl text-sm text-white/90 sm:mt-2 sm:text-base">
              {body}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/95">
              Ingresar
              <span
                aria-hidden
                className="inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 ring-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg group-active:translate-y-0"
        aria-hidden
      />
    </Link>
  );
}

function ComparisonRow({
  situation,
  home,
  clinic,
}: {
  situation: string;
  home: string;
  clinic: string;
}) {
  return (
    <div className="grid gap-0 border-t text-sm sm:grid-cols-3">
      <div className="border-b px-4 py-3 text-neutral-800 sm:border-b-0 sm:border-r">
        {situation}
      </div>
      <div className="border-b px-4 py-3 text-neutral-700 sm:border-b-0 sm:border-r">
        {home}
      </div>
      <div className="px-4 py-3 text-neutral-700">{clinic}</div>
    </div>
  );
}
