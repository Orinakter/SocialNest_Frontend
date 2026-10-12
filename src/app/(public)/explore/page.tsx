"use client";

import { useMemo, useState } from "react";






import { explorePosts } from "@/data/explore-posts";
import ExploreHero from "@/component/Explore/ExploreHero";
import CategoryFilter from "@/component/Explore/CategoryFilter";
import ExploreToolbar from "@/component/Explore/ExploreToolbar";
import PostGrid from "@/component/Explore/PostGrid";
import ExplorePagination from "@/component/Explore/ExplorePagination";
import ExploreSidebar from "@/component/Explore/ExploreSidebar";

const POSTS_PER_PAGE = 6;

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);

  // Search এবং category অনুযায়ী post filter করা হচ্ছে।
  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase();

    const filtered = explorePosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(query) ||
        // post.description.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "All" ||
        post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // Sorting option অনুযায়ী post সাজানো হচ্ছে।
    if (sortBy === "oldest") {
      return [...filtered].reverse();
    }

    if (sortBy === "popular") {
      return [...filtered].sort(
        (a, b) =>
          Number(b.views.replace("K", "")) -
          Number(a.views.replace("K", "")),
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const totalPages = Math.ceil(
    filteredPosts.length / POSTS_PER_PAGE,
  );

  // Current page-এর post-গুলো বের করা হচ্ছে।
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  // Search করার পর প্রথম page-এ ফিরে যাওয়া।
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Category পরিবর্তন হলে প্রথম page-এ ফিরে যাওয়া।
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
     

      <main>
        <ExploreHero onSearch={handleSearch} />

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
          <div className="mb-8">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_300px]">
            <div className="min-w-0">
              {/* <ExploreToolbar
                totalPosts={filteredPosts.length}
                sortBy={sortBy}
                // onSortChange={handleSortChange}
              /> */}

              <div className="mt-6">
                <PostGrid posts={currentPosts} />
              </div>

              {filteredPosts.length > 0 && (
                <div className="mt-8">
                  <ExplorePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />

                  <p className="mt-4 text-center text-xs text-slate-500">
                    Showing{" "}
                    {(currentPage - 1) * POSTS_PER_PAGE + 1}–
                    {Math.min(
                      currentPage * POSTS_PER_PAGE,
                      filteredPosts.length,
                    )}{" "}
                    of {filteredPosts.length} posts
                  </p>
                </div>
              )}
            </div>

            <ExploreSidebar
              posts={explorePosts}
              onSearch={handleSearch}
            />
          </div>
        </section>
      </main>

    </div>
  );
}