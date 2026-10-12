import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
} from "lucide-react";
import {
 
  
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Ayesha Rahman",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tanvir Hasan",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Nusrat Jahan",
    role: "Content Lead",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Fahim Islam",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">

          {/* Left */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Our Team
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900">
              Meet the people
              <br />
              behind SocialNest
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              We&apos;re a passionate team of creators, developers, and
              dreamers working together to make SocialNest a better place
              for everyone.
            </p>

            <Button
              
              className="mt-6 rounded-full bg-violet-600 hover:bg-violet-700"
            >
              <Link href="/careers">
                Join Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Team Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={600}
                  className="h-44 w-full object-cover"
                  unoptimized
                />

                <div className="p-4 text-center">
                  <h3 className="font-bold text-slate-900">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {member.role}
                  </p>

                  <div className="mt-4 flex justify-center gap-3">
                    <Link
                      href="#"
                      className="text-slate-400 transition hover:text-violet-600"
                    >
                      <FaLinkedinIn className="h-4 w-4" />
                    </Link>

                    <Link
                      href="#"
                      className="text-slate-400 transition hover:text-violet-600"
                    >
                      <FaTwitter className="h-4 w-4" />
                    </Link>

                    <Link
                      href="#"
                      className="text-slate-400 transition hover:text-violet-600"
                    >
                      <Globe className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}