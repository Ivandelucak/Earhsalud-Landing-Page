"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

const CONTACT = {
  tel: "+54 11 4743-2525",
  telHref: "tel:+541147432525",
  whatsapp: "+54 11 3003-1247",
  whatsappHref:
    "https://wa.me/541130031247?text=Hola%20Earh%20Salud%2C%20quisiera%20hacer%20una%20consulta",
  instagram: "https://www.instagram.com/earhsalud/?hl=es",
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
} as const;

const STATS = [
  {
    value: 25,
    suffix: "+",
    label: "familias acompañadas en internación y asistencia domiciliaria",
  },
  {
    value: 30,
    suffix: "+",
    label: "profesionales activos en nuestra red de atención",
  },
  {
    value: 30,
    suffix: "+",
    label: "años de experiencia en salud",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Gracias al equipo de Earh Salud pudimos organizar la atención de mi papá en su casa con mucha más tranquilidad. Siempre sentimos acompañamiento.",
    name: "María, hija de paciente",
  },
  {
    quote:
      "La coordinación fue rápida y clara. Pudimos acceder a profesionales en domicilio sin mover a nuestro familiar de su entorno.",
    name: "Jorge, familiar acompañante",
  },
  {
    quote:
      "Nos ayudaron a entender qué modalidad necesitábamos y a ordenar los cuidados en casa con seguimiento y comunicación constante.",
    name: "Luciana, esposa de paciente",
  },
];

