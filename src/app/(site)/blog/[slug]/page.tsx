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
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = await getPostBySlug(slug);

  const images = meta.image ? [{ url: meta.image }] : undefined;

  return {
    title: `${meta.title} – Earh Salud`,
    description: meta.excerpt || "Artículo del Blog de Earh Salud",
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const { meta, contentHtml } = await getPostBySlug(slug);

  return (
    <article className="space-y-6">
      {meta.image && (
        <div className="relative w-full overflow-hidden rounded-2xl border">
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

      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{meta.title}</h1>
        <p className="text-neutral-500 text-sm">
          {formatDate(meta.date)}
          {meta.author ? ` · ${meta.author}` : ""}
        </p>
      </header>

      {/* ← NOTA: agregamos 'blog-prose' para estilizar los <hr> internos */}
      <div
        className="prose prose-neutral max-w-none blog-prose"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <hr className="mt-14 mb-0 border-neutral-200" />

      <div className="pt-6">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm hover:bg-neutral-50"
        >
          ← Volver al Blog
        </a>
      </div>
    </article>
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
