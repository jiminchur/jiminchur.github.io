import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllPostSlugs, extractHeadings } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "@/components/CodeBlock";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { ViewCounter } from "@/components/ViewCounter";
import { Clock } from "lucide-react";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    return notFound();
  }

  const headings = extractHeadings(post.content);

  return (
    <article className="w-full mt-8 relative">
      <ReadingProgressBar />
      
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-black mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 font-mono tracking-tighter">
          <time dateTime={post.date}>{post.date}</time>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readingTime} min read</span>
          </div>
          <span className="text-gray-300">|</span>
          <ViewCounter slug={post.slug} initialViews={post.views} />
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="prose prose-neutral max-w-none flex-1 prose-headings:scroll-mt-20 prose-p:text-gray-800 prose-p:leading-loose prose-a:text-black prose-a:underline prose-a:underline-offset-4 prose-a:decoration-gray-300 hover:prose-a:decoration-black prose-img:rounded-2xl prose-img:border prose-img:border-gray-100">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h2({ children }) {
                const id = String(children).toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                return <h2 id={id}>{children}</h2>;
              },
              h3({ children }) {
                const id = String(children).toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                return <h3 id={id}>{children}</h3>;
              },
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline ? (
                  <CodeBlock className={className}>
                    {String(children).replace(/\n$/, '')}
                  </CodeBlock>
                ) : (
                  <code className="bg-gray-100 px-1.5 py-0.5 rounded-md text-sm font-mono text-gray-900" {...props}>
                    {children}
                  </code>
                );
              },
              pre({ children }) {
                return <>{children}</>;
              }
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
        
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              On this page
            </h4>
            <nav className="space-y-3">
              {headings.length > 0 ? (
                headings.map((heading, i) => (
                  <a 
                    key={i}
                    href={`#${heading.id}`}
                    className={`block text-sm transition-colors hover:text-black ${
                      heading.level === 3 ? "pl-4 text-gray-400" : "text-gray-500 font-medium"
                    }`}
                  >
                    {heading.text}
                  </a>
                ))
              ) : (
                <p className="text-sm text-gray-400 italic">No sections found</p>
              )}
            </nav>
          </div>
        </aside>
      </div>

      <footer className="mt-20 pt-8 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Written by <span className="font-semibold text-black">Jimin Cheol</span>
          </div>
          <div className="flex gap-4">
            <a href="/" className="text-sm text-gray-400 hover:text-black transition-colors">← Back to home</a>
          </div>
        </div>
      </footer>
    </article>
  );
}


