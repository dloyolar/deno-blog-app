import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts } from "../utils/posts.ts";
import { Post } from "../types.d.ts";

export const handler: Handlers = {
  async GET(req, context) {
    const posts = await listPosts();
    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { data: { posts } } = props;
  return (
    <main class="p-4">
      <h1 class="text-2xl">Mi blog</h1>
      <a href="/blog/hello-world" class="underline hover:text-blue-500">
        Entrar al articulo Hello World
      </a>

      {posts.map((post: Post) => (
        <article class="p-4">
          <h2 class="text-2xl font-bold">
            <a href={`/blog/${post.id}`} class="hover:text-blue-600">
              {post.title}
            </a>
          </h2>
          <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
        </article>
      ))}
    </main>
  );
}
