import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  PhoneCall,
  Mail,
  MessageCircle,
  Info,
  Clock,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto – Earh Salud",
  description:
    "Contactanos por Internación Domiciliaria, Asistencia Domiciliaria o Consultorios Médicos Uruguay. Atención en CABA y Gran Buenos Aires.",
};

const EARH_CONTACT = {
  telDisplay: "+54 11 4743-2525",
  telHref: "tel:+541147432525",
  whatsappDisplay: "+54 11 3003-1247",
  whatsappHref:
    "https://wa.me/541130031247?text=Hola%20Earh%20Salud%2C%20quisiera%20hacer%20una%20consulta",
  email: "idearhsalud@gmail.com",
};

const CMU_CONTACT = {
  telDisplay: "4743-2525",
  telHref: "tel:+541147432525",
  whatsappDisplay: "11 3003-1247",
  whatsappHref:
    "https://wa.me/541130031247?text=Hola%20CMU%2C%20quisiera%20solicitar%20un%20turno",
  email: "consultoriosuruguay266@gmail.com",
};

export default function ContactoPage() {
  return (
    <section className="space-y-10">
      <header className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-earh-cream-50 via-white to-earh-cream-50/70 p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_28%),radial-gradient(circle_at_left_center,rgba(16,185,129,0.08),transparent_24%)]" />

        <div className="relative space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Contacto Earh Salud
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-earh-blue-900 sm:text-4xl">
              Estamos para orientarte y ayudarte a encontrar la modalidad
              adecuada
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
              Podés escribirnos por <strong>Internación Domiciliaria</strong>,{" "}
              <strong>Asistencia Domiciliaria</strong>,{" "}
              <strong>Consultorios Médicos Uruguay</strong> o por dudas
              generales. Cuanta más información nos compartas, más clara y útil
              va a ser nuestra respuesta.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <ContactChip>Internación Domiciliaria</ContactChip>
            <ContactChip>Asistencia Domiciliaria</ContactChip>
            <ContactChip>Consultorios Médicos Uruguay</ContactChip>
            <ContactChip>Consultas generales</ContactChip>
          </div>

          <p className="inline-flex items-center gap-2 text-xs text-neutral-600 sm:text-sm">
            <Clock className="h-4 w-4" />
            <span>
              Horario de respuesta habitual: lunes a viernes de 9 a 18 h.
            </span>
          </p>
        </div>
      </header>

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-4">
          <div className="rounded-2xl border bg-white/95 p-5 shadow-sm sm:p-6">
            <div className="mb-4 space-y-2">
              <h2 className="text-xl font-semibold text-earh-blue-900">
                Enviá tu consulta
              </h2>
              <p className="text-sm leading-relaxed text-neutral-700">
                Podés escribirnos para solicitar orientación, coordinar una
                prestación en domicilio, consultar por turnos o dejarnos una
                duda puntual. Nuestro equipo revisa cada mensaje para derivarlo
                al circuito más adecuado.
              </p>
            </div>

            <div className="mb-5 grid gap-3 sm:grid-cols-2">
              <MiniInfoCard
                title="Consultas domiciliarias"
                text="Internación Domiciliaria y Asistencia Domiciliaria en CABA y GBA."
              />
              <MiniInfoCard
                title="Consultas ambulatorias"
                text="Atención, turnos y seguimiento en Consultorios Médicos Uruguay."
              />
            </div>

            <ContactForm />

            <p className="mt-4 flex items-start gap-2 text-xs text-neutral-500">
              <Info className="mt-[2px] h-4 w-4 shrink-0" />
              <span>
                Al enviar aceptás nuestra{" "}
                <Link
                  href="/legal"
                  className="underline underline-offset-4 hover:text-neutral-700"
                >
                  política de privacidad
                </Link>
                . Tus datos se utilizan únicamente para responder a tu consulta.
              </span>
            </p>
          </div>
        </div>

        <aside className="space-y-4">
          <ContactCard
            title="Internación Domiciliaria"
            description="Para consultas sobre cuidados integrales en el hogar, coordinación profesional y seguimiento de pacientes."
            phoneLabel="Teléfono"
            phoneHref={EARH_CONTACT.telHref}
            phoneDisplay={EARH_CONTACT.telDisplay}
            whatsappLabel="WhatsApp"
            whatsappHref={EARH_CONTACT.whatsappHref}
            whatsappDisplay={EARH_CONTACT.whatsappDisplay}
            emailLabel="Email"
            email={EARH_CONTACT.email}
          />

          <ContactCard
            title="Asistencia Domiciliaria"
            description="Para prestaciones puntuales en domicilio, apoyo cotidiano, enfermería, kinesiología y otras necesidades específicas."
            phoneLabel="Teléfono"
            phoneHref={EARH_CONTACT.telHref}
            phoneDisplay={EARH_CONTACT.telDisplay}
            whatsappLabel="WhatsApp"
            whatsappHref={EARH_CONTACT.whatsappHref}
            whatsappDisplay={EARH_CONTACT.whatsappDisplay}
            emailLabel="Email"
            email={EARH_CONTACT.email}
          />

          <ContactCard
            title="Consultorios Médicos Uruguay"
            description="Turnos y consultas para atención en Uruguay 266, 1º E, Microcentro, CABA."
            phoneLabel="Teléfono consultorios"
            phoneHref={CMU_CONTACT.telHref}
            phoneDisplay={CMU_CONTACT.telDisplay}
            whatsappLabel="WhatsApp turnos"
            whatsappHref={CMU_CONTACT.whatsappHref}
            whatsappDisplay={CMU_CONTACT.whatsappDisplay}
            emailLabel="Email consultorios"
            email={CMU_CONTACT.email}
            upcoming
          />

          <div className="rounded-2xl border bg-earh-cream-50/80 p-5 shadow-sm">
            <p className="text-sm font-semibold text-earh-blue-900">
              ¿No sabés qué servicio corresponde?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Contanos la situación del paciente, la zona y el tipo de ayuda que
              creen necesitar. Podemos orientarte para definir si conviene
              Internación Domiciliaria, Asistencia Domiciliaria, Consultorios o
              una combinación de modalidades.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={EARH_CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-600"
              >
                <MessageCircle className="h-4 w-4" />
                Escribir por WhatsApp
              </a>

              <Link
                href="/servicios"
                className="inline-flex items-center rounded-lg border border-earh-blue-200 bg-white px-4 py-2 text-sm font-medium text-earh-blue-900 transition hover:bg-earh-blue-50"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <section className="rounded-2xl border bg-white/90 p-6 text-center shadow-sm sm:p-8">
        <h2 className="mb-3 text-2xl font-semibold text-earh-blue-900 sm:text-3xl">
          Respuestas claras, contacto simple y orientación profesional
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base">
          Nuestro objetivo es que cada persona o familia pueda entender qué
          modalidad de atención necesita y cómo empezar a coordinarla de forma
          clara, humana y posible.
        </p>
      </section>
    </section>
  );
}

function ContactChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-earh-blue-200 bg-earh-blue-50 px-3 py-1 text-xs font-medium text-earh-blue-800">
      {children}
    </span>
  );
}

function MiniInfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-earh-blue-100 bg-earh-cream-50/70 p-4">
      <p className="text-sm font-semibold text-earh-blue-900">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-neutral-700">{text}</p>
    </div>
  );
}

function ContactCard({
  title,
  description,
  phoneLabel,
  phoneHref,
  phoneDisplay,
  whatsappLabel,
  whatsappHref,
  whatsappDisplay,
  emailLabel,
  email,
  upcoming = false,
}: {
  title: string;
  description: string;
  phoneLabel: string;
  phoneHref: string;
  phoneDisplay: string;
  whatsappLabel: string;
  whatsappHref: string;
  whatsappDisplay: string;
  emailLabel: string;
  email: string;
  upcoming?: boolean;
}) {
  return (
    <div className="rounded-2xl border bg-white/95 p-5 shadow-sm">
      <div className="mb-2 flex items-start justify-between gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-earh-blue-700">
          {title}
        </h2>

        {upcoming && (
          <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700">
            Próximamente
          </span>
        )}
      </div>

      <p className="text-sm text-neutral-700">{description}</p>

      <div className="mt-4 space-y-3 text-sm text-neutral-800">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
            {upcoming ? (
              <PhoneCall className="h-4 w-4 text-blue-700" />
            ) : (
              <Phone className="h-4 w-4 text-blue-700" />
            )}
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              {phoneLabel}
            </p>
            <a href={phoneHref} className="font-medium hover:underline">
              {phoneDisplay}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50">
            <MessageCircle className="h-4 w-4 text-green-700" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              {whatsappLabel}
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              {whatsappDisplay}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-50">
            <Mail className="h-4 w-4 text-neutral-700" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              {emailLabel}
            </p>
            <a href={`mailto:${email}`} className="font-medium hover:underline">
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
