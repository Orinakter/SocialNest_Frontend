import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-violet-500">
      {/* Decorative shapes */}
      <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-violet-600/30 blur-2xl" />

      <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-violet-600/30 blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
              Ready to be part of something special?
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Join SocialNest today
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
              Share your ideas, discover amazing stories, and connect with a
              community that believes in the power of words.
            </p>
          </div>

          <Button
            
            className="shrink-0 rounded-xl bg-violet-600 px-6 py-6 text-white hover:bg-violet-500"
          >
            <Link href="/signup">
              Create Free Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

        </div>
      </div>
    </section>
  );
}