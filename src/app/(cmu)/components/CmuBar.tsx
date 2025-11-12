import Link from "next/link";
import { CMU } from "@/lib/cmu";

export default function CmuBar() {
  return (
    <div className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-5 text-sm">
          <span className="font-semibold text-neutral-900">{CMU.brand}</span>
          <Link
            href="/cmu/clinica-privada"
            className="text-neutral-700 hover:underline underline-offset-4"
          >
            Policonsultorio
          </Link>
          <Link
            href="/cmu/ubicacion"
            className="text-neutral-700 hover:underline underline-offset-4"
          >
            Ubicación
          </Link>
          <Link
            href="/contacto"
            className="text-neutral-700 hover:underline underline-offset-4"
          >
            Contacto
          </Link>
        </nav>
        <div className="hidden sm:block">
          <Link
            href={CMU.turnosHref}
            className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Solicitar turno
          </Link>
        </div>
      </div>
    </div>
  );
}
