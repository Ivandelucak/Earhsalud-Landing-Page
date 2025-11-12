import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuestros profesionales – Consultorios Médicos Uruguay",
  description:
    "Perfiles de profesionales, especialidades y disponibilidad. Sección en construcción.",
};

export default function ProfesionalesPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Nuestros profesionales</h1>
        <p className="text-neutral-600 max-w-3xl">
          Próximamente vas a encontrar el equipo médico, su formación, áreas de
          trabajo y disponibilidad de turnos. Si necesitás coordinar ya,
          escribinos.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/cmu/contacto"
            className="rounded-lg px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:opacity-90"
          >
            Solicitar turno
          </Link>
          <Link
            href="/cmu"
            className="rounded-lg px-4 py-2 text-sm font-medium border hover:bg-neutral-50"
          >
            Volver a CMU
          </Link>
        </div>
      </header>

      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-3">Secciones previstas</h2>
        <ul className="list-disc pl-5 text-neutral-700 space-y-1">
          <li>Listado de profesionales con foto y especialidad</li>
          <li>Formación, experiencia y ámbitos de trabajo</li>
          <li>Disponibilidad orientativa de turnos</li>
          <li>Filtro por especialidad</li>
        </ul>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <PlaceholderCard title="Clínica médica" />
        <PlaceholderCard title="Cardiología" />
        <PlaceholderCard title="Ortopedia" />
        <PlaceholderCard title="Infectología" />
        <PlaceholderCard title="Traumatología" />
        <PlaceholderCard title="Diagnóstico por imágenes" />
      </section>
    </section>
  );
}

function PlaceholderCard({ title }: { title: string }) {
  return (
    <div className="rounded-xl border bg-neutral-50 p-5 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-neutral-700 mt-1 text-sm">
        Próximamente: profesionales, perfiles y turnos.
      </p>
    </div>
  );
}
