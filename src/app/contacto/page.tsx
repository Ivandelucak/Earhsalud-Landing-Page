import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto – Earh Salud",
  description: "Escribinos por consultas y cotizaciones. Respuesta rápida.",
};

export default function ContactoPage() {
  return (
    <section className="grid gap-10 md:grid-cols-[1fr_380px] items-start">
      <div>
        <h1 className="text-3xl font-bold mb-2">Contacto</h1>
        <p className="text-neutral-600 mb-6">
          Dejanos tus datos y te respondemos a la brevedad.
        </p>
        <ContactForm />
        <p className="mt-4 text-xs text-neutral-500">
          Al enviar aceptás nuestra{" "}
          <a className="underline" href="/legal">
            política de privacidad
          </a>
          .
        </p>
      </div>

      {/* Columna lateral con info de contacto */}
      <aside className="rounded-2xl border p-5 bg-white/70 space-y-4">
        <h2 className="text-lg font-semibold">Otras formas de contacto</h2>
        <div className="space-y-3 text-sm">
          <p>
            <span className="font-medium">Teléfono:</span>{" "}
            <a className="underline" href="tel:+5491100000000">
              +54 9 11 0000 0000
            </a>
          </p>
          <p>
            <span className="font-medium">WhatsApp:</span>{" "}
            <a
              className="underline"
              href="https://wa.me/5491160343460"
              target="_blank"
            >
              Enviar mensaje
            </a>
          </p>
          <p>
            <span className="font-medium">Email:</span>{" "}
            <a className="underline" href="mailto:contacto@tu-dominio.com">
              contacto@tu-dominio.com
            </a>
          </p>
          <p className="text-neutral-500">
            (Editá estos datos cuando tengas el número y dominio definitivos)
          </p>
        </div>
      </aside>
    </section>
  );
}
