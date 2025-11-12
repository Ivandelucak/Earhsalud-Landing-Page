import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Earh Salud",
  description: "Internación domiciliaria y contenidos informativos.",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
