// FILE: src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

type Params = { slug: string };

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = params;
  const { meta } = await getPostBySlug(slug);

  const images = meta.image ? [{ url: meta.image }] : undefined;

  return {
    title: `${meta.title} – Earh Salud`,
    description: meta.excerpt || "Artículo del Blog de Earh Salud.",
    keywords: meta.keywords,
    authors: meta.author ? [{ name: meta.author }] : undefined,
    openGraph: {
      title: meta.title,
      description: meta.excerpt || "",
      type: "article",
      images,
    },
    twitter: {
      card: meta.image ? "summary_large_image" : "summary",
      title: meta.title,
      description: meta.excerpt || "",
      images: meta.image ? [meta.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = params;
  const { meta, contentHtml } = await getPostBySlug(slug);

  const readingTime = getReadingTimeMinutes(contentHtml);

  return (
    <article className="space-y-8">
      {/* Imagen de cabecera opcional */}
      {meta.image && (
        <div className="relative w-full overflow-hidden rounded-2xl border bg-neutral-100">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={meta.image}
              alt={meta.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Encabezado del artículo */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-600">
          {/* Badge de categoría si existe */}
          {meta.category && (
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 font-medium text-blue-700">
              {meta.category}
            </span>
          )}
          <span className="text-neutral-500">
            {formatDate(meta.date)}
            {meta.author ? ` · ${meta.author}` : ""}
            {readingTime && ` · ${readingTime} min de lectura`}
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {meta.title}
        </h1>

        {meta.excerpt && (
          <p className="max-w-2xl text-neutral-700 text-sm sm:text-base">
            {meta.excerpt}
          </p>
        )}
      </header>

      {/* Contenido del artículo */}
      <div
        className="prose prose-neutral max-w-none blog-prose"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <hr className="mt-14 mb-0 border-neutral-200" />

      {/* Navegación simple */}
      <div className="pt-6 flex flex-wrap gap-3">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm hover:bg-neutral-50"
        >
          ← Volver al Blog
        </a>
        <a
          href="/contacto"
          className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm hover:bg-neutral-50"
        >
          Hacer una consulta
        </a>
      </div>
    </article>
  );
}

/* ---------- helpers ---------- */

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

function getReadingTimeMinutes(html: string): number | null {
  if (!html) return null;
  const text = html.replace(/<[^>]+>/g, " "); // saco tags html
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return null;
  const minutes = Math.ceil(words.length / 200); // ~200 wpm
  return minutes || 1;
}
