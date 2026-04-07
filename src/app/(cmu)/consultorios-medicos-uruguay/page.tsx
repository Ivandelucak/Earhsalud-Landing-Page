// FILE: src/app/(cmu)/consultorios-medicos-uruguay/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import EspecialidadesGrid from "./EspecialidadesGrid";
import GalleryCmu from "./GalleryCmu";

export const metadata: Metadata = {
  title:
    "Consultorios Médicos Uruguay – Policonsultorio en Microcentro (Uruguay 266)",
  description:
    "Consultorios Médicos Uruguay es un policonsultorio en Microcentro (Uruguay 266, CABA) con atención clínica médica y especialidades. Turnos en pocos días y atención humana.",
  keywords: [
    "consultorios médicos uruguay 266",
    "policonsultorio microcentro",
    "clínica médica microcentro",
    "médicos en microcentro CABA",
    "turnos médicos rápidos microcentro",
    "consultorio uruguay 266 CABA",
  ],
};

const CONTACT = {
  tel: "4743-2525",
  telHref: "tel:+541147432525",
  wsp: "11 3003-1247",
  wspHref:
    "https://wa.me/541130031247?text=Hola%20CMU%2C%20quisiera%20solicitar%20un%20turno",
  mail: "consultoriosuruguay266@gmail.com",
  mailHref: "mailto:consultoriosuruguay266@gmail.com",
  addr: "Uruguay 266, 1º E, CABA",
  horarios: "Lunes a viernes 9–18 h · Sábados 9–13 h",
};

const jsonLdClinic = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Consultorios Médicos Uruguay",
  url: "https://www.tu-dominio.com/consultorios-medicos-uruguay",
  telephone: "+54 11 4743-2525",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Uruguay 266, 1º E",
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  medicalSpecialty: [
    "PrimaryCare",
    "Cardiovascular",
    "Orthopedic",
    "Surgical",
    "Infectious",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo saco un turno?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Podés escribir por WhatsApp para disponibilidad inmediata, llamar por teléfono o completar el formulario en la sección Contacto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atienden pacientes particulares y con cobertura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Indicá tu cobertura al solicitar el turno y te confirmamos alcances y requisitos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde están ubicados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Uruguay 266, 1º E, Microcentro (CABA). En la sección Ubicación vas a encontrar el mapa con cómo llegar.",
      },
    },
  ],
};

