import { Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Writer",
    text: "SocialNest gives me a simple place to share ideas and discover thoughtful stories from other creators.",
  },
  {
    name: "Rohan Das",
    role: "Developer",
    text: "I love how easy it is to discover useful content and connect with people who share similar interests.",
  },
  {
    name: "Maya Wilson",
    role: "Designer",
    text: "A clean community where writers and readers can actually connect around meaningful content.",
  },
];

export default function Community() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7F22FE]">
            Community
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
            What our community says
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Real people sharing ideas, learning from one another and
            building meaningful connections.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
            >

              <div className="flex gap-1 text-[#7F22FE]">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Sparkles
                    key={star}
                    className="h-4 w-4 fill-current"
                  />
                ))}

              </div>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                “{item.text}”
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">

                <img
                  src={`https://i.pravatar.cc/100?img=${index + 20}`}
                  alt={item.name}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-400">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}