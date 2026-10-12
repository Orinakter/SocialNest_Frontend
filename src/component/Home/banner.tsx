import Link from "next/link";
import {
  ArrowRight,
  Eye,
  MessageCircle,
  PenLine,
  Sparkles,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">

        {/* Left Content */}
        <div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-4 py-2 text-sm font-semibold text-[#7F22FE]">
            <Sparkles className="h-4 w-4" />
            A community for ideas that matter
          </div>

          <h2 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight text-[#111827] sm:text-6xl lg:text-[68px]">
            Read ideas.
            <br />
            <span className="text-[#7F22FE]">
              Share stories.
            </span>
            <br />
            Build connections.
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-500">
            SocialNest is a modern blogging community where writers,
            developers, creators and curious minds come together to share
            knowledge, discover stories and start meaningful conversations.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/posts"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7F22FE] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-[#6D1FE0]"
            >
              Explore Stories
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-800 transition hover:border-purple-200 hover:text-[#7F22FE]"
            >
              Start Writing
              <PenLine className="h-4 w-4" />
            </Link>

          </div>

          {/* Community */}
          <div className="mt-9 flex items-center gap-4">

            <div className="flex -space-x-2">
              {[12, 32, 45, 49].map((avatar) => (
                <img
                  key={avatar}
                  src={`https://i.pravatar.cc/100?img=${avatar}`}
                  alt="Community member"
                  className="h-9 w-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>

            <div>
              <p className="text-sm font-bold text-gray-800">
                Join thousands of readers
              </p>

              <p className="text-xs text-gray-400">
                discovering ideas every day
              </p>
            </div>

          </div>
        </div>

        {/* Right Featured Card */}
        <div className="relative">

          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-200/50 blur-3xl" />

          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />

          <div className="relative rounded-[30px] border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-4 shadow-2xl shadow-purple-100 sm:p-6">

            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                alt="Featured story"
                className="h-64 w-full object-cover sm:h-80"
              />

              <div className="p-6">

                <div className="mb-3 flex items-center justify-between">

                  <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-[#7F22FE]">
                    Featured Story
                  </span>

                  <span className="text-xs font-medium text-gray-400">
                    8 min read
                  </span>

                </div>

                <h3 className="text-2xl font-bold leading-tight text-gray-900">
                  The Power of Sharing Ideas in a Connected World
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Great ideas become more meaningful when they are shared,
                  discussed and improved by a community.
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

                  <div className="flex items-center gap-3">

                    <img
                      src="https://i.pravatar.cc/100?img=47"
                      alt="Author"
                      className="h-10 w-10 rounded-full object-cover"
                    />

                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        Sarah Mitchell
                      </p>

                      <p className="text-xs text-gray-400">
                        Full Stack Developer
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-400">

                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      1.8K
                    </span>

                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      42
                    </span>

                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:block">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-[#7F22FE]">
                <Users className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold">
                  Growing Community
                </p>

                <p className="text-xs text-gray-400">
                  Writers & readers
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}