"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, BookOpen, Search, ShieldCheck, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ExploreHeroProps = {
  onSearch: (query: string) => void;
};

const ExploreHero = ({ onSearch }: ExploreHeroProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query.trim());
  };

  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#f8f4ff] via-white to-[#eee3ff]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#7F22FE]">
            Explore SocialNest
          </span>

          <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Discover amazing stories,{" "}
            <span className="text-[#7F22FE]">
              ideas and insights.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
            Explore articles, stories and ideas from amazing authors around
            the world. Find inspiration, learn something new and join the
            conversation.
          </p>

          <form
            id="explore-search"
            onSubmit={handleSubmit}
            className="mt-8 flex max-w-xl items-center gap-2 rounded-2xl border border-purple-100 bg-white p-2 shadow-lg shadow-purple-100/70"
          >
            <Search className="ml-2 h-5 w-5 shrink-0 text-slate-400" />

            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search posts, topics, or authors..."
              aria-label="Search posts, topics, or authors"
              className="h-11 min-w-0 border-0 shadow-none focus-visible:ring-0"
            />

            <Button
              type="submit"
              className="h-11 rounded-xl bg-[#7F22FE] px-5 hover:bg-[#6915df]"
            >
              Search
            </Button>
          </form>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="flex items-start gap-2">
              <BookOpen className="mt-1 h-5 w-5 shrink-0 text-[#7F22FE]" />
              <div>
                <p className="text-xs font-bold text-slate-800 sm:text-sm">
                  Quality Content
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Useful articles
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#7F22FE]" />
              <div>
                <p className="text-xs font-bold text-slate-800 sm:text-sm">
                  Trusted Authors
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Great creators
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Users className="mt-1 h-5 w-5 shrink-0 text-[#7F22FE]" />
              <div>
                <p className="text-xs font-bold text-slate-800 sm:text-sm">
                  Growing Community
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Share ideas
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[3rem] bg-purple-200/60 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl shadow-purple-200/70">
            <div
              role="img"
              aria-label="A creative person working on a laptop"
              className="flex min-h-[320px] items-end bg-cover bg-center p-6 sm:min-h-[430px] sm:p-8"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(35, 12, 75, 0.7), transparent 70%), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85')",
              }}
            >
              <div className="max-w-xs rounded-2xl border border-white/70 bg-white/95 p-5 shadow-xl">
                <p className="text-xs font-bold uppercase tracking-widest text-[#7F22FE]">
                  Your next inspiration
                </p>

                <h2 className="mt-2 text-2xl font-black text-slate-900">
                  Better ideas.
                  <span className="block text-[#7F22FE]">
                    Bigger dreams.
                  </span>
                </h2>

                <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-600">
                  Explore the community
                  <ArrowRight className="h-4 w-4 text-[#7F22FE]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreHero;