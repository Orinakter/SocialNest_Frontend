"use client";

import { ArrowDownUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ExploreToolbarProps = {
  totalPosts: number;
  sortBy: string;
  onSortChange: (value: string) => string;
};

const ExploreToolbar = ({
  totalPosts,
  sortBy,
  onSortChange,
}: ExploreToolbarProps) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">
          Explore stories
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Discover something worth reading today.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Badge
          variant="secondary"
          className="rounded-full bg-purple-50 px-3 py-1 text-[#7F22FE]"
        >
          {totalPosts} posts
        </Badge>

        <Select value={sortBy}>
          <SelectTrigger className="w-[145px] rounded-xl">
            <ArrowDownUp className="mr-2 h-4 w-4 text-[#7F22FE]" />
            <SelectValue placeholder="Sort posts" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="popular">Most popular</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ExploreToolbar;