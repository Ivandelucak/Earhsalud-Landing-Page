import type { Metadata } from "next";
import Script from "next/script";
import InternacionDomiciliariaPage from "@/components/internacion/InternacionDomiciliariaPage";

export const metadata: Metadata = {
  title:
    "Internación domiciliaria para adultos mayores en CABA y GBA – Earh Salud",
  description:
    "Internación domiciliaria y cuidados de adultos mayores en el hogar en CABA y Gran Buenos Aires. Menos infecciones intrahospitalarias, menos reinternaciones y más contención para la familia.",
};

const CONTACT = {
  tel: "+54 11 4743-2525",
  telHref: "tel:+541147432525",
  email: "idearhsalud@gmail.com",
};

// Schema de organización médica
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Earh Salud SRL – Internación domiciliaria",
  telephone: CONTACT.tel,
  email: CONTACT.email,
  areaServed: ["CABA", "Gran Buenos Aires"],
  medicalSpecialty: ["PrimaryCare", "Geriatric"],
};

// Schema de FAQ específico de esta página
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué incluye la internación domiciliaria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Incluye cuidadores capacitados, asistencia en actividades diarias, seguimiento de indicaciones médicas externas, organización del entorno y comunicación permanente con la familia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo sé si la internación domiciliaria es adecuada para nuestro caso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la primera consulta relevamos la situación clínica, el entorno y el apoyo disponible. Con esa información evaluamos si la internación domiciliaria es la opción más segura y conveniente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con obras sociales o solo particular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En cada caso revisamos la cobertura disponible y los circuitos de autorización. También trabajamos de forma particular cuando corresponde.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué zonas brindan el servicio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En CABA y Gran Buenos Aires, evaluando la disponibilidad del equipo según la dirección y la complejidad del caso.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="internacion-domiciliaria-org-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <Script
        id="internacion-domiciliaria-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <InternacionDomiciliariaPage />
    </>
  );
}
