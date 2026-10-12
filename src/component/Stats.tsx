const stats = [
  {
    value: "2.5K+",
    label: "Published Posts",
  },
  {
    value: "5K+",
    label: "Active Users",
  },
  {
    value: "12K+",
    label: "Comments",
  },
  {
    value: "100K+",
    label: "Post Views",
  },
];

export default function Stats() {
  return (
    <section className="bg-gray-950 py-16">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div key={stat.label}>

              <p className="text-4xl font-black text-white">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-gray-400">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}