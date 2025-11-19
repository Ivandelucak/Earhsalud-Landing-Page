// FILE: src/app/(site)/servicios/page.tsx
import type { Metadata } from "next";
import ServiciosSection from "./ServiciosSection";

export const metadata: Metadata = {
  title: "Servicios – Earh Salud",
  description:
    "Internación domiciliaria en CABA y GBA y Policonsultorio en Microcentro. Conocé qué ofrece cada servicio y cómo coordinar.",
};

export default function ServiciosPage() {
  return <ServiciosSection />;
}
