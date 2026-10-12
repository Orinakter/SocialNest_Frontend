import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function FeaturedStory() {
  return (
    <section className="bg-[#faf9ff] py-20">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-[#6D1FE0] to-[#8B5CF6] shadow-2xl shadow-purple-200">

          <div className="grid items-center lg:grid-cols-2">

            {/* Content */}
            <div className="p-8 sm:p-12 lg:p-16">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Featured Story
              </div>

              <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl">
                The Power of a Growth Mindset
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-purple-100">
                A simple mindset shift can completely change the way you
                learn, create and grow. Discover practical ideas from our
                community.
              </p>

              <div className="mt-8 flex items-center gap-4">

                <img
                  src="https://i.pravatar.cc/100?img=47"
                  alt="Sarah Mitchell"
                  className="h-11 w-11 rounded-full border-2 border-white/30 object-cover"
                />

                <div>
                  <p className="font-bold text-white">
                    Sarah Mitchell
                  </p>

                  <p className="text-xs text-purple-200">
                    8 min read · Featured author
                  </p>
                </div>

              </div>

              <Link
                href="/posts/featured"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#7F22FE] transition hover:-translate-y-0.5"
              >
                Read Featured Story
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

            {/* Image */}
            <div className="h-full min-h-75 lg:min-h-105">

              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80"
                alt="Featured article"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}