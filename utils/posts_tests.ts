import { loadPost } from "./posts.ts";
import { assertEquals } from "$std/testing/asserts.ts";

Deno.test("loadPost() return null if the post does not exist", async (): Promise<void> => {
  const post = await loadPost("non-exists");
  assertEquals(post, null);
});

Deno.test("loadPost() return a post object if post does exists", async (): Promise<void> => {
  const post = await loadPost("hello-world");
  assertEquals(post?.id, "hello-world");
});
