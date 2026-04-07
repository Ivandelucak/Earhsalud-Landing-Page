import Link from "next/link";

export default function ComingSoonOverlay() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/50 backdrop-blur-md">
      <div className="mx-6 max-w-2xl rounded-3xl border border-white/40 bg-white/70 px-8 py-10 text-center shadow-2xl backdrop-blur-xl">
        <span className="mb-4 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Próximamente
        </span>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Estamos preparando esta sección
        </h1>

        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          Muy pronto vas a poder conocer en detalle nuestros consultorios y
          especialidades médicas.
        </p>

        {/* BOTONES */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Botón principal */}
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
