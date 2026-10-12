"use client";

import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";

import type { ExplorePost } from "@/types/post";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import PopularPosts from "./PopularPosts";
import WriteForUs from "./WriteForUs";

type ExploreSidebarProps = {
  posts: ExplorePost[];
  onSearch: (query: string) => void;
};

const ExploreSidebar = ({ posts, onSearch }: ExploreSidebarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query.trim());
  };

  return (
    <aside className="space-y-5">
      <section className="rounded-2xl border border-purple-100 bg-purple-50/70 p-5">
        <h3 className="mb-4 flex items-center gap-2 font-extrabold text-slate-900">
          <Search className="h-5 w-5 text-[#7F22FE]" />
          Search Posts
        </h3>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search anything..."
            aria-label="Search posts"
            className="min-w-0 rounded-xl border-purple-100 bg-white"
          />

          <Button
            type="submit"
            size="icon"
            aria-label="Submit search"
            className="shrink-0 rounded-xl bg-[#7F22FE] hover:bg-[#6915df]"
          >
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </section>

      <PopularPosts posts={posts} />

      <WriteForUs />
    </aside>
  );
};

export default ExploreSidebar;