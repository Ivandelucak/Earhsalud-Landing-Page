// FILE: src/app/(cmu)/cmu/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import EspecialidadesGrid from "./EspecialidadesGrid";
import GalleryCmu from "./GalleryCmu";

export const metadata: Metadata = {
  title: "Consultorios Médicos Uruguay – Atención médica en Microcentro",
  description:
    "Consultorios Médicos Uruguay ofrece atención primaria, clínica médica y especialidades con turnos ágiles en Microcentro. Uruguay 266, 1º E, CABA.",
  keywords: [
    "consultorios médicos microcentro",
    "clínica médica microcentro",
    "médicos CABA turnos rápidos",
    "consultorios Uruguay 266",
    "cardiología microcentro",
    "traumatología microcentro",
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
    "Infectious",
    "Radiology",
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

      <header className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Atención médica sin demoras, en Microcentro
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-600 sm:mt-4 sm:text-lg">
            Consultorios Médicos Uruguay es un espacio de atención primaria,
            clínica médica y especialidades, con profesionales de amplia
            experiencia y turnos coordinados de forma ágil.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
            <Link
              href="/contacto"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              Solicitar turno
            </Link>
            <a
              href={CONTACT.wspHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <InfoCard title="Dirección">
          <p className="font-medium">{CONTACT.addr}</p>
          <Link
            href="/ubicacion"
            className="text-sm text-blue-700 hover:underline"
          >
            Cómo llegar
          </Link>
        </InfoCard>

        <InfoCard title="Horarios">
          <p className="font-medium">{CONTACT.horarios}</p>
          <p className="text-sm text-neutral-600">
            Atención privada y con cobertura.
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

      <section className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          Quiénes somos
        </h2>
        <div className="max-w-4xl space-y-4 leading-relaxed text-neutral-700">
          <p>
            Consultorios Médicos Uruguay surge para ofrecer un entorno de
            atención primaria, consultas y seguimiento de tratamientos dentro de
            una unidad médica moderna, accesible y eficiente. Sabemos que
            conseguir un turno clínico o con especialidad puede demorar semanas;
            por eso enfocamos nuestro servicio en reducir los tiempos de espera
            y brindar una experiencia humanizada, clara y cercana.
          </p>
          <p>
            Atendemos pacientes particulares y con coberturas médicas, en una
            ubicación estratégica de la Ciudad Autónoma de Buenos Aires. El
            acceso es sencillo y cuenta con amplia conectividad en transporte
            público, facilitando la llegada de pacientes desde distintos puntos
            de CABA y GBA.
          </p>
          <p>
            Nuestro cuerpo profesional está integrado por médicos con extensa
            trayectoria que hoy ejercen en instituciones prestigiosas de Buenos
            Aires. La premisa es brindar atención responsable, con criterio
            clínico y calidez, acompañando cada decisión con información clara y
            seguimiento según la necesidad de cada paciente.
          </p>
        </div>
      </section>

      <GalleryCmu />

      <section className="grid gap-6 sm:grid-cols-2">
        <DivItem
          title="Por qué elegirnos"
          items={[
            "Tiempos de espera cortos y gestión ágil de turnos",
            "Atención humana con criterio clínico y comunicación clara",
            "Profesionales con experiencia en instituciones de referencia",
            "Ubicación estratégica en Microcentro",
          ]}
        />
        <DivItem
          title="Accesibilidad y ubicación"
          items={[
            "Dirección: Uruguay 266, 1º E, CABA",
            "Conectividad por múltiples líneas de colectivo y subte",
            "Entorno seguro y de fácil acceso",
            "Mapa y guía para llegar disponibles en la sección Ubicación",
          ]}
        />
      </section>

      <section className="rounded-2xl border bg-neutral-50 p-6 sm:p-8">
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          Cómo trabajamos
        </h2>
        <ol className="grid gap-4 sm:grid-cols-3">
          <Step
            number="1"
            title="Solicitud del turno"
            body="Elegís el canal que prefieras: WhatsApp, teléfono o formulario de contacto."
          />
          <Step
            number="2"
            title="Coordinación ágil"
            body="Proponemos fecha y horario disponibles y confirmamos requisitos según cobertura."
          />
          <Step
            number="3"
            title="Atención y seguimiento"
            body="Consulta en consultorio y, de ser necesario, seguimiento con pautas claras."
          />
        </ol>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/contacto"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Solicitar turno
          </Link>
          <a
            href={CONTACT.wspHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-white"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <EspecialidadesGrid />

      <section className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="mb-3 text-2xl font-semibold text-blue-700">
          Coberturas y modalidades de atención
        </h2>
        <p className="max-w-3xl text-neutral-700">
          Atendemos pacientes particulares y con diferentes coberturas médicas.
          Al momento de solicitar el turno, podés indicar tu cobertura para que
          te informemos condiciones, alcances y, en caso de corresponder,
          requisitos de autorización o copago.
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
            <h2 className="text-2xl font-semibold text-blue-700">
              Nuestros profesionales
            </h2>
            <p className="mt-1 max-w-3xl text-neutral-700">
              Próximamente vas a encontrar el equipo médico detallado por
              especialidad, con formación, trayectoria y disponibilidad de
              turnos.
            </p>
          </div>
          <Link
            href="/profesionales"
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:opacity-90"
          >
            Ver profesionales
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          Opiniones de pacientes
        </h2>
        <div className="space-y-3">
          <blockquote className="border-l-4 border-blue-500 pl-4 text-sm italic text-neutral-700">
            “Pude conseguir turno en pocos días y la atención fue muy clara y
            respetuosa.”
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 text-sm italic text-neutral-700">
            “Buena coordinación, sin esperas largas en sala. Me explicaron todo
            con detalle.”
          </blockquote>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="mb-2 text-2xl font-semibold text-blue-700">
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

      <section className="rounded-2xl border p-6 text-center sm:p-8">
        <h3 className="mb-2 text-xl font-semibold">
          ¿Querés coordinar tu turno?
        </h3>
        <p className="mb-4 text-neutral-700">Respondemos a la brevedad.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contacto"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Contacto
          </Link>
          <a
            href={CONTACT.wspHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50"
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
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <div className="space-y-1 text-neutral-700">{children}</div>
    </div>
  );
}

function DivItem({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <ul className="space-y-1 list-disc pl-5 text-neutral-700">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
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
      <div className="mt-3 border-t pt-3 font-medium text-neutral-800">{a}</div>
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
    <li className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          {number}
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-neutral-700">{body}</p>
    </li>
  );
}
