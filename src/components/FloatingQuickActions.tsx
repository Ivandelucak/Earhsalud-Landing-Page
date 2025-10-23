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
      {/* WhatsApp */}
      <a
        href="https://wa.me/5491100000000?text=Hola%20Earh%20Salud%2C%20quisiera%20hacer%20una%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="
          inline-flex items-center gap-2
          rounded-full px-4 py-2
          bg-green-600 text-white shadow-lg
          active:scale-95 transition
        "
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-medium">WhatsApp</span>
      </a>

      {/* Llamar */}
      <a
        href="tel:+541100000000"
        aria-label="Llamar por teléfono"
        className="
          inline-flex items-center gap-2
          rounded-full px-4 py-2
          bg-neutral-900 text-white shadow-lg
          active:scale-95 transition
        "
      >
        <Phone className="h-5 w-5" />
        <span className="text-sm font-medium">Llamar</span>
      </a>
    </div>
  );
}
