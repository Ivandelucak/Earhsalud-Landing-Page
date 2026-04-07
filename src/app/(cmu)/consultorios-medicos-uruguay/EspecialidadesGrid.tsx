"use client";

import { useEffect, useState } from "react";
import { Stethoscope, Bone, Activity, Scan, Bug } from "lucide-react";

type Esp = {
  nombre: string;
  descripcion: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const ESPECIALIDADES: Esp[] = [
  {
    nombre: "Clínica médica",
    descripcion:
      "Consultas integrales del adulto, control de patologías crónicas y chequeos de salud.",
    Icon: Stethoscope,
  },
  {
    nombre: "Ortopedia",
    descripcion:
      "Evaluación y tratamiento de problemas óseos y articulares, lesiones y dolor crónico.",
    Icon: Bone,
  },
  {
    nombre: "Cirugía general",
    descripcion:
      "Valoración pre y postoperatoria, seguimiento de cirugías programadas y de urgencia.",
    Icon: Activity,
  },
  {
    nombre: "Cirugía plástica",
    descripcion:
      "Consultas estéticas y reconstructivas, con foco en resultados seguros y naturales.",
    Icon: Scan,
  },
  {
    nombre: "Infectología",
    descripcion:
      "Diagnóstico y seguimiento de infecciones agudas y crónicas, prevención y vacunación.",
    Icon: Bug,
  },
];

export default function EspecialidadesGrid() {
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
    if (!isMobile) return;
    setOpenIndex((cur) => (cur === idx ? null : idx));
  };

  return (
    <section className="rounded-2xl border bg-neutral-50 p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-xl font-semibold text-earh-blue-700">
        Especialidades médicas disponibles
      </h2>

      <p className="mb-4 max-w-3xl text-sm text-neutral-700">
        Comenzamos con un foco en atención clínica y quirúrgica, y una cartilla
        de profesionales en crecimiento. A medida que sumemos nuevas
        especialidades, las vas a encontrar actualizadas en este espacio.
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {ESPECIALIDADES.map(({ nombre, descripcion, Icon }, idx) => {
          const opened = isMobile && openIndex === idx;

          return (
            <div
              key={nombre}
              tabIndex={0}
              onClick={() => onCardClick(idx)}
              className="relative group flex cursor-default select-none flex-col items-center justify-center rounded-xl border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:shadow-md"
            >
              <Icon className="mb-2 h-10 w-10 text-earh-blue-600 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-medium text-neutral-800">{nombre}</h3>

              <div
                className={[
                  "absolute inset-0 rounded-xl bg-earh-blue-800/95 p-4 text-white transition-opacity duration-200",
                  "flex items-center justify-center text-center",
                  "opacity-0 md:group-hover:opacity-100",
                  opened ? "opacity-100" : "md:opacity-0",
                ].join(" ")}
                aria-hidden={!opened}
              >
                <p className="text-sm">{descripcion}</p>
              </div>

              <span className="absolute inset-0 rounded-xl active:scale-[0.98] transition-transform" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