export default function PageCmu() {
  return (
    <section className="space-y-12">
      <Script
        id="cmu-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdClinic) }}
      />

      <Script
        id="cmu-faq-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:px-8">
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-earh-blue-100 bg-earh-blue-50/70 px-3 py-1 text-xs font-medium text-earh-blue-800">
              <span>Consultorios Médicos Uruguay</span>
              <span className="h-1 w-1 rounded-full bg-earh-blue-400" />
              <span>Uruguay 266 · Microcentro</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Turnos médicos en pocos días, en pleno Microcentro
            </h1>

            <p className="mx-auto max-w-2xl text-base text-neutral-600 sm:text-lg">
              Policonsultorio en Uruguay 266, CABA, con clínica médica y
              especialidades. Turnos coordinados de forma ágil y atención
              humana, con médicos que también ejercen en instituciones de
              referencia de Buenos Aires.
            </p>

            <ul className="mx-auto flex max-w-xl flex-col gap-1 text-sm text-neutral-700 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-earh-blue-600" />
                Turnos en pocos días, no en semanas
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-earh-blue-600" />
                Médicos con amplia trayectoria asistencial
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-earh-blue-600" />
                Ubicación estratégica en Microcentro
              </li>
            </ul>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
              <Link
                href="/contacto"
                className="rounded-lg bg-earh-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:bg-earh-blue-700 hover:shadow-cardHover active:translate-y-0"
              >
                Solicitar turno
              </Link>
              <a
                href={CONTACT.wspHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-earh-green-600 bg-earh-green-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 active:translate-y-0"
              >
                WhatsApp
              </a>
            </div>

            <p className="mx-auto mt-2 max-w-xl text-xs text-neutral-600 sm:text-sm">
              Teléfono{" "}
              <a href={CONTACT.telHref} className="font-semibold">
                {CONTACT.tel}
              </a>{" "}
              · Email{" "}
              <a href={CONTACT.mailHref} className="font-semibold">
                {CONTACT.mail}
              </a>
            </p>
          </div>

          <div className="relative h-52 overflow-hidden rounded-2xl border bg-neutral-100 shadow-card transition-transform duration-200 hover:-translate-y-1 hover:shadow-cardHover sm:h-64 lg:h-full">
            <Image
              src="/imagenes/cmu-hero.jpeg"
              alt="Espacio de consultorios médicos en Uruguay 266"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/0" />
            <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Uruguay 266, 1º E · CABA
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <InfoCard title="Dirección">
          <p className="font-medium">{CONTACT.addr}</p>
          <Link
            href="/ubicacion"
            className="text-sm text-earh-blue-700 underline-offset-2 hover:underline"
          >
            Cómo llegar
          </Link>
        </InfoCard>

        <InfoCard title="Horarios">
          <p className="font-medium">{CONTACT.horarios}</p>
          <p className="text-sm text-neutral-600">
            Atención para pacientes particulares y con cobertura.
          </p>
        </InfoCard>

        <InfoCard title="Turnos y contacto">
          <p>
            Teléfono:{" "}
            <a className="font-medium" href={CONTACT.telHref}>
              {CONTACT.tel}
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a
              className="font-medium"
              href={CONTACT.wspHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.wsp}
            </a>
          </p>
          <p>
            Email:{" "}
            <a className="font-medium" href={CONTACT.mailHref}>
              {CONTACT.mail}
            </a>
          </p>
        </InfoCard>
      </section>

      <section className="rounded-2xl border bg-white/90 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-cardHover sm:p-8">
        <h2 className="mb-4 text-2xl font-semibold text-earh-blue-700">
          Quiénes somos
        </h2>
        <div className="max-w-4xl space-y-4 leading-relaxed text-neutral-700">
          <p>
            Consultorios Médicos Uruguay surge como respuesta a una situación
            cada vez más frecuente: conseguir un turno clínico o con
            especialidad puede demorar semanas o meses. Nuestro objetivo es
            ofrecer una alternativa organizada, accesible y clara, con tiempos
            de espera razonables y comunicación cercana.
          </p>
          <p>
            Atendemos pacientes particulares y con coberturas médicas, en una
            ubicación estratégica de la Ciudad Autónoma de Buenos Aires. El
            consultorio está situado en Uruguay 266, a pocas cuadras de
            múltiples líneas de colectivo y subte, facilitando la llegada desde
            distintos puntos de CABA y GBA.
          </p>
          <p>
            El equipo profesional está integrado por médicos con amplia
            trayectoria asistencial, que hoy ejercen también en instituciones de
            referencia de Buenos Aires. Buscamos brindar una atención
            responsable y humana, explicando cada paso con criterio clínico y
            disponibilidad para el seguimiento cuando es necesario.
          </p>
        </div>
      </section>

      {/* NUEVO: Casos habituales */}
      <section className="rounded-2xl border bg-earh-cream-50 p-6 shadow-sm sm:p-8">
        <h2 className="mb-3 text-2xl font-semibold text-earh-blue-700">
          Casos habituales en los que nos consultan
        </h2>
        <p className="mb-5 max-w-3xl text-sm text-neutral-700">
          Muchos pacientes llegan recomendados o buscando una alternativa a las
          largas esperas para una consulta. Estos son algunos de los motivos
          frecuentes de consulta en Consultorios Médicos Uruguay.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <StoryCard
            title="Control clínico sin demoras"
            body="Personas adultas que necesitan ver a un clínico por controles de presión, colesterol, diabetes u otros controles de rutina y no pueden esperar semanas para un turno."
          />
          <StoryCard
            title="Dolor articular o lesiones"
            body="Pacientes que presentan dolor en rodillas, columna, hombros o secuelas de lesiones y requieren evaluación por ortopedia o cirugía general."
          />
          <StoryCard
            title="Infecciones y seguimiento"
            body="Consultas por cuadros infecciosos, controles posteriores o dudas sobre estudios y tratamientos indicados en guardias u otras instituciones."
          />
        </div>
      </section>

      {/* NUEVO: Enfoque y equipo */}
      <section className="rounded-2xl border bg-white/95 p-6 shadow-sm sm:p-8">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-earh-blue-700">
              Nuestro enfoque y equipo
            </h2>
            <p className="text-sm text-neutral-700">
              La premisa es sencilla: combinar accesibilidad en los turnos con
              una atención clínica seria y humana. Entendemos que cada consulta
              implica tiempo, organización y, muchas veces, preocupación; por
              eso priorizamos explicar con claridad qué vemos, qué proponemos y
              qué pasos siguen.
            </p>
            <p className="mt-3 text-sm text-neutral-700">
              El equipo está conformado por médicos con años de experiencia en
              instituciones de referencia de Buenos Aires, que hoy integran este
              policonsultorio para brindar una atención ordenada, con criterio
              clínico y disponibilidad para el seguimiento cuando corresponde.
            </p>
            <p className="mt-3 text-sm text-neutral-700">
              A medida que vayamos ampliando la cartilla, vas a encontrar el
              detalle de cada profesional y especialidad en la sección de
              profesionales, con su formación y experiencia.
            </p>
          </div>
          <div className="relative h-56 overflow-hidden rounded-2xl border bg-neutral-100 shadow-sm sm:h-64">
            <Image
              src="/imagenes/cmu-equipo.jpeg"
              alt="Profesionales de Consultorios Médicos Uruguay en consultorio"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <GalleryCmu />

      <section className="rounded-2xl border bg-white/95 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-cardHover sm:p-8">
        <h2 className="mb-3 text-2xl font-semibold text-earh-blue-700">
          Por qué elegir Consultorios Médicos Uruguay
        </h2>
        <DivItem
          title="Turnos en pocos días"
          items={[
            "Coordinamos turnos en plazos razonables, evitando esperas de semanas o meses.",
            "Te informamos opciones de día y horario según disponibilidad real.",
          ]}
        />
        <DivItem
          title="Profesionales con trayectoria"
          items={[
            "Médicos con años de experiencia en instituciones públicas y privadas de referencia.",
            "Criterio clínico sólido y comunicación clara durante la consulta.",
          ]}
        />
        <DivItem
          title="Ubicación y accesibilidad"
          items={[
            "Dirección: Uruguay 266, 1º E, Microcentro (CABA).",
            "Conectividad por múltiples líneas de colectivo y subte.",
          ]}
        />
        <DivItem
          title="Atención humana y clara"
          items={[
            "Información transparente antes de confirmar el turno.",
            "Seguimiento cuando es necesario, con pautas concretas.",
          ]}
        />
      </section>

      <section className="rounded-2xl border bg-neutral-50 p-6 shadow-sm sm:p-8">
        <h2 className="mb-4 text-2xl font-semibold text-earh-blue-700">
          Cómo trabajamos
        </h2>
        <ol className="grid gap-4 sm:grid-cols-3">
          <Step
            number="1"
            title="Solicitud del turno"
            body="Nos contactás por WhatsApp, teléfono o formulario y nos contás el motivo de la consulta."
          />
          <Step
            number="2"
            title="Coordinación ágil"
            body="Te proponemos fechas y horarios disponibles, informando requisitos según tu cobertura."
          />
          <Step
            number="3"
            title="Atención y seguimiento"
            body="Realizás la consulta en consultorio y, si hace falta, coordinamos controles o estudios complementarios."
          />
        </ol>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/contacto"
            className="rounded-lg bg-earh-blue-600 px-4 py-2 text-sm font-medium text-white shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:bg-earh-blue-700 hover:shadow-cardHover active:translate-y-0"
          >
            Solicitar turno
          </Link>
          <a
            href={CONTACT.wspHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-earh-green-600 bg-earh-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 active:translate-y-0"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <EspecialidadesGrid />

      <section className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="mb-3 text-2xl font-semibold text-earh-blue-700">
          Coberturas y modalidades de atención
        </h2>
        <p className="max-w-3xl text-neutral-700">
          Atendemos pacientes particulares y con diferentes coberturas médicas.
          Al momento de solicitar el turno, podés indicar tu cobertura para que
          te informemos condiciones, alcances y, en caso de corresponder,
          requisitos de autorización o copago. La idea es que llegues a la
          consulta con la información clara desde el inicio.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2">
          <li>Consultas particulares.</li>
          <li>Atención con coberturas médicas según convenio vigente.</li>
          <li>Información clara antes de confirmar el turno.</li>
          <li>
            Posibilidad de coordinar estudios y controles en el mismo espacio.
          </li>
        </ul>
      </section>

      <section className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-earh-blue-700">
              Nuestros profesionales
            </h2>
            <p className="mt-1 max-w-3xl text-neutral-700">
              Estamos conformando una cartilla de profesionales con trayectoria
              en instituciones de referencia de Buenos Aires. Próximamente vas a
              encontrar el equipo detallado por especialidad, con formación,
              experiencia y disponibilidad de turnos.
            </p>
          </div>
          <Link
            href="/profesionales"
            className="inline-flex items-center rounded-lg bg-earh-blue-600 px-5 py-2 font-medium text-white shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:bg-earh-blue-700 hover:shadow-cardHover active:translate-y-0"
          >
            Ver profesionales
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="mb-4 text-2xl font-semibold text-earh-blue-700">
          Opiniones de pacientes
        </h2>
        <div className="space-y-3">
          <blockquote className="border-l-4 border-earh-blue-500 pl-4 text-sm italic text-neutral-700">
            “Pude conseguir turno en pocos días y la atención fue muy clara y
            respetuosa.”
          </blockquote>
          <blockquote className="border-l-4 border-earh-blue-500 pl-4 text-sm italic text-neutral-700">
            “Buena coordinación, sin esperas largas en sala. Me explicaron todo
            con detalle.”
          </blockquote>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="mb-2 text-2xl font-semibold text-earh-blue-700">
          Preguntas frecuentes
        </h2>
        <FAQ
          q="¿Cómo saco un turno?"
          a="Podés escribir por WhatsApp para disponibilidad inmediata, llamar por teléfono o completar el formulario en la sección Contacto."
        />
        <FAQ
          q="¿Atienden pacientes particulares y con cobertura?"
          a="Sí. Indicá tu cobertura al solicitar el turno y te confirmamos alcances y requisitos."
        />
        <FAQ
          q="¿Dónde están ubicados?"
          a="En Uruguay 266, 1º E, Microcentro (CABA). En la sección Ubicación vas a encontrar el mapa con cómo llegar."
        />
      </section>

      <section className="rounded-2xl border p-6 text-center shadow-sm sm:p-8">
        <h3 className="mb-2 text-xl font-semibold">
          ¿Querés coordinar tu turno?
        </h3>
        <p className="mb-4 text-neutral-700">
          Contanos tu consulta y te respondemos a la brevedad.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contacto"
            className="rounded-lg bg-earh-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-card transition-transform duration-200 hover:-translate-y-0.5 hover:bg-earh-blue-700 hover:shadow-cardHover active:translate-y-0"
          >
            Contacto
          </Link>
          <a
            href={CONTACT.wspHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-earh-green-600 px-5 py-2.5 text-sm font-medium text-earh-green-600 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-earh-green-600 hover:text-white active:translate-y-0"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </section>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 text-left shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-cardHover">
      <h3 className="mb-2 text-lg font-semibold text-neutral-900">{title}</h3>
      <div className="space-y-1 text-neutral-700">{children}</div>
    </div>
  );
}

function DivItem({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-4 rounded-2xl border bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-cardHover">
      <h3 className="mb-2 text-lg font-semibold text-neutral-900">{title}</h3>
      <ul className="space-y-1 list-disc pl-5 text-sm text-neutral-700">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

function StoryCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border bg-white p-4 text-sm text-neutral-800 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-cardHover">
      <h3 className="mb-1.5 text-sm font-semibold text-earh-blue-800">
        {title}
      </h3>
      <p className="text-sm text-neutral-700">{body}</p>
    </article>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border bg-white p-4 shadow-sm transition-colors duration-300 open:bg-earh-blue-50 [&_summary::-webkit-details-marker]:hidden">
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

function Step({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <li className="rounded-xl border bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-cardHover">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-earh-blue-600 text-sm font-semibold text-white">
          {number}
        </span>
        <h3 className="font-semibold text-neutral-900">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-neutral-700">{body}</p>
    </li>
  );
}
