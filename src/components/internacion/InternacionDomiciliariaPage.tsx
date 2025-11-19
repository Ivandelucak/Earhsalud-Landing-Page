"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CONTACT = {
  tel: "+54 11 4743-2525",
  telHref: "tel:+541147432525",
  whatsapp: "+54 11 3003-1247",
  whatsappHref:
    "https://wa.me/541130031247?text=Hola%20Earh%20Salud%2C%20quisiera%20informaci%C3%B3n%20sobre%20internaci%C3%B3n%20domiciliaria",
};

const heroAnim = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
} as const;

const sectionInView = {
  initial: { opacity: 1, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
} as const;

export default function InternacionDomiciliariaPage() {
  return (
    <section className="space-y-16">
      {/* HERO SIEMPRE VISIBLE */}
      <motion.header
        {...heroAnim}
        className="rounded-2xl border bg-gradient-to-b from-white to-neutral-50 p-6 sm:p-10"
      >
        <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-wide text-blue-700">
              INTERNACIÓN DOMICILIARIA EN CABA Y GBA
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
              Cuidado en el hogar para personas mayores, con seguimiento
              profesional
            </h1>
            <p className="mt-3 max-w-xl text-neutral-700 leading-relaxed">
              Acompañamos a personas mayores y a sus familias ofreciendo
              internación domiciliaria coordinada: menos traslados, menor
              exposición a infecciones y un entorno conocido que mejora la
              recuperación y el bienestar emocional.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
              >
                Escribir por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50"
              >
                Dejar una consulta
              </Link>
            </div>

            <p className="mt-3 text-sm text-neutral-600">
              También podés llamarnos al{" "}
              <a href={CONTACT.telHref} className="font-medium">
                {CONTACT.tel}
              </a>
              .
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-neutral-100"
          >
            <Image
              src="/internacion.jpg"
              alt="Cuidado en el hogar para personas mayores"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.header>

      {/* QUÉ RESUELVE */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <h2 className="mb-3 text-2xl font-semibold text-blue-700">
          Qué resuelve la internación domiciliaria
        </h2>
        <p className="max-w-4xl text-neutral-700 leading-relaxed">
          La internación domiciliaria es una alternativa segura para personas
          que, por su patología o edad, se benefician de permanecer en su casa
          con apoyo profesional. El entorno familiar reduce el estrés, disminuye
          el riesgo de infecciones intrahospitalarias y evita traslados
          innecesarios.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <HighlightCard title="Menos infecciones">
            Menor exposición a infecciones intrahospitalarias y reinternaciones
            evitables.
          </HighlightCard>
          <HighlightCard title="Entorno conocido">
            Permanecer en casa mejora el ánimo y la adherencia a las
            indicaciones.
          </HighlightCard>
          <HighlightCard title="Acompañamiento a la familia">
            Acompañamos a la familia en la organización del cuidado y la toma de
            decisiones.
          </HighlightCard>
        </div>
      </motion.section>

      {/* PARA QUIÉN */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-neutral-50 p-6 sm:p-8"
      >
        <h2 className="mb-3 text-2xl font-semibold text-blue-700">
          Para quién está pensada
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <ul className="space-y-2 text-neutral-700">
            <Bullet>
              Personas mayores con necesidad de apoyo diario en actividades de
              la vida cotidiana.
            </Bullet>
            <Bullet>
              Pacientes con movilidad reducida o riesgo de caídas.
            </Bullet>
            <Bullet>
              Personas recientemente dadas de alta que requieren seguimiento
              cercano.
            </Bullet>
          </ul>
          <ul className="space-y-2 text-neutral-700">
            <Bullet>
              Pacientes que se descompensan en internaciones prolongadas.
            </Bullet>
            <Bullet>
              Familias que buscan reducir traslados y organizar mejor el
              cuidado.
            </Bullet>
            <Bullet>
              Casos donde la permanencia en el hogar aporta más confort y
              estabilidad emocional.
            </Bullet>
          </ul>
        </div>
      </motion.section>

      {/* QUÉ INCLUYE */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-blue-700">
              Qué incluye el servicio
            </h2>
            <p className="mb-3 text-neutral-700">
              El plan de internación domiciliaria se diseña de forma
              personalizada según la complejidad del caso, siempre articulando
              con indicaciones médicas externas.
            </p>
            <ul className="space-y-2 text-neutral-700">
              <Bullet>
                Asistencia diaria y apoyo en higiene, alimentación y movilidad.
              </Bullet>
              <Bullet>
                Organización del entorno para mayor seguridad y confort.
              </Bullet>
              <Bullet>
                Seguimiento de indicaciones médicas y coordinación con
                profesionales tratantes.
              </Bullet>
              <Bullet>
                Comunicación periódica con la familia y ajustes del plan según
                la evolución.
              </Bullet>
              <Bullet>
                Planificación de turnos, horarios y frecuencia de visitas según
                necesidad.
              </Bullet>
            </ul>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border bg-neutral-100">
            <Image
              src="/internacion-equipo.jpg"
              alt="Equipo coordinando cuidados en el hogar"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* CÓMO TRABAJAMOS */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-neutral-50 p-6 sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          Cómo trabajamos
        </h2>
        <ol className="grid gap-4 sm:grid-cols-4">
          <Step
            n={1}
            text="Recibimos la consulta (teléfono, WhatsApp o formulario) y relevamos la situación clínica y familiar."
          />
          <Step
            n={2}
            text="Evaluamos la complejidad y definimos si la internación domiciliaria es la mejor alternativa."
          />
          <Step
            n={3}
            text="Diseñamos un plan de cuidados: horarios, frecuencia, perfil de cuidadores y coordinación profesional."
          />
          <Step
            n={4}
            text="Iniciamos el acompañamiento, con seguimiento continuo y comunicación permanente con la familia."
          />
        </ol>
      </motion.section>

      {/* BLOQUE FAMILIA / COBERTURAS */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-blue-700">
              Acompañamiento a la familia
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Sabemos que el cuidado en casa implica decisiones difíciles.
              Acompañamos a la familia en la organización del día a día, en la
              comunicación con profesionales tratantes y en la revisión del plan
              cuando la situación cambia.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-blue-700">
              Trabajo con coberturas médicas
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed sm:text-base">
              En cada caso revisamos la cobertura disponible y los circuitos de
              autorización. El objetivo es reducir reinternaciones evitables,
              optimizar recursos y sostener un cuidado de calidad en el hogar.
            </p>
          </div>
        </div>
      </motion.section>

      {/* TESTIMONIOS */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-blue-700">
          Lo que destacan las familias
        </h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-700">
            “Gracias al equipo, mi mamá pudo quedarse en casa con una atención
            muy humana. Nos explicaron cada paso y siempre hubo alguien
            disponible para responder dudas.”
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-neutral-700">
            “Notamos una gran diferencia en el ánimo de nuestro familiar al
            estar en su entorno, sin internaciones prolongadas. El
            acompañamiento fue claro y ordenado.”
          </blockquote>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        {...sectionInView}
        className="space-y-3 rounded-2xl border bg-white/90 p-6 sm:p-8"
      >
        <h2 className="mb-2 text-2xl font-semibold text-blue-700">
          Preguntas frecuentes
        </h2>
        <FAQ
          q="¿Qué incluye la internación domiciliaria?"
          a="Incluye cuidadores capacitados, asistencia en actividades diarias, seguimiento de indicaciones médicas externas, organización del entorno y comunicación permanente con la familia."
        />
        <FAQ
          q="¿Cómo sé si la internación domiciliaria es adecuada para nuestro caso?"
          a="En la primera consulta relevamos la situación clínica, el entorno y el apoyo disponible. Con esa información evaluamos si la internación domiciliaria es la opción más segura y conveniente."
        />
        <FAQ
          q="¿Trabajan con obras sociales o solo particular?"
          a="En cada caso revisamos la cobertura disponible y los circuitos de autorización. También trabajamos de forma particular cuando corresponde."
        />
        <FAQ
          q="¿En qué zonas brindan el servicio?"
          a="En CABA y Gran Buenos Aires, evaluando la disponibilidad del equipo según la dirección y la complejidad del caso."
        />
      </motion.section>

      {/* CTA FINAL */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 text-center sm:p-8"
      >
        <h2 className="mb-3 text-xl font-semibold sm:text-2xl">
          ¿Necesitás coordinar cuidados en el hogar?
        </h2>
        <p className="mx-auto mb-5 max-w-2xl text-neutral-700">
          Contanos la situación y evaluamos juntos si la internación
          domiciliaria es la mejor alternativa. La información es confidencial y
          sin compromiso.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Escribir por WhatsApp
          </a>
          <Link
            href="/contacto"
            className="rounded-lg border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50"
          >
            Ir a Contacto
          </Link>
        </div>
        <p className="mt-5 text-xs text-neutral-500">
          La información de esta página es orientativa y no reemplaza la
          consulta con profesionales de la salud.
        </p>
      </motion.section>
    </section>
  );
}

/* AUXILIARES */

function HighlightCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-xl border bg-neutral-50 p-4 shadow-sm"
    >
      <h3 className="mb-1 text-sm font-semibold text-neutral-900">{title}</h3>
      <p className="text-sm text-neutral-700">{children}</p>
    </motion.div>
  );
}

function Step({ n, text }: { n: number; text: string }) {
  return (
    <li className="rounded-xl border bg-white p-5 shadow-sm">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
        {n}
      </span>
      <p className="mt-3 text-sm text-neutral-700">{text}</p>
    </li>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-sm">
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

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border bg-white p-4 shadow-sm transition-colors duration-300 open:bg-blue-50 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex w-full cursor-pointer items-center justify-between gap-4 text-left">
        <span className="font-medium text-neutral-900">{q}</span>
        <svg
          className="h-5 w-5 shrink-0 text-neutral-500 transition-transform group-open:rotate-45"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            d="M12 5v14M5 12h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </summary>
      <div className="mt-3 border-t pt-3 text-sm font-medium text-neutral-800">
        {a}
      </div>
    </details>
  );
}
