import { ArrowUpRight, MapPin } from "lucide-react";

export default function ContactLocation() {
  return (
    <section id="location" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#7F22FE]">
              Find us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              We’re just around the corner.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
              Have something to discuss in person? Get in touch with our team
              to arrange a visit.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-[0.34fr_0.66fr]">
          <div className="flex flex-col justify-center rounded-3xl border border-purple-100 bg-[#faf8ff] p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-[#7F22FE]">
              <MapPin className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              Our Location
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Dhaka, Bangladesh
              <br />
              Please contact us before visiting.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Dhaka%2C%20Bangladesh"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#7F22FE] hover:underline"
            >
              Get Directions <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <iframe
              title="Map of Dhaka, Bangladesh"
              src="https://maps.google.com/maps?q=Dhaka%2C%20Bangladesh&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 h-full min-h-[300px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}