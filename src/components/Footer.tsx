export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Earh Salud. Todos los derechos
          reservados.
        </p>
        <div className="flex items-center gap-4">
          <a href="/politica-de-privacidad" className="hover:underline">
            Privacidad
          </a>
          <a href="mailto:contacto@tu-dominio.com" className="hover:underline">
            contacto@tu-dominio.com
          </a>
        </div>
      </div>
    </footer>
  );
}
