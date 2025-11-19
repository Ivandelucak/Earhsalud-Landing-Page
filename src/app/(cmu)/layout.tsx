// FILE: src/app/(cmu)/layout.tsx
import type { Metadata } from "next";
import HeaderCmu from "@/components/HeaderCmu";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "Consultorios Médicos Uruguay",
  description:
    "Consultorios Médicos Uruguay: atención primaria, clínica médica y especialidades en Microcentro.",
};

export default function CmuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderCmu />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {children}
      </main>
      <Footer />
      <WhatsAppFloatingButton href="https://wa.me/541130031247?text=Hola%20CMU%2C%20quisiera%20hacer%20una%20consulta" />
    </>
  );
}
