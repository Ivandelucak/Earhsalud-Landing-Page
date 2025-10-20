// FILE: src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { getAllPostsMeta, getPostBySlug } from "@/lib/blog";

/**
 * Necesario con output: 'export'
 * Genera las rutas estáticas para cada post en /blog/[slug]
 */
export function generateStaticParams() {
  const posts = getAllPostsMeta(); // lee /content/blog/*.md
  return posts.map((p) => ({ slug: p.slug }));
}

/**
 * Metadata por post (SEO) — Next 15: params es una Promesa
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = await getPostBySlug(slug);

  return {
    title: `${meta.title} – Earh Salud`,
    description: meta.excerpt || "Artículo del Blog de Earh Salud",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta, contentHtml } = await getPostBySlug(slug);

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{meta.title}</h1>
        <time className="block text-sm text-neutral-500">
          {new Date(meta.date).toLocaleDateString("es-AR")}
        </time>
      </header>

      <div
        className="prose prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
