"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-spam: si está completo, abortar silenciosamente
    if ((data.get("company") as string)?.toString().trim()) {
      setStatus("success");
      form.reset();
      return;
    }

    // Asunto para el mail entrante en Formspree
    if (!data.get("_subject"))
      data.append("_subject", "Nuevo contacto desde Earh Salud");

    const res = await fetch("https://formspree.io/f/xblzwqde", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      {/* honeypot */}
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <input
        name="name"
        type="text"
        placeholder="Nombre"
        required
        className="w-full rounded-md border p-3 focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        required
        className="w-full rounded-md border p-3 focus:ring-2 focus:ring-blue-500"
      />
      <select
        name="zone"
        required
        className="w-full rounded-md border p-3 focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Seleccioná tu zona...</option>
        <option value="CABA">CABA</option>
        <option value="GBA Norte">GBA Norte</option>
        <option value="GBA Sur">GBA Sur</option>
        <option value="Interior">Interior</option>
      </select>
      <textarea
        name="message"
        placeholder="Mensaje"
        required
        rows={3}
        className="w-full rounded-md border p-3 focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status === "success" && (
        <p className="text-green-600">¡Mensaje enviado correctamente!</p>
      )}
      {status === "error" && (
        <p className="text-red-600">Hubo un error. Intentá nuevamente.</p>
      )}
    </form>
  );
}
