import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internación domiciliaria – Earh Salud",
  description: "Atención en el hogar, seguimiento y coordinación de cuidados.",
};

export default function AsistenciaMedicaPage() {
  return (
    <section className="space-y-2">
      <h1 className="text-3xl font-bold">Internación domiciliaria</h1>
      <p className="text-neutral-600">
        Descripción de la internación domiciliaria: atención en el hogar,
        seguimiento clínico y coordinación de cuidados. (placeholder)
      </p>
    </section>
  );
}
