import Link from "next/link";
import { ArrowRight, PenSquare } from "lucide-react";

import { Button } from "@/components/ui/button";

const WriteForUs = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#7F22FE] to-[#5710c7] p-6 text-white shadow-lg shadow-purple-200">
      <div className="absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-white/10" />
      <div className="absolute -right-3 -top-8 h-24 w-24 rounded-full bg-white/10" />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
          <PenSquare className="h-6 w-6" />
        </div>

        <h3 className="mt-5 text-xl font-extrabold">
          Want to write for us?
        </h3>

        <p className="mt-2 text-sm leading-6 text-purple-100">
          Share your ideas, tell your story and reach readers in our growing
          community.
        </p>

        <Link href="/write">
          <Button className="mt-5 rounded-full bg-white text-[#7F22FE] hover:bg-purple-50">
            Start Writing
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WriteForUs;