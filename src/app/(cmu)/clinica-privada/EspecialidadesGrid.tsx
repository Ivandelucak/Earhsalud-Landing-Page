"use client";

import { useEffect, useState } from "react";
import {
  Stethoscope,
  HeartPulse,
  Bone,
  Bug,
  Activity,
  Scan,
} from "lucide-react";

type Esp = {
  nombre: string;
  descripcion: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const ESPECIALIDADES: Esp[] = [
  {
    nombre: "Clínica médica",
    descripcion:
      "Atención integral de adultos; diagnóstico y seguimiento de patologías agudas y crónicas.",
    Icon: Stethoscope,
  },
  {
    nombre: "Cardiología",
    descripcion:
      "Chequeos, evaluación del riesgo cardiovascular y tratamiento de enfermedades del corazón.",
    Icon: HeartPulse,
  },
  {
    nombre: "Ortopedia",
    descripcion:
      "Lesiones músculo-esqueléticas, inmovilizaciones y tratamientos ortopédicos.",
    Icon: Bone,
  },
  {
    nombre: "Infectología",
    descripcion:
      "Diagnóstico y seguimiento de enfermedades infecciosas; prevención y vacunación.",
    Icon: Bug,
  },
  {
    nombre: "Traumatología",
    descripcion:
      "Lesiones óseas y articulares, recuperación funcional y control de dolor.",
    Icon: Activity,
  },
  {
    nombre: "Rayos",
    descripcion:
      "Estudios radiológicos diagnósticos con equipos modernos y personal especializado.",
    Icon: Scan,
  },
];

export default function EspecialidadesGrid() {
  // En mobile: tap abre/cierra; en desktop: solo hover.
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const onCardClick = (idx: number) => {
    if (!isMobile) return; // en desktop no usamos click para abrir
    setOpenIndex((cur) => (cur === idx ? null : idx));
  };

  return (
    <section className="rounded-2xl border bg-neutral-50 p-6 sm:p-8 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold text-blue-700">
        Especialidades
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {ESPECIALIDADES.map(({ nombre, descripcion, Icon }, idx) => {
          const opened = isMobile && openIndex === idx;

          return (
            <div
              key={nombre}
              tabIndex={0}
              onClick={() => onCardClick(idx)}
              className="relative group flex cursor-default select-none flex-col items-center justify-center rounded-xl border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md md:hover:scale-[1.03] focus-visible:shadow-md"
            >
              <Icon className="mb-2 h-10 w-10 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-medium text-neutral-800">{nombre}</h3>

              {/* Overlay: desktop aparece por hover; mobile por estado */}
              <div
                className={[
                  "absolute inset-0 rounded-xl bg-blue-700/90 p-4 text-white transition-opacity duration-200",
                  "flex items-center justify-center text-center",
                  // Desktop: solo hover
                  "opacity-0 md:group-hover:opacity-100",
                  // Mobile: controlado por estado
                  opened ? "opacity-100" : "md:opacity-0",
                ].join(" ")}
                aria-hidden={!opened}
              >
                <p className="text-sm">{descripcion}</p>
              </div>

              {/* Feedback al presionar (sutil) */}
              <span className="absolute inset-0 rounded-xl active:scale-[0.98] transition-transform" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
