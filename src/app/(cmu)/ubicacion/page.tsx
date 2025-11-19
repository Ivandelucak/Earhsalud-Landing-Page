// FILE: src/app/(cmu)/ubicacion/page.tsx
import type { Metadata } from "next";
import CmuUbicacionSection from "./CmuUbicacionSection";

export const metadata: Metadata = {
  title: "Ubicación – Consultorios Médicos Uruguay",
  description:
    "Encontranos en Uruguay 266 (Microcentro), CABA. Horarios de atención, zona y contacto rápido.",
};

export default function CmuUbicacionPage() {
  return <CmuUbicacionSection />;
}
