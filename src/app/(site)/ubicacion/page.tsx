import type { Metadata } from "next";
import CmuBar from "../(cmu)/components/CmuBar";
import { CMU } from "@/lib/cmu";

export const metadata: Metadata = {
  title: "Ubicación – Consultorios Médicos Uruguay",
  description:
    "Encontranos en Uruguay 266 (Microcentro), CABA. Horarios de atención y cómo llegar.",
};

export default function CmuUbicacionPage() {
  return (
    <>
      <CmuBar />

      <section className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Ubicación</h1>
          <p className="text-neutral-700">
            {CMU.addressLine}. Debajo podés ver el mapa y los horarios de
            atención.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border">
          <iframe
            src={CMU.mapsEmbed}
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-white p-4">
            <p className="text-sm font-semibold text-neutral-900">Horarios</p>
            <ul className="text-neutral-700">
              {CMU.hours.map((h) => (
                <li key={h.d}>
                  {h.d}: {h.h}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-white p-4">
            <p className="text-sm font-semibold text-neutral-900">
              Contacto rápido
            </p>
            <div className="mt-1 flex flex-wrap gap-2">
              <a
                href={CMU.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-neutral-50"
              >
                WhatsApp
              </a>
              <a
                href={CMU.phoneHref}
                className="rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-neutral-50"
              >
                Llamar ({CMU.phoneDisplay})
              </a>
              <a
                href="/contacto"
                className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
              >
                Formulario
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
