import Link from "next/link";
import { Post } from "@/lib/markdown";

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="w-full">
      <section className="mb-12">
        <p className="text-gray-600 leading-relaxed text-lg">
          안녕하세요, MinChur입니다.<br/>
          소프트웨어 엔지니어로서 복잡한 문제를 단순하게 풀어내는 데 집중합니다.<br/>
          제가 배우고 경험한 기술과 일상의 생각들을 이곳에 남깁니다.
        </p>
      </section>

      <section>
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug} 
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-2 -mx-4 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium text-black group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
                <span className={`text-[9px] px-1.5 py-0.5 rounded border leading-none font-medium uppercase tracking-tight ${
                  post.category === "Story" 
                    ? "border-blue-100 text-blue-400 bg-blue-50/30" 
                    : "border-gray-100 text-gray-400 bg-gray-50/30"
                }`}>
                  {post.category}
                </span>
              </div>
              <time dateTime={post.date} className="text-sm text-gray-400 mt-1 sm:mt-0 font-mono tracking-tighter">
                {post.date}
              </time>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
