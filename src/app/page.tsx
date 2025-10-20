import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Earh Salud – Asistencia médica y Policonsultorio",
  description:
    "Empresa de salud con cobertura en CABA y GBA. Asistencia médica a domicilio y Policonsultorio con turnos rápidos y atención humana.",
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
            Earh Salud brinda asistencia médica y servicios de Policonsultorio
            en CABA y GBA. Atención humana y profesional.
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
            ATENCIÓN DOMICILIARIA Y POLICONSULTORIO
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Cuidado integral para tu bienestar
          </h2>
          <p className="text-neutral-700 leading-7">
            En <strong>Earh Salud</strong> trabajamos para mejorar tu calidad de
            vida, brindando soluciones de atención médica confiables y humanas.
            Ofrecemos <strong>asistencia domiciliaria</strong> para adultos y
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
              asistencia domiciliaria y Policonsultorio para un cuidado rápido y
              accesible.
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
            <li>✅ Atención médica a domicilio</li>
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

        {/* FAQ en acordeón (mejorado) */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Preguntas frecuentes
          </h2>

          <div className="space-y-3">
            {/* Item */}
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

            {/* Item */}
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

            {/* Item */}
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

            {/* Item */}
            <details className="group rounded-xl border bg-white open:bg-blue-50 p-4 shadow-sm transition-colors duration-300 [&_summary::-webkit-details-marker]:hidden">
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
          title="Asistencia médica"
          body="Profesionales para atención domiciliaria, seguimiento y coordinación de cuidados."
          href="/asistencia-medica"
          cta="Ver asistencia médica"
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
