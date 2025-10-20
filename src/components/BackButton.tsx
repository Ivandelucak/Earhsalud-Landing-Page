"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      aria-label="Volver atrás"
      className="
        fixed z-50
        left-3 sm:left-4 md:left-6
        bottom-4 sm:bottom-auto sm:top-16 md:top-6
        inline-flex items-center gap-1
        rounded-full px-3 py-2
        text-neutral-500 hover:text-neutral-800
        bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60
        border border-neutral-200
        shadow-sm hover:shadow
        transition-all duration-200
        cursor-pointer
        hover:-translate-x-0.5
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30
      "
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="hidden sm:inline text-sm">Volver</span>
    </button>
  );
}
