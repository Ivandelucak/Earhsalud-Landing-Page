import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Earh Salud – Internación domiciliaria y Policonsultorio",
  description:
    "Empresa de salud con cobertura en CABA y GBA. Internación domiciliaria y Policonsultorio con turnos rápidos y atención humana.",
};

export default function Page() {
  return (
    <section className="space-y-20">
      {/* HERO */}
      <header className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-white to-neutral-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Cuidado y asistencia a tu medida
          </h1>
          <p className="mt-3 sm:mt-4 text-neutral-600 max-w-2xl mx-auto text-base sm:text-lg">
            Earh Salud brinda internación domiciliaria y servicios de
            Policonsultorio en CABA y GBA. Atención humana y profesional.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#contacto"
              className="rounded-lg px-5 py-2.5 text-sm font-medium bg-blue-600 text-white hover:scale-[1.02] active:scale-100 transition"
            >
              Solicitar cotización
            </Link>
            <Link
              href="/servicios"
              className="rounded-lg px-5 py-2.5 text-sm font-medium border hover:bg-neutral-50"
            >
              Ver servicios
            </Link>

            {/* LLAMAR (reemplazar número real luego) */}
            <a
              href="tel:+541100000000"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium border border-neutral-300 hover:bg-neutral-50"
              aria-label="Llamar por teléfono"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                aria-hidden
                className="-mt-px"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.77.54 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.47a2 2 0 0 1 2.11-.45c.84.24 1.71.42 2.61.54A2 2 0 0 1 22 16.92Z"
                  fill="currentColor"
                />
              </svg>
              LLÁMENOS
            </a>

            {/* WHATSAPP (reemplazar número real luego) */}
            <a
              href="https://wa.me/5491100000000?text=Hola%20Earh%20Salud%2C%20quisiera%20hacer%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium bg-green-600 text-white/95 hover:opacity-90"
              aria-label="Escribir por WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0 12 12 0 0 0 2.1 18.36L0 24l5.82-2.04A11.94 11.94 0 0 0 12.06 24a12 12 0 0 0 8.46-20.52ZM12.06 22a9.86 9.86 0 0 1-5-1.36l-.36-.21-3.45 1.2 1.2-3.36-.24-.36A9.95 9.95 0 1 1 22 12.06 9.93 9.93 0 0 1 12.06 22Zm5.7-7.36c-.3-.15-1.77-.87-2.04-.96s-.48-.15-.69.15-.78.96-.96 1.17-.36.21-.66.06a8.1 8.1 0 0 1-2.4-1.47 8.78 8.78 0 0 1-1.62-2.01c-.18-.3 0-.45.12-.6s.3-.36.45-.57.21-.3.3-.51.03-.39-.03-.54c-.06-.15-.69-1.65-.96-2.25s-.51-.51-.69-.51-.39 0-.6 0A1.16 1.16 0 0 0 6 7.5a4.8 4.8 0 0 0-.99 3.54 8.32 8.32 0 0 0 1.77 3.15 18.94 18.94 0 0 0 3.45 3.27 11.5 11.5 0 0 0 2.82 1.5 6.47 6.47 0 0 0 2.97.39c.9-.09 1.77-.72 2.01-1.41s.24-1.29.18-1.41-.27-.24-.48-.33Z"
                  fill="currentColor"
                />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* SOBRE NOSOTROS */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
          <Image
            src="/about.jpg"
            alt="Cuidado y asistencia con calidez humana"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <p className="text-sm tracking-wide text-blue-700 font-semibold mb-1">
            INTERNACIÓN DOMICILIARIA Y POLICONSULTORIO
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Cuidado integral para tu bienestar
          </h2>
          <p className="text-neutral-700 leading-7">
            En <strong>Earh Salud</strong> trabajamos para mejorar tu calidad de
            vida, brindando soluciones de atención médica confiables y humanas.
            Ofrecemos <strong>internación domiciliaria</strong> para adultos y
            personas mayores, y un <strong>servicio de Policonsultorio</strong>{" "}
            que permite acceder a profesionales de primer nivel sin demoras.
            Nuestro compromiso es garantizar una atención rápida, segura y
            personalizada.
          </p>
        </div>
      </section>

      {/* NUEVAS SECCIONES */}
      <section className="max-w-5xl mx-auto space-y-16">
        {/* Misión, visión y valores */}
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Nuestra misión
            </h3>
            <p className="text-neutral-700">
              Acercar atención médica de calidad con calidez humana y tiempos de
              respuesta cortos, promoviendo la coordinación entre profesionales
              y familia.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Nuestra visión
            </h3>
            <p className="text-neutral-700">
              Ser la red de salud de referencia en CABA y GBA, combinando
              internación domiciliaria y Policonsultorio para un cuidado rápido
              y accesible.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Nuestros valores
            </h3>
            <ul className="list-disc pl-5 text-neutral-700 space-y-1">
              <li>Humanidad y empatía</li>
              <li>Profesionalismo y excelencia</li>
              <li>Agilidad y coordinación</li>
              <li>Transparencia y comunicación</li>
            </ul>
          </div>
        </div>

        {/* Beneficios */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            ¿Por qué elegir Earh Salud?
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-neutral-700">
            <li>✅ Turnos rápidos y sin demoras</li>
            <li>✅ Internación domiciliaria</li>
            <li>✅ Policonsultorio con especialistas</li>
            <li>✅ Cobertura en CABA y GBA</li>
            <li>✅ Acompañamiento integral al paciente</li>
          </ul>
        </div>

        {/* Cómo trabajamos */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Cómo trabajamos
          </h2>
          <ol className="list-decimal pl-5 text-neutral-700 space-y-1">
            <li>
              Consulta inicial: contanos tu necesidad o la de tu familiar.
            </li>
            <li>
              Evaluación y plan: definimos el profesional y la modalidad de
              atención.
            </li>
            <li>
              Seguimiento continuo: coordinamos controles y mantenemos la
              comunicación activa.
            </li>
          </ol>
        </div>

        {/* CARRUSEL DE OBRAS SOCIALES */}
        <section className="py-10">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
            Obras Sociales y Prepagas Asociadas
          </h2>

          <div className="relative overflow-hidden">
            {/* Track ancho con dos grupos idénticos para loop infinito */}
            <div className="flex w-max animate-marquee">
              {/* Grupo 1 */}
              <div className="flex items-center gap-10 pr-10">
                {[
                  "/logos/osde.png",
                  "/logos/swiss.png",
                  "/logos/galeno.png",
                  "/logos/medicus.png",
                  "/logos/omint.png",
                  "/logos/pami.png",
                  "/logos/accord.png",
                ].map((logo, i) => (
                  <div
                    key={i}
                    className="relative w-28 sm:w-36 h-12 sm:h-16 flex-shrink-0"
                    aria-hidden={false}
                  >
                    <Image
                      src={logo}
                      alt="Logo de obra social o prepaga"
                      fill
                      className="object-contain"
                      priority={false}
                    />
                  </div>
                ))}
              </div>

              {/* Grupo 2 (idéntico) */}
              <div className="flex items-center gap-10 pr-10">
                {[
                  "/logos/osde.png",
                  "/logos/swiss.png",
                  "/logos/galeno.png",
                  "/logos/medicus.png",
                  "/logos/omint.png",
                  "/logos/pami.png",
                  "/logos/accord.png",
                ].map((logo, i) => (
                  <div
                    key={`dup-${i}`}
                    className="relative w-28 sm:w-36 h-12 sm:h-16 flex-shrink-0"
                    aria-hidden={true}
                  >
                    <Image
                      src={logo}
                      alt=""
                      fill
                      className="object-contain"
                      priority={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Qué opinan nuestros pacientes
          </h2>
          <blockquote className="italic text-neutral-700 border-l-4 border-blue-500 pl-4 mb-4">
            “Conseguimos turno en 48 horas y el trato fue excelente.” — María G.
          </blockquote>
          <blockquote className="italic text-neutral-700 border-l-4 border-blue-500 pl-4 mb-4">
            “La visita domiciliaria nos ahorró traslados y esperas.” — Jorge P.
          </blockquote>
          <blockquote className="italic text-neutral-700 border-l-4 border-blue-500 pl-4">
            “Profesionales claros y atentos, súper recomendable.” — Luciana R.
          </blockquote>
        </div>

        {/* FAQ en acordeón */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Preguntas frecuentes
          </h2>

          <div className="space-y-3">
            <details className="group rounded-xl border bg-white open:bg-blue-50 p-4 shadow-sm transition-colors duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex w-full cursor-pointer items-center justify-between gap-4 text-left">
                <span className="font-medium text-neutral-900">
                  ¿Atienden con obra social o prepaga?
                </span>
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
              <div className="mt-3 border-t pt-3 font-medium text-neutral-800">
                Trabajamos con particulares y coordinamos con obras sociales y
                prepagas según cada caso.
              </div>
            </details>

            <details className="group rounded-xl border bg-white open:bg-blue-50 p-4 shadow-sm transition-colors duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex w-full cursor-pointer items-center justify-between gap-4 text-left">
                <span className="font-medium text-neutral-900">
                  ¿Cómo solicito un turno?
                </span>
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
              <div className="mt-3 border-t pt-3 font-medium text-neutral-800">
                Desde la página de contacto, por WhatsApp o por teléfono. Te
                respondemos en el día.
              </div>
            </details>

            <details className="group rounded-xl border bg-white open:bg-blue-50 p-4 shadow-sm transition-colors duration-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex w-full cursor-pointer items-center justify-between gap-4 text-left">
                <span className="font-medium text-neutral-900">
                  ¿Qué zonas cubren?
                </span>
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
              <div className="mt-3 border-t pt-3 font-medium text-neutral-800">
                CABA y todo el Gran Buenos Aires.
              </div>
            </details>

            <details className="group rounded-xl border bg-white open:bg-blue-50 p-4 shadow-sm transition-colors duración-300 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex w-full cursor-pointer items-center justify-between gap-4 text-left">
                <span className="font-medium text-neutral-900">
                  ¿Qué especialidades ofrecen?
                </span>
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
              <div className="mt-3 border-t pt-3 font-medium text-neutral-800">
                Clínica médica, cardiología, ortopedia, infectología,
                traumatología y rayos.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="grid gap-6 sm:gap-8 md:grid-cols-2">
        <FeatureCard
          title="Internación domiciliaria"
          body="Profesionales para atención en el hogar, seguimiento y coordinación de cuidados."
          href="/asistencia-medica"
          cta="Ver internación domiciliaria"
        />
        <FeatureCard
          title="Policonsultorio"
          body="Servicios de Policonsultorio: turnos, estudios y coordinación integral."
          href="/clinica-privada"
          cta="Ver Policonsultorio"
        />
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-20 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2">
          Contacto
        </h2>
        <p className="text-neutral-600 text-center mb-6 max-w-2xl mx-auto">
          Dejanos tus datos y te respondemos a la brevedad.
        </p>
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* LEGAL */}
      <section className="border-t pt-10 text-sm text-neutral-600">
        <p>
          Información legal y de privacidad. Encontrá los detalles en{" "}
          <Link href="/legal" className="underline underline-offset-4">
            Política de Privacidad
          </Link>
          .
        </p>
      </section>
    </section>
  );
}

function FeatureCard({
  title,
  body,
  href,
  cta,
}: {
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-neutral-200 p-6 sm:p-7 bg-white/80 backdrop-blur shadow-sm
                 hover:bg-neutral-700 hover:border-neutral-700 hover:shadow-lg hover:scale-[1.02]
                 focus-visible:ring-2 focus-visible:ring-blue-500/30
                 active:bg-neutral-700 active:border-neutral-700 active:shadow-md active:scale-[0.99]
                 touch-manipulation"
    >
      <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-neutral-900 group-hover:text-white group-active:text-white transition-colors">
        {title}
      </h3>
      <p className="text-neutral-600 mb-5 sm:mb-6 group-hover:text-neutral-200 group-active:text-neutral-200 transition-colors">
        {body}
      </p>
      <div className="inline-flex items-center gap-2 text-blue-600 group-hover:text-blue-300 group-active:text-blue-300 font-medium transition-colors">
        {cta}
        <span
          aria-hidden
          className="translate-x-0 group-hover:translate-x-0.5 group-active:translate-x-0.5 transition-transform"
        >
          →
        </span>
      </div>
    </Link>
  );
}
