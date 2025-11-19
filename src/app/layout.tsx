// FILE: src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Earh Salud / Consultorios Médicos Uruguay",
    template: "%s | Earh Salud / CMU",
  },
  description:
    "Internación domiciliaria y policonsultorios médicos en CABA y Microcentro. Atención humana, cercana y coordinada.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Earh Salud / Consultorios Médicos Uruguay",
    description:
      "Internación domiciliaria y policonsultorios médicos en CABA y Microcentro. Atención humana, cercana y coordinada.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className="scroll-smooth">
      <body className="min-h-dvh bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
