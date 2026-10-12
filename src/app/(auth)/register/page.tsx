import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import RegisterForm from "@/component/Authentication/RegisterForm";

import registerImage from "../../../images/image1.jpg"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ================= LEFT IMAGE ================= */}
        <div className="relative hidden min-h-screen overflow-hidden bg-[#17052f] lg:block">

          <Image
            src={registerImage}
            alt="SocialNest community"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#160329]/85 via-[#7F22FE]/30 to-[#17052f]/90" />

          {/* Top Logo */}
          <div className="absolute left-10 top-8">
            <Link
              href="/"
              className="flex items-center gap-2.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-xl">
                <Sparkles className="h-5 w-5 text-white" />
              </div>

              <span className="text-xl font-black tracking-tight text-white">
                Social<span className="text-purple-200">Nest</span>
              </span>
            </Link>
          </div>

          {/* Community Badge */}
          <div className="absolute right-8 top-8 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-xl">
            Join the community
          </div>

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-10 xl:p-16">
            <div className="max-w-xl">

              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-purple-200">
                <Users className="h-4 w-4" />
                A community built around ideas
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-tight text-white xl:text-5xl">
                Create your space.
                <span className="block text-purple-200">
                  Share your story.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/70">
                Join SocialNest to publish your ideas, discover inspiring
                stories and connect with people from different backgrounds
                and interests.
              </p>

              {/* Stats */}
              <div className="mt-8 flex flex-wrap gap-3">

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl">
                  <p className="text-lg font-black text-white">
                    5K+
                  </p>

                  <p className="text-xs text-white/50">
                    Active members
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl">
                  <p className="text-lg font-black text-white">
                    2.5K+
                  </p>

                  <p className="text-xs text-white/50">
                    Published stories
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl">
                  <p className="text-lg font-black text-white">
                    100K+
                  </p>

                  <p className="text-xs text-white/50">
                    Story views
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT REGISTER AREA ================= */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-white px-6 py-8 sm:px-10 lg:px-14 xl:px-20">

          {/* Background Decoration */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-purple-100/60 blur-3xl" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-50 blur-3xl" />

          {/* Mobile Logo */}
          <div className="relative z-10 lg:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7F22FE] shadow-lg shadow-purple-200">
                <Sparkles className="h-5 w-5 text-white" />
              </div>

              <span className="text-xl font-black tracking-tight text-gray-900">
                Social<span className="text-[#7F22FE]">Nest</span>
              </span>
            </Link>
          </div>

          {/* Register Content */}
          <div className="relative z-10 mx-auto w-full max-w-md py-10 lg:py-0">

            {/* Back */}
            <Link
              href="/"
              className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#7F22FE]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            {/* Heading */}
            <div className="mb-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 py-1.5 text-xs font-bold text-[#7F22FE]">
                <Sparkles className="h-3.5 w-3.5" />
                Start your journey
              </div>

              <h1 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
                Create your account
              </h1>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Create your SocialNest account and start sharing ideas,
                stories and experiences with the community.
              </p>
            </div>

            {/* Register Form */}
            <RegisterForm />

            {/* Security */}
            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="h-4 w-4 text-[#7F22FE]" />
              Your information is securely protected.
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex items-center justify-between gap-4 border-t border-gray-100 pt-5 text-xs text-gray-400">
            <p>
              © 2026 SocialNest
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="transition hover:text-[#7F22FE]"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-[#7F22FE]"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}