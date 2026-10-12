import Link from "next/link";
import {
  ArrowRight,
  PenLine,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[30px] bg-[#7F22FE] px-7 py-14 text-center shadow-2xl shadow-purple-200 sm:px-12">

          {/* Glow */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
              <PenLine className="h-6 w-6" />
            </div>

            <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
              Have a story worth sharing?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-purple-100">
              Create your account, write your first post and become part
              of a growing community of writers and readers.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#7F22FE] transition hover:-translate-y-0.5"
              >
                Create Free Account
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/posts"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
              >
                Explore Stories
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}