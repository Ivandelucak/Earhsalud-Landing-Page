import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Información legal y política de privacidad – Earh Salud",
  description:
    "Política de privacidad, condiciones de uso e información legal de Earh Salud.",
};

const CONTACT = {
  email: "idearhsalud@gmail.com",
  telDisplay: "+54 11 4743-2525",
  telHref: "tel:+541147432525",
};

export default function LegalPage() {
  return (
    <section className="space-y-10">
      <header className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-earh-cream-50 via-white to-earh-cream-50/70 p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_28%),radial-gradient(circle_at_left_center,rgba(16,185,129,0.08),transparent_24%)]" />

        <div className="relative max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-earh-blue-100 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-earh-blue-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-earh-blue-600" />
            Información legal
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-earh-blue-900 sm:text-4xl">
            Política de privacidad, condiciones de uso e información legal
          </h1>

          <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
            En esta sección te informamos cómo tratamos los datos que nos
            compartís a través del sitio, cuáles son las condiciones generales
            de uso y cómo podés comunicarte con nosotros para ejercer tus
            derechos.
          </p>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="space-y-8 rounded-2xl border bg-white/95 p-6 shadow-sm sm:p-8">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-earh-blue-900">
              1. Identificación del titular del sitio
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              Este sitio web es utilizado para brindar información institucional
              sobre los servicios de Earh Salud, incluyendo Internación
              Domiciliaria, Asistencia Domiciliaria y Consultorios Médicos
              Uruguay, así como para recibir consultas de personas usuarias,
              pacientes, familiares o terceros interesados.
            </p>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              Para consultas vinculadas a esta política o al tratamiento de
              datos personales, podés comunicarte por correo electrónico a{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-medium text-earh-blue-700 underline-offset-4 hover:underline"
              >
                {CONTACT.email}
              </a>{" "}
              o por teléfono al{" "}
              <a
                href={CONTACT.telHref}
                className="font-medium text-earh-blue-700 underline-offset-4 hover:underline"
              >
                {CONTACT.telDisplay}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-earh-blue-900">
              2. Datos que pueden recopilarse
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              A través de este sitio podemos recibir datos personales que la
              persona usuaria decide enviar de forma voluntaria, por ejemplo:
              nombre, correo electrónico, teléfono, tipo de consulta y el
              contenido del mensaje remitido mediante formularios, correo
              electrónico o canales de mensajería.
            </p>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              Recomendamos no enviar por formularios abiertos información médica
              innecesariamente detallada ni documentación clínica salvo que haya
              sido solicitada por un canal específico y adecuado para ello.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-earh-blue-900">
              3. Finalidad del tratamiento de datos
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              Los datos enviados a través de este sitio pueden ser utilizados
              para:
            </p>
            <ul className="space-y-2 text-sm leading-relaxed text-neutral-700 sm:text-base">
              <LegalBullet>
                responder consultas recibidas por el sitio, correo o WhatsApp;
              </LegalBullet>
              <LegalBullet>
                orientar a la persona usuaria sobre los servicios de Earh Salud;
              </LegalBullet>
              <LegalBullet>
                derivar internamente la consulta al área correspondiente;
              </LegalBullet>
              <LegalBullet>
                coordinar un primer contacto o evaluación inicial;
              </LegalBullet>
              <LegalBullet>
                mejorar la atención y el funcionamiento general del sitio.
              </LegalBullet>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-earh-blue-900">
              4. Base de privacidad y confidencialidad
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              Earh Salud procura tratar la información recibida con criterio de
              confidencialidad y solo utilizarla para fines compatibles con la
              consulta realizada. No comercializamos datos personales ni los
              utilizamos para finalidades ajenas a la atención, orientación o
              contacto relacionado con los servicios ofrecidos.
            </p>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              En caso de que la consulta requiera derivación interna o revisión
              por parte del equipo correspondiente, la información podrá ser
              compartida dentro de la organización en la medida necesaria para
              responderla adecuadamente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-earh-blue-900">
              5. Derechos de las personas usuarias
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              La persona titular de los datos puede solicitar el acceso,
              rectificación, actualización o supresión de sus datos personales,
              conforme a la normativa aplicable.
            </p>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              Para ejercer esos derechos, podés escribirnos a{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-medium text-earh-blue-700 underline-offset-4 hover:underline"
              >
                {CONTACT.email}
              </a>
              , indicando tu nombre, el motivo de tu solicitud y los datos sobre
              los que querés ejercer tu derecho.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-earh-blue-900">
              6. Conservación de la información
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              Conservaremos la información recibida durante el tiempo razonable
              y necesario para responder la consulta, dar seguimiento al
              contacto o cumplir con obligaciones operativas o legales que
              correspondan.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-earh-blue-900">
              7. Seguridad
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              Adoptamos medidas razonables para proteger la información recibida
              a través del sitio. Sin embargo, ninguna transmisión por Internet
              puede garantizar seguridad absoluta, por lo que recomendamos no
              compartir por formularios abiertos información especialmente
              sensible salvo que resulte necesario y se utilicen los canales
              adecuados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-earh-blue-900">
              8. Uso del sitio
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              El contenido del sitio tiene carácter informativo e institucional.
              Su finalidad es describir servicios, facilitar el contacto y
              orientar de manera general a las personas usuarias.
            </p>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              La información publicada no reemplaza la evaluación médica, la
              consulta profesional ni el criterio clínico aplicado a cada caso
              particular.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-earh-blue-900">
              9. Enlaces y servicios de terceros
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              Este sitio puede incluir enlaces a servicios de terceros, como
              plataformas de mensajería, redes sociales o formularios externos.
              El uso de esos servicios se encuentra sujeto a sus propias
              políticas y condiciones, por lo que recomendamos revisarlas de
              manera independiente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-earh-blue-900">
              10. Modificaciones
            </h2>
            <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
              Earh Salud podrá actualizar esta página legal cuando sea necesario
              para reflejar cambios en el sitio, en los servicios o en la forma
              en que se canalizan las consultas. La versión publicada en esta
              sección será la vigente.
            </p>
          </section>
        </article>

        <aside className="space-y-4">
          <div className="rounded-2xl border bg-white/95 p-5 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-earh-blue-700">
              Contacto legal
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Para consultas sobre privacidad, datos personales o uso del sitio:
            </p>
            <div className="mt-4 space-y-3 text-sm text-neutral-800">
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-medium text-earh-blue-700 underline-offset-4 hover:underline"
                >
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Teléfono
                </p>
                <a
                  href={CONTACT.telHref}
                  className="font-medium text-earh-blue-700 underline-offset-4 hover:underline"
                >
                  {CONTACT.telDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-earh-cream-50/80 p-5 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-earh-blue-700">
              Importante
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Esta página tiene un alcance informativo general y está pensada
              para dar un marco básico de privacidad y uso del sitio. No
              reemplaza asesoramiento jurídico específico.
            </p>
          </div>

          <div className="rounded-2xl border bg-white/95 p-5 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-earh-blue-700">
              Accesos útiles
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link
                href="/contacto"
                className="text-earh-blue-700 underline-offset-4 hover:underline"
              >
                Ir a Contacto
              </Link>
              <Link
                href="/servicios"
                className="text-earh-blue-700 underline-offset-4 hover:underline"
              >
                Ver servicios
              </Link>
              <Link
                href="/"
                className="text-earh-blue-700 underline-offset-4 hover:underline"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function LegalBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <svg
        className="mt-1 h-4 w-4 shrink-0 text-earh-blue-600"
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
