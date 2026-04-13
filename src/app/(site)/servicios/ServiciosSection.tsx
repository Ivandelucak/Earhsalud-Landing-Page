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
      <motion.header {...heroAnim} className="space-y-3">
        <p className="text-xs font-semibold tracking-wide text-earh-blue-600">
          SERVICIOS DE EARH SALUD
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Internación domiciliaria, asistencia domiciliaria y consultorios
        </h1>
        <p className="max-w-3xl text-neutral-700">
          Earh Salud organiza su atención a través de tres pilares:{" "}
          <strong>Internación Domiciliaria</strong>,{" "}
          <strong>Asistencia Domiciliaria</strong> y{" "}
          <strong>Consultorios Médicos Uruguay</strong>. En esta sección podés
          ver qué resuelve cada modalidad y cuál puede adaptarse mejor a la
          necesidad del paciente y su familia.
        </p>
      </motion.header>

      <motion.section
        {...sectionInView}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        <BannerCard
          href="/internacion-domiciliaria"
          title="Internación domiciliaria"
          body="Atención integral en el hogar para pacientes que necesitan seguimiento sostenido, coordinación profesional y un plan de cuidados más complejo."
          imageSrc="/imagenes/home-hero-alt.jpeg"
        />

        <BannerCard
          href="/asistencia-domiciliaria"
          title="Asistencia domiciliaria"
          body="Prestaciones médicas y asistenciales en domicilio para resolver necesidades puntuales con una modalidad flexible y personalizada."
          imageSrc="/imagenes/profesional-explicando-papel-hero-asistencia.jpeg"
        />

        <BannerCard
          href="/consultorios-medicos-uruguay"
          title="Consultorios Médicos Uruguay"
          body="Atención médica ambulatoria en Microcentro, con una nueva propuesta de consultorios y especialidades."
          imageSrc="/imagenes/cmu-sala-espera.jpeg"
          badge="Próximamente"
        />
      </motion.section>

      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-earh-blue-900">
          ¿Qué incluye cada servicio en la práctica?
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <ServiceInfoCard
            title="Internación domiciliaria"
            description="Pensada para pacientes que necesitan una atención más integral y sostenida en su hogar, con mayor complejidad asistencial y coordinación continua."
            bullets={[
              "Servicios médicos, de enfermería y terapéuticos en el domicilio.",
              "Plan integral de cuidados según la complejidad del caso.",
              "Participación de la familia o cuidadores y coordinación administrativa permanente.",
              "Alternativa a internaciones prolongadas cuando la condición clínica lo permite.",
            ]}
            href="/internacion-domiciliaria"
            cta="Ver más sobre internación domiciliaria"
          />

          <ServiceInfoCard
            title="Asistencia domiciliaria"
            description="Orientada a prestaciones específicas y apoyo cotidiano en el hogar, sin llegar a la complejidad de una internación domiciliaria."
            bullets={[
              "Especialidades médicas, enfermería, kinesiología, acompañantes terapéuticos y cuidadores.",
              "Apoyo en higiene, alimentación, movilización y acompañamiento según necesidad.",
              "Prestaciones puntuales en domicilio con coordinación flexible.",
              "Respuesta profesional adaptada al paciente y su entorno.",
            ]}
            href="/asistencia-domiciliaria"
            cta="Ver más sobre asistencia domiciliaria"
          />

          <ServiceInfoCard
            title="Consultorios Médicos Uruguay"
            description="Espacio de atención ambulatoria en Microcentro, pensado para consultas, seguimiento y especialidades médicas."
            bullets={[
              "Atención clínica y de especialidades seleccionadas.",
              "Ubicación estratégica en Uruguay 266, 1º E, CABA.",
              "Nueva propuesta de atención en consultorios.",
              "Actualmente en etapa de lanzamiento.",
            ]}
            href="/consultorios-medicos-uruguay"
            cta="Ver más sobre consultorios"
            upcoming
          />
        </div>
      </motion.section>

      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-earh-cream-50 p-6 sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-earh-blue-900">
          ¿Qué servicio es más adecuado para cada caso?
        </h2>

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
          <div className="hidden bg-earh-blue-50/80 text-xs font-semibold text-earh-blue-900 lg:grid lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
            <div className="border-r px-4 py-3 uppercase tracking-wide">
              Situación
            </div>
            <div className="border-r px-4 py-3 uppercase tracking-wide">
              Internación domiciliaria
            </div>
            <div className="border-r px-4 py-3 uppercase tracking-wide">
              Asistencia domiciliaria
            </div>
            <div className="px-4 py-3 uppercase tracking-wide">
              Consultorios Médicos Uruguay
            </div>
          </div>

          <div className="divide-y text-sm text-neutral-700">
            <ComparisonRow
              situation="Paciente que necesita una atención más integral y sostenida en su hogar."
              home="Es la modalidad más adecuada cuando el caso requiere un plan de cuidados más complejo."
              assistance="No suele ser suficiente si se necesita un abordaje continuo e integral."
              clinic="Puede complementar con controles puntuales si el traslado es posible."
            />

            <ComparisonRow
              situation="Necesidad puntual de una consulta, enfermería, kinesiología o apoyo en domicilio."
              home="No siempre es la primera opción si no hace falta una estructura integral."
              assistance="Es la modalidad indicada para prestaciones específicas y apoyo cotidiano."
              clinic="Puede ser opción si el paciente puede trasladarse y la atención es ambulatoria."
            />

            <ComparisonRow
              situation="Consulta clínica o por especialidad sin requerir atención en el hogar."
              home="No suele ser la primera opción."
              assistance="No siempre corresponde si la necesidad se resuelve en consultorio."
              clinic="Es la opción natural para consultas ambulatorias y seguimiento médico."
            />

            <ComparisonRow
              situation="Familia que necesita orientación para definir qué modalidad conviene."
              home="Puede ser adecuada si hay necesidad de cuidados sostenidos."
              assistance="Puede ser adecuada si se trata de una necesidad puntual o apoyo cotidiano."
              clinic="Puede complementar con controles médicos o evaluación presencial."
            />
          </div>
        </div>

        <p className="mt-3 text-sm text-neutral-700">
          En algunos casos combinamos modalidades: por ejemplo, controles en
          consultorio, prestaciones puntuales en domicilio o un esquema más
          integral de internación domiciliaria según la evolución del paciente.
        </p>
      </motion.section>

      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/95 p-6 shadow-sm sm:p-8"
      >
        <p className="text-xs font-semibold tracking-wide text-earh-blue-600">
          PASOS PARA EMPEZAR
        </p>
        <h2 className="mb-4 mt-1 text-2xl font-semibold text-earh-blue-900">
          ¿Cómo solicitar un servicio?
        </h2>

        <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-earh-blue-50 text-xs font-semibold text-earh-blue-700 ring-1 ring-earh-blue-100">
                  1
                </div>
                <div className="space-y-1 text-sm text-neutral-700">
                  <p className="font-semibold text-earh-blue-900">
                    Contanos qué tipo de necesidad tienen
                  </p>
                  <p>
                    Podés indicarnos si se trata de{" "}
                    <strong>internación domiciliaria</strong>,{" "}
                    <strong>asistencia domiciliaria</strong> o{" "}
                    <strong>consultorios médicos</strong>. Si no lo tenés claro,
                    también te orientamos.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-earh-blue-50 text-xs font-semibold text-earh-blue-700 ring-1 ring-earh-blue-100">
                  2
                </div>
                <div className="space-y-1 text-sm text-neutral-700">
                  <p className="font-semibold text-earh-blue-900">
                    Describí la situación del paciente
                  </p>
                  <p>
                    Comentanos brevemente la <strong>situación clínica</strong>,
                    el <strong>tipo de ayuda</strong> que necesitan y la{" "}
                    <strong>zona de residencia</strong>.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-earh-blue-50 text-xs font-semibold text-earh-blue-700 ring-1 ring-earh-blue-100">
                  3
                </div>
                <div className="space-y-1 text-sm text-neutral-700">
                  <p className="font-semibold text-earh-blue-900">
                    Coordinamos la modalidad más adecuada
                  </p>
                  <p>
                    Te proponemos el circuito más conveniente: atención en el
                    hogar, consultorio o una combinación de ambas modalidades,
                    según el caso.
                  </p>
                </div>
              </li>
            </ol>

            <p className="mt-3 text-xs text-neutral-600 sm:text-sm">
              Cuanta más información inicial tengamos, más fácil es definir un
              circuito claro y posible para la familia.
            </p>
          </div>

          <div className="rounded-2xl border border-earh-blue-50 bg-earh-cream-50/70 p-4 shadow-sm sm:p-5">
            <p className="text-sm font-semibold text-earh-blue-900">
              Podés empezar ahora mismo
            </p>
            <p className="mt-1 text-xs text-neutral-700 sm:text-sm">
              En un primer contacto no hace falta tener todos los datos
              clínicos: con una descripción general ya podemos orientarte.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-card transition-colors duration-200 hover:bg-blue-700 sm:flex-none"
              >
                Completar formulario
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-earh-green-600/50 bg-white px-4 py-2 text-sm font-medium text-earh-blue-900 transition-colors duration-200 hover:bg-earh-green-100 sm:flex-none"
              >
                <span className="inline-flex h-4 w-4 items-center justify-center">
                  <svg
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    className="h-4 w-4 fill-earh-green-600"
                  >
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.253.62 4.366 1.8 6.22L4 29l7.013-1.786A12.02 12.02 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.96 9.96 0 0 1-4.992-1.35l-.357-.21-4.154 1.06 1.11-4.05-.23-.373A9.94 9.94 0 0 1 6 15C6 9.486 10.486 5 16 5zm-3.07 4.5c-.256 0-.67.097-.985.485-.316.389-1.294 1.264-1.294 3.084 0 1.82 1.326 3.58 1.511 3.826.186.246 2.54 4.06 6.108 5.528 3.02 1.238 3.64.991 4.296.93.656-.062 2.12-.867 2.417-1.705.297-.838.297-1.555.211-1.705-.086-.149-.316-.238-.66-.416-.344-.178-2.03-1.003-2.344-1.118-.313-.116-.542-.178-.772.178-.23.356-.888 1.118-1.089 1.347-.201.23-.401.259-.745.081-.344-.178-1.45-.534-2.763-1.702-1.021-.91-1.71-2.034-1.911-2.389-.201-.356-.021-.548.152-.726.156-.155.344-.402.516-.604.172-.202.23-.345.344-.575.115-.23.058-.431-.029-.604-.086-.173-.758-1.86-1.073-2.545-.282-.613-.573-.63-.829-.63z" />
                  </svg>
                </span>
                Escribir por WhatsApp
              </a>
            </div>

            <p className="mt-3 text-xs text-neutral-500">
              Suelen responder dentro del mismo día hábil, según la demanda del
              momento.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section {...sectionInView} className="space-y-3">
        <h2 className="mb-2 text-2xl font-semibold text-earh-blue-900">
          Preguntas frecuentes sobre los servicios
        </h2>

        <FAQ
          q="¿Atienden con obra social o prepaga?"
          a="Trabajamos con pacientes particulares y coordinamos con coberturas médicas según cada caso. En cada consulta inicial revisamos la cobertura y los circuitos administrativos necesarios."
        />
        <FAQ
          q="¿Qué diferencia hay entre internación domiciliaria y asistencia domiciliaria?"
          a="La internación domiciliaria implica una atención más integral, continua y de mayor complejidad en el hogar. La asistencia domiciliaria, en cambio, se orienta a prestaciones específicas y apoyo cotidiano según la necesidad del paciente."
        />
        <FAQ
          q="¿Qué zonas cubren los servicios domiciliarios?"
          a="Trabajamos en CABA y Gran Buenos Aires. Según la complejidad del caso, la dirección y el tipo de prestación, confirmamos la disponibilidad del equipo."
        />
        <FAQ
          q="¿Consultorios Médicos Uruguay ya está disponible?"
          a="Actualmente se encuentra en etapa de lanzamiento. Muy pronto habrá más información sobre especialidades, profesionales y atención en consultorio."
        />
      </motion.section>

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
          internación domiciliaria, asistencia domiciliaria, atención en
          consultorios o una combinación de modalidades.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contacto"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-card transition-colors duration-200 hover:bg-blue-700"
          >
            Hacer una consulta
          </Link>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-earh-blue-100 bg-green-500 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-earh-blue-200 hover:bg-green-600"
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
        className="mt-1 h-4 w-4 shrink-0 text-earh-blue-600"
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

