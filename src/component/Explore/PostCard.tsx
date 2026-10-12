"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark, Clock3, Eye, MessageCircle } from "lucide-react";

import type { ExplorePost } from "@/types/post";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type PostCardProps = {
  post: ExplorePost;
};

const PostCard = ({ post }: PostCardProps) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <Badge className="absolute bottom-3 left-3 rounded-full bg-[#7F22FE] px-3 text-white hover:bg-[#7F22FE]">
          {post.category}
        </Badge>

        <Button
          variant="secondary"
          size="icon"
          aria-label={isSaved ? "Remove bookmark" : "Save post"}
          aria-pressed={isSaved}
          onClick={() => setIsSaved(!isSaved)}
          className={`absolute right-3 top-3 h-9 w-9 rounded-full shadow-md ${
            isSaved
              ? "bg-[#7F22FE] text-white hover:bg-[#6915df]"
              : "bg-white/95 text-slate-700 hover:bg-white"
          }`}
        >
          <Bookmark
            className="h-4 w-4"
            fill={isSaved ? "currentColor" : "none"}
          />
        </Button>
      </div>

      <div className="p-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
          <span>{post.date}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="flex items-center gap-1">
            <Clock3 className="h-3.5 w-3.5" />
            {post.readTime} min read
          </span>
        </div>

        <Link href={`/posts/${post.id}`}>
          <h3 className="mt-3 line-clamp-2 min-h-12 text-base font-extrabold leading-6 text-slate-900 transition-colors group-hover:text-[#7F22FE]">
            {post.title}
          </h3>
        </Link>

        {/* <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500">
          {post.description}
        </p> */}

        <div className="mt-4 flex items-center gap-2.5 border-t border-slate-100 pt-4">
          <Image
            src={post.avatar}
            alt={post.author}
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />

          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-bold text-slate-800">
              {post.author}
            </p>
            {/* <p className="mt-0.5 truncate text-[11px] text-slate-500">
              {post.authorRole}
            </p> */}
          </div>

          <div className="flex shrink-0 items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Eye className="h-3.5 w-3.5" />
              {post.views}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="h-3.5 w-3.5" />
              {post.comments}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;