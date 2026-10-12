import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutBanner() {
  return (
    <section className="bg-[#f7f5ff]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              About Us
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              We're building a community for{" "}
              <span className="text-violet-600">
                curious minds
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              SocialNest is more than just a platform — it&apos;s a space where
              ideas meet people. We bring together writers, creators, and
              dreamers to share knowledge, experiences, and perspectives that
              matter.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
               
                className="rounded-full bg-violet-600 px-6 hover:bg-violet-700"
              >
                <Link href="/signup">
                  Join Our Community
                  <ArrowRight className=" h-4 w-4" />
                </Link>
              </Button>

              <Button
               
                variant="outline"
                className="rounded-full border-slate-300 px-6"
              >
                <Link href="/posts">
                  Explore Posts
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                alt="People working together"
                width={1200}
                height={800}
                className="h-[350px] w-full object-cover lg:h-[430px]"
                unoptimized
              />
            </div>

            {/* Floating Text */}
            {/* <div className="absolute -left-8 top-16 hidden text-sm font-semibold text-violet-600 lg:block">
              <div className="rotate-[-5deg]">
                Ideas
                <br />
                Connect
                <br />
                People
              </div>
            </div> */}

            {/* Floating Card */}
            <div className="absolute -bottom-5 -right-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
                <Users className="h-5 w-5 text-violet-600" />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  A safe space
                </p>
                <p className="text-xs text-slate-500">
                  for everyone
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}