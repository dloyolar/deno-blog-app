import type { Post } from "../types.d.ts";
import { extract } from "$std/encoding/front_matter/any.ts";

export async function loadPost(id: string): Promise<Post | null> {
  let raw: string;

  try {
    raw = await Deno.readTextFile(`./content/posts/${id}.md`);
  } catch {
    return null;
  }

  const { attrs, body } = extract(raw);

  const params = attrs as Record<string, string>;

  const post: Post = {
    id,
    title: params.title,
    body,
    date: new Date(params.date),
    excerpt: params.excerpt,
  };

  return post;
}
