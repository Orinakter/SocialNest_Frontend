import type { ExplorePost } from "@/types/post";
import PostCard from "./PostCard";

type PostGridProps = {
  posts: ExplorePost[];
};

const PostGrid = ({ posts }: PostGridProps) => {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-purple-200 bg-purple-50/50 px-5 py-16 text-center">
        <h3 className="text-lg font-bold text-slate-900">
          No posts found
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          Try another search term or select a different category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;