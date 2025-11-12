"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";

const contactSchema = z.object({
  nombre: z.string().min(2, "Ingresá tu nombre completo."),
  email: z.string().email("Ingresá un correo válido."),
  telefono: z
    .string()
    .regex(/^[0-9+\s-]{6,}$/, "Ingresá un número válido.")
    .optional(),
  mensaje: z.string().min(5, "Escribí tu consulta o comentario."),
  _gotcha: z.string().optional(), // honeypot invisible
});

type ContactData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactData) => {
    const elapsed = Date.now() - startTime;
    if (elapsed < 3000) {
      console.warn(" Envío demasiado rápido (posible bot)");
      return;
    }

    if (data._gotcha && data._gotcha.trim() !== "") {
      console.warn(" Honeypot activado (posible bot)");
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/xblzwqde", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setEnviado(true);
        reset();
        setTimeout(() => setEnviado(false), 3000);
      } else throw new Error("Error al enviar");
    } catch (e) {
      console.error(e);
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <>
      {/* FORMULARIO */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 rounded-xl border bg-white/70 p-6 shadow-sm backdrop-blur relative z-10"
      >
        {/* Honeypot*/}
        <input
          type="text"
          {...register("_gotcha")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label className="block text-sm font-medium text-neutral-800">
            Nombre completo
          </label>
          <input
            {...register("nombre")}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          />
          {errors.nombre && (
            <p className="text-sm text-red-600 mt-1">{errors.nombre.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-800">
            Correo electrónico
          </label>
          <input
            {...register("email")}
            type="email"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-800">
            Teléfono (opcional)
          </label>
          <input
            {...register("telefono")}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          />
          {errors.telefono && (
            <p className="text-sm text-red-600 mt-1">
              {errors.telefono.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-800">
            Mensaje
          </label>
          <textarea
            {...register("mensaje")}
            rows={4}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          />
          {errors.mensaje && (
            <p className="text-sm text-red-600 mt-1">
              {errors.mensaje.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-600 py-2.5 text-white font-medium hover:opacity-90 active:scale-[0.98] transition"
        >
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </button>

        {error && (
          <p className="text-red-600 text-center font-medium">
            ⚠️ Hubo un error, intentá nuevamente.
          </p>
        )}
      </form>

      {/* POPUP */}
      {enviado && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setEnviado(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl px-12 py-10 max-w-lg w-[90%] text-center animate-scaleIn"
          >
            <div className="text-green-600 text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
              ¡Mensaje enviado con éxito!
            </h3>
            <p className="text-neutral-700 text-base leading-relaxed">
              Gracias por comunicarte con <strong>Earh Salud</strong>. Te
              responderemos a la brevedad.
            </p>
          </div>
        </div>
      )}

      {/* ANIMACIONES */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
