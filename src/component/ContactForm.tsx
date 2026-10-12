"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    // Frontend demo only. Connect your contact API here.
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !subject || !message) {
      setError("Please complete all fields before submitting.");
      setIsSubmitting(false);
      return;
    }

    // This simulates a successful frontend submission.
    // Replace with a real API request before production.
    setSuccess(true);
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <section
      id="contact-form"
      className="scroll-mt-24 bg-gradient-to-br from-[#faf8ff] via-white to-[#f7f3ff] py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#7F22FE]">
            Send us a message
          </p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Let’s talk about
            <span className="block text-[#7F22FE]">your ideas.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Whether you have a question, feedback, or a collaboration idea,
            we’d love to hear from you. Fill out the form below and we’ll get
            back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold text-slate-800"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  className="h-12 rounded-xl border-slate-200 bg-white px-4 focus-visible:ring-[#7F22FE]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold text-slate-800"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="h-12 rounded-xl border-slate-200 bg-white px-4 focus-visible:ring-[#7F22FE]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-subject"
                className="text-sm font-semibold text-slate-800"
              >
                Subject <span className="text-red-500">*</span>
              </label>

              <select
                id="contact-subject"
                name="subject"
                required
                defaultValue=""
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-600 outline-none transition focus:border-[#7F22FE] focus:ring-2 focus:ring-purple-100"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Account Issue">Account Issue</option>
                <option value="Feedback">Feedback</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="text-sm font-semibold text-slate-800"
              >
                Message <span className="text-red-500">*</span>
              </label>

              <Textarea
                id="contact-message"
                name="message"
                placeholder="Tell us how we can help you..."
                required
                minLength={10}
                maxLength={3000}
                rows={6}
                className="min-h-36 resize-y rounded-xl border-slate-200 bg-white p-4 focus-visible:ring-[#7F22FE]"
              />
              <p className="text-xs text-slate-400">
                Please provide at least 10 characters.
              </p>
            </div>

            {error && (
              <p role="alert" className="text-sm font-medium text-red-600">
                {error}
              </p>
            )}

            {success && (
              <div
                role="status"
                className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <p>
                  Demo submission completed! Connect the contact API to
                  actually send and save messages.
                </p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full rounded-xl bg-[#7F22FE] px-7 font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-[#6915df] sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-xl shadow-purple-100/50 sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-[#7F22FE]">
              <CheckCircle2 className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              We’re here for you!
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              SocialNest is all about sharing ideas and building meaningful
              connections. If you need assistance, our team is ready to listen.
            </p>

            <div className="mt-6 space-y-5">
              {[
                {
                  title: "Quick Support",
                  description: "Get help with your questions and account.",
                },
                {
                  title: "Helpful Resources",
                  description: "Get guidance about using SocialNest.",
                },
                {
                  title: "Community Driven",
                  description: "Your feedback helps us improve.",
                },
              ].map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-50 text-sm font-bold text-[#7F22FE]">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#7F22FE] to-[#5211b8] p-7 text-white sm:p-8">
            <p className="text-sm font-medium text-purple-100">
              Have a quick question?
            </p>
            <h3 className="mt-2 text-2xl font-extrabold">
              Start a conversation.
            </h3>
            <p className="mt-3 text-sm leading-6 text-purple-100">
              Send us an email and tell us what’s on your mind.
            </p>
            <a
              href="mailto:hello@socialnest.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold hover:underline"
            >
              hello@socialnest.com <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}