function BannerCard({
  href,
  title,
  body,
  imageSrc,
  badge,
}: {
  href: string;
  title: string;
  body: string;
  imageSrc: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earh-blue-600/40 focus-visible:ring-offset-2"
      aria-label={title}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.1,
        }}
      >
        <div className="relative rounded-2xl bg-gradient-to-br from-earh-blue-50 via-white to-earh-cream-50 p-[1px] shadow-sm transition-shadow duration-300 group-hover:shadow-card">
          <motion.article
            whileHover={{ y: -6, scale: 1.01, rotate: -0.4 }}
            whileTap={{ scale: 0.99, y: -2 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative h-full overflow-hidden rounded-2xl bg-black"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={imageSrc}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08] group-active:scale-[1.03]"
              />
            </div>

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent transition-opacity duration-300 group-hover:from-black/80 group-hover:via-black/45"
              aria-hidden
            />

            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium text-earh-blue-900 shadow-sm sm:left-5 sm:top-5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {badge ?? "Ver detalles del servicio"}
            </div>

            <div className="absolute inset-0 flex items-end p-5 sm:p-7">
              <div className="text-white">
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {title}
                </h2>
                <p className="mt-1 max-w-3xl text-sm text-white/90 sm:mt-2 sm:text-base">
                  {body}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm sm:mt-4 sm:text-sm">
                  Ingresar al detalle
                  <span
                    aria-hidden
                    className="inline-block translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 scale-95 rounded-3xl bg-gradient-to-r from-emerald-400/12 via-earh-blue-400/10 to-sky-500/12 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        />
      </motion.div>
    </Link>
  );
}

