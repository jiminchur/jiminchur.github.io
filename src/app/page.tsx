import { getAllPosts } from "@/lib/markdown";
import PostList from "./PostList";

export default function Home() {
  const posts = getAllPosts();

  return <PostList posts={posts} />;
}
