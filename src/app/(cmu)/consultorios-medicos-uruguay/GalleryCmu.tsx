export default function GalleryCmu() {
  const items = [
    {
      title: "Recepción",
      text: "Área de ingreso y recepción de pacientes.",
    },
    {
      title: "Sala de espera",
      text: "Espacio cómodo para la espera previa a la consulta.",
    },
    {
      title: "Consultorio",
      text: "Consultorios preparados para la atención médica.",
    },
  ];

  return (
    <section className="rounded-2xl border bg-white/90 p-6 shadow-sm sm:p-8">
      <h2 className="mb-3 text-2xl font-semibold text-blue-700">
        Conocé el espacio
      </h2>
      <p className="mb-5 max-w-3xl text-neutral-700">
        Próximamente vas a poder ver imágenes del consultorio, la sala de espera
        y los espacios de atención. Mientras tanto, te mostramos cómo estará
        organizado el entorno.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="relative flex aspect-[4/3] flex-col justify-end rounded-2xl border bg-gradient-to-br from-neutral-100 to-neutral-200 p-4 shadow-sm"
          >
            <div className="absolute inset-0 flex items-center justify-center text-xs font-medium uppercase tracking-wide text-neutral-500">
              Foto próximamente
            </div>
            <div className="relative mt-auto rounded-xl bg-white/90 p-3 shadow-sm">
              <h3 className="text-sm font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-neutral-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
