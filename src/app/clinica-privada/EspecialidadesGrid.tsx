"use client";

import { useState, useEffect } from "react";
import {
  Stethoscope,
  HeartPulse,
  Bone,
  Bug,
  Activity,
  Scan,
} from "lucide-react";

export default function EspecialidadesGrid() {
  const [isTouch, setIsTouch] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    // Detectar si es un dispositivo táctil
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(touch);
  }, []);

  const handleCardClick = (
    e: React.MouseEvent<HTMLDivElement>,
    nombre: string
  ) => {
    if (!isTouch) {
      // PC: limpiar focus para que no interfiera con el hover
      e.currentTarget.blur();
      return;
    }
    // mobile: toggle de la card activa
    setActiveCard((prev) => (prev === nombre ? null : nombre));
  };

  return (
    <div className="rounded-2xl border bg-neutral-50 p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-blue-700 mb-6">
        Especialidades
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {especialidades.map((esp) => {
          const isActive = isTouch && activeCard === esp.nombre;

          return (
            <div
              key={esp.nombre}
              tabIndex={0}
              // Si el usuario toca, marcamos inmediatamente como táctil
              onTouchStart={() => setIsTouch(true)}
              onClick={(e) => handleCardClick(e, esp.nombre)}
              className={`relative group flex flex-col items-center justify-center text-center p-6 rounded-xl bg-white shadow-sm border
                transition-all duration-300 outline-none cursor-default
                hover:shadow-md hover:scale-[1.03]
                ${isActive ? "shadow-md scale-[1.03]" : ""}`}
            >
              {/* Ícono */}
              <esp.icon
                className={`w-10 h-10 mb-2 transition-transform duration-300 ${
                  isActive
                    ? "text-white scale-110"
                    : "text-blue-600 group-hover:scale-110"
                }`}
              />

              {/* Nombre */}
              <h3
                className={`font-medium ${
                  isActive ? "text-white" : "text-neutral-800"
                }`}
              >
                {esp.nombre}
              </h3>

              {/* Overlay de descripción */}
              <div
                className={`absolute inset-0 rounded-xl flex flex-col items-center justify-center p-4
                bg-blue-700/90 text-white transition-opacity duration-500 ease-out
                ${
                  isActive
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
                }`}
              >
                <p className="text-sm">{esp.descripcion}</p>
              </div>

              {/* Feedback táctil al presionar (no afecta desktop) */}
              <span
                className="absolute inset-0 rounded-xl active:scale-[0.98] transition-transform"
                aria-hidden
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* 🔹 Datos de especialidades */
const especialidades = [
  {
    nombre: "Clínica médica",
    descripcion:
      "Atención integral de adultos, diagnóstico y seguimiento de patologías crónicas y agudas.",
    icon: Stethoscope,
  },
  {
    nombre: "Cardiología",
    descripcion:
      "Evaluación y tratamiento de enfermedades cardiovasculares, chequeos y control de riesgo cardíaco.",
    icon: HeartPulse,
  },
  {
    nombre: "Ortopedia",
    descripcion:
      "Atención de lesiones músculo-esqueléticas, rehabilitación y tratamientos ortopédicos.",
    icon: Bone,
  },
  {
    nombre: "Infectología",
    descripcion:
      "Diagnóstico, control y seguimiento de enfermedades infecciosas, prevención y vacunación.",
    icon: Bug,
  },
  {
    nombre: "Traumatología",
    descripcion:
      "Atención de lesiones óseas, articulares y musculares, con enfoque en la recuperación funcional.",
    icon: Activity,
  },
  {
    nombre: "Rayos",
    descripcion:
      "Estudios radiológicos diagnósticos con equipos modernos y personal especializado.",
    icon: Scan,
  },
];
