import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";

export default function Home() {
  const posts = getAllPosts();

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
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Writing
        </h2>
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug} 
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-2 -mx-4 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-black group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h3>
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
