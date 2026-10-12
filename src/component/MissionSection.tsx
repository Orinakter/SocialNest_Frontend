import Image from "next/image";
import {
  Heart,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";

const missionItems = [
  {
    icon: Lightbulb,
    title: "Share",
    description: "Your knowledge and experiences",
  },
  {
    icon: Users,
    title: "Connect",
    description: "With like-minded people",
  },
  {
    icon: Rocket,
    title: "Grow",
    description: "Your skills and opportunities",
  },
  {
    icon: Heart,
    title: "Make an Impact",
    description: "Through meaningful conversations",
  },
];

export default function MissionSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
                alt="Workspace"
                width={1200}
                height={800}
                className="h-[350px] w-full object-cover lg:h-[430px]"
                unoptimized
              />
            </div>

            <div className="absolute left-8 top-8 rounded-xl bg-white/95 px-5 py-4 shadow-lg">
              <p className="text-sm font-semibold text-violet-600">
                Better stories
              </p>
              <p className="text-sm font-semibold text-violet-600">
                A brighter future
              </p>
            </div>

            <div className="absolute -bottom-5 left-8 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-600 shadow-lg">
              <Lightbulb className="h-7 w-7 text-white" />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Empowering people
              <br />
              through ideas
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Our mission is to create a supportive and inspiring environment
              where anyone can share their thoughts, learn from others, and
              grow together. We believe that great ideas can change lives —
              and we&apos;re here to make that happen.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {missionItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title}>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50">
                      <Icon className="h-5 w-5 text-violet-600" />
                    </div>

                    <h3 className="font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}