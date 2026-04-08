// FILE: src/app/(site)/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Internación y Asistencia Domiciliaria en CABA y GBA | Earh Salud",

  description:
    "Earh Salud brinda internación domiciliaria, asistencia domiciliaria, y cuidadores a domicilio en CABA y Gran Buenos Aires. Atención profesional, rápida y coordinada.",

  keywords: [
    "internación domiciliaria",
    "asistencia domiciliaria",
    "enfermería a domicilio",
    "prestaciones de salud a domicilio",
    "servicios médicos domiciliarios",
    "cuidadores a domicilio",
    "atención médica en casa",
    "cuidado de adultos mayores",
    "internación domiciliaria CABA",
    "internación domiciliaria Buenos Aires",
    "servicios de salud en el hogar",
    "consultorios en microcentro",
    "consultorios privados CABA",
    "medicos en capital",
  ],

  openGraph: {
    title: "Internación y Asistencia Domiciliaria en Buenos Aires | Earh Salud",
    description:
      "Servicios de salud en domicilio: internación, asistencia, enfermería, kinesiología y cuidadores en CABA y GBA.",
    url: "https://earhsalud.com", // ajustá si cambia
    siteName: "Earh Salud",
    locale: "es_AR",
    type: "website",
  },
};

const EARH_CONTACT = {
  tel: "+54 11 4743-2525",
  telHref: "tel:+541147432525",
  emailInternacion: "idearhsalud@gmail.com",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Earh Salud SRL",
  url: "https://earhsalud.com",
  telephone: EARH_CONTACT.tel,
  email: EARH_CONTACT.emailInternacion,

  address: {
    "@type": "PostalAddress",
    streetAddress: "Uruguay 266 1º E",
    addressLocality: "Ciudad Autónoma de Buenos Aires",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },

  areaServed: ["CABA", "Gran Buenos Aires"],

  medicalSpecialty: ["PrimaryCare", "Geriatric", "Nursing", "Physiotherapy"],

  description:
    "Servicios de internación domiciliaria, asistencia domiciliaria, enfermería, kinesiología y cuidadores en CABA y Gran Buenos Aires.",

  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Internación domiciliaria",
    },
    {
      "@type": "MedicalTherapy",
      name: "Asistencia domiciliaria",
    },
    {
      "@type": "MedicalTherapy",
      name: "Enfermería a domicilio",
    },
    {
      "@type": "MedicalTherapy",
      name: "Kinesiología a domicilio",
    },
    {
      "@type": "MedicalTherapy",
      name: "Cuidado de adultos mayores",
    },
  ],

  department: [
    {
      "@type": "MedicalClinic",
      name: "Consultorios Médicos Uruguay",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Uruguay 266 1º E",
        addressLocality: "Ciudad Autónoma de Buenos Aires",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="earh-salud-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
