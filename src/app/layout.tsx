// FILE: src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans-3",
});

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
      <body
        className={`${sourceSans.variable} min-h-dvh bg-[#F5F7FA] text-neutral-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
