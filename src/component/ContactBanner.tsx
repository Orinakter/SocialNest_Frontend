import Link from "next/link";
import { ArrowDown, Heart, Zap } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#faf8ff] via-white to-[#f0e8ff]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7F22FE] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#7F22FE]" />
            Get in touch
          </div>

          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            We’d love to hear{" "}
            <span className="bg-gradient-to-r from-[#7F22FE] to-[#b05cff] bg-clip-text text-transparent">
              from you.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
            Have a question, feedback, or just want to say hello? We’re here to
            help. Reach out to us and let’s make something meaningful together.
          </p>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 text-[#7F22FE]">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Fast Response</p>
                <p className="mt-1 text-xs text-slate-500">
                  Usually within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100 text-[#7F22FE]">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Real People</p>
                <p className="mt-1 text-xs text-slate-500">
                  Here to help you
                </p>
              </div>
            </div>
          </div>

          <Link
            href="#contact-form"
            className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#7F22FE] hover:gap-3"
          >
            Send us a message <ArrowDown className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-10 h-32 w-32 rounded-full bg-purple-200/50 blur-2xl" />
          <div className="absolute -bottom-5 right-4 h-36 w-36 rounded-full bg-violet-300/40 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl shadow-purple-200/60">
            <div
              role="img"
              aria-label="A creative workspace with a laptop and coffee"
              className="flex min-h-[340px] items-center justify-center bg-cover bg-center p-8 sm:min-h-[420px]"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(35,12,75,.15), rgba(127,34,254,.18)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85')",
              }}
            >
              <div className="max-w-xs rounded-2xl border border-white/60 bg-white/90 p-6 text-center shadow-xl backdrop-blur-md">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7F22FE] text-xl font-bold text-white">
                  S
                </div>
                <p className="text-2xl font-extrabold leading-tight text-slate-900">
                  Let’s build something
                  <span className="block text-[#7F22FE]">
                    great together.
                  </span>
                </p>
                <Heart className="mx-auto mt-4 h-5 w-5 fill-[#7F22FE] text-[#7F22FE]" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-purple-100 bg-white p-4 shadow-xl sm:block">
            <p className="text-sm font-bold text-slate-900">Your ideas matter</p>
            <p className="mt-1 text-xs text-slate-500">
              We’re listening to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}