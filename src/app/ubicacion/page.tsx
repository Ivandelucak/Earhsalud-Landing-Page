// FILE: src/app/ubicacion/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ubicación – Earh Salud",
  description:
    "Encontranos en Uruguay 266, Microcentro, Buenos Aires. Consultá cómo llegar a nuestras oficinas y áreas de cobertura en CABA y GBA.",
};

export default function UbicacionPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Ubicación</h1>
        <p className="text-neutral-600 max-w-2xl">
          Nuestra sede principal se encuentra en{" "}
          <strong>Microcentro, Buenos Aires</strong>, en la calle{" "}
          <strong>Uruguay 266</strong>. Atendemos también en CABA y GBA,
          ofreciendo servicios de asistencia médica a domicilio y
          Policonsultorio.
        </p>
      </div>

      {/* Mapa de Google Embed apuntando a Uruguay 266 */}
      <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9993734019524!2d-58.38248952348618!3d-34.60619045762805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacb75fda283%3A0x4b1a7a0cf48b2e29!2sUruguay%20266%2C%20C1015ABF%20CABA!5e0!3m2!1ses-419!2sar!4v1734555600000!5m2!1ses-419!2sar"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Enlace directo y ficha básica */}
      <div className="space-y-2 text-sm text-neutral-700">
        <p>
          Podés abrir el mapa directamente en{" "}
          <a
            href="https://maps.app.goo.gl/MNroUkWzFAvenW9bA"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Google Maps
          </a>{" "}
          para obtener indicaciones precisas hacia nuestras oficinas.
        </p>

        <div className="border rounded-xl p-4 bg-white/70 max-w-md shadow-sm">
          <p className="font-medium text-neutral-900">Dirección</p>
          <p>Uruguay 266, Microcentro (CABA)</p>
          <p className="mt-2 font-medium text-neutral-900">
            Horarios de atención
          </p>
          <p>Lunes a Viernes, de 9:00 a 18:00 hs</p>
          <p className="mt-2 font-medium text-neutral-900">Teléfono</p>
          <a href="tel:+5491100000000" className="underline">
            +54 9 11 0000 0000
          </a>
        </div>
      </div>
    </section>
  );
}
