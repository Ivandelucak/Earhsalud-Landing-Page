import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackArrow from "@/components/BackArrow";

export const metadata: Metadata = {
  title: "Earh Salud",
  description: "Asistencia médica y clínica privada en CABA y GBA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased min-h-dvh bg-white text-neutral-900">
        {/* Barra superior visible en TODAS las páginas */}
        <Header />

        {/* Flecha “volver” (condicional según ruta, controlada dentro del componente) */}
        <BackArrow />

        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
