import type { Metadata } from "next";
import ServiciosSection from "./ServiciosSection";

export const metadata: Metadata = {
  title: "Servicios de salud en domicilio y consultorios – Earh Salud",
  description:
    "Conocé los servicios de Earh Salud: Internación Domiciliaria, Asistencia Domiciliaria y Consultorios Médicos Uruguay. Atención coordinada en CABA y Gran Buenos Aires.",
};

export default function ServiciosPage() {
  return <ServiciosSection />;
}
