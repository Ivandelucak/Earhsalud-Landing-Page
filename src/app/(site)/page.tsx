// FILE: src/app/(site)/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Earh Salud – Internación domiciliaria en CABA y GBA",
  description:
    "Earh Salud ofrece internación domiciliaria y coordinación de servicios de salud con enfoque humano en CABA y Gran Buenos Aires.",
  keywords: [
    "internación domiciliaria",
    "cuidadores a domicilio",
    "enfermería a domicilio",
    "cuidado de adultos mayores",
    "internación domiciliaria CABA",
    "internación domiciliaria GBA",
    "servicios de salud en el hogar",
  ],
  openGraph: {
    title: "Earh Salud – Internación domiciliaria en CABA y GBA",
    description:
      "Grupo interdisciplinario de profesionales de la salud que ofrece internación domiciliaria y servicios vinculados en CABA y Gran Buenos Aires.",
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
  medicalSpecialty: ["PrimaryCare", "Geriatric"],
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
