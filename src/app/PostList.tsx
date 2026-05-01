"use client";

import Link from "next/link";
import { Post } from "@/lib/markdown";
import { useState, useMemo } from "react";
import { Search, Filter, Clock } from "lucide-react";

export default function PostList({ posts }: { posts: Post[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory ? post.category === activeCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, activeCategory]);

  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <div className="w-full">
      <section className="mb-16">
        <p className="text-gray-600 leading-relaxed text-lg mb-8">
          안녕하세요, MinChur입니다.<br/>
          소프트웨어 엔지니어로서 복잡한 문제를 단순하게 풀어내는 데 집중합니다.<br/>
          제가 배우고 경험한 기술과 일상의 생각들을 이곳에 남깁니다.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-gray-100 pb-6">
          <div className="relative w-full sm:max-w-xs group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-black transition-colors" />
            <input 
              type="text" 
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black focus:bg-white transition-all"
            />
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide">
            <button 
              onClick={() => setActiveCategory(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === null ? "bg-black text-white" : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat ? "bg-black text-white" : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-2">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.slug} 
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-4 -mx-4 px-4 rounded-2xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-black group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h3>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded border leading-none font-bold uppercase tracking-tight ${
                      post.category === "Story" 
                        ? "border-blue-100 text-blue-500 bg-blue-50/50" 
                        : "border-gray-200 text-gray-400 bg-gray-50/50"
                    }`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="text-gray-200">•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readingTime} min</span>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-mono text-gray-400">Read Post →</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-400 italic">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

