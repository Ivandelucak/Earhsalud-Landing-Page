// FILE: src/components/home/HomePage.tsx
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

const CONTACT = {
  tel: "+54 11 4743-2525",
  telHref: "tel:+541147432525",
  whatsapp: "+54 11 3003-1247",
  whatsappHref:
    "https://wa.me/541130031247?text=Hola%20Earh%20Salud%2C%20quisiera%20hacer%20una%20consulta",
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
} as const;

const STATS = [
  {
    value: 25,
    suffix: "+",
    label: "familias acompañadas en internación domiciliaria",
  },
  {
    value: 30,
    suffix: "+",
    label: "profesionales activos en nuestra red de cuidados",
  },
  {
    value: 15,
    suffix: "+",
    label: "años de experiencia combinada del equipo",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Gracias al equipo de cuidadores pudimos acompañar a mi papá con tranquilidad en su casa. La comunicación fue clara desde el inicio.",
    name: "María, hija de paciente",
  },
  {
    quote:
      "La coordinación fue rápida y siempre hubo alguien disponible para responder dudas. Vimos una mejora en el ánimo de nuestro familiar al estar en su entorno.",
    name: "Jorge, familiar acompañante",
  },
  {
    quote:
      "Nos ayudaron a organizar los cuidados en casa sin perder el vínculo con los médicos tratantes. Sentimos que hubo un plan y no decisiones aisladas.",
    name: "Luciana, esposa de paciente",
  },
];

