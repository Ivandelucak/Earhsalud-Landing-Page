// FILE: src/app/(cmu)/ubicacion/CmuUbicacionSection.tsx
"use client";

import { CMU } from "@/lib/cmu";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
} as const;

export default function CmuUbicacionSection() {
  return (
    <section className="space-y-10">
      {/* HEADER CON MÁS PRESENCIA */}
      <motion.header {...fadeUp} className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          <span>Microcentro · Uruguay 266, 1º E · CABA</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Dónde está Consultorios Médicos Uruguay?
          </h1>
          <p className="max-w-2xl text-neutral-700">
            Consultorios Médicos Uruguay se encuentra en{" "}
            <strong>Uruguay 266, 1º E</strong>, en pleno Microcentro, a pocos
            minutos del Obelisco y de las principales líneas de subte y
            colectivos de la Ciudad de Buenos Aires.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
          <span className="rounded-full border bg-white px-3 py-1 text-neutral-700">
            A metros del Obelisco
          </span>
          <span className="rounded-full border bg-white px-3 py-1 text-neutral-700">
            Cerca de Subte A, B y D
          </span>
          <span className="rounded-full border bg-white px-3 py-1 text-neutral-700">
            Zona de fácil acceso en Microcentro
          </span>
        </div>
      </motion.header>

      {/* MAPA */}
      <motion.div
        {...fadeUp}
        className="overflow-hidden rounded-2xl border bg-white"
      >
        <div className="border-b px-4 py-3 text-sm text-neutral-700">
          <p className="font-medium">Mapa y cómo llegar</p>
          <p className="text-xs text-neutral-500">
            La ubicación es orientativa. Verificá siempre la dirección al
            programar tu visita.
          </p>
        </div>
        <div className="aspect-[16/9] w-full">
          <iframe
            src={CMU.mapsEmbed}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Consultorios Médicos Uruguay"
          />
        </div>
      </motion.div>

      {/* HORARIOS + CONTACTO RÁPIDO */}
      <motion.section {...fadeUp} className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-neutral-900">
            Horarios de atención
          </p>
          <ul className="mt-2 space-y-1 text-neutral-700">
            {CMU.hours.map((h) => (
              <li key={h.d}>
                {h.d}: {h.h}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-neutral-500">
            Los horarios pueden variar según profesional o estudio solicitado.
            Te recomendamos confirmar al coordinar tu turno.
          </p>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-neutral-900">
            Contacto rápido
          </p>
          <p className="mt-1 text-sm text-neutral-700">
            Si necesitás coordinar un turno o hacer una consulta sobre cómo
            llegar, podés comunicarte por los siguientes canales:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={CMU.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
            >
              WhatsApp
            </a>
            <a
              href={CMU.phoneHref}
              className="rounded-lg border px-3 py-1.5 text-sm font-medium hover:bg-neutral-50"
            >
              Llamar ({CMU.phoneDisplay})
            </a>
            <Link
              href="/contacto"
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Formulario de contacto
            </Link>
          </div>
          <p className="mt-3 text-xs text-neutral-500">
            Respondemos dentro del horario de atención. Si escribís fuera de ese
            horario, te contactamos a la brevedad posible.
          </p>
        </div>
      </motion.section>

      {/* CÓMO LLEGAR EN TRANSPORTE PÚBLICO */}
      <motion.section
        {...fadeUp}
        className="grid gap-6 rounded-2xl border bg-white/90 p-6 shadow-sm sm:grid-cols-3 sm:p-8"
      >
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Subte
          </h2>
          <p className="mt-2 text-sm text-neutral-700">
            La zona está conectada por varias líneas de subte:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-700">
            <Bullet>Línea B: estación Uruguay.</Bullet>
            <Bullet>Línea A: estación Sáenz Peña.</Bullet>
            <Bullet>Línea D: estación Tribunales.</Bullet>
          </ul>
          <p className="mt-2 text-xs text-neutral-500">
            Las estaciones se encuentran a pocos minutos caminando de Uruguay
            266, en pleno Microcentro.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Colectivos
          </h2>
          <p className="mt-2 text-sm text-neutral-700">
            Pasan múltiples líneas de colectivo a pocas cuadras, por ejemplo:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-700">
            <Bullet>Líneas 24, 50, 111, 115.</Bullet>
            <Bullet>Líneas 140, 146 y otras de zona centro.</Bullet>
          </ul>
          <p className="mt-2 text-xs text-neutral-500">
            Las paradas pueden variar. Recomendamos verificar recorridos y
            horarios actualizados en aplicaciones de transporte público.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Desde otras zonas
          </h2>
          <p className="mt-2 text-sm text-neutral-700">
            Si venís desde el conurbano o barrios alejados, podés combinar:
          </p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-700">
            <Bullet>
              Tren hasta Retiro, Once o Constitución y luego subte o colectivo.
            </Bullet>
            <Bullet>
              Colectivos que ingresan a Microcentro y bajan cerca del Obelisco o
              Tribunales.
            </Bullet>
          </ul>
          <p className="mt-2 text-xs text-neutral-500">
            Usá tu app de transporte habitual para ver la mejor combinación
            según tu punto de partida.
          </p>
        </div>
      </motion.section>

      {/* CÓMO PREPARAR LA VISITA */}
      <motion.section
        {...fadeUp}
        className="grid gap-6 rounded-2xl border bg-white/90 p-6 shadow-sm sm:grid-cols-2 sm:p-8"
      >
        <div>
          <h2 className="text-lg font-semibold text-blue-700">
            Antes de tu consulta
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <Bullet>
              Llegar unos minutos antes del horario asignado para realizar la
              admisión con tranquilidad.
            </Bullet>
            <Bullet>
              Traer DNI, credencial de cobertura médica y estudios previos
              relacionados con la consulta.
            </Bullet>
            <Bullet>
              Consultar previamente si necesitás estudios complementarios o
              requisitos específicos según la especialidad.
            </Bullet>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-blue-700">
            Recomendaciones generales
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <Bullet>
              Si acompañás a una persona mayor, coordiná el tiempo de llegada
              para evitar esperas innecesarias.
            </Bullet>
            <Bullet>
              En caso de dudas sobre accesos, ascensores o tiempos estimados,
              podés consultarnos por WhatsApp o teléfono antes de acercarte.
            </Bullet>
            <Bullet>
              Si no podés asistir al turno, avisar con anticipación nos permite
              reasignar horarios y mejorar la atención a otros pacientes.
            </Bullet>
          </ul>
        </div>
      </motion.section>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <svg
        className="mt-[3px] h-4 w-4 shrink-0 text-blue-600"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          d="M20 6L9 17l-5-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{children}</span>
    </li>
  );
}
