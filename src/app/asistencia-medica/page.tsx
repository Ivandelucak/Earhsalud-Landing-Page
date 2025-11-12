// FILE: src/app/asistencia-medica/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internación domiciliaria – Earh Salud",
  description:
    "Cuidadores capacitados en el hogar: acompañamiento, asistencia diaria y comunicación continua con la familia. Coordinación flexible y atención humana.",
};

export default function InternacionDomiciliariaPage() {
  return (
    <section className="space-y-10">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Internación domiciliaria con atención humana y cercana
          </h1>
          <p className="mt-3 text-neutral-600 max-w-3xl">
            Brindamos acompañamiento y cuidado personalizado en el hogar,
            asegurando confort, contención y seguimiento continuo para el
            paciente y su familia. Nos enfocamos en la calidad del cuidado, el
            respeto y la comunicación clara.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="rounded-lg px-5 py-2.5 text-sm font-medium bg-blue-600 text-white hover:opacity-90"
            >
              Solicitar información
            </Link>
            <a
              href="https://wa.me/5491100000000?text=Hola%20Earh%20Salud%2C%20quisiera%20informaci%C3%B3n%20sobre%20internaci%C3%B3n%20domiciliaria"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-5 py-2.5 text-sm font-medium border hover:bg-neutral-50"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* QUÉ OFRECEMOS */}
      <section className="rounded-2xl border bg-white/90 p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          Qué ofrecemos
        </h2>
        <p className="text-neutral-700 max-w-4xl">
          En <strong>Earh Salud</strong> comprendemos la importancia de recibir
          cuidados en el entorno familiar. Nuestro servicio de internación
          domiciliaria se centra en el acompañamiento profesional de
          <strong> cuidadores capacitados</strong>, asistencia cotidiana y
          contención emocional, priorizando el bienestar del paciente y la
          tranquilidad de sus seres queridos.
        </p>
      </section>

      {/* SERVICIOS DISPONIBLES (sin menciones médicas) */}
      <section className="rounded-2xl border bg-neutral-50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Servicios disponibles
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-neutral-700">
          <Bullet>Asistencia de cuidadores capacitados.</Bullet>
          <Bullet>Control y acompañamiento en rutinas diarias.</Bullet>
          <Bullet>Apoyo en higiene personal y movilidad.</Bullet>
          <Bullet>Organización del entorno y confort del paciente.</Bullet>
          <Bullet>Seguimiento de indicaciones médicas externas.</Bullet>
          <Bullet>Comunicación periódica con la familia.</Bullet>
        </ul>
      </section>

      {/* CÓMO FUNCIONA (proceso simple) */}
      <section className="rounded-2xl border bg-white/90 p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Cómo funciona
        </h2>
        <ol className="list-decimal pl-5 space-y-2 text-neutral-700">
          <li>
            <strong>Consulta inicial:</strong> te escuchamos y evaluamos la
            necesidad de cuidado.
          </li>
          <li>
            <strong>Asignación de cuidador:</strong> seleccionamos el perfil más
            adecuado para el paciente y la familia.
          </li>
          <li>
            <strong>Inicio del servicio:</strong> coordinación flexible según
            horarios y días.
          </li>
          <li>
            <strong>Seguimiento continuo:</strong> comunicación fluida para
            ajustar el plan cuando sea necesario.
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
            href="tel:+541100000000"
            className="rounded-lg px-4 py-2 text-sm font-medium border hover:bg-neutral-50"
          >
            Llamar
          </a>
        </div>
      </section>

      {/* TESTIMONIOS (opcional) */}
      <section className="rounded-2xl border p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Testimonios
        </h2>
        <blockquote className="italic text-neutral-700 border-l-4 border-blue-500 pl-4 mb-4">
          “Gracias al equipo de cuidadores, pudimos acompañar a mi papá con
          tranquilidad y respeto en su casa.” — Rosa L.
        </blockquote>
        <blockquote className="italic text-neutral-700 border-l-4 border-blue-500 pl-4">
          “Muy buena coordinación y comunicación con la familia. Recomendables.”
          — Martín V.
        </blockquote>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">
          Preguntas frecuentes
        </h2>

        <FAQ
          q="¿Qué incluye el servicio de internación domiciliaria?"
          a="Acompañamiento por cuidadores capacitados, asistencia en rutinas, apoyo en higiene y movilidad, organización del entorno y comunicación con la familia."
        />
        <FAQ
          q="¿Trabajan con obras sociales o es particular?"
          a="Podemos coordinar según cada caso y cobertura. También trabajamos de forma particular."
        />
        <FAQ
          q="¿Puedo solicitar un cuidador por tiempo determinado?"
          a="Sí. Coordinamos por horas, días o turnos según necesidad y disponibilidad."
        />
        <FAQ
          q="¿Qué horarios cubren?"
          a="Definimos el esquema de días y horarios en conjunto, con opciones flexibles."
        />
      </section>

      {/* CTA FINAL */}
      <section className="rounded-2xl border p-6 sm:p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">
          ¿Necesitás cuidado en casa?
        </h3>
        <p className="text-neutral-700 mb-4">
          Contactanos y te ayudamos a coordinar la asistencia que necesitás.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contacto"
            className="rounded-lg px-5 py-2.5 text-sm font-medium bg-blue-600 text-white hover:opacity-90"
          >
            Contacto
          </Link>
          <a
            href="https://wa.me/5491100000000?text=Hola%20Earh%20Salud%2C%20quisiera%20coordinar%20internaci%C3%B3n%20domiciliaria"
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

/* ---------- helpers locales ---------- */

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
