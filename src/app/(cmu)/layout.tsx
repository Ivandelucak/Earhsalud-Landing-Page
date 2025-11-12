import type { Metadata } from "next";
import HeaderCmu from "@/components/HeaderCmu";
// si usás subbarra propia:
// import CmuBar from "@/components/cmu/CmuBar";

export const metadata: Metadata = {
  title: "Consultorios Médicos Uruguay – Policonsultorio",
  description: "Uruguay 266 (Microcentro). Turnos ágiles y atención cercana.",
};

export default function CmuLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <HeaderCmu />
      {/* <CmuBar /> */}
      <main className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {children}
      </main>
    </div>
  );
}
