import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad – Earh Salud",
  description: "Información legal, tratamiento de datos y condiciones de uso.",
};

export default function LegalPage() {
  return (
    <section className="prose prose-neutral max-w-none">
      <h1>Política de privacidad (placeholder)</h1>
      <p>
        Este texto se reemplazará por la política de privacidad y condiciones de
        uso correspondientes.
      </p>
    </section>
  );
}