export default function HomePage() {
  const router = useRouter();

  return (
    <section className="space-y-14 sm:space-y-20">
      <motion.header
        {...fadeUp}
        className="relative overflow-hidden rounded-2xl border bg-black"
      >
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/imagenes/home-hero.jpeg"
            alt="Profesionales de salud brindando atención domiciliaria a paciente en Buenos Aires"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-tr from-earh-blue-900/80 via-earh-blue-900/55 to-black/0"
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:py-14 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3 py-1 text-xs font-medium text-earh-blue-900 shadow-sm">
              <Image
                src="/imagenes/logo-earh-iso.png"
                alt="Earh Salud"
                width={24}
                height={24}
              />
              <span>Earh Salud · Atención en salud con enfoque humano</span>
            </div>

            <p className="text-xs font-semibold tracking-[0.18em] text-earh-cream-50/90 sm:text-sm">
              INTERNACIÓN DOMICILIARIA, ASISTENCIA DOMICILIARIA Y CONSULTORIOS
              EN CABA Y GBA
            </p>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Internación y asistencia domiciliaria en CABA y Gran Buenos Aires
            </h1>

            <p className="max-w-2xl text-sm text-white/90 sm:text-base">
              Earh Salud SRL está integrada por un equipo interdisciplinario con
              experiencia en instituciones públicas y privadas de referencia.
              Brindamos Internación Domiciliaria, Asistencia Domiciliaria y
              atención en Consultorios Médicos Uruguay, con un enfoque cercano,
              coordinado y profesional.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Atención coordinada",
                "Equipo interdisciplinario",
                "CABA y GBA",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => router.push("/internacion-domiciliaria")}
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-earh-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-card transition duration-200 hover:bg-earh-blue-700 hover:shadow-cardHover active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earh-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto"
              >
                Internación Domiciliaria
              </button>

              <button
                type="button"
                onClick={() => router.push("/asistencia-domiciliaria")}
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-white/80 bg-white/95 px-5 py-2.5 text-sm font-medium text-earh-blue-900 shadow-sm transition duration-200 hover:border-earh-blue-200 hover:bg-earh-blue-50 hover:shadow-card active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earh-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto"
              >
                Asistencia Domiciliaria
              </button>

              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-earh-green-600/60 bg-earh-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-earh-green-600/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earh-green-600 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto"
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

              <a
                href={CONTACT.telHref}
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-earh-blue-600/60 bg-earh-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-earh-blue-700 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-earh-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto"
              >
                Llamar
              </a>
            </div>
          </div>

          <div className="hidden flex-1 lg:block" />
        </div>

        <div className="pointer-events-none absolute bottom-5 right-5 hidden max-w-xs items-center overflow-hidden rounded-2xl border border-white/80 bg-white/95 shadow-lg sm:flex">
          <div className="relative h-20 w-24 flex-shrink-0">
            <Image
              src="/imagenes/home-detail-hands.jpeg"
              alt="Detalle de acompañamiento en el hogar"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-3 py-2 text-xs text-neutral-800">
            Atención coordinada en domicilio, con foco en el paciente y su
            familia.
          </div>
        </div>
      </motion.header>

      <motion.section
        {...fadeUp}
        className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)]"
      >
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-wide text-earh-blue-600">
            EQUIPO INTERDISCIPLINARIO
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-earh-blue-900 sm:text-4xl">
            Quiénes somos
          </h2>
          <p className="text-sm leading-7 text-neutral-700 sm:text-base">
            Earh Salud SRL es una empresa creada por profesionales de la salud
            con más de 30 años de experiencia. Esa trayectoria nos permite
            comprender la realidad cotidiana de las instituciones sanitarias y
            responder con criterio en un área tan sensible como la salud.
          </p>
          <p className="text-sm leading-7 text-neutral-700 sm:text-base">
            Nuestro equipo está conformado por diversas especialidades médicas,
            kinesiólogos, fonoaudiólogos, enfermeros, cuidadores y personal
            administrativo con experiencia en instituciones públicas y privadas
            de referencia. Trabajamos para acompañar a cada paciente con
            atención responsable, coordinada y cercana, reduciendo tiempos de
            espera y brindando una prestación de calidad para la persona y su
            familia.
          </p>

          <div className="mt-4 grid gap-4 rounded-2xl border border-earh-blue-100 bg-white/80 p-5 shadow-sm sm:grid-cols-2">
            <div className="flex gap-3">
              <svg
                className="mt-1 h-6 w-6 flex-shrink-0 text-earh-blue-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 21C12 21 4 15 4 9a4 4 0 0 1 8 0 4 4 0 0 1 8 0c0 6-8 12-8 12z" />
              </svg>

              <div className="space-y-1.5">
                <p className="font-semibold text-earh-blue-900">
                  Acompañamiento al paciente y la familia
                </p>
                <p className="text-sm leading-relaxed text-neutral-800">
                  Explicamos cada etapa del proceso para que la familia sepa
                  cómo se organiza la atención y con quién cuenta en cada
                  momento.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <svg
                className="mt-1 h-6 w-6 flex-shrink-0 text-earh-blue-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16v6H4z" />
                <path d="M4 14h16v6H4z" />
                <path d="M12 4v16" />
              </svg>

              <div className="space-y-1.5">
                <p className="font-semibold text-earh-blue-900">
                  Coordinación interdisciplinaria
                </p>
                <p className="text-sm leading-relaxed text-neutral-800">
                  Articulamos prestaciones domiciliarias, seguimiento
                  profesional y respuesta administrativa según la necesidad de
                  cada caso.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 rounded-2xl border bg-white/80 p-5 shadow-sm sm:grid-cols-3 sm:p-6">
            {STATS.map((stat) => (
              <StatPill
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>

        <div className="hidden space-y-5 md:block">
          <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/imagenes/home-family-2.jpeg"
                alt="Profesional de salud acompañando a una persona mayor en su hogar"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-5 rounded-2xl border bg-white p-6 shadow-sm sm:p-7">
            <h3 className="text-lg font-semibold text-earh-blue-700">
              Misión, visión y valores
            </h3>
            <div className="space-y-3 text-sm text-neutral-700">
              <div>
                <p className="font-semibold text-black">Misión</p>
                <p>
                  Ofrecer atención médica integral y personalizada, asegurando
                  el bienestar de cada paciente a través de nuestros tres
                  pilares: Internación Domiciliaria, Asistencia Domiciliaria y
                  Consultorios Médicos Uruguay.
                </p>
              </div>
              <div>
                <p className="font-semibold text-black">Visión</p>
                <p>
                  Ser una referencia en atención sanitaria coordinada,
                  integrando servicios en domicilio y consultorios con
                  profesionalismo, cercanía y continuidad asistencial.
                </p>
              </div>
              <div>
                <p className="font-semibold text-black">Valores</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>Compromiso</li>
                  <li>Calidad humana</li>
                  <li>Responsabilidad profesional</li>
                  <li>Cercanía y coordinación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="mx-auto max-w-6xl space-y-4">
        <div className="max-w-3xl space-y-2">
          <p className="text-xs font-semibold tracking-wide text-earh-blue-600">
            TRES PILARES DE ATENCIÓN
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-earh-blue-900 sm:text-4xl">
            Soluciones de salud pensadas para distintas necesidades
          </h2>
          <p className="text-sm leading-7 text-neutral-700 sm:text-base">
            En Earh Salud articulamos distintas modalidades de atención para
            acompañar al paciente en su hogar o acercarle atención médica en
            consultorio, siempre con un enfoque profesional, humano y
            coordinado.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Internación Domiciliaria"
            body="Atención integral en el hogar para pacientes clínicamente estables que requieren seguimiento médico, de enfermería y terapéutico, con una complejidad adaptada al entorno domiciliario."
            href="/internacion-domiciliaria"
            bullets={[
              "Atención coordinada por equipo interdisciplinario",
              "Seguimiento del plan de cuidados",
              "Alternativa a hospitalizaciones prolongadas",
            ]}
          />
          <ServiceCard
            title="Asistencia Domiciliaria"
            body="Prestaciones específicas en el hogar para personas que necesitan apoyo en su cuidado diario, recuperación o tratamiento, sin llegar a la complejidad de una internación domiciliaria."
            href="/asistencia-domiciliaria"
            bullets={[
              "Kinesiología, enfermería y acompañamiento",
              "Servicios adaptados a cada necesidad",
              "Apoyo al paciente y su entorno familiar",
            ]}
          />
          <ServiceCard
            title="Consultorios Médicos Uruguay"
            body="Atención médica ambulatoria con foco en consulta, seguimiento y acceso profesional en una ubicación estratégica del Microcentro."
            href="/consultorios-medicos-uruguay"
            bullets={[
              "Próximamente",
              "Nueva propuesta de atención en consultorios",
              "Más información disponible dentro de poco",
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="mx-auto max-w-6xl rounded-2xl border bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold tracking-wide text-earh-blue-600">
            INTERNACIÓN Y ASISTENCIA EN DOMICILIO
          </p>
          <h2 className="text-2xl font-semibold text-earh-blue-900 sm:text-3xl">
            Dos modalidades de atención en domicilio, según la necesidad de cada
            paciente
          </h2>
          <p className="text-neutral-700">
            Aunque ambas se desarrollan en el hogar, no cumplen la misma
            función. En Earh Salud evaluamos cada situación para orientar a la
            familia hacia la modalidad más adecuada.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-earh-blue-100 bg-earh-cream-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-earh-blue-900">
              Internación Domiciliaria
            </h3>
            <p className="text-sm leading-7 text-neutral-700">
              Está orientada a pacientes que necesitan una atención más integral
              en su casa, con seguimiento médico, de enfermería y terapéutico,
              siempre que su condición clínica permita continuar fuera de una
              internación tradicional.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li>Mayor complejidad asistencial</li>
              <li>Plan integral de cuidados</li>
              <li>Alternativa a la hospitalización</li>
              <li>Participación de familia o cuidadores</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-earh-blue-100 bg-earh-cream-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-3 text-xl font-semibold text-earh-blue-900">
              Asistencia Domiciliaria
            </h3>
            <p className="text-sm leading-7 text-neutral-700">
              Está enfocada en prestaciones puntuales y apoyo cotidiano para
              personas con cierto grado de dependencia, recuperación o necesidad
              específica en el hogar.
            </p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li>Kinesiología, medicación y acompañamiento</li>
              <li>Cuidados diarios y apoyo funcional</li>
              <li>No requiere intervención médica constante</li>
              <li>Se adapta a la necesidad del paciente y su entorno</li>
            </ul>
          </div>
        </div>

        <p className="mt-5 text-sm text-neutral-700">
          Si no sabés qué modalidad se ajusta mejor a tu situación, nuestro
          equipo puede orientarte.
        </p>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2"
      >
        <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-7">
          <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900">
            Dónde trabajamos
          </h2>
          <p className="mb-3 text-neutral-700">
            Nuestros servicios domiciliarios se coordinan en:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-neutral-700">
            <li>Ciudad Autónoma de Buenos Aires</li>
            <li>Gran Buenos Aires, con coordinación previa según cada caso</li>
          </ul>
          <p className="mt-3 text-sm text-neutral-700">
            En cada consulta evaluamos la ubicación y la complejidad de la
            necesidad para confirmar disponibilidad del equipo en la zona.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-7">
          <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900">
            Cómo trabajamos
          </h2>
          <ol className="list-decimal space-y-2 pl-5 text-neutral-700">
            <li>
              Recibimos la consulta y entendemos la situación del paciente y su
              entorno.
            </li>
            <li>
              Evaluamos si la necesidad corresponde a Internación Domiciliaria,
              Asistencia Domiciliaria u otra modalidad de atención.
            </li>
            <li>
              Definimos la frecuencia, el perfil profesional y la coordinación
              administrativa.
            </li>
            <li>Mantenemos seguimiento y comunicación clara con la familia.</li>
          </ol>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="mx-auto max-w-6xl rounded-2xl border bg-white p-6 shadow-sm sm:p-8"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-earh-blue-900">
            Por qué elegir Earh Salud
          </h2>
          <div className="hidden items-center gap-2 rounded-full border border-earh-blue-100 bg-white/90 px-3 py-1 text-xs font-medium text-earh-blue-900 sm:inline-flex">
            <div className="relative h-6 w-6">
              <Image
                src="/imagenes/logo-earh-salud.png"
                alt="Earh Salud"
                fill
                className="object-contain"
              />
            </div>
            <span>Tres pilares de atención coordinada</span>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <BenefitItem title="Experiencia interdisciplinaria">
            Profesionales médicos, enfermeros, kinesiólogos, fonoaudiólogos,
            cuidadores y personal capacitado con trayectoria en instituciones de
            referencia.
          </BenefitItem>
          <BenefitItem title="Enfoque humano y cercano">
            Priorizamos la contención del paciente y su familia, con
            comunicación clara, seguimiento y trato responsable.
          </BenefitItem>
          <BenefitItem title="Atención según cada necesidad">
            Brindamos internación domiciliaria, asistencia domiciliaria y
            atención en consultorios, evaluando qué modalidad se ajusta mejor a
            cada caso.
          </BenefitItem>
          <BenefitItem title="Coordinación y continuidad">
            Buscamos reducir tiempos de espera, evitar traslados innecesarios y
            sostener una atención organizada y posible para la familia.
          </BenefitItem>
        </div>
      </motion.section>

      <motion.section {...fadeUp} className="mx-auto max-w-6xl space-y-6 py-10">
        <h2 className="text-center text-2xl font-bold text-earh-blue-900">
          Obras sociales y prepagas (ejemplo)
        </h2>
        <div className="relative overflow-hidden rounded-2xl border bg-white/80 p-4">
          <div className="flex w-max animate-marquee">
            <LogosStrip ariaHidden={false} />
            <LogosStrip ariaHidden />
          </div>
        </div>
        <p className="text-center text-xs text-neutral-500">
          Los logos se muestran a modo de ejemplo visual. La cobertura real se
          confirma en cada caso.
        </p>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="mx-auto max-w-6xl rounded-2xl border bg-earh-cream-50 p-6 shadow-sm sm:p-8"
      >
        <h2 className="mb-4 text-2xl font-semibold text-earh-blue-900">
          Lo que destacan las familias
        </h2>
        <TestimonialsCarousel />
      </motion.section>

      <motion.section
        {...fadeUp}
        className="mx-auto max-w-6xl space-y-3 rounded-2xl border bg-white p-6 shadow-sm sm:p-8"
      >
        <h2 className="mb-1 text-2xl font-semibold text-earh-blue-900">
          Preguntas frecuentes
        </h2>
        <FAQItem
          q="¿Qué diferencia hay entre internación domiciliaria y asistencia domiciliaria?"
          a="La internación domiciliaria implica una atención más integral y compleja en el hogar, como alternativa a la hospitalización tradicional cuando la condición clínica lo permite. La asistencia domiciliaria, en cambio, brinda prestaciones puntuales y apoyo cotidiano según la necesidad del paciente."
        />
        <FAQItem
          q="¿Qué tipo de prestaciones pueden coordinar?"
          a="Según cada caso, coordinamos atención médica, enfermería, kinesiología, acompañamiento, cuidadores y otras prestaciones domiciliarias."
        />
        <FAQItem
          q="¿Atienden con obra social o solo particular?"
          a="Trabajamos con pacientes particulares y con coberturas médicas. En cada consulta confirmamos alcances, autorizaciones y circuitos administrativos."
        />
        <FAQItem
          q="¿En qué zonas brindan servicio?"
          a="En CABA y Gran Buenos Aires, evaluando disponibilidad según domicilio, complejidad y tipo de prestación."
        />
        <FAQItem
          q="¿Cómo inicio una consulta?"
          a="Podés comunicarte por WhatsApp, teléfono o completar el formulario en la sección Contacto. Te orientamos según la necesidad del paciente."
        />
      </motion.section>

      <motion.section
        {...fadeUp}
        className="mx-auto max-w-6xl rounded-2xl border bg-white p-6 text-center shadow-sm sm:p-8"
      >
        <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900 sm:text-3xl">
          ¿Necesitás orientación para coordinar atención en domicilio?
        </h2>
        <p className="mx-auto mb-5 max-w-2xl text-neutral-700">
          Contanos la situación y te ayudamos a identificar si la necesidad
          corresponde a Internación Domiciliaria, Asistencia Domiciliaria o una
          consulta general. Nuestro objetivo es ofrecer una respuesta clara,
          profesional y posible para cada familia.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contacto"
            className="w-full rounded-lg bg-earh-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-earh-blue-700 hover:shadow-cardHover sm:w-auto"
          >
            Completar formulario
          </Link>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg border border-earh-green-600/40 bg-earh-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-earh-green-600/90 sm:w-auto"
          >
            Escribir por WhatsApp
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg border border-earh-blue-200 bg-white px-5 py-2.5 text-sm font-semibold text-earh-blue-900 shadow-sm transition hover:bg-earh-blue-50 sm:w-auto"
          >
            Ver Instagram
          </a>
        </div>
        <p className="mt-5 text-xs text-neutral-500">
          La información de este sitio es orientativa y no reemplaza la consulta
          con profesionales de la salud.
        </p>
      </motion.section>
    </section>
  );
}

/* AUXILIARES */

function ServiceCard({
  title,
  body,
  href,
  bullets,
}: {
  title: string;
  body: ReactNode;
  href: string;
  bullets: string[];
}) {
  return (
    <Link href={href} className="group block h-full cursor-pointer">
      <motion.article
        whileHover={{ y: -8, scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="
          relative flex h-full flex-col rounded-2xl
          border border-earh-blue-300
          bg-gradient-to-br from-white via-white to-earh-cream-50/80
          p-6
          shadow-card
          transition-all duration-300 ease-out
          hover:border-earh-blue-500
          hover:bg-white
          hover:shadow-cardHover
          sm:p-7
        "
      >
        <div
          aria-hidden
          className="
            pointer-events-none absolute inset-0 -z-10 scale-95
            rounded-3xl bg-gradient-to-r
            from-earh-blue-400/25 via-earh-blue-500/15 to-emerald-400/25
            opacity-0 blur-xl
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/60"
        />

        <div className="relative flex h-full flex-col">
          <div className="mb-4 h-2 w-12 rounded-full bg-earh-blue-600/90 transition-all group-hover:w-16 group-hover:bg-earh-blue-700" />

          {title === "Consultorios Médicos Uruguay" && (
            <span className="mb-3 inline-flex w-fit rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              Próximamente
            </span>
          )}

          <h2 className="mb-2 text-xl font-bold text-earh-blue-900 sm:text-2xl">
            {title}
          </h2>

          <p className="mb-4 text-sm text-neutral-700 sm:text-base">{body}</p>

          <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <span className="mt-auto inline-flex items-center text-sm font-semibold text-earh-blue-700 transition-all duration-200 group-hover:text-earh-blue-900">
            Más información
            <span
              aria-hidden
              className="ml-1 transition-transform duration-200 ease-out group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </motion.article>
    </Link>
  );
}

function BenefitItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ translateY: -3 }}
      className="rounded-xl border bg-earh-cream-50 p-5"
    >
      <h3 className="mb-1 font-semibold text-earh-blue-900">{title}</h3>
      <p className="text-sm text-neutral-700">{children}</p>
    </motion.div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
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

function LogosStrip({ ariaHidden }: { ariaHidden: boolean }) {
  const logos = [
    "/logos/osde.png",
    "/logos/swiss.png",
    "/logos/galeno.png",
    "/logos/medicus.png",
    "/logos/omint.png",
    "/logos/pami.png",
    "/logos/accord.png",
  ];

  return (
    <div className="flex items-center gap-10 pr-10">
      {logos.map((logo, i) => (
        <div
          key={ariaHidden ? `dup-${i}` : i}
          className="relative flex h-12 w-28 flex-shrink-0 items-center justify-center sm:h-16 sm:w-36"
          aria-hidden={ariaHidden}
        >
          <Image
            src={logo}
            alt={ariaHidden ? "" : "Logo de obra social"}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

function StatPill({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 1.7,
        ease: "easeOut",
      });
    }
  }, [isInView, value, motionValue]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ translateY: -3 }}
      className="flex flex-col gap-1 rounded-2xl border border-earh-blue-50 bg-earh-cream-50 px-5 py-4 text-sm shadow-sm"
    >
      <div className="text-lg font-semibold text-earh-blue-900 sm:text-xl">
        <motion.span>{rounded}</motion.span>
        {suffix && <span>{suffix}</span>}
      </div>
      <p className="text-xs text-neutral-700">{label}</p>
    </motion.div>
  );
}

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const current = TESTIMONIALS[index];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="sm:flex-1">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-earh-blue-100 bg-white/80 p-5 text-neutral-800 shadow-sm"
          >
            <p className="mb-3 text-sm italic sm:text-base">
              “{current.quote}”
            </p>
            <p className="text-xs font-semibold text-earh-blue-900 sm:text-sm">
              {current.name}
            </p>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-2 flex items-center justify-between gap-4 sm:mt-0 sm:flex-col sm:items-end">
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          <span>
            {index + 1} / {total}
          </span>
        </div>
        <div className="flex gap-2">
          <motion.button
            type="button"
            onClick={handlePrev}
            whileTap={{ scale: 0.9 }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white text-sm font-medium text-earh-blue-900 shadow-sm"
          >
            ‹
          </motion.button>
          <motion.button
            type="button"
            onClick={handleNext}
            whileTap={{ scale: 0.9 }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-white text-sm font-medium text-earh-blue-900 shadow-sm"
          >
            ›
          </motion.button>
        </div>
      </div>
    </div>
  );
}
