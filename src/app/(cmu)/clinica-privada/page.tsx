// FILE: src/app/(cmu)/cmu/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultorios Médicos Uruguay – Inicio",
  description:
    "Atención primaria, consultas y seguimiento sin demoras. Uruguay 266, 1º E, CABA. Tel. 4743-2525 · WhatsApp 11 3003-1247.",
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

export default function PageCmu() {
  return (
    <section className="space-y-12">
      <header className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Atención médica sin demoras, en Microcentro
          </h1>
          <p className="mt-3 sm:mt-4 text-neutral-600 max-w-2xl mx-auto text-base sm:text-lg">
            Consultorios Médicos Uruguay es un espacio de atención primaria,
            consultas y seguimiento de tratamientos, con profesionales de amplia
            experiencia en instituciones prestigiosas de Buenos Aires.
          </p>
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/cmu/contacto"
              className="rounded-lg px-5 py-2.5 text-sm font-medium bg-blue-600 text-white hover:opacity-90"
            >
              Solicitar turno
            </Link>
            <a
              href={CONTACT.wspHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-5 py-2.5 text-sm font-medium border hover:bg-neutral-50"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <InfoCard title="Dirección">
          <p className="font-medium">{CONTACT.addr}</p>
          <Link href="/cmu/ubicacion" className="text-blue-700 hover:underline">
            Cómo llegar
          </Link>
        </InfoCard>

        <InfoCard title="Horarios">
          <p className="font-medium">{CONTACT.horarios}</p>
          <p className="text-neutral-600 text-sm">
            Atención privada y con cobertura
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

      <section className="rounded-2xl border bg-white/90 p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Quiénes somos
        </h2>
        <div className="space-y-4 text-neutral-700 leading-relaxed max-w-4xl">
          <p>
            Consultorios Médicos Uruguay surge para ofrecer un entorno de
            atención primaria, consultas y seguimiento de tratamientos dentro de
            una unidad médica moderna, accesible y eficiente. Sabemos que
            conseguir un turno clínico o con especialidad puede demorar semanas:
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

      {/* NUEVO: Cómo trabajamos */}
      <section className="rounded-2xl border bg-neutral-50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Cómo trabajamos
        </h2>
        <ol className="grid gap-4 sm:grid-cols-3">
          <Step
            number="1"
            title="Solicitud del turno"
            body="Elegí el canal que prefieras: WhatsApp, teléfono o formulario de contacto."
          />
          <Step
            number="2"
            title="Coordinación ágil"
            body="Proponemos fecha y horario disponibles, y confirmamos requisitos según cobertura."
          />
          <Step
            number="3"
            title="Atención y seguimiento"
            body="Consulta en consultorio y, de ser necesario, seguimiento con pautas claras."
          />
        </ol>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/cmu/contacto"
            className="rounded-lg px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:opacity-90"
          >
            Solicitar turno
          </Link>
          <a
            href={CONTACT.wspHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-2 text-sm font-medium border hover:bg-white"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* NUEVO: Acceso a “Nuestros profesionales” */}
      <section className="rounded-2xl border bg-white/90 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              Nuestros profesionales
            </h2>
            <p className="text-neutral-700 mt-1 max-w-3xl">
              Conocé el equipo médico y su trayectoria. Esta sección se irá
              completando con perfiles y disponibilidad de turnos.
            </p>
          </div>
          <Link
            href="/cmu/profesionales"
            className="inline-flex items-center rounded-lg bg-blue-600 text-white px-5 py-2 font-medium hover:opacity-90"
          >
            Ver profesionales
          </Link>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">
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
          a="Uruguay 266, 1º E, en Microcentro (CABA). En la sección Ubicación verás el mapa con “Cómo llegar”."
        />
      </section>

      <section className="rounded-2xl border p-6 sm:p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">
          ¿Querés coordinar tu turno?
        </h3>
        <p className="text-neutral-700 mb-4">Respondemos a la brevedad.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/cmu/contacto"
            className="rounded-lg px-5 py-2.5 text-sm font-medium bg-blue-600 text-white hover:opacity-90"
          >
            Contacto
          </Link>
          <a
            href={CONTACT.wspHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-5 py-2.5 text-sm font-medium border hover:bg-neutral-50"
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
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-neutral-700 space-y-1">{children}</div>
    </div>
  );
}

function ServiceItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-neutral-700 mt-1">{body}</p>
    </div>
  );
}

function DivItem({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="text-neutral-700 space-y-1 list-disc pl-5">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
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
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
          {number}
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-neutral-700 mt-2">{body}</p>
    </li>
  );
}
