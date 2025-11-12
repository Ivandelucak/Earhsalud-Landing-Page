// FILE: src/lib/blog.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  keywords?: string[];
  author?: string;
  image?: string; // ruta relativa en /public (por ej: /blog/nobel-2025.jpg)
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPostsMeta(): PostMeta[] {
  const slugs = getAllSlugs();
  const posts = slugs
    .map((slug) => {
      const fullPath = path.join(BLOG_DIR, `${slug}.md`);
      const file = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(file);
      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        excerpt: data.excerpt || "",
        keywords: Array.isArray(data.keywords) ? data.keywords : [],
        author: data.author || "",
        image: typeof data.image === "string" ? data.image : undefined,
      } as PostMeta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

export async function getPostBySlug(slug: string): Promise<{
  meta: PostMeta;
  contentHtml: string;
}> {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  const meta: PostMeta = {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    keywords: Array.isArray(data.keywords) ? data.keywords : [],
    author: data.author || "",
    image: typeof data.image === "string" ? data.image : undefined,
  };

  return { meta, contentHtml };
}
