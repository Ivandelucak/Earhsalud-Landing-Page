"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const contactSchema = z.object({
  tipoConsulta: z.string().min(1, "Seleccioná el tipo de consulta."),
  nombre: z.string().min(2, "Ingresá tu nombre completo."),
  email: z.string().email("Ingresá un correo válido."),
  telefono: z
    .string()
    .trim()
    .refine(
      (value) => value === "" || /^[0-9+\s()-]{6,}$/.test(value),
      "Ingresá un número válido.",
    )
    .optional(),
  mensaje: z.string().min(10, "Contanos un poco más sobre la consulta."),
  _gotcha: z.string().optional(),
});

type ContactData = z.infer<typeof contactSchema>;

const FORM_ENDPOINT = "https://formspree.io/f/xblzwqde";

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
    defaultValues: {
      tipoConsulta: "",
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
      _gotcha: "",
    },
  });

  const onSubmit = async (data: ContactData) => {
    const elapsed = Date.now() - startTime;

    if (elapsed < 3000) {
      console.warn("Envío demasiado rápido (posible bot)");
      return;
    }

    if (data._gotcha && data._gotcha.trim() !== "") {
      console.warn("Honeypot activado (posible bot)");
      return;
    }

    try {
      const payload = {
        ...data,
        telefono: data.telefono?.trim() || "No informado",
      };

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Error al enviar");
      }

      setEnviado(true);
      reset();
      setStartTime(Date.now());
      setTimeout(() => setEnviado(false), 3500);
    } catch (e) {
      console.error(e);
      setError(true);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative z-10 space-y-5 rounded-2xl border border-earh-blue-100 bg-white/90 p-5 shadow-sm sm:p-6"
      >
        <input
          type="text"
          {...register("_gotcha")}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <Label htmlFor="tipoConsulta">Tipo de consulta</Label>
            <select
              id="tipoConsulta"
              {...register("tipoConsulta")}
              className={inputClass(Boolean(errors.tipoConsulta))}
              defaultValue=""
            >
              <option value="" disabled>
                Seleccioná una opción
              </option>
              <option value="Internación Domiciliaria">
                Internación Domiciliaria
              </option>
              <option value="Asistencia Domiciliaria">
                Asistencia Domiciliaria
              </option>
              <option value="Consultorios Médicos Uruguay">
                Consultorios Médicos Uruguay
              </option>
              <option value="Consulta general">Consulta general</option>
            </select>
            {errors.tipoConsulta && (
              <ErrorText>{errors.tipoConsulta.message}</ErrorText>
            )}
          </Field>

          <Field>
            <Label htmlFor="nombre">Nombre completo</Label>
            <input
              id="nombre"
              {...register("nombre")}
              className={inputClass(Boolean(errors.nombre))}
              placeholder="Ej: María González"
              autoComplete="name"
            />
            {errors.nombre && <ErrorText>{errors.nombre.message}</ErrorText>}
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <Label htmlFor="email">Correo electrónico</Label>
            <input
              id="email"
              {...register("email")}
              type="email"
              className={inputClass(Boolean(errors.email))}
              placeholder="nombre@correo.com"
              autoComplete="email"
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </Field>

          <Field>
            <Label htmlFor="telefono">Teléfono (opcional)</Label>
            <input
              id="telefono"
              {...register("telefono")}
              className={inputClass(Boolean(errors.telefono))}
              placeholder="Ej: 11 3003-1247"
              autoComplete="tel"
            />
            {errors.telefono && (
              <ErrorText>{errors.telefono.message}</ErrorText>
            )}
          </Field>
        </div>

        <Field>
          <Label htmlFor="mensaje">Mensaje</Label>
          <textarea
            id="mensaje"
            {...register("mensaje")}
            rows={5}
            className={inputClass(Boolean(errors.mensaje), true)}
            placeholder="Contanos brevemente la situación del paciente, la zona y qué tipo de ayuda necesitan."
          />
          {errors.mensaje && <ErrorText>{errors.mensaje.message}</ErrorText>}
        </Field>

        <div className="rounded-xl border border-earh-blue-100 bg-earh-cream-50/70 px-4 py-3">
          <p className="text-xs leading-relaxed text-neutral-600">
            Para poder orientarte mejor, intentá incluir en el mensaje la zona,
            el tipo de necesidad y si se trata de una consulta puntual o de un
            acompañamiento más continuo.
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-lg bg-earh-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-earh-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Enviando consulta..." : "Enviar consulta"}
        </button>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            Hubo un error al enviar la consulta. Intentá nuevamente en unos
            instantes.
          </div>
        )}
      </form>

      {enviado && (
        <div
          className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setEnviado(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-scaleIn w-[90%] max-w-lg rounded-3xl bg-white px-8 py-9 text-center shadow-2xl sm:px-12 sm:py-10"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <svg
                viewBox="0 0 24 24"
                aria-hidden
                className="h-7 w-7 text-emerald-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="mb-3 text-2xl font-semibold text-neutral-900">
              Consulta enviada con éxito
            </h3>
            <p className="text-base leading-relaxed text-neutral-700">
              Gracias por comunicarte con <strong>Earh Salud</strong>. Vamos a
              revisar tu mensaje y responderte a la brevedad.
            </p>
          </div>
        </div>
      )}

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
            transform: scale(0.96);
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

function Field({ children }: { children: React.ReactNode }) {
  return <div className="space-y-1.5">{children}</div>;
}

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-neutral-800"
    >
      {children}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-red-600">{children}</p>;
}

function inputClass(hasError: boolean, isTextarea = false) {
  return [
    "w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-neutral-900 shadow-sm outline-none transition",
    "placeholder:text-neutral-400",
    "focus:border-earh-blue-400 focus:ring-2 focus:ring-earh-blue-200",
    isTextarea ? "min-h-[120px] resize-y" : "",
    hasError
      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
      : "border-neutral-200",
  ].join(" ");
}
