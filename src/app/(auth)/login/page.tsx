// import { LoginForm } from "@/component/Authentication/LoginForm";
// import { GalleryVerticalEnd, Sparkles } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// import loginBanner from "../../../images/image1.jpg";

// export default function LoginPage() {
//   return (
//     <main className="min-h-svh bg-[#fafafa]">
//       <div className="grid min-h-svh lg:grid-cols-2">
//         {/* ================= LEFT SIDE ================= */}
//         <div className="relative flex flex-col px-6 py-6 sm:px-10 lg:px-14 xl:px-20">
//           {/* Logo */}
//           <div className="flex items-center justify-between">
//             <Link
//               href="/"
//               className="group flex items-center gap-2.5"
//             >
//               <div className="flex size-9 items-center justify-center rounded-xl bg-[#7F22FE] text-white shadow-lg shadow-[#7F22FE]/20 transition-transform group-hover:scale-105">
//                 <GalleryVerticalEnd className="size-5" />
//               </div>

//               <span className="text-xl font-bold tracking-tight text-[#111827]">
//                 Social
//                 <span className="text-[#7F22FE]">Nest</span>
//               </span>
//             </Link>

//             <Link
//               href="/register"
//               className="text-sm font-medium text-gray-500 transition-colors hover:text-[#7F22FE]"
//             >
//               Create account
//             </Link>
//           </div>

//           {/* Login Content */}
//           <div className="flex flex-1 items-center justify-center py-10">
//             <div className="w-full max-w-md">
//               {/* Small Badge */}
//               <div className="mb-6 flex justify-center">
//                 <div className="inline-flex items-center gap-2 rounded-full border border-[#7F22FE]/10 bg-[#7F22FE]/5 px-3.5 py-1.5 text-xs font-medium text-[#7F22FE]">
//                   <Sparkles className="size-3.5" />
//                   Welcome back to SocialNest
//                 </div>
//               </div>

//               {/* Login Form */}
//               <LoginForm />
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="text-center text-xs text-gray-400 lg:text-left">
//             © {new Date().getFullYear()} SocialNest. All rights reserved.
//           </div>
//         </div>

//         {/* ================= RIGHT SIDE ================= */}
//         <div className="relative hidden overflow-hidden lg:block">
//           <Image
//             src={loginBanner}
//             alt="SocialNest login"
//             fill
//             priority
//             className="object-cover"
//           />

//           {/* Purple Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-br from-[#7F22FE]/95 via-[#7F22FE]/45 to-black/75" />

//           {/* Right Side Content */}
//           <div className="absolute inset-0 flex flex-col justify-between p-10 xl:p-14">
//             {/* Top */}
//             <div className="flex items-center gap-2 text-white">
//               <div className="flex size-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
//                 <GalleryVerticalEnd className="size-5" />
//               </div>

//               <span className="text-lg font-semibold">
//                 SocialNest
//               </span>
//             </div>

//             {/* Center */}
//             <div className="max-w-lg text-white">
//               <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
//                 <Sparkles className="mr-2 size-4" />
//                 Connect. Share. Belong.
//               </div>

//               <h2 className="text-4xl font-bold leading-tight xl:text-5xl">
//                 Your people,
//                 <br />
//                 your stories,
//                 <br />
//                 your{" "}
//                 <span className="text-violet-200">
//                   SocialNest.
//                 </span>
//               </h2>

//               <p className="mt-6 max-w-md text-sm leading-7 text-white/75 xl:text-base">
//                 Connect with friends, share your moments,
//                 discover new communities and build meaningful
//                 connections—all in one place.
//               </p>
//             </div>

//             {/* Bottom */}
//             <div className="flex items-center justify-between text-sm text-white/60">
//               <span>Connect with your world</span>

//               <div className="flex items-center gap-1.5">
//                 <span className="size-2 rounded-full bg-white" />
//                 <span className="size-2 rounded-full bg-white/40" />
//                 <span className="size-2 rounded-full bg-white/40" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }



import Image from "next/image";
import Link from "next/link";
import loginImage from "../../../images/image1.jpg"

import { ArrowLeft, ShieldCheck, Sparkles, Users } from "lucide-react";

import LoginForm from "@/component/Authentication/LoginForm";



export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Content */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-white px-6 py-8 sm:px-10 lg:px-14 xl:px-20">

          {/* Background Decoration */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-100/60 blur-3xl" />

          <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-50 blur-3xl" />

          {/* Logo */}
          <div className="relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7F22FE] shadow-lg shadow-purple-200">
                <Sparkles className="h-5 w-5 text-white" />
              </div>

              <span className="text-xl font-black tracking-tight text-gray-900">
                Social<span className="text-[#7F22FE]">Nest</span>
              </span>
            </Link>
          </div>

          {/* Login Area */}
          <div className="relative z-10 mx-auto w-full max-w-md py-12">

            {/* Back */}
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#7F22FE]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            {/* Heading */}
            <div className="mb-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 py-1.5 text-xs font-bold text-[#7F22FE]">
                <Sparkles className="h-3.5 w-3.5" />
                Welcome back
              </div>

              <h1 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
                Sign in to your account
              </h1>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Continue sharing ideas, discovering stories and connecting
                with the SocialNest community.
              </p>
            </div>

            {/* Login Form */}
            <LoginForm />

            {/* Security */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="h-4 w-4 text-[#7F22FE]" />
              Your account information is securely protected.
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex items-center justify-between gap-4 border-t border-gray-100 pt-5 text-xs text-gray-400">
            <p>© 2026 SocialNest</p>

            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="transition hover:text-[#7F22FE]"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-[#7F22FE]"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden min-h-screen overflow-hidden bg-[#17052f] lg:block">

          <Image
            src={loginImage}
            alt="SocialNest community"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#160329]/80 via-[#7F22FE]/30 to-[#17052f]/85" />

          {/* Top Badge */}
          <div className="absolute right-8 top-8 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-xl">
            SocialNest Community
          </div>

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-10 xl:p-16">
            <div className="max-w-xl">

              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-purple-200">
                <Users className="h-4 w-4" />
                Join thousands of creators
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-tight text-white xl:text-5xl">
                Your ideas deserve
                <span className="block text-purple-200">
                  a place to grow.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/70">
                Share your knowledge, discover meaningful stories and build
                genuine connections with people who love ideas as much as you
                do.
              </p>

              {/* Mini Stats */}
              <div className="mt-8 flex flex-wrap gap-3">

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl">
                  <p className="text-lg font-black text-white">5K+</p>
                  <p className="text-xs text-white/50">Active members</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl">
                  <p className="text-lg font-black text-white">12K+</p>
                  <p className="text-xs text-white/50">Comments</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl">
                  <p className="text-lg font-black text-white">100K+</p>
                  <p className="text-xs text-white/50">Story views</p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}