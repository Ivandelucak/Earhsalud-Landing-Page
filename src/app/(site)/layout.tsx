// FILE: src/app/(site)/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "Earh Salud",
  description: "Internación domiciliaria y servicios de salud en CABA y GBA.",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {children}
      </main>
      <Footer />
      <WhatsAppFloatingButton href="https://wa.me/541130031247?text=Hola%20Earh%20Salud%2C%20quisiera%20hacer%20una%20consulta" />
    </>
  );
}