export default function HomePage() {
  const router = useRouter();
  return (
    <section className="space-y-14 sm:space-y-20">
      {/* HERO */}
      <motion.header
        {...fadeUp}
        className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-earh-blue-50 via-white to-earh-cream-50"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-earh-blue-100 bg-white/90 px-3 py-1 text-xs font-medium text-earh-blue-900 shadow-sm">
              <Image
                src="/imagenes/logo-earh-iso.png"
                alt="Earh Salud"
                width={24}
                height={24}
              />
              <span>Earh Salud · Internación domiciliaria</span>
            </div>

            <p className="text-sm font-semibold tracking-wide text-earh-blue-600">
              INTERNACIÓN DOMICILIARIA EN CABA Y GBA
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              <span className="text-earh-blue-950">
                Internación domiciliaria con enfoque humano y coordinado
              </span>
            </h1>

            <p className="max-w-xl text-base text-neutral-700 sm:text-lg">
              Earh Salud SRL está compuesta por un grupo interdisciplinario de
              profesionales con alta experiencia en salud. Acompañamos a
              pacientes y familias para continuar los cuidados en el hogar, con
              seguimiento cercano y coordinación integral.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => router.push("/internacion-domiciliaria")}
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-card transition duration-200 hover:bg-blue-700 hover:shadow-cardHover active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto"
              >
                Internación domiciliaria
              </button>

              <button
                type="button"
                onClick={() => router.push("/consultorios-medicos-uruguay")}
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-earh-blue-200 bg-white/95 px-5 py-2.5 text-sm font-medium text-earh-blue-900 shadow-sm transition duration-200 hover:border-earh-blue-300 hover:bg-earh-blue-50 hover:shadow-card active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earh-blue-400 focus-visible:ring-offset-2 sm:w-auto"
              >
                Consultorios Médicos Uruguay
              </button>

              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-emerald-600/40 bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-emerald-700 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:w-auto"
              >
                <span className="inline-flex h-4 w-4 items-center justify-center">
                  <svg
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.253.62 4.366 1.8 6.22L4 29l7.013-1.786A12.02 12.02 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.96 9.96 0 0 1-4.992-1.35l-.357-.21-4.154 1.06 1.11-4.05-.23-.373A9.94 9.94 0 0 1 6 15C6 9.486 10.486 5 16 5zm-3.07 4.5c-.256 0-.67.097-.985.485-.316.389-1.294 1.264-1.294 3.084 0 1.82 1.326 3.58 1.511 3.826.186.246 2.54 4.06 6.108 5.528 3.02 1.238 3.64.991 4.296.93.656-.062 2.12-.867 2.417-1.705.297-.838.297-1.555.211-1.705-.086-.149-.316-.238-.66-.416-.344-.178-2.03-1.003-2.344-1.118-.313-.116-.542-.178-.772.178-.23.356-.888 1.118-1.089 1.347-.201.23-.401.259-.745.081-.344-.178-1.45-.534-2.763-1.702-1.021-.91-1.71-2.034-1.911-2.389-.201-.356-.021-.548.152-.726.156-.155.344-.402.516-.604.172-.202.23-.345.344-.575.115-.23.058-.431-.029-.604-.086-.173-.758-1.86-1.073-2.545-.282-.613-.573-.63-.829-.63z" />
                  </svg>
                </span>
                Escribir por WhatsApp
              </a>

              <a
                href={CONTACT.telHref}
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-blue-600/40 bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-700 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:w-auto"
              >
                Llamar
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full"
          >
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border bg-neutral-100 shadow-sm sm:aspect-[4/3]">
              <Image
                src="/imagenes/home-hero.jpeg"
                alt="Profesionales de salud acompañando a una persona mayor en su hogar"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-4 left-4 hidden overflow-hidden rounded-2xl border border-white/70 bg-white/95 shadow-md sm:flex">
              <div className="relative h-20 w-24">
                <Image
                  src="/imagenes/home-detail-hands.jpeg"
                  alt="Detalle de acompañamiento en el hogar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center px-3 text-xs text-neutral-800">
                Cuidadores y equipo de salud coordinando el día a día en casa.
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* QUIÉNES SOMOS + STATS */}
      <motion.section
        {...fadeUp}
        className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)]"
      >
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-wide text-earh-blue-600">
            EQUIPO INTERDISCIPLINARIO
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-earh-blue-900 sm:text-4xl">
            Quiénes somos
          </h2>
          <p className="text-sm leading-7 text-neutral-700 sm:text-base">
            Earh Salud SRL está compuesta por un grupo interdisciplinario de
            profesionales con experiencia en instituciones públicas y privadas
            de referencia. El objetivo es acompañar a cada paciente con atención
            responsable, coordinada y cercana.
          </p>
          <p className="text-sm leading-7 text-neutral-700 sm:text-base">
            Contamos con médicos de diversas especialidades, kinesiólogos,
            fonoaudiólogos, enfermeros, cuidadores y un equipo administrativo
            que entiende la complejidad de las distintas patologías. Buscamos
            reducir tiempos de espera y brindar una prestación de calidad para
            el paciente y su familia.
          </p>

          <div className="mt-4 grid gap-4 rounded-2xl bg-white/80 p-5 sm:grid-cols-2 border border-earh-blue-100 shadow-sm">
            {/* ITEM 1 */}
            <div className="flex gap-3">
              <svg
                className="h-6 w-6 text-earh-blue-700 flex-shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 21C12 21 4 15 4 9a4 4 0 0 1 8 0 4 4 0 0 1 8 0c0 6-8 12-8 12z" />
              </svg>

              <div className="space-y-1.5">
                <p className="font-semibold text-earh-blue-900">
                  Acompañamiento a la familia
                </p>
                <p className="text-neutral-800 leading-relaxed text-sm">
                  Explicamos cada paso del plan de cuidados para que la familia
                  sepa qué esperar y a quién contactar.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex gap-3">
              <svg
                className="h-6 w-6 text-earh-blue-700 flex-shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16v6H4z" />
                <path d="M4 14h16v6H4z" />
                <path d="M12 4v16" />
              </svg>

              <div className="space-y-1.5">
                <p className="font-semibold text-earh-blue-900">
                  Coordinación con médicos tratantes
                </p>
                <p className="text-neutral-800 leading-relaxed text-sm">
                  Articulamos la internación domiciliaria con los profesionales
                  que ya siguen al paciente.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 rounded-2xl border bg-white/80 p-5 shadow-sm sm:grid-cols-3 sm:p-6">
            {STATS.map((stat) => (
              <StatPill
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/imagenes/home-family-2.jpeg"
                alt="Profesional de salud acompañando a una persona mayor en su hogar"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border bg-white p-6 shadow-sm sm:p-7">
            <h3 className="text-lg font-semibold text-earh-blue-700">
              Misión, visión y valores
            </h3>
            <div className="space-y-3 text-sm text-neutral-700">
              <div>
                <p className="font-semibold text-black">Misión</p>
                <p>
                  Mejorar la salud y el bienestar de las personas a través de
                  soluciones de cuidado accesibles, coordinadas y humanas.
                </p>
              </div>
              <div>
                <p className="font-semibold text-black">Visión</p>
                <p>
                  Ser referencia en internación domiciliaria y servicios
                  vinculados, integrando atención en el hogar y en consultorios
                  sin perder el trato humano.
                </p>
              </div>
              <div>
                <p className="font-semibold text-black">Valores</p>
                <ul className="space-y-1 list-disc pl-4">
                  <li>Integridad</li>
                  <li>Compromiso</li>
                  <li>Innovación responsable</li>
                  <li>Accesibilidad y cercanía</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICIOS PRINCIPALES */}
      <motion.section
        {...fadeUp}
        className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2"
      >
        <ServiceCard
          title="Internación domiciliaria"
          body="Coordinamos cuidados en el hogar para pacientes adultos y mayores que requieren acompañamiento sostenido, asistencia en actividades diarias y contención a la familia."
          href="/internacion-domiciliaria"
          bullets={[
            "Cuidadores capacitados y equipo interdisciplinario",
            "Plan de cuidados ajustado a cada caso",
            "Seguimiento y comunicación con la familia",
          ]}
        />
        <ServiceCard
          title="Policonsultorio Médico"
          body={
            <>
              <strong>Consultorios Médicos Uruguay</strong> ofrece atención
              primaria, consultas y seguimiento con profesionales de amplia
              trayectoria en instituciones de Buenos Aires.
            </>
          }
          href="/consultorios-medicos-uruguay"
          bullets={[
            "Consultas clínicas y especialidades",
            "Ubicación estratégica en Microcentro",
            "Turnos coordinados sin grandes demoras",
          ]}
        />
      </motion.section>

      {/* DÓNDE / CÓMO TRABAJAMOS */}
      <motion.section
        {...fadeUp}
        className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2"
      >
        <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-7">
          <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900">
            Dónde trabajamos
          </h2>
          <p className="mb-3 text-neutral-700">
            El servicio de internación domiciliaria está disponible en:
          </p>
          <ul className="space-y-1 list-disc pl-5 text-neutral-700">
            <li>Ciudad Autónoma de Buenos Aires</li>
            <li>Gran Buenos Aires, con coordinación previa según cada caso</li>
          </ul>
          <p className="mt-3 text-sm text-neutral-700">
            En cada consulta evaluamos la ubicación y la complejidad clínica
            para confirmar disponibilidad del equipo en la zona.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-7">
          <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900">
            Cómo trabajamos
          </h2>
          <ol className="space-y-2 list-decimal pl-5 text-neutral-700">
            <li>
              Recibimos la consulta y entendemos la situación clínica y
              familiar.
            </li>
            <li>
              Evaluamos la complejidad del caso y definimos el plan de cuidados.
            </li>
            <li>Coordinamos horarios, frecuencia y equipo profesional.</li>
            <li>
              Mantenemos un seguimiento activo y comunicación constante con la
              familia.
            </li>
          </ol>
        </div>
      </motion.section>

      {/* POR QUÉ ELEGIR EARH SALUD */}
      <motion.section
        {...fadeUp}
        className="mx-auto max-w-6xl rounded-2xl border bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-earh-blue-900">
            Por qué elegir Earh Salud
          </h2>
          <div className="hidden items-center gap-2 rounded-full border border-earh-blue-100 bg-white/90 px-3 py-1 text-xs font-medium text-earh-blue-900 sm:inline-flex">
            <div className="relative h-6 w-6">
              <Image
                src="/imagenes/logo-earh-salud.png"
                alt="Earh Salud"
                fill
                className="object-contain"
              />
            </div>
            <span>Cuidado coordinado en el hogar y consultorios</span>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <BenefitItem title="Experiencia interdisciplinaria">
            Profesionales médicos, enfermeros, kinesiólogos y cuidadores con
            trayectoria en instituciones de referencia.
          </BenefitItem>
          <BenefitItem title="Enfoque humano y cercano">
            Priorizamos la contención del paciente y su familia, con
            comunicación clara y permanente.
          </BenefitItem>
          <BenefitItem title="Coordinación integral">
            Articulamos cuidados en domicilio, consultorios y otros servicios de
            salud según la necesidad de cada caso.
          </BenefitItem>
          <BenefitItem title="Optimización de recursos">
            Buscamos reducir reinternaciones y traslados innecesarios, sin
            perder la calidad de la atención.
          </BenefitItem>
        </div>
      </motion.section>

      {/* OBRAS SOCIALES (ejemplo) */}
      <motion.section {...fadeUp} className="mx-auto max-w-6xl space-y-6 py-10">
        <h2 className="text-center text-2xl font-bold text-earh-blue-900">
          Obras sociales y prepagas (ejemplo)
        </h2>
        <div className="relative overflow-hidden rounded-2xl border bg-white/80 p-4">
          <div className="flex w-max animate-marquee">
            <LogosStrip ariaHidden={false} />
            <LogosStrip ariaHidden />
          </div>
        </div>
        <p className="text-center text-xs text-earh-gray-500">
          Los logos se muestran a modo de ejemplo visual. La cobertura real se
          confirma en cada caso.
        </p>
      </motion.section>

      {/* TESTIMONIOS */}
      <motion.section
        {...fadeUp}
        className="mx-auto max-w-6xl rounded-2xl border bg-earh-cream-50 p-6 shadow-sm sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-earh-blue-900">
          Lo que destacan las familias
        </h2>
        <TestimonialsCarousel />
      </motion.section>

      {/* FAQ */}
      <motion.section
        {...fadeUp}
        className="mx-auto max-w-6xl space-y-3 rounded-2xl border bg-white p-6 shadow-sm sm:p-8"
      >
        <h2 className="mb-1 text-2xl font-semibold text-earh-blue-900">
          Preguntas frecuentes
        </h2>
        <FAQItem
          q="¿Qué incluye la internación domiciliaria?"
          a="Incluye acompañamiento por cuidadores capacitados, coordinación con profesionales de salud, seguimiento de indicaciones médicas externas y comunicación con la familia."
        />
        <FAQItem
          q="¿Atienden con obra social o solo particular?"
          a="Trabajamos con pacientes particulares y con coberturas médicas. En cada consulta confirmamos alcances, autorizaciones y circuitos de derivación."
        />
        <FAQItem
          q="¿En qué zonas brindan servicio?"
          a="En CABA y Gran Buenos Aires, evaluando la disponibilidad del equipo según el domicilio del paciente."
        />
        <FAQItem
          q="¿Cómo inicio una consulta?"
          a="Podés comunicarte por WhatsApp, teléfono o completar el formulario en la sección Contacto. Respondemos en la menor cantidad de tiempo posible."
        />
      </motion.section>

      {/* CTA FINAL */}
      <motion.section
        {...fadeUp}
        className="mx-auto max-w-6xl rounded-2xl border bg-white p-6 text-center shadow-sm sm:p-8"
      >
        <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900 sm:text-3xl">
          ¿Necesitás coordinar cuidados en el hogar?
        </h2>
        <p className="mx-auto mb-5 max-w-2xl text-neutral-700">
          Contanos la situación y evaluamos juntos la mejor alternativa de
          internación domiciliaria o atención en consultorios. Nos enfocamos en
          que el plan sea claro, posible y sostenible para la familia.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contacto"
            className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-blue-700 hover:shadow-cardHover sm:w-auto"
          >
            Completar formulario
          </Link>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg border border-emerald-600/40 bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 sm:w-auto"
          >
            Escribir por WhatsApp
          </a>
        </div>
        <p className="mt-5 text-xs text-neutral-500">
          La información de este sitio es orientativa y no reemplaza la consulta
          con profesionales de la salud.
        </p>
      </motion.section>
    </section>
  );
}

