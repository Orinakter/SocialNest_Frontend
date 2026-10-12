import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";

import type { ExplorePost } from "@/types/post";

type PopularPostsProps = {
  posts: ExplorePost[];
};

const PopularPosts = ({ posts }: PopularPostsProps) => {
  return (
    <section className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center gap-2">
        <Flame className="h-5 w-5 text-[#7F22FE]" />
        <h3 className="font-extrabold text-slate-900">Popular Posts</h3>
      </div>

      <div className="space-y-5">
        {posts.slice(0, 5).map((post, index) => (
          <Link
            href={`/posts/${post.id}`}
            key={post.id}
            className="group flex items-start gap-3"
          >
            <span className="pt-1 text-sm font-extrabold text-[#7F22FE]">
              {index + 1}
            </span>

            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="64px"
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="line-clamp-2 text-sm font-bold leading-5 text-slate-800 transition-colors group-hover:text-[#7F22FE]">
                {post.title}
              </h4>

              <p className="mt-2 text-xs text-slate-500">
                {post.date} · {post.readTime} min read
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularPosts;