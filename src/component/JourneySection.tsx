import {
  Eye,
  FileText,
  MessageCircle,
  Users,
} from "lucide-react";

const statistics = [
  {
    icon: Users,
    number: "5K+",
    label: "Active Members",
  },
  {
    icon: FileText,
    number: "2.5K+",
    label: "Published Stories",
  },
  {
    icon: MessageCircle,
    number: "12K+",
    label: "Comments",
  },
  {
    icon: Eye,
    number: "100K+",
    label: "Story Views",
  },
];

export default function JourneySection() {
  return (
    <section className="bg-[#f7f5ff]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">

          {/* Text */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Our Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Numbers that tell our story
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
              From a small idea to a growing community — here&apos;s how
              SocialNest is making an impact, together.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {statistics.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50">
                    <Icon className="h-5 w-5 text-violet-600" />
                  </div>

                  <p className="text-2xl font-bold text-slate-900">
                    {stat.number}
                  </p>

                  <p className="mt-1 text-xs text-violet-700">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}