/* AUXILIARES */

function ServiceCard({
  title,
  body,
  href,
  bullets,
}: {
  title: string;
  body: ReactNode;
  href: string;
  bullets: string[];
}) {
  return (
    <Link href={href} className="group block h-full cursor-pointer">
      <motion.article
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.97 }}
        className="flex h-full flex-col rounded-2xl border border-earh-blue-50 bg-cyan-50 p-6 shadow-sm transition-colors duration-200 ease-out hover:border-earh-blue-200 hover:bg-blue-200 hover:shadow-card active:bg-blue-400 sm:p-7"
      >
        <h2 className="mb-2 text-xl font-semibold text-earh-blue-900 sm:text-2xl">
          {title}
        </h2>
        <p className="mb-4 text-neutral-700">{body}</p>
        <ul className="mb-4 space-y-1 list-disc pl-5 text-sm text-neutral-700">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center text-sm font-medium text-earh-blue-700 transition-colors duration-200 group-hover:text-earh-blue-900">
          Más información
          <span
            aria-hidden
            className="ml-1 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </motion.article>
    </Link>
  );
}

function BenefitItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ translateY: -3 }}
      className="rounded-xl border bg-earh-cream-50 p-5"
    >
      <h3 className="mb-1 font-semibold text-earh-blue-900">{title}</h3>
      <p className="text-sm text-neutral-700">{children}</p>
    </motion.div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border bg-white p-4 shadow-sm transition-colors duration-300 open:bg-earh-cream-50 [&_summary::-webkit-details-marker]:hidden">
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

