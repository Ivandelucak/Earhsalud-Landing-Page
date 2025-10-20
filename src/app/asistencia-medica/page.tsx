import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asistencia médica – Earh Salud",
  description: "Atención domiciliaria, seguimiento y coordinación de cuidados.",
};

export default function AsistenciaMedicaPage() {
  return (
    <section className="space-y-2">
      <h1 className="text-3xl font-bold">Asistencia médica</h1>
      <p className="text-neutral-600">
        Descripción de la asistencia médica domiciliaria y coordinación de
        cuidados. (placeholder)
      </p>
    </section>
  );
}
