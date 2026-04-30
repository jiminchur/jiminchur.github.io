import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="w-full mt-8">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tight text-black mb-4 leading-snug">
          {post.title}
        </h1>
        <div className="flex items-center text-sm text-gray-500 font-mono tracking-tighter">
          <time dateTime={post.date}>{post.date}</time>
        </div>
      </header>

      <div className="prose prose-neutral max-w-none prose-p:text-gray-800 prose-p:leading-loose prose-a:text-black prose-a:underline prose-a:underline-offset-4 prose-a:decoration-gray-300 hover:prose-a:decoration-black prose-pre:bg-[#f5f5f5] prose-pre:text-sm prose-pre:rounded-xl prose-pre:border prose-pre:border-gray-200">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
