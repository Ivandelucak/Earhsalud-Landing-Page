import type { Metadata } from "next";
import EspecialidadesGrid from "./EspecialidadesGrid";

export const metadata: Metadata = {
  title: "Policonsultorio – Earh Salud",
  description:
    "Policonsultorio de Earh Salud: atención médica integral con profesionales especializados, turnos rápidos y precios accesibles. Clínica médica, cardiología, ortopedia, infectología, traumatología y rayos.",
};

export default function PoliconsultorioPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">Policonsultorio</h1>
        <p className="text-neutral-600 max-w-2xl">
          Nuestro Policonsultorio ofrece atención médica integral con
          profesionales de distintas especialidades, priorizando la calidad, la
          accesibilidad y la atención humana.
        </p>
      </header>

      <article className="space-y-6 max-w-4xl text-neutral-700 leading-relaxed">
        <p>
          En <strong>Earh Salud</strong> contamos con un Policonsultorio
          diseñado para brindar un servicio ágil y coordinado, pensado para
          quienes buscan atención de calidad sin las demoras habituales del
          sistema tradicional y con <strong>precios accesibles</strong>.
        </p>

        <p>
          Nuestros pacientes pueden acceder a consultas con médicos clínicos y
          especialistas, realizar estudios de diagnóstico y recibir orientación
          personalizada sobre prevención y tratamientos.
        </p>

        <p>
          Nos enfocamos en ofrecer un entorno profesional, cálido y seguro,
          combinando tecnología moderna con la atención humana que nos
          caracteriza.
        </p>

        {/* 🔹 Componente Cliente (interactivo) */}
        <EspecialidadesGrid />

        <p>
          Te invitamos a contactarnos para coordinar un turno o conocer más
          sobre nuestras especialidades.
        </p>

        {/* CTA final */}
        <div className="pt-4">
          <a
            href="/contacto"
            className="inline-flex items-center rounded-lg bg-blue-600 text-white px-5 py-2 font-medium hover:bg-blue-700 transition"
          >
            Solicitar turno
          </a>
        </div>
      </article>
    </section>
  );
}
