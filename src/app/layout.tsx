// FILE: src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Earh Salud / CMU",
  description: "Sitio de Earh Salud y Consultorios Médicos Uruguay.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased min-h-dvh bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
