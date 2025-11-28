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
      {/* HERO – PROMESA + CTA */}
      <motion.header
        {...heroAnim}
        className="relative overflow-hidden rounded-2xl border bg-black"
      >
        {/* Video de fondo */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/internacion-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/imagenes/internacion-hero-poster.jpg"
        />

        {/* Capa de degradado para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/60" />

        {/* Contenido */}
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 md:flex-row md:items-center">
          <div className="max-w-xl space-y-4 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200 shadow-sm ring-1 ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Internación domiciliaria en CABA y GBA
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.5rem]">
              Cuidado en el hogar para personas mayores, con seguimiento
              profesional
            </h1>

            <p className="text-sm leading-relaxed text-white/90 sm:text-base">
              Acompañamos a personas mayores y a sus familias ofreciendo
              internación domiciliaria coordinada: menos traslados, menor
              exposición a infecciones y un entorno conocido que mejora la
              recuperación y el bienestar emocional.
            </p>

            {/* Mini beneficios rápidos */}
            <div className="grid gap-3 text-xs text-white/90 sm:grid-cols-3 sm:text-sm">
              <div className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
                <p className="font-semibold">Menos infecciones</p>
                <p className="text-[11px] sm:text-xs">
                  Menor exposición a infecciones intrahospitalarias.
                </p>
              </div>
              <div className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
                <p className="font-semibold">Entorno conocido</p>
                <p className="text-[11px] sm:text-xs">
                  El hogar como eje del cuidado y la contención.
                </p>
              </div>
              <div className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10">
                <p className="font-semibold">Apoyo a la familia</p>
                <p className="text-[11px] sm:text-xs">
                  Acompañamos en la organización del día a día.
                </p>
              </div>
            </div>

            {/* CTA botones */}
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow-card transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
                className="inline-flex items-center rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/40 transition hover:bg-white/15 hover:ring-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Dejar una consulta
              </Link>
            </div>

            <p className="mt-3 text-xs text-white/80 sm:text-sm">
              También podés llamarnos al{" "}
              <a
                href={CONTACT.telHref}
                className="font-semibold underline-offset-2 hover:underline"
              >
                {CONTACT.tel}
              </a>
              .
            </p>
          </div>

          {/* Columna vacía para que el texto no ocupe todo el ancho en desktop */}
          <div className="hidden flex-1 md:block" />
        </div>
      </motion.header>

      {/* POR QUÉ CREAMOS ESTE SERVICIO (texto del cliente + cita) */}
      <motion.section
        {...sectionInView}
        className="grid gap-6 rounded-2xl border bg-white/95 p-6 shadow-sm sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:p-8"
      >
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-earh-blue-900">
            ¿Por qué creamos el servicio de internación domiciliaria?
          </h2>
          <p className="text-sm text-neutral-700 leading-relaxed sm:text-base">
            Nace de una problemática real que viven muchas familias:{" "}
            <strong>
              personas mayores, padres, tíos o niños que necesitan asistencia
              continua
            </strong>{" "}
            y para quienes el hogar es el lugar donde se sienten contenidos.
            Nuestro objetivo es que puedan recibir cuidados idóneos sin perder
            su entorno afectivo.
          </p>
          <p className="text-sm text-neutral-700 leading-relaxed sm:text-base">
            La internación domiciliaria permite que la recuperación continúe en
            casa, disminuyendo infecciones intrahospitalarias y evitando
            reinternaciones innecesarias, con mayor{" "}
            <strong>contención para el paciente y su familia</strong>.
          </p>
          <p className="text-xs text-neutral-600 sm:text-sm">
            Distintas financiadoras de salud demuestran que este modelo{" "}
            <strong>reduce hasta un 60% los costos de internación</strong> y
            disminuye reinternaciones en adultos en un 50% y en pediatría en un
            80%.
          </p>
        </div>

        <aside className="space-y-4 rounded-2xl border border-earh-blue-100 bg-earh-cream-50/80 p-5 text-base text-neutral-800 shadow-sm sm:p-6 sm:text-base">
          <p className="text-sm font-semibold uppercase tracking-wide text-earh-blue-700">
            Mirada sobre las personas mayores
          </p>

          <p className="text-sm text-neutral-700 leading-relaxed">
            El siguiente extracto, citado del Papa Francisco, resume una parte
            importante de la motivación detrás de este servicio:
          </p>

          <blockquote className="mt-3 space-y-3 border-l-4 border-earh-blue-500 pl-4 text-sm italic leading-relaxed text-neutral-800 sm:text-[15px]">
            <p>
              “Gracias a los progresos de la medicina, la vida se ha prolongado:
              pero la sociedad no se ha prolongado a la vida. El número de los
              ancianos se ha multiplicado, pero nuestras sociedades no se han
              organizado suficientemente para hacerles lugar a ellos, con justo
              respeto y concreta consideración por su fragilidad y su dignidad.”
            </p>
            <p>
              “Mientras somos jóvenes, tenemos la tendencia a ignorar la vejez…
              Y los ancianos son una riqueza, no se pueden ignorar”.
            </p>
          </blockquote>

          <p className="text-sm text-neutral-600 leading-relaxed">
            Este servicio busca justamente lo contrario:{" "}
            <strong className="text-neutral-800">
              darles lugar, cuidado y respeto
            </strong>{" "}
            en un entorno donde se sientan verdaderamente acompañados.
          </p>
        </aside>
      </motion.section>

      {/* QUÉ RESUELVE / BENEFICIOS CLAVE */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900">
          Qué resuelve la internación domiciliaria
        </h2>
        <p className="max-w-4xl text-sm text-neutral-700 leading-relaxed sm:text-base">
          Es una alternativa segura para personas que, por su patología o edad,
          se benefician de permanecer en su casa con apoyo profesional. El
          entorno familiar reduce el estrés, disminuye el riesgo de infecciones
          intrahospitalarias y evita traslados innecesarios.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <HighlightCard title="Menos infecciones y reinternaciones">
            Menor exposición a infecciones intrahospitalarias y disminución de
            reinternaciones evitables en adultos y niños.
          </HighlightCard>
          <HighlightCard title="Entorno conocido y contención">
            Permanecer en casa mejora el ánimo, reduce la confusión y fortalece
            el vínculo con la familia.
          </HighlightCard>
          <HighlightCard title="Uso más eficiente de recursos">
            Reducción de costos de internación y mejor organización del cuidado
            en coordinación con el sistema de salud.
          </HighlightCard>
        </div>
      </motion.section>

      {/* PARA QUIÉN ESTÁ PENSADA */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-earh-cream-50 p-6 sm:p-8"
      >
        <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900">
          ¿Para quién está pensada la internación domiciliaria?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <ul className="space-y-2 text-neutral-700">
            <Bullet>
              Personas mayores que necesitan apoyo diario en higiene, movilidad
              y alimentación.
            </Bullet>
            <Bullet>
              Pacientes con movilidad reducida o riesgo de caídas, para quienes
              los traslados son complejos.
            </Bullet>
            <Bullet>
              Personas recientemente dadas de alta que requieren seguimiento
              cercano para evitar reinternaciones.
            </Bullet>
          </ul>
          <ul className="space-y-2 text-neutral-700">
            <Bullet>
              Pacientes que se descompensan o se desorientan en internaciones
              prolongadas.
            </Bullet>
            <Bullet>
              Familias que necesitan organizar el cuidado y turnos entre varios
              integrantes.
            </Bullet>
            <Bullet>
              Casos donde la permanencia en el hogar aporta más confort y
              estabilidad emocional que la institución.
            </Bullet>
          </ul>
        </div>
      </motion.section>

      {/* QUÉ INCLUYE EL SERVICIO */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-8 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] sm:items-center">
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900">
              Qué incluye el servicio de internación domiciliaria
            </h2>
            <p className="mb-3 text-sm text-neutral-700 sm:text-base">
              El plan se diseña de forma personalizada según la complejidad del
              caso, siempre articulando con indicaciones médicas externas y con
              el equipo tratante.
            </p>
            <ul className="space-y-2 text-sm text-neutral-700 sm:text-base">
              <Bullet>
                Asistencia diaria y apoyo en higiene, alimentación y movilidad.
              </Bullet>
              <Bullet>
                Organización del entorno del hogar para mayor seguridad y
                confort.
              </Bullet>
              <Bullet>
                Seguimiento de indicaciones médicas, medicación y estudios.
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

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-neutral-100 shadow-sm">
            <Image
              src="imagenes\internacion-equipo.jpeg"
              alt="Equipo coordinando cuidados de internación domiciliaria en el hogar"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* GUÍA DE CUIDADOS EN EL HOGAR */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-earh-cream-50 p-6 sm:p-8"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Columna izquierda: guía + tips */}
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900">
              Guía breve de cuidados de adultos mayores en el hogar
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Cuando una persona mayor empieza a necesitar{" "}
              <strong>ayuda diaria en casa</strong>, la familia suele hacer lo
              posible por organizarse: turnos, medicación, controles, traslados.
              Con el tiempo, esa carga puede volverse difícil de sostener sin
              apoyo. La internación domiciliaria aparece justamente para ordenar
              ese cuidado y acompañar tanto al paciente como a la familia.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <TipCard number={1} title="Ordenar la rutina">
                Armar horarios claros para medicación, higiene, comidas y
                descanso reduce el estrés y ayuda a que la familia sepa qué
                esperar cada día.
              </TipCard>
              <TipCard number={2} title="Cuidar el entorno físico">
                Pequeños cambios en la casa —buena iluminación, retirar
                obstáculos, adaptar el baño— pueden prevenir caídas y
                descompensaciones.
              </TipCard>
              <TipCard number={3} title="No cuidar en soledad">
                Compartir el cuidado con otros familiares y con{" "}
                <strong>cuidadores capacitados</strong> evita el desgaste
                emocional y mejora la calidad de vida de todos.
              </TipCard>
            </div>
          </div>

          {/* Columna derecha: señales + CTA emocional */}
          <div className="rounded-2xl border border-earh-blue-50 bg-white/90 p-5 shadow-sm">
            <h3 className="mb-2 text-sm font-semibold text-earh-blue-900">
              Señales de que puede ser momento de pedir ayuda
            </h3>
            <p className="mb-3 text-sm text-neutral-700">
              Muchas familias nos consultan cuando empiezan a notar alguna de
              estas situaciones en el día a día:
            </p>
            <ul className="space-y-2 text-sm text-neutral-700">
              <Bullet>
                Aumentan las caídas, olvidos o episodios de desorientación en el
                hogar.
              </Bullet>
              <Bullet>
                La familia siente que ya no puede sostener sola el cuidado todo
                el tiempo.
              </Bullet>
              <Bullet>
                Cada traslado al sanatorio se vive con mucha tensión o cansancio
                físico.
              </Bullet>
              <Bullet>
                Hay <strong>internaciones repetidas</strong> o descompensaciones
                poco después de cada alta.
              </Bullet>
            </ul>
            <p className="mt-3 text-xs text-neutral-600">
              Si te reconocés en alguno de estos puntos, no significa que la
              familia haya hecho algo mal. Es una señal de que quizás sea útil
              pensar un plan de{" "}
              <strong>internación domiciliaria acompañada por un equipo</strong>
              .
            </p>
            <p className="mt-2 text-xs text-neutral-600">
              Podés contarnos la situación por WhatsApp y ver juntos si esta
              modalidad se ajusta a tu caso:{" "}
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

      {/* CÓMO TRABAJAMOS – PASOS */}
      <motion.section
        {...sectionInView}
        id="como-trabajamos"
        className="rounded-2xl border bg-earh-cream-50 p-6 sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-earh-blue-900">
          Cómo trabajamos con la internación domiciliaria
        </h2>
        <ol className="grid gap-4 sm:grid-cols-4">
          <Step
            n={1}
            text="Recibimos la consulta (teléfono, WhatsApp o formulario) y relevamos la situación clínica y familiar."
          />
          <Step
            n={2}
            text="Evaluamos la complejidad y definimos si la internación domiciliaria es la alternativa adecuada."
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

      {/* FAMILIA + COBERTURAS */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-earh-blue-900">
              Acompañamiento a la familia
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed sm:text-base">
              Sabemos que el cuidado en casa implica decisiones difíciles.
              Acompañamos a la familia en la organización del día a día, en la
              comunicación con los profesionales tratantes y en la revisión del
              plan cuando la situación cambia. El objetivo es que{" "}
              <strong>nadie se sienta solo</strong> en el proceso.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-earh-blue-900">
              Trabajo con coberturas médicas
            </h2>
            <p className="text-sm text-neutral-700 leading-relaxed sm:text-base">
              En cada caso revisamos la cobertura disponible y los circuitos de
              autorización. Buscamos reducir reinternaciones evitables,
              optimizar recursos y sostener un cuidado de calidad en el hogar,
              tanto para pacientes particulares como con cobertura médica.
            </p>
          </div>
        </div>
      </motion.section>

      {/* TESTIMONIOS / PRUEBA SOCIAL */}
      <motion.section
        {...sectionInView}
        className="rounded-2xl border bg-white/90 p-6 sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-earh-blue-900">
          Lo que destacan las familias
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Testimonial>
            “Gracias al equipo, mi mamá pudo quedarse en casa con una atención
            muy humana. Nos explicaron cada paso y siempre hubo alguien
            disponible para responder dudas.”
          </Testimonial>
          <Testimonial>
            “Notamos una gran diferencia en el ánimo de nuestro familiar al
            estar en su entorno, sin internaciones prolongadas. El
            acompañamiento fue claro y ordenado.”
          </Testimonial>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        {...sectionInView}
        className="space-y-3 rounded-2xl border bg-white/90 p-6 sm:p-8"
      >
        <h2 className="mb-2 text-2xl font-semibold text-earh-blue-900">
          Preguntas frecuentes sobre internación domiciliaria
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
        <h2 className="mb-3 text-xl font-semibold text-earh-blue-900 sm:text-2xl">
          ¿Necesitás coordinar cuidados en el hogar?
        </h2>
        <p className="mx-auto mb-5 max-w-2xl text-sm text-neutral-700 sm:text-base">
          Contanos la situación y evaluamos juntos si la internación
          domiciliaria es la mejor alternativa para tu familiar. La información
          es confidencial y sin compromiso.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-card transition-colors duration-200 hover:bg-blue-700"
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
}

/* AUXILIARES */

function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-earh-blue-100 bg-white/90 px-3 py-1.5 shadow-sm">
      <span className="text-sm font-semibold text-earh-blue-800">{value}</span>
      <span className="text-[11px] text-neutral-600">{label}</span>
    </div>
  );
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
      <p className="italic">“{children}”</p>
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
      <p className="mt-2 text-xs sm:text-sm text-neutral-700">{children}</p>
    </div>
  );
}
