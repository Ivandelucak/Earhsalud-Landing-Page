"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingQuickActions() {
  return (
    <div
      className="
        fixed z-50 md:hidden
        right-4 bottom-4
        flex flex-col gap-3
        pb-[env(safe-area-inset-bottom)]
      "
      aria-label="Accesos rápidos"
    >
      <a
        href="https://wa.me/5491100000000?text=Hola%20Earh%20Salud%2C%20quisiera%20hacer%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="
          inline-flex items-center gap-2
          rounded-full px-6 py-3.5
          bg-green-600 text-white shadow-lg
          active:scale-95 transition
        "
      >
        <MessageCircle className="h-6 w-6" />
        <span className="text-base font-medium">WhatsApp</span>
      </a>

      <a
        href="tel:+541100000000"
        aria-label="Llamar por teléfono"
        className="
          inline-flex items-center gap-2
          rounded-full px-6 py-3.5
          bg-neutral-900 text-white shadow-lg
          active:scale-95 transition
        "
      >
        <Phone className="h-6 w-6" />
        <span className="text-base font-medium">Llamar</span>
      </a>
    </div>
  );
}
