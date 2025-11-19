// FILE: src/app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog – Earh Salud",
  description:
    "Artículos informativos sobre salud, prevención e internación domiciliaria en CABA y GBA.",
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  const categories = Array.from(
    new Set(posts.map((p) => p.category).filter((c): c is string => Boolean(c)))
  );

  return (
    <section className="space-y-8">
      {/* HERO DEL BLOG */}
      <header className="rounded-2xl border bg-gradient-to-b from-white to-neutral-50 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span>Blog de Earh Salud</span>
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Artículos para pacientes y familias
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-neutral-700 sm:text-base">
                Encontrá información clara sobre internación domiciliaria,
                organización del cuidado en casa y temas vinculados a la salud
                cotidiana en CABA y Gran Buenos Aires.
              </p>
            </div>
          </div>

          {categories.length > 0 && (
            <div className="mt-2 sm:mt-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                Temas frecuentes
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* LISTADO DE POSTS */}
      {posts.length === 0 ? (
        <div className="rounded-2xl border bg-white/90 p-6 text-neutral-600 shadow-sm sm:p-8">
          <p>
            Aún no hay artículos publicados. Próximamente se irán sumando
            contenidos.
          </p>
        </div>
      ) : (
        <section className="space-y-4">
          <p className="text-sm text-neutral-600">
            {posts.length} artículo{posts.length > 1 ? "s" : ""} publicado
            {posts.length > 1 ? "s" : ""} hasta el momento.
          </p>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {/* Fecha + categoría */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                    <span>{formatDate(post.date)}</span>
                    {post.category && (
                      <>
                        <span className="h-1 w-1 rounded-full bg-neutral-300" />
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 font-medium text-blue-700">
                          {post.category}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Título */}
                  <h2 className="mt-3 text-lg font-semibold tracking-tight text-neutral-900 group-hover:text-blue-700">
                    {post.title}
                  </h2>

                  {/* Extracto */}
                  {post.excerpt && (
                    <p className="mt-2 line-clamp-3 text-sm text-neutral-700">
                      {post.excerpt}
                    </p>
                  )}

                  {/* CTA inferior */}
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-700">
                    Leer más
                    <span
                      aria-hidden
                      className="inline-block translate-x-0 transition-transform duration-150 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}

function formatDate(d: string) {
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return d;
  }
}
