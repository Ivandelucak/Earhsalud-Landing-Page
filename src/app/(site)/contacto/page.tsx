// FILE: src/app/contacto/page.tsx
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
    "Contactanos por internación domiciliaria o turnos en Consultorios Médicos Uruguay. Respuesta en el menor tiempo posible.",
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
      {/* CABECERA */}
      <header className="rounded-2xl border bg-gradient-to-b from-white to-neutral-50 p-6 sm:p-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span>Internación domiciliaria · Consultorios Médicos Uruguay</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              ¿En qué podemos ayudarte?
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-neutral-700 sm:text-base">
              Completá el formulario o usá los medios de contacto directo. Te
              respondemos en el menor tiempo posible dentro de nuestro horario
              de atención.
            </p>
          </div>
          <p className="inline-flex items-center gap-2 text-xs text-neutral-600">
            <Clock className="h-4 w-4" />
            <span>
              Horario de respuesta habitual: lunes a viernes de 9 a 18 h.
            </span>
          </p>
        </div>
      </header>

      {/* CONTENIDO: FORM + COLUMNA LATERAL */}
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        {/* FORMULARIO */}
        <div className="space-y-4">
          <div className="rounded-2xl border bg-white/90 p-5 shadow-sm sm:p-6">
            <h2 className="mb-1 text-lg font-semibold text-blue-700">
              Enviá tu consulta
            </h2>
            <p className="mb-4 text-sm text-neutral-700">
              Podés escribirnos por internación domiciliaria, turnos en
              consultorios o dudas generales. Cuanta más información nos des,
              más precisa será nuestra respuesta.
            </p>
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
                . Tus datos se usan solo para responder a tu consulta.
              </span>
            </p>
          </div>
        </div>

        {/* COLUMNA LATERAL: CONTACTO DIRECTO */}
        <aside className="space-y-4">
          {/* INTERNACIÓN DOMICILIARIA */}
          <div className="rounded-2xl border bg-white/90 p-5 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Internación domiciliaria
            </h2>
            <p className="mt-1 text-sm text-neutral-700">
              Para consultas sobre cuidado en el hogar, coordinación de
              servicios y seguimiento de pacientes.
            </p>

            <div className="mt-4 space-y-3 text-sm text-neutral-800">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
                  <Phone className="h-4 w-4 text-blue-700" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    Teléfono
                  </p>
                  <a
                    href={EARH_CONTACT.telHref}
                    className="font-medium hover:underline"
                  >
                    {EARH_CONTACT.telDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50">
                  <MessageCircle className="h-4 w-4 text-green-700" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    WhatsApp
                  </p>
                  <a
                    href={EARH_CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    {EARH_CONTACT.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-50">
                  <Mail className="h-4 w-4 text-neutral-700" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    Email
                  </p>
                  <a
                    href={`mailto:${EARH_CONTACT.email}`}
                    className="font-medium hover:underline"
                  >
                    {EARH_CONTACT.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CONSULTORIOS MÉDICOS URUGUAY */}
          <div className="rounded-2xl border bg-white/90 p-5 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-700">
              Consultorios Médicos Uruguay
            </h2>
            <p className="mt-1 text-sm text-neutral-700">
              Turnos y consultas para atención en Uruguay 266, 1º E
              (Microcentro, CABA).
            </p>

            <div className="mt-4 space-y-3 text-sm text-neutral-800">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50">
                  <PhoneCall className="h-4 w-4 text-blue-700" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    Teléfono consultorios
                  </p>
                  <a
                    href={CMU_CONTACT.telHref}
                    className="font-medium hover:underline"
                  >
                    {CMU_CONTACT.telDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50">
                  <MessageCircle className="h-4 w-4 text-green-700" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    WhatsApp turnos
                  </p>
                  <a
                    href={CMU_CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    {CMU_CONTACT.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-50">
                  <Mail className="h-4 w-4 text-neutral-700" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    Email consultorios
                  </p>
                  <a
                    href={`mailto:${CMU_CONTACT.email}`}
                    className="font-medium hover:underline"
                  >
                    {CMU_CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-neutral-500">
              También podés ver más información en{" "}
              <Link
                href="/cmu"
                className="font-medium underline underline-offset-4 hover:text-neutral-700"
              >
                la sección de Consultorios Médicos Uruguay
              </Link>
              .
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
