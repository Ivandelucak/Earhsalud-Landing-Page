// FILE: src/components/home/HomePage.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CONTACT = {
  tel: "+54 11 4743-2525",
  telHref: "tel:+541147432525",
  whatsapp: "+54 11 3003-1247",
  whatsappHref:
    "https://wa.me/541130031247?text=Hola%20Earh%20Salud%2C%20quisiera%20hacer%20una%20consulta",
};

// HERO: animación al montar
const heroAnim = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
} as const;

// Secciones: siempre visibles, sólo deslizan en scroll
const sectionInView = {
  initial: { opacity: 1, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
} as const;

export default function HomePage() {
  return (
    <section className="space-y-20">
      {/* HERO */}
      <motion.header
        {...heroAnim}
        className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white to-neutral-50"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-wide text-blue-700">
              INTERNACIÓN DOMICILIARIA EN CABA Y GBA
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Internación domiciliaria con enfoque humano y coordinado
            </h1>
            <p className="mt-4 max-w-xl text-base text-neutral-600 sm:text-lg">
              Earh Salud SRL está compuesta por un grupo interdisciplinario de
              profesionales con alta experiencia en salud. Acompañamos a
              pacientes y familias para continuar los cuidados en el hogar, con
              seguimiento cercano y coordinación integral.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/internacion-domiciliaria"
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
              >
                Ver internación domiciliaria
              </Link>
              <Link
                href="/cmu"
                className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50"
              >
                Ver Policonsultorio Uruguay 266
              </Link>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium hover:bg-neutral-50"
              >
                Escribir por WhatsApp
              </a>
            </div>

            <div className="mt-4 space-y-1 text-sm text-neutral-600">
              <p>
                Teléfono:{" "}
                <a href={CONTACT.telHref} className="font-medium">
                  {CONTACT.tel}
                </a>
              </p>
              <p>
                Cobertura: pacientes particulares y con coberturas médicas según
                cada caso.
              </p>
            </div>
          </div>

          {/* Imagen del hero: animación al montar, no por scroll */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-neutral-100"
          >
            <Image
              src="/about.jpg"
              alt="Profesionales de salud acompañando a un paciente en el hogar"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </motion.header>

      {/* QUIÉNES SOMOS */}
      <motion.section
        {...sectionInView}
        className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Quiénes somos
          </h2>
          <p className="leading-7 text-neutral-700">
            Earh Salud SRL está compuesta por un grupo interdisciplinario de
            profesionales con experiencia en instituciones públicas y privadas
            de referencia. El objetivo es acompañar a cada paciente con atención
            responsable, coordinada y cercana.
          </p>
          <p className="leading-7 text-neutral-700">
            Contamos con médicos de diversas especialidades, kinesiólogos,
            fonoaudiólogos, enfermeros, cuidadores y un equipo administrativo
            que entiende la complejidad de las distintas patologías. Buscamos
            reducir tiempos de espera y brindar una prestación de calidad para
            el paciente y su familia.
          </p>
        </div>

        <div className="space-y-5 rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-7">
          <h3 className="text-lg font-semibold text-blue-700">
            Misión, visión y valores
          </h3>
          <div className="space-y-3 text-sm text-neutral-700">
            <div>
              <p className="font-semibold">Misión</p>
              <p>
                Mejorar la salud y el bienestar de las personas a través de
                soluciones de cuidado accesibles, coordinadas y humanas.
              </p>
            </div>
            <div>
              <p className="font-semibold">Visión</p>
              <p>
                Ser referencia en internación domiciliaria y servicios
                vinculados, integrando atención en el hogar y en consultorios
                sin perder el trato humano.
              </p>
            </div>
            <div>
              <p className="font-semibold">Valores</p>
              <ul className="space-y-1 list-disc pl-4">
                <li>Integridad</li>
                <li>Compromiso</li>
                <li>Innovación responsable</li>
                <li>Accesibilidad y cercanía</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICIOS PRINCIPALES */}
      <motion.section
        {...sectionInView}
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
          title="Policonsultorio Uruguay 266"
          body="Consultorios Médicos Uruguay ofrece atención primaria, consultas y seguimiento con profesionales de amplia trayectoria en instituciones de Buenos Aires."
          href="/cmu"
          bullets={[
            "Consultas clínicas y especialidades",
            "Ubicación estratégica en Microcentro",
            "Turnos coordinados sin grandes demoras",
          ]}
        />
      </motion.section>

      {/* DÓNDE TRABAJAMOS / CÓMO TRABAJAMOS */}
      <motion.section
        {...sectionInView}
        className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2"
      >
        <div className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-7">
          <h2 className="mb-3 text-2xl font-semibold text-blue-700">
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

        <div className="rounded-2xl border bg-neutral-50 p-6 sm:p-7">
          <h2 className="mb-3 text-2xl font-semibold text-blue-700">
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

      {/* BENEFICIOS */}
      <motion.section
        {...sectionInView}
        className="mx-auto max-w-6xl rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          Por qué elegir Earh Salud
        </h2>
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

      {/* CARRUSEL OBRAS SOCIALES */}
      <motion.section
        {...sectionInView}
        className="mx-auto max-w-6xl space-y-6 py-10"
      >
        <h2 className="text-center text-2xl font-bold text-blue-700">
          Obras sociales y prepagas (ejemplo)
        </h2>
        <div className="relative overflow-hidden rounded-2xl border bg-white/80 p-4">
          <div className="flex w-max animate-marquee">
            <LogosStrip ariaHidden={false} />
            <LogosStrip ariaHidden />
          </div>
        </div>
        <p className="text-center text-xs text-neutral-500">
          Los logos se muestran a modo de ejemplo visual. La cobertura real se
          confirma en cada caso.
        </p>
      </motion.section>

      {/* TESTIMONIOS */}
      <motion.section
        {...sectionInView}
        className="mx-auto max-w-6xl rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          Lo que destacan las familias
        </h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-700">
            “Gracias al equipo de cuidadores pudimos acompañar a mi papá con
            tranquilidad en su casa. La comunicación fue clara desde el inicio.”
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-700">
            “La coordinación fue rápida y siempre hubo alguien disponible para
            responder dudas. Vimos una mejora en el ánimo de nuestro familiar al
            estar en su entorno.”
          </blockquote>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        {...sectionInView}
        className="mx-auto max-w-6xl space-y-3"
      >
        <h2 className="mb-1 text-2xl font-semibold text-blue-700">
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
        {...sectionInView}
        className="mx-auto max-w-6xl rounded-2xl border bg-white/90 p-6 text-center shadow-sm sm:p-8"
      >
        <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">
          ¿Necesitás coordinar cuidados en el hogar?
        </h2>
        <p className="mx-auto mb-5 max-w-2xl text-neutral-700">
          Contanos la situación y evaluamos juntos la mejor alternativa de
          internación domiciliaria o atención en consultorios.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contacto"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Ir a Contacto
          </Link>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50"
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

/* --------- helpers --------- */

function ServiceCard({
  title,
  body,
  href,
  bullets,
}: {
  title: string;
  body: string;
  href: string;
  bullets: string[];
}) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-7"
    >
      <h2 className="mb-2 text-xl font-semibold sm:text-2xl">{title}</h2>
      <p className="mb-4 text-neutral-700">{body}</p>
      <ul className="mb-4 space-y-1 list-disc pl-5 text-sm text-neutral-700">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link
        href={href}
        className="inline-flex items-center text-sm font-medium text-blue-700 underline-offset-4 hover:underline"
      >
        Más información
        <span aria-hidden className="ml-1">
          →
        </span>
      </Link>
    </motion.article>
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
    <div className="rounded-xl border bg-neutral-50 p-5">
      <h3 className="mb-1 font-semibold">{title}</h3>
      <p className="text-sm text-neutral-700">{children}</p>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
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
