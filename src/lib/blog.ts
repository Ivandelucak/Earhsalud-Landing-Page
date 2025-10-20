import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  author?: string;
  tags?: string[];
};

const postsDir = path.join(process.cwd(), "content", "blog");

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, filename);
    const file = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(file);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? new Date().toISOString(),
      excerpt: data.excerpt ?? "",
      author: data.author ?? "",
      tags: Array.isArray(data.tags) ? data.tags : [],
    } as PostMeta;
  });

  // Ordenar por fecha desc
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  const meta: PostMeta = {
    slug,
    title: data.title ?? slug,
    date: data.date ?? new Date().toISOString(),
    excerpt: data.excerpt ?? "",
    author: data.author ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
  };

  return { meta, contentHtml };
}
