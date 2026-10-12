import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  PenLine,
  Sparkles,
  Tag,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const categories = [
  {
    name: "Technology",
    count: "120+",
    icon: Zap,
  },
  {
    name: "Development",
    count: "95+",
    icon: PenLine,
  },
  {
    name: "Design",
    count: "80+",
    icon: Sparkles,
  },
  {
    name: "Business",
    count: "65+",
    icon: TrendingUp,
  },
  {
    name: "Lifestyle",
    count: "50+",
    icon: Users,
  },
  {
    name: "Education",
    count: "40+",
    icon: Tag,
  },
];

export default function Categories() {
  return (
    <section className="bg-[#faf9ff] py-20">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7F22FE]">
              Explore Topics
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Find stories that interest you
            </h2>

            <p className="mt-3 max-w-xl text-gray-500">
              Explore different topics and discover posts from members
              of the SocialNest community.
            </p>
          </div>

          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#7F22FE]"
          >
            View all categories
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.name}
                href={`/posts?tags=${category.name.toLowerCase()}`}
                className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-[#7F22FE] transition group-hover:bg-[#7F22FE] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {category.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-400">
                      {category.count} stories
                    </p>
                  </div>

                </div>

                <ChevronRight className="h-5 w-5 text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#7F22FE]" />

              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}