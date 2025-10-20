import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog – Earh Salud",
  description:
    "Notas y guías de salud: asistencia domiciliaria, policonsultorio, prevención y más.",
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-neutral-600">
          Información útil y consejos para pacientes y familias.
        </p>
      </header>

      {posts.length === 0 && (
        <p className="text-neutral-600">Próximamente publicaremos artículos.</p>
      )}

      <ul className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              aria-label={`Leer: ${post.title}`}
              className="group block rounded-2xl border bg-white/90 p-5 shadow-sm
                         transition-all duration-200
                         hover:shadow-md hover:-translate-y-0.5
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30"
            >
              <time className="block text-xs text-neutral-500">
                {new Date(post.date).toLocaleDateString("es-AR")}
              </time>

              <h2 className="mt-1 text-xl font-semibold text-neutral-900 group-hover:underline underline-offset-4">
                {post.title}
              </h2>

              {post.excerpt && (
                <p className="mt-2 text-neutral-700">{post.excerpt}</p>
              )}

              {post.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-blue-50 text-blue-700 text-xs px-2 py-0.5"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600">
                Leer artículo
                <span
                  aria-hidden
                  className="translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
