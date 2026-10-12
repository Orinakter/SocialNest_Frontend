import {
  PenLine,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: PenLine,
    title: "Write & Publish",
    description:
      "Share your thoughts, knowledge and stories with the community.",
  },
  {
    icon: Users,
    title: "Connect",
    description:
      "Discover writers and readers around topics you care about.",
  },
  {
    icon: Zap,
    title: "Discover",
    description:
      "Find fresh stories through topics, search and featured posts.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Authentication and role-based access keep your account protected.",
  },
];

export default function Features() {
  return (
    <section className="border-y border-gray-100 bg-white">

      <div className="mx-auto grid max-w-7xl md:grid-cols-2 lg:grid-cols-4">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className={`px-8 py-10 text-center ${
                index !== 3
                  ? "lg:border-r lg:border-gray-100"
                  : ""
              }`}
            >

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-[#7F22FE]">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-gray-500">
                {feature.description}
              </p>

            </div>
          );
        })}

      </div>
    </section>
  );
}