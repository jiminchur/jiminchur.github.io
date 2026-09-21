import { getAllPosts } from "@/lib/posts";
import PostList from "./PostList";

// Posts are published from /admin without a redeploy, so the index has to
// refresh on its own rather than being frozen at build time.
export const revalidate = 60;

export default async function Home() {
  const posts = await getAllPosts();

  return <PostList posts={posts} />;
}
