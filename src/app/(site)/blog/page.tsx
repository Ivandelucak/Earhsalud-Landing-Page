// FILE: src/app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog – Earh Salud",
  description:
    "Artículos informativos sobre salud, prevención y atención médica en CABA y GBA.",
};

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-neutral-600">
          Novedades, prevención y temas de interés para pacientes y familias.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-neutral-600">No hay artículos publicados todavía.</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border p-5 bg-white/80 shadow-sm hover:shadow-lg hover:scale-[1.01] transition"
              >
                <h2 className="text-xl font-semibold group-hover:underline underline-offset-4">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-500">
                  {formatDate(post.date)}
                </p>
                {post.excerpt && (
                  <p className="mt-3 text-neutral-700 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium">
                  Leer más <span aria-hidden>→</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
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
