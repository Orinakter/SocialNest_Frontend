import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Clock3,
  Eye,
  MessageCircle,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import image1 from "../images/1.avif";
import image2 from "../images/2.avif";
import image3 from "../images/3.avif";
import image4 from "../images/4.avif";

export default function LatestPosts() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7F22FE]">
              Latest Stories
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              Fresh ideas from our community
            </h2>

            <p className="mt-3 text-base leading-7 text-gray-500">
              Read the latest published posts from SocialNest authors.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-gray-400" />

            <Input
              type="text"
              placeholder="Search posts..."
              className="h-12 rounded-xl border-gray-200 bg-gray-50 pl-11 pr-4 text-sm shadow-none focus-visible:border-[#7F22FE] focus-visible:ring-4 focus-visible:ring-purple-100"
            />
          </div>
        </div>

        {/* Posts */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Post 01 */}
          <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/50">

            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src={image1}
                alt="Building Modern Web Applications with Next.js"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4 rounded-full bg-[#7F22FE] px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                Development
              </div>

              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="absolute right-4 top-4 h-9 w-9 rounded-full bg-white/90 text-gray-600 backdrop-blur hover:bg-[#7F22FE] hover:text-white"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>Oct 05, 2026</span>
                <span>•</span>

                <span className="flex items-center gap-1">
                  <Clock3 className="h-3.5 w-3.5" />
                  6 min read
                </span>
              </div>

              <Link href="/posts/1">
                <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-7 text-gray-900 transition group-hover:text-[#7F22FE]">
                  Building Modern Web Applications with Next.js
                </h3>
              </Link>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                Explore practical approaches to building fast, scalable and
                maintainable applications.
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="relative h-9 w-9 overflow-hidden rounded-full">
                  <Image
                    src={image1}
                    alt="Sarah Mitchell"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-gray-800">
                    Sarah Mitchell
                  </p>

                  <p className="truncate text-xs text-gray-400">
                    Full Stack Developer
                  </p>
                </div>

                <ArrowUpRight className="h-4 w-4 text-gray-300 transition group-hover:text-[#7F22FE]" />
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  1.2K
                </span>

                <span className="flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4" />
                  34
                </span>
              </div>
            </div>
          </article>

          {/* Post 02 */}
          <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/50">

            <div className="relative h-52 overflow-hidden">
              <Image
                src={image2}
                alt="The Future of Artificial Intelligence"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4 rounded-full bg-[#7F22FE] px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                Technology
              </div>

              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="absolute right-4 top-4 h-9 w-9 rounded-full bg-white/90 text-gray-600 backdrop-blur hover:bg-[#7F22FE] hover:text-white"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>Oct 03, 2026</span>
                <span>•</span>

                <span className="flex items-center gap-1">
                  <Clock3 className="h-3.5 w-3.5" />
                  8 min read
                </span>
              </div>

              <Link href="/posts/2">
                <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-7 text-gray-900 transition group-hover:text-[#7F22FE]">
                  The Future of Artificial Intelligence
                </h3>
              </Link>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                A closer look at how artificial intelligence is changing the
                way we work and create.
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="relative h-9 w-9 overflow-hidden rounded-full">
                  <Image
                    src={image2}
                    alt="Daniel Carter"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-gray-800">
                    Daniel Carter
                  </p>

                  <p className="truncate text-xs text-gray-400">
                    Software Engineer
                  </p>
                </div>

                <ArrowUpRight className="h-4 w-4 text-gray-300 transition group-hover:text-[#7F22FE]" />
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  2.4K
                </span>

                <span className="flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4" />
                  48
                </span>
              </div>
            </div>
          </article>

          {/* Post 03 */}
          <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/50">

            <div className="relative h-52 overflow-hidden">
              <Image
                src={image3}
                alt="Designing Digital Experiences People Remember"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4 rounded-full bg-[#7F22FE] px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                Design
              </div>

              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="absolute right-4 top-4 h-9 w-9 rounded-full bg-white/90 text-gray-600 backdrop-blur hover:bg-[#7F22FE] hover:text-white"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>Oct 01, 2026</span>
                <span>•</span>

                <span className="flex items-center gap-1">
                  <Clock3 className="h-3.5 w-3.5" />
                  5 min read
                </span>
              </div>

              <Link href="/posts/3">
                <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-7 text-gray-900 transition group-hover:text-[#7F22FE]">
                  Designing Digital Experiences People Remember
                </h3>
              </Link>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                Discover simple principles that help create intuitive and
                memorable digital experiences.
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="relative h-9 w-9 overflow-hidden rounded-full">
                  <Image
                    src={image3}
                    alt="Maya Wilson"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-gray-800">
                    Maya Wilson
                  </p>

                  <p className="truncate text-xs text-gray-400">
                    UI/UX Designer
                  </p>
                </div>

                <ArrowUpRight className="h-4 w-4 text-gray-300 transition group-hover:text-[#7F22FE]" />
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  965
                </span>

                <span className="flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4" />
                  29
                </span>
              </div>
            </div>
          </article>

          {/* Post 04 */}
          <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/50">

            <div className="relative h-52 overflow-hidden">
              <Image
                src={image4}
                alt="Small Habits That Create Big Changes"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute left-4 top-4 rounded-full bg-[#7F22FE] px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                Lifestyle
              </div>

              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="absolute right-4 top-4 h-9 w-9 rounded-full bg-white/90 text-gray-600 backdrop-blur hover:bg-[#7F22FE] hover:text-white"
              >
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>Sep 29, 2026</span>
                <span>•</span>

                <span className="flex items-center gap-1">
                  <Clock3 className="h-3.5 w-3.5" />
                  4 min read
                </span>
              </div>

              <Link href="/posts/4">
                <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-7 text-gray-900 transition group-hover:text-[#7F22FE]">
                  Small Habits That Create Big Changes
                </h3>
              </Link>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                Learn how small daily habits can improve your productivity and
                personal growth.
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="relative h-9 w-9 overflow-hidden rounded-full">
                  <Image
                    src={image4}
                    alt="Nusrat Jahan"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-gray-800">
                    Nusrat Jahan
                  </p>

                  <p className="truncate text-xs text-gray-400">
                    Content Creator
                  </p>
                </div>

                <ArrowUpRight className="h-4 w-4 text-gray-300 transition group-hover:text-[#7F22FE]" />
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  842
                </span>

                <span className="flex items-center gap-1.5">
                  <MessageCircle className="h-4 w-4" />
                  21
                </span>
              </div>
            </div>
          </article>
        </div>

        {/* Explore Button */}
        <div className="mt-10 text-center">
          <Button
            
            variant="outline"
            className="h-12 rounded-xl border-gray-200 px-6 font-bold hover:border-purple-200 hover:bg-purple-50 hover:text-[#7F22FE]"
          >
            <Link href="/posts">
              Explore all stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}