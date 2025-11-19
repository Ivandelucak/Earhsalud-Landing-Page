import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profesionales – Consultorios Médicos Uruguay",
  description:
    "Equipo médico de Consultorios Médicos Uruguay: clínica médica, cardiología, traumatología, infectología, ortopedia y más. Formación, experiencia y turnos.",
};

export default function ProfesionalesPage() {
  return (
    <section className="space-y-12">
      {/* HERO */}
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Nuestros profesionales
        </h1>
        <p className="text-neutral-600 max-w-3xl leading-relaxed">
          Muy pronto vas a poder consultar el equipo completo de profesionales
          de Consultorios Médicos Uruguay: su formación, especialidades, ámbitos
          de trabajo y disponibilidad de turnos. Mientras el módulo se completa,
          podés coordinar desde el área de contacto.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href="/cmu/contacto"
            className="rounded-lg px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:opacity-90"
          >
            Solicitar turno
          </Link>
          <Link
            href="clinica-privada"
            className="rounded-lg px-4 py-2 text-sm font-medium border hover:bg-neutral-50"
          >
            Volver a CMU
          </Link>
        </div>
      </header>

      {/* BLOQUE DE FILTRO (preparado para futuro) */}
      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Especialidades</h2>

        <div className="flex flex-wrap gap-2">
          {[
            "Clínica médica",
            "Cardiología",
            "Ortopedia",
            "Infectología",
            "Traumatología",
            "Diagnóstico por imágenes",
          ].map((esp) => (
            <span
              key={esp}
              className="rounded-full border px-3 py-1 text-sm text-neutral-700 bg-neutral-50"
            >
              {esp}
            </span>
          ))}
        </div>

        <p className="text-sm text-neutral-500 mt-3">
          El filtrado estará disponible cuando las fichas profesionales estén
          cargadas.
        </p>
      </section>

      {/* GRID DE PROFESIONALES (placeholder profesional) */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-700">
          Equipo médico (próximamente)
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProfessionalCard
            nombre="Próximamente"
            especialidad="Clínica médica"
          />
          <ProfessionalCard nombre="Próximamente" especialidad="Cardiología" />
          <ProfessionalCard
            nombre="Próximamente"
            especialidad="Traumatología"
          />
          <ProfessionalCard nombre="Próximamente" especialidad="Ortopedia" />
          <ProfessionalCard nombre="Próximamente" especialidad="Infectología" />
          <ProfessionalCard
            nombre="Próximamente"
            especialidad="Diagnóstico por imágenes"
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="rounded-2xl border p-6 sm:p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">
          ¿Querés coordinar un turno?
        </h3>
        <p className="text-neutral-700 mb-4">
          Te respondemos a la brevedad con la disponibilidad de cada
          especialidad.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/cmu/contacto"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Contacto
          </Link>
          <a
            href="https://wa.me/541130031247?text=Hola%20CMU%2C%20quisiera%20solicitar%20un%20turno"
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

/* COMPONENTE PROFESIONAL (placeholder realista) */

function ProfessionalCard({
  nombre,
  especialidad,
}: {
  nombre: string;
  especialidad: string;
}) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm flex flex-col items-start">
      <div className="w-full h-32 rounded-lg bg-neutral-100 grid place-items-center text-neutral-400 text-sm">
        Foto
      </div>

      <h3 className="mt-4 text-lg font-semibold text-neutral-900">{nombre}</h3>
      <p className="text-neutral-600 text-sm">{especialidad}</p>

      <div className="mt-4">
        <Link
          href="/cmu/contacto"
          className="text-sm font-medium text-blue-700 hover:underline"
        >
          Consultar disponibilidad →
        </Link>
      </div>
    </div>
  );
}
