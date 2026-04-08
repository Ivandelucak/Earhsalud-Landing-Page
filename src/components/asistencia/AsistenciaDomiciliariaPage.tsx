"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const CONTACT = {
  tel: "+54 11 4743-2525",
  telHref: "tel:+541147432525",
  whatsapp: "+54 11 3003-1247",
  whatsappHref:
    "https://wa.me/541130031247?text=Hola%20Earh%20Salud%2C%20quisiera%20informaci%C3%B3n%20sobre%20asistencia%20domiciliaria",
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

export default function AsistenciaDomiciliariaPage() {
  return (
    <section className="space-y-16">
      <motion.header
        {...heroAnim}
        className="relative overflow-hidden rounded-2xl border bg-black"
      >
        <div className="absolute inset-0">
          <Image
            src="/imagenes/profesional-explicando-papel-hero-asistencia.jpeg"
            alt="Profesional de salud explicando indicaciones a un paciente en su domicilio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_center] sm:object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/55 to-white/8" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Asistencia domiciliaria en CABA y GBA
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-earh-blue-900 sm:text-4xl lg:text-[2.9rem]">
                Prestaciones en domicilio para resolver necesidades concretas,
                con el profesional indicado para cada caso
              </h1>

              <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
                Brindamos asistencia domiciliaria para personas que necesitan
                apoyo en su vida diaria, recuperación o tratamiento, coordinando
                prestaciones médicas y asistenciales en el hogar con una
                respuesta ágil, clara y personalizada.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <ServiceChip>Consulta médica en domicilio</ServiceChip>
                <ServiceChip>Enfermería</ServiceChip>
                <ServiceChip>Kinesiología</ServiceChip>
                <ServiceChip>Acompañamiento</ServiceChip>
                <ServiceChip>Cuidado cotidiano</ServiceChip>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Servicio flexible según necesidad, sin requerir internación
              domiciliaria
            </div>

            <div className="grid gap-3 text-sm sm:grid-cols-3">
              <div className="rounded-xl border border-earh-blue-100 bg-white/92 px-4 py-3 shadow-sm backdrop-blur-sm">
                <p className="font-semibold text-earh-blue-900">
                  Prestaciones específicas
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                  Atención puntual según la necesidad del paciente.
                </p>
              </div>

              <div className="rounded-xl border border-earh-blue-100 bg-white/92 px-4 py-3 shadow-sm backdrop-blur-sm">
                <p className="font-semibold text-earh-blue-900">
                  Coordinación flexible
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                  Frecuencia y modalidad definidas según cada caso.
                </p>
              </div>

              <div className="rounded-xl border border-earh-blue-100 bg-white/92 px-4 py-3 shadow-sm backdrop-blur-sm">
                <p className="font-semibold text-earh-blue-900">
                  Más comodidad
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                  Menos traslados y más contención en el hogar.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow-card transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
              >
                <span className="inline-flex h-4 w-4 items-center justify-center">
                  <svg
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.253.62 4.366 1.8 6.22L4 29l7.013-1.786A12.02 12.02 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.96 9.96 0 0 1-4.992-1.35l-.357-.21-4.154 1.06 1.11-4.05-.23-.373A9.94 9.94 0 0 1 6 15C6 9.486 10.486 5 16 5zm-3.07 4.5c-.256 0-.67.097-.985.485-.316.389-1.294 1.264-1.294 3.084 0 1.82 1.326 3.58 1.511 3.826.186.246 2.54 4.06 6.108 5.528 3.02 1.238 3.64.991 4.296.93.656-.062 2.12-.867 2.417-1.705.297-.838.297-1.555.211-1.705-.086-.149-.316-.238-.66-.416-.344-.178-2.03-1.003-2.344-1.118-.313-.116-.542-.178-.772.178-.23.356-.888 1.118-1.089 1.347-.201.23-.401.259-.745.081-.344-.178-1.45-.534-2.763-1.702-1.021-.91-1.71-2.034-1.911-2.389-.201-.356-.021-.548.152-.726.156-.155.344-.402.516-.604.172-.202.23-.345.344-.575.115-.23.058-.431-.029-.604-.086-.173-.758-1.86-1.073-2.545-.282-.613-.573-.63-.829-.63z" />
                  </svg>
                </span>
                Escribir por WhatsApp
              </a>

              <Link
                href="/contacto"
                className="inline-flex items-center rounded-lg border border-earh-blue-200 bg-white/92 px-5 py-2.5 text-sm font-medium text-earh-blue-900 shadow-sm transition hover:bg-earh-blue-50"
              >
                Dejar una consulta
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
              <QuickStat
                title="Sin traslados"
                subtitle="Atención en el hogar"
              />
              <QuickStat title="Flexible" subtitle="Según cada caso" />
              <QuickStat title="Profesionales" subtitle="Experiencia real" />
              <QuickStat title="Ágil" subtitle="Coordinación clara" />
            </div>

            <p className="text-xs text-neutral-700 sm:text-sm">
              También podés llamarnos al{" "}
              <a
                href={CONTACT.telHref}
                className="font-semibold text-earh-blue-700 underline-offset-2 hover:underline"
              >
                {CONTACT.tel}
              </a>
              .
            </p>
          </div>
        </div>
      </motion.header>

      <div className="space-y-5">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-earh-blue-700">
            Ejemplos frecuentes
          </p>
          <h2 className="mt-2 text-xl font-semibold text-earh-blue-900 sm:text-2xl">
            Situaciones en las que la asistencia domiciliaria puede ser la mejor
            opción
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            Estas son algunas de las situaciones más habituales en las que una
            prestación en domicilio puede aportar comodidad, claridad y una
            respuesta profesional adaptada al caso.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ExampleCard
            title="Consulta médica"
            text="Cuando trasladarse no es la mejor opción."
          />
          <ExampleCard
            title="Enfermería"
            text="Prestaciones indicadas y seguimiento profesional."
          />
          <ExampleCard
            title="Kinesiología"
            text="Sesiones en domicilio según planificación."
          />
          <ExampleCard
            title="Acompañamiento"
            text="Apoyo cotidiano y contención en el hogar."
          />
        </div>
      </div>
      <motion.section
        {...sectionInView}
        className="grid gap-6 rounded-2xl border bg-white/95 p-6 shadow-sm sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:p-8"
      >
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-earh-blue-900">
            ¿Qué es la asistencia domiciliaria?
          </h2>

          <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
            La asistencia domiciliaria es un conjunto de servicios de apoyo
            brindados en el hogar a personas que necesitan ayuda para realizar
            actividades de la vida diaria, ya sea por enfermedad, discapacidad,
            edad avanzada o recuperación de una cirugía.
          </p>

          <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
            Incluye prestaciones médicas y asistenciales orientadas a cubrir
            necesidades básicas, sociales y, en algunos casos, sanitarias, sin
            llegar a la complejidad de una internación domiciliaria.
          </p>

          <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
            Es una modalidad pensada para acompañar situaciones concretas con
            mayor comodidad para el paciente y su entorno, evitando traslados
            innecesarios y facilitando el acceso a profesionales en el lugar
            donde la persona se siente más contenida: su hogar.
          </p>

          <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
            Puede responder tanto a necesidades puntuales como a apoyos más
            frecuentes en la rutina diaria, siempre adaptándose al grado de
            dependencia, a la indicación profesional y a la realidad de cada
            familia.
          </p>

          <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
            Nuestro objetivo es brindar una respuesta cercana y profesional,
            coordinando siempre{" "}
            <strong>el perfil más adecuado para cada situación</strong>, con una
            atención clara, humana y organizada.
          </p>
        </div>

        <aside className="space-y-4 rounded-2xl border border-earh-blue-100 bg-earh-cream-50/80 p-5 text-base text-neutral-800 shadow-sm sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-earh-blue-700">
            Un servicio flexible y orientado a la necesidad real
          </p>

          <p className="text-sm leading-relaxed text-neutral-700">
            La asistencia domiciliaria está pensada para personas con cierto
            grado de dependencia o para situaciones donde hace falta apoyo
            profesional en el hogar, sin necesidad de montar un esquema de
            internación domiciliaria.
          </p>

          <blockquote className="mt-3 space-y-3 border-l-4 border-earh-blue-500 pl-4 text-sm italic leading-relaxed text-neutral-800 sm:text-[15px]">
            <p>
              No se trata de enviar una solución genérica, sino de entender qué
              necesita el paciente, cuál es el contexto familiar y qué
              prestación conviene coordinar en ese momento.
            </p>
            <p>
              Ese criterio es el que permite brindar una atención más clara,
              humana y efectiva.
            </p>
          </blockquote>

          <p className="text-sm leading-relaxed text-neutral-600">
            Nos relacionamos con profesionales con{" "}
            <strong className="text-neutral-800">
              más de 30 años de experiencia
            </strong>{" "}
            en instituciones de salud, lo que nos permite coordinar prestaciones
            con seriedad, confianza y respaldo.
          </p>
        </aside>
      </motion.section>
      <div className="flex items-center gap-3 py-1">
        <div className="h-px flex-1 bg-neutral-200" />
        <span className="text-xs uppercase tracking-wide text-neutral-500">
          Atención en domicilio, adaptada a cada caso
        </span>
        <div className="h-px flex-1 bg-neutral-200" />
      </div>
      <motion.section
        {...sectionInView}
        className="space-y-5 rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold text-earh-blue-900">
            Qué tipo de asistencia puede coordinarse en domicilio
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
            La asistencia domiciliaria combina prestaciones médicas,
            asistenciales y de apoyo cotidiano según la necesidad del paciente,
            el contexto familiar y el tipo de acompañamiento que convenga en
            cada situación.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <ServiceTypeCard
            title="Especialidades médicas"
            items={["Clínicos", "Cardiólogos", "Traumatólogos", "Infectólogos"]}
            text="Profesionales que pueden asistir al domicilio cuando el caso lo permite y la necesidad lo requiere."
          />

          <ServiceTypeCard
            title="Prestaciones asistenciales"
            items={[
              "Enfermería",
              "Kinesiología con y sin aparatología",
              "Acompañantes terapéuticos",
              "Cuidadores domiciliarios",
            ]}
            text="Apoyo profesional orientado al cuidado, recuperación y acompañamiento en el hogar."
          />

          <ServiceTypeCard
            title="Apoyo cotidiano"
            items={[
              "Higiene personal",
              "Alimentación",
              "Movilización y acompañamiento",
              "Medicación según indicación",
            ]}
            text="Intervenciones que ayudan a sostener la rutina diaria con más comodidad, orden y contención."
          />
        </div>

        <p className="max-w-3xl text-sm leading-relaxed text-neutral-700">
          Estas son algunas de las prestaciones más habituales. Cada caso se
          evalúa de manera particular para coordinar la modalidad, la frecuencia
          y el profesional más adecuado para el paciente.
        </p>
      </motion.section>
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-earh-cream-50 p-6 sm:p-8"
      >
        <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900">
          ¿Para quién está pensada la asistencia domiciliaria?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <ul className="space-y-2 text-neutral-700">
            <Bullet>
              Personas con cierto grado de dependencia que necesitan apoyo en su
              vida diaria sin requerir una internación domiciliaria.
            </Bullet>
            <Bullet>
              Pacientes con dificultades para trasladarse a un consultorio o
              centro médico.
            </Bullet>
            <Bullet>
              Personas en recuperación de una cirugía, con discapacidad o edad
              avanzada que se benefician de recibir apoyo en su hogar.
            </Bullet>
          </ul>
          <ul className="space-y-2 text-neutral-700">
            <Bullet>
              Familias que buscan resolver una necesidad concreta con apoyo
              profesional en el domicilio.
            </Bullet>
            <Bullet>
              Situaciones que requieren seguimiento profesional específico, pero
              no una estructura integral de internación domiciliaria.
            </Bullet>
            <Bullet>
              Casos donde el hogar ofrece más comodidad, contención y orden para
              el paciente y su entorno.
            </Bullet>
          </ul>
        </div>
      </motion.section>
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-earh-cream-50 p-6 sm:p-8"
      >
        <div className="max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold text-earh-blue-900">
            Situaciones frecuentes en las que este servicio puede ayudar
          </h2>
          <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
            Muchas familias llegan a la asistencia domiciliaria cuando necesitan
            una solución concreta, profesional y posible, sin tener que
            organizar una internación domiciliaria completa.
          </p>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <ExampleSituation
            title="El paciente necesita una consulta en su casa"
            text="Cuando trasladarse es complejo o desgastante, una visita profesional en domicilio puede ser la opción más práctica."
          />
          <ExampleSituation
            title="Hace falta apoyo puntual en la rutina diaria"
            text="Higiene, alimentación, movilización o acompañamiento pueden requerir apoyo profesional en determinados momentos."
          />
          <ExampleSituation
            title="Se indicó una prestación específica"
            text="Enfermería, kinesiología o administración de medicación según indicación pueden coordinarse en el hogar."
          />
          <ExampleSituation
            title="La familia necesita ordenar el cuidado"
            text="A veces no hace falta una internación, pero sí orientación y una intervención clara para sostener el día a día."
          />
        </div>
      </motion.section>
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-8 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] sm:items-center">
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900">
              En qué se diferencia la asistencia domiciliaria de una internación
              domiciliaria
            </h2>
            <p className="mb-3 text-sm text-neutral-700 sm:text-base">
              Aunque ambas modalidades se desarrollan en el hogar, no responden
              al mismo nivel de complejidad ni al mismo objetivo.
            </p>
            <ul className="space-y-2 text-sm text-neutral-700 sm:text-base">
              <Bullet>
                La asistencia domiciliaria se enfoca en el{" "}
                <strong>cuidado cotidiano y el bienestar general</strong> del
                paciente en su hogar.
              </Bullet>
              <Bullet>
                Incluye <strong>prestaciones específicas</strong>, como visitas
                profesionales, apoyo cotidiano o intervenciones puntuales según
                indicación o necesidad.
              </Bullet>
              <Bullet>
                La internación domiciliaria implica una{" "}
                <strong>atención médica más compleja e integral</strong>,
                equivalente a un hospital en casa cuando la condición clínica lo
                permite.
              </Bullet>
              <Bullet>
                Evaluamos cada situación para indicar la modalidad más adecuada,
                evitando confusiones y sobreintervenciones.
              </Bullet>
            </ul>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-neutral-100 shadow-sm">
            <Image
              src="/imagenes/profesional-midiendo-presion.jpeg"
              alt="Profesional de salud midiendo la presión en una visita de asistencia domiciliaria"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-earh-cream-50 p-6 sm:p-8"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900">
              Cómo trabajamos la coordinación de cada caso
            </h2>
            <p className="leading-relaxed text-neutral-700">
              La clave del servicio no es solo contar con profesionales, sino
              saber{" "}
              <strong>qué perfil conviene asignar en cada situación</strong>.
              Para eso escuchamos la necesidad, analizamos el contexto y
              definimos la prestación más adecuada.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <TipCard number={1} title="Escuchamos la necesidad">
                Relevamos qué está pasando, qué prestación se busca y cuál es la
                situación del paciente y su entorno.
              </TipCard>
              <TipCard number={2} title="Definimos el perfil adecuado">
                Seleccionamos el profesional o tipo de prestación que mejor
                responda al caso.
              </TipCard>
              <TipCard number={3} title="Coordinamos la intervención">
                Organizamos frecuencia, modalidad y seguimiento para que la
                atención sea clara, ordenada y posible para la familia.
              </TipCard>
            </div>
          </div>

          <div className="rounded-2xl border border-earh-blue-50 bg-white/90 p-5 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-earh-blue-900">
              Objetivos del servicio
            </h3>
            <p className="mb-3 text-sm text-neutral-700">
              La asistencia domiciliaria busca acompañar al paciente y su
              entorno con una modalidad flexible, humana y profesional.
            </p>
            <ul className="space-y-2 text-sm text-neutral-700">
              <Bullet>Favorecer la autonomía del paciente.</Bullet>
              <Bullet>Mejorar su calidad de vida.</Bullet>
              <Bullet>Evitar institucionalización innecesaria.</Bullet>
              <Bullet>Brindar contención y apoyo a la familia.</Bullet>
            </ul>
            <p className="mt-3 text-xs text-neutral-600">
              Si te reconocés en alguna de estas necesidades, podemos orientarte
              para ver si la <strong>asistencia domiciliaria</strong> es la
              modalidad adecuada.
            </p>
            <p className="mt-2 text-xs text-neutral-600">
              Podés contarnos la situación por WhatsApp:{" "}
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-earh-blue-700 underline-offset-2 hover:underline"
              >
                escribir por WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      </motion.section>
      <motion.section
        {...sectionInView}
        id="como-trabajamos"
        className="rounded-2xl border bg-earh-cream-50 p-6 sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-earh-blue-900">
          Cómo trabajamos con la asistencia domiciliaria
        </h2>
        <ol className="grid gap-4 sm:grid-cols-4">
          <Step
            n={1}
            text="Nos contás la necesidad del paciente y el contexto en el que se encuentra."
          />
          <Step
            n={2}
            text="Evaluamos qué tipo de prestación conviene y qué perfil profesional se ajusta mejor al caso."
          />
          <Step
            n={3}
            text="Coordinamos la visita, la frecuencia y la modalidad de atención según la necesidad."
          />
          <Step
            n={4}
            text="Hacemos seguimiento para sostener una respuesta clara, ordenada y posible para la familia."
          />
        </ol>
      </motion.section>
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-earh-blue-900">
              Atención personalizada
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              Cada persona necesita algo distinto. Por eso trabajamos con un
              enfoque personalizado, seleccionando el profesional más adecuado
              para cada situación y evitando soluciones genéricas.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-earh-blue-900">
              Acompañamiento a la familia
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              También acompañamos a la familia en la organización del cuidado y
              en la comprensión de cada paso, para que la atención en domicilio
              sea más clara, ordenada y tranquila para todos.
            </p>
          </div>
        </div>
      </motion.section>
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-earh-blue-900">
          Lo que valoran las familias
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Testimonial>
            Nos ayudaron a resolver una necesidad puntual en casa con mucha más
            claridad y organización. Sentimos que entendieron exactamente qué
            necesitábamos.
          </Testimonial>
          <Testimonial>
            Lo que más valoramos fue que no coordinaron una solución genérica:
            nos orientaron y asignaron un profesional muy adecuado para el caso.
          </Testimonial>
        </div>
      </motion.section>
      <motion.section
        {...sectionInView}
        className="space-y-3 rounded-2xl border bg-white/90 p-6 sm:p-8"
      >
        <h2 className="mb-2 text-2xl font-semibold text-earh-blue-900">
          Preguntas frecuentes sobre asistencia domiciliaria
        </h2>
        <FAQ
          q="¿Qué es la asistencia domiciliaria?"
          a="Es un conjunto de servicios de apoyo brindados en el hogar a personas que necesitan ayuda para realizar actividades de la vida diaria, ya sea por enfermedad, discapacidad, edad avanzada o recuperación de una cirugía, sin llegar a la complejidad de una internación domiciliaria."
        />
        <FAQ
          q="¿Qué tipo de prestaciones pueden coordinarse?"
          a="Según el caso, se pueden coordinar especialidades médicas, enfermería, kinesiología con y sin aparatología, acompañantes terapéuticos, cuidadores domiciliarios y apoyo cotidiano vinculado al cuidado."
        />
        <FAQ
          q="¿En qué se diferencia de la internación domiciliaria?"
          a="La asistencia domiciliaria se enfoca en el cuidado cotidiano y en prestaciones específicas. La internación domiciliaria, en cambio, implica una atención más compleja, integral y sostenida en el hogar."
        />
        <FAQ
          q="¿En qué zonas brindan el servicio?"
          a="En CABA y Gran Buenos Aires, evaluando la disponibilidad según la dirección y el tipo de prestación requerida."
        />
      </motion.section>
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 text-center sm:p-8"
      >
        <h2 className="mb-3 text-xl font-semibold text-earh-blue-900 sm:text-2xl">
          ¿Necesitás coordinar una prestación en domicilio?
        </h2>
        <p className="mx-auto mb-5 max-w-2xl text-sm text-neutral-700 sm:text-base">
          Contanos la situación y evaluamos juntos qué tipo de asistencia
          domiciliaria puede adaptarse mejor al caso. La información es
          confidencial y sin compromiso.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow-card transition-colors duration-200 hover:bg-emerald-600"
          >
            Escribir por WhatsApp
          </a>
          <Link
            href="/contacto"
            className="rounded-lg border px-5 py-2.5 text-sm font-medium text-earh-blue-900 transition-colors duration-200 hover:bg-neutral-50"
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

  function MiniExample({ title, text }: { title: string; text: string }) {
    return (
      <div className="rounded-xl border border-earh-blue-50 bg-earh-cream-50/70 p-4">
        <p className="text-sm font-semibold text-earh-blue-900">{title}</p>
        <p className="mt-1 text-xs leading-relaxed text-neutral-700">{text}</p>
      </div>
    );
  }

  function ServiceTypeCard({
    title,
    items,
    text,
  }: {
    title: string;
    items: string[];
    text: string;
  }) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        className="rounded-2xl border border-earh-blue-100 bg-earh-cream-50/60 p-5 shadow-sm transition-all duration-200 hover:shadow-lg"
      >
        <h3 className="text-base font-semibold text-earh-blue-900">{title}</h3>

        <ul className="mt-3 space-y-1.5 text-sm text-neutral-700">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-earh-blue-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm leading-relaxed text-neutral-700">{text}</p>
      </motion.div>
    );
  }

  function ExampleSituation({ title, text }: { title: string; text: string }) {
    return (
      <motion.div
        whileHover={{ y: -3, scale: 1.01 }}
        className="rounded-xl border border-earh-blue-100 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-lg"
      >
        <h3 className="text-sm font-semibold text-earh-blue-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-700">{text}</p>
      </motion.div>
    );
  }
}

function HighlightCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-xl border border-earh-blue-50 bg-earh-cream-50/70 p-4 shadow-sm transition-shadow duration-200 hover:shadow-card"
    >
      <h3 className="mb-1 text-sm font-semibold text-earh-blue-900">{title}</h3>
      <p className="text-sm text-neutral-700">{children}</p>
    </motion.div>
  );
}

function Step({ n, text }: { n: number; text: string }) {
  return (
    <li className="rounded-xl border bg-white p-5 shadow-sm">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-earh-blue-600 text-sm font-semibold text-white">
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
        className="mt-[3px] h-4 w-4 shrink-0 text-earh-blue-600"
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
    <details className="group rounded-xl border bg-white p-4 shadow-sm transition-colors duration-300 open:bg-earh-cream-50 [&_summary::-webkit-details-marker]:hidden">
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

function Testimonial({ children }: { children: React.ReactNode }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-earh-blue-50 bg-earh-cream-50/80 p-4 text-sm text-neutral-800 shadow-sm sm:p-5">
      <p className="italic">{children}</p>
    </figure>
  );
}

function TipCard({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="h-full rounded-xl border border-earh-blue-50 bg-white/95 p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-earh-blue-600 text-xs font-semibold text-white">
          {number}
        </span>
        <h3 className="text-sm font-semibold text-earh-blue-900">{title}</h3>
      </div>
      <p className="mt-2 text-xs text-neutral-700 sm:text-sm">{children}</p>
    </div>
  );
}
function ServiceChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-earh-blue-200 bg-earh-blue-50 px-3 py-1 text-xs font-medium text-earh-blue-800">
      {children}
    </span>
  );
}

function QuickStat({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-xl border border-earh-blue-100 bg-white/92 px-3 py-3 text-center shadow-sm backdrop-blur-sm">
      <p className="text-sm font-semibold text-earh-blue-900">{title}</p>
      <p className="text-xs text-neutral-600">{subtitle}</p>
    </div>
  );
}
function ExampleCard({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="group rounded-2xl border border-earh-blue-100 bg-white p-5 shadow-sm transition-all duration-200 hover:border-earh-blue-200 hover:shadow-lg"
    >
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-earh-blue-50 text-earh-blue-700 transition group-hover:bg-earh-blue-100">
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M20 6L9 17l-5-5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h3 className="text-sm font-semibold text-earh-blue-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700">{text}</p>
    </motion.div>
  );
}
