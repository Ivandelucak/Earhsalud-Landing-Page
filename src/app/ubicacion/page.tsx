// FILE: src/app/ubicacion/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ubicación – Earh Salud",
  description:
    "Encontrá la sede de Earh Salud en Microcentro, CABA. Dirección, horarios de atención y cómo llegar.",
};

export default function UbicacionPage() {
  return (
    <section className="space-y-10">
      {/* Encabezado */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Ubicación</h1>
        <p className="text-neutral-600 max-w-2xl">
          Nuestra sede principal se encuentra en Microcentro, Buenos Aires.
          Atendemos también en CABA y GBA
        </p>
      </header>

      {/* Mapa */}
      <div className="rounded-2xl overflow-hidden border shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8929643989897!2d-58.38589992345859!3d-34.6076696573722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac6a5576ac9%3A0x63b6c37b6bb65b47!2sUruguay%20266%2C%20C1015ABE%20CABA!5e0!3m2!1ses!2sar!4v1709735000000!5m2!1ses!2sar"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Horarios de atención */}
      <section className="rounded-2xl border bg-white/90 p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Horarios de atención
        </h2>
        <ul className="text-neutral-700 space-y-1 font-medium">
          <li>Lunes a viernes: 9:00 a 18:00 hs</li>
          <li>Sábados: 9:00 a 13:00 hs</li>
          <li>Domingos y feriados: cerrado</li>
        </ul>
      </section>

      {/* Cómo llegar */}
      <section className="rounded-2xl border bg-neutral-50 p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Cómo llegar
        </h2>
        <ul className="text-neutral-700 space-y-2">
          <li>
            🚌 <strong>Colectivos:</strong> 5, 24, 60, 100, 115, 150, 152 y
            otros.
          </li>
          <li>
            🚇 <strong>Subte:</strong> Línea B (Uruguay), Línea D (Tribunales).
          </li>
          <li>
            🚗 <strong>Estacionamiento:</strong> playas privadas sobre calle
            Uruguay y Lavalle.
          </li>
          <li>
            📍{" "}
            <a
              href="https://maps.app.goo.gl/MNroUkWzFAvenW9bA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              Ver en Google Maps
            </a>
          </li>
        </ul>
      </section>

      {/* Contacto directo */}
      <section className="rounded-2xl border bg-white p-6 sm:p-8 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          Contacto directo
        </h2>
        <p className="text-neutral-700 mb-3">
          Comunicate con nuestro equipo para coordinar tu turno o recibir
          información.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="tel:+541100000000"
            className="rounded-lg px-5 py-2.5 text-sm font-medium border hover:bg-neutral-50"
          >
            📞 Llamar
          </a>
          <a
            href="https://wa.me/5491100000000?text=Hola%20Earh%20Salud%2C%20quiero%20consultar%20horarios%20y%20turnos"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-5 py-2.5 text-sm font-medium bg-green-600 text-white hover:opacity-90"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </section>
  );
}
