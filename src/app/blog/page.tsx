// FILE: src/app/blog/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiénes somos – Earh Salud",
  description:
    "Conocé la trayectoria y el equipo interdisciplinario de Earh Salud: profesionales dedicados a brindar un servicio médico coordinado, humano y de excelencia.",
};

export default function BlogPage() {
  return (
    <section className="space-y-10">
      {/* Encabezado */}
      <header className="space-y-3 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Quiénes somos</h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Un equipo comprometido con el bienestar, la eficiencia y la atención
          humana de cada paciente.
        </p>
      </header>

      {/* Contenido principal */}
      <article className="max-w-4xl mx-auto space-y-6 text-neutral-700 leading-relaxed">
        <p>
          <strong>Earh Salud</strong> está compuesta por un grupo
          interdisciplinario de profesionales médicos, kinesiólogos,
          fonoaudiólogos, enfermeros, cuidadores y administrativos que se unió
          para brindar un servicio diferenciado y coordinado con el único fin de
          dar respuesta a la necesidad de lograr una más rápida recuperación de
          un paciente, bajando costos para la entidad contratante y otorgando
          beneficios integrales al paciente y su familia.
        </p>

        <p>
          Desde sus comienzos, <strong>Earh Salud</strong> se distingue por su
          enfoque humano y su compromiso con la excelencia médica. Nuestra
          organización entiende que cada persona requiere una atención
          personalizada y coordinada, adaptada a sus necesidades específicas.
        </p>

        <div className="rounded-2xl border bg-neutral-50 p-6 shadow-sm">
          <p>
            En su constante desarrollo y con el objetivo de ofrecer un servicio
            de excelencia a obras sociales y empresas de medicina prepaga,{" "}
            <strong>Earh Salud</strong> ha incorporado desde el año 2020 un
            <strong> Sistema de Control y Auditoría Domiciliaria</strong>,
            operativo tanto en Capital Federal como en el Gran Buenos Aires.
          </p>
        </div>

        <p>
          Este sistema permite un seguimiento más preciso de los tratamientos
          domiciliarios, asegurando transparencia, eficiencia y calidad en cada
          instancia del cuidado del paciente.
        </p>
      </article>
    </section>
  );
}
