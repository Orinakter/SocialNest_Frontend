import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const contactItems = [
  {
    title: "Email Us",
    detail: "hello@socialnest.com",
    description: "We’ll respond within 24 hours.",
    icon: Mail,
    href: "mailto:hello@socialnest.com",
    action: "Send email",
  },
  {
    title: "Call Us",
    detail: "+880 1234 567890",
    description: "Monday – Friday, 9 AM – 6 PM",
    icon: Phone,
    href: "tel:+8801234567890",
    action: "Call now",
  },
  {
    title: "Visit Our Office",
    detail: "Dhaka, Bangladesh",
    description: "Get in touch with our team in person.",
    icon: MapPin,
    href: "#location",
    action: "View location",
  },
  {
    title: "Live Support",
    detail: "We’re here to help",
    description: "Find answers to your questions.",
    icon: MessageCircle,
    href: "#contact-form",
    action: "Contact support",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/70"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-[#7F22FE] transition-colors group-hover:bg-[#7F22FE] group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>

              <h2 className="text-lg font-bold text-slate-900">
                {item.title}
              </h2>

              <p className="mt-2 break-words text-sm font-semibold text-[#7F22FE]">
                {item.detail}
              </p>

              <p className="mt-3 min-h-10 text-sm leading-6 text-slate-500">
                {item.description}
              </p>

              <a
                href={item.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition-colors hover:text-[#7F22FE]"
              >
                {item.action}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}