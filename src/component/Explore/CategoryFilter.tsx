"use client";

import { Button } from "@/components/ui/button";

type CategoryFilterProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const categories = [
  "All",
  "Development",
  "Technology",
  "Design",
  "Lifestyle",
  "Business",
  "Health",
  "Education",
];

const CategoryFilter = ({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={
            selectedCategory === category
              ? "rounded-full bg-[#7F22FE] px-5 hover:bg-[#6915df]"
              : "rounded-full border-slate-200 bg-white px-5 text-slate-600 hover:border-purple-300 hover:text-[#7F22FE]"
          }
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;