function LogosStrip({ ariaHidden }: { ariaHidden: boolean }) {
  const logos = [
    "/logos/osde.png",
    "/logos/swiss.png",
    "/logos/galeno.png",
    "/logos/medicus.png",
    "/logos/omint.png",
    "/logos/pami.png",
    "/logos/accord.png",
  ];

  return (
    <div className="flex items-center gap-10 pr-10">
      {logos.map((logo, i) => (
        <div
          key={ariaHidden ? `dup-${i}` : i}
          className="relative flex h-12 w-28 flex-shrink-0 items-center justify-center sm:h-16 sm:w-36"
          aria-hidden={ariaHidden}
        >
          <Image
            src={logo}
            alt={ariaHidden ? "" : "Logo de obra social"}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

function StatPill({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 1.7,
        ease: "easeOut",
      });
    }
  }, [isInView, value, motionValue]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ translateY: -3 }}
      className="flex flex-col gap-1 rounded-2xl border border-earh-blue-50 bg-earh-cream-50 px-5 py-4 text-sm shadow-sm"
    >
      <div className="text-lg font-semibold text-earh-blue-900 sm:text-xl">
        <motion.span>{rounded}</motion.span>
        {suffix && <span>{suffix}</span>}
      </div>
      <p className="text-xs text-neutral-700">{label}</p>
    </motion.div>
  );
}

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const current = TESTIMONIALS[index];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="sm:flex-1">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-earh-blue-100 bg-white/80 p-5 text-neutral-800 shadow-sm"
          >
            <p className="mb-3 text-sm italic sm:text-base">
              “{current.quote}”
            </p>
            <p className="text-xs font-semibold text-earh-blue-900 sm:text-sm">
              {current.name}
            </p>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-2 flex items-center justify-between gap-4 sm:mt-0 sm:flex-col sm:items-end">
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <span>
            {index + 1} / {total}
          </span>
        </div>
        <div className="flex gap-2">
          <motion.button
            type="button"
            onClick={handlePrev}
            whileTap={{ scale: 0.9 }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white text-sm font-medium text-earh-blue-900 shadow-sm"
          >
            ‹
          </motion.button>
          <motion.button
            type="button"
            onClick={handleNext}
            whileTap={{ scale: 0.9 }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white text-sm font-medium text-earh-blue-900 shadow-sm"
          >
            ›
          </motion.button>
        </div>
      </div>
    </div>
  );
}
