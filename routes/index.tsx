import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <main class="p-4">
      <h1 class="text-2xl">Mi blog</h1>
      <a href="/blog/hello-world" class="underline hover:text-blue-500">
        Entrar al articulo Hello World
      </a>
    </main>
  );
}