function ServiceInfoCard({
  title,
  description,
  bullets,
  href,
  cta,
  upcoming = false,
}: {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
  upcoming?: boolean;
}) {
  return (
    <div className="rounded-xl bg-earh-cream-50/80 p-5 sm:p-6">
      {upcoming && (
        <span className="mb-3 inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
          Próximamente
        </span>
      )}

      <h3 className="text-lg font-semibold text-earh-blue-900">{title}</h3>
      <p className="mt-1 text-sm text-neutral-700">{description}</p>

      <ul className="mt-3 space-y-2 text-neutral-700">
        {bullets.map((item) => (
          <Bullet key={item}>{item}</Bullet>
        ))}
      </ul>

      <Link
        href={href}
        className="mt-4 inline-flex items-center text-sm font-medium text-earh-blue-700 underline-offset-4 hover:underline"
      >
        {cta}
        <span aria-hidden className="ml-1">
          →
        </span>
      </Link>
    </div>
  );
}

function ComparisonRow({
  situation,
  home,
  assistance,
  clinic,
}: {
  situation: string;
  home: string;
  assistance: string;
  clinic: string;
}) {
  return (
    <div className="grid gap-0 bg-white text-sm lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
      <div className="border-b px-4 py-3 text-neutral-800 lg:border-b-0 lg:border-r">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-earh-blue-700 lg:hidden">
          Situación
        </p>
        <p>{situation}</p>
      </div>

      <div className="border-b px-4 py-3 text-neutral-700 lg:border-b-0 lg:border-r">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-earh-blue-700 lg:hidden">
          Internación domiciliaria
        </p>
        <p>{home}</p>
      </div>

      <div className="border-b px-4 py-3 text-neutral-700 lg:border-b-0 lg:border-r">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-earh-blue-700 lg:hidden">
          Asistencia domiciliaria
        </p>
        <p>{assistance}</p>
      </div>

      <div className="px-4 py-3 text-neutral-700">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-earh-blue-700 lg:hidden">
          Consultorios Médicos Uruguay
        </p>
        <p>{clinic}</p>
      </div>
    </div>
  );
}
