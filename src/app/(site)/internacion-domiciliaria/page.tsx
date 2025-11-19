import type { Metadata } from "next";
import Script from "next/script";
import InternacionDomiciliariaPage from "@/components/internacion/InternacionDomiciliariaPage";
export const metadata: Metadata = {
  title:
    "Internación domiciliaria – Earh Salud | Cuidado en el hogar para personas mayores",
  description:
    "Internación domiciliaria en CABA y GBA. Reducción de infecciones intrahospitalarias, menos traslados, cuidadores capacitados y seguimiento profesional.",
};

const CONTACT = {
  tel: "+54 11 4743-2525",
  telHref: "tel:+541147432525",
  email: "idearhsalud@gmail.com",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "Earh Salud SRL – Internación domiciliaria",
  telephone: CONTACT.tel,
  email: CONTACT.email,
  areaServed: ["CABA", "Gran Buenos Aires"],
  medicalSpecialty: ["PrimaryCare", "Geriatric"],
};

export default function Page() {
  return (
    <>
      <Script
        id="internacion-domiciliaria-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InternacionDomiciliariaPage />
    </>
  );
}
