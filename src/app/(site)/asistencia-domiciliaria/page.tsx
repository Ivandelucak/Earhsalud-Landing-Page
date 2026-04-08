import type { Metadata } from "next";
import Script from "next/script";
import AsistenciaDomiciliariaPage from "@/components/asistencia/AsistenciaDomiciliariaPage";

export const metadata: Metadata = {
  title: "Asistencia domiciliaria en CABA y GBA – Earh Salud",
  description:
    "Asistencia domiciliaria con prestaciones médicas y asistenciales en el hogar en CABA y Gran Buenos Aires. Profesionales con experiencia, atención personalizada y coordinación según cada caso.",
};

const CONTACT = {
  tel: "+54 11 4743-2525",
  email: "idearhsalud@gmail.com",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Earh Salud SRL – Asistencia domiciliaria",
  telephone: CONTACT.tel,
  email: CONTACT.email,
  areaServed: ["CABA", "Gran Buenos Aires"],
  medicalSpecialty: ["PrimaryCare", "Nursing", "Geriatric"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es la asistencia domiciliaria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un servicio de prestaciones médicas y asistenciales puntuales en el hogar, coordinado según la necesidad del paciente y sin requerir la complejidad de una internación domiciliaria.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tipo de profesionales pueden asistir al domicilio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Según el caso, se pueden coordinar médicos clínicos, cardiólogos, traumatólogos, infectólogos, enfermeros, kinesiólogos, acompañantes terapéuticos y cuidadores domiciliarios, entre otros perfiles.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué se diferencia de la internación domiciliaria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La asistencia domiciliaria está orientada a prestaciones puntuales y necesidades específicas. La internación domiciliaria, en cambio, implica un abordaje más integral, continuo y de mayor complejidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué zonas brindan el servicio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En CABA y Gran Buenos Aires, evaluando disponibilidad según la dirección y el tipo de prestación requerida.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="asistencia-domiciliaria-org-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <Script
        id="asistencia-domiciliaria-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <AsistenciaDomiciliariaPage />
    </>
  );
}
