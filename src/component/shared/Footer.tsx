// // import Link from "next/link";

// // import {
// //   FaFacebookF,
// //   FaGithub,
// //   FaLinkedinIn,
// //   FaTwitter,
// // } from "react-icons/fa";

// // import {
// //   MdEmail,
// //   MdLocationOn,
// //   MdPhone,
// // } from "react-icons/md";

// // const Footer = () => {
// //   return (
// //     <footer className="border-t bg-slate-950 text-slate-300">
// //       <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

// //         {/* Main Footer */}
// //         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

// //           {/* Brand */}
// //           <div>
// //             <Link
// //               href="/"
// //               className="text-2xl font-bold tracking-tight text-white"
// //             >
// //               <span className="text-white">SocialNest</span>
              
// //             </Link>

// //             <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
// //               Building modern, beautiful and user-friendly digital
// //               experiences with passion and creativity.
// //             </p>

// //             {/* Social Icons */}
// //             <div className="mt-6 flex items-center gap-3">

// //               {/* Facebook */}
// //               <Link
// //                 href="#"
// //                 aria-label="Facebook"
// //                 className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 transition-all duration-300 hover:border-violet-700 hover:bg-violet-700 hover:text-slate-950"
// //               >
// //                 <FaFacebookF className="h-4 w-4" />
// //               </Link>

// //               {/* Twitter */}
// //               <Link
// //                 href="#"
// //                 aria-label="Twitter"
// //                 className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 transition-all duration-300 hover:border-violet-700 hover:bg-violet-700 hover:text-slate-950"
// //               >
// //                 <FaTwitter className="h-4 w-4" />
// //               </Link>

// //               {/* GitHub */}
// //               <Link
// //                 href="#"
// //                 aria-label="GitHub"
// //                 className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 transition-all duration-300 hover:border-violet-700 hover:bg-violet-700 hover:text-slate-950"
// //               >
// //                 <FaGithub className="h-4 w-4" />
// //               </Link>

// //               {/* LinkedIn */}
// //               <Link
// //                 href="#"
// //                 aria-label="LinkedIn"
// //                 className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 transition-all duration-300 hover:border-violet-700 hover:bg-violet-700 hover:text-slate-950"
// //               >
// //                 <FaLinkedinIn className="h-4 w-4" />
// //               </Link>

// //             </div>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
// //               Quick Links
// //             </h3>

// //             <ul className="mt-5 space-y-3">

// //               <li>
// //                 <Link
// //                   href="/"
// //                   className="text-sm text-slate-400 transition-colors hover:text-violet-700"
// //                 >
// //                   Home
// //                 </Link>
// //               </li>

// //               <li>
// //                 <Link
// //                   href="/about"
// //                   className="text-sm text-slate-400 transition-colors hover:text-violet-700"
// //                 >
// //                   About
// //                 </Link>
// //               </li>

// //               <li>
// //                 <Link
// //                   href="/services"
// //                   className="text-sm text-slate-400 transition-colors hover:text-violet-700"
// //                 >
// //                   Services
// //                 </Link>
// //               </li>

// //               <li>
// //                 <Link
// //                   href="/projects"
// //                   className="text-sm text-slate-400 transition-colors hover:text-violet-700"
// //                 >
// //                   Projects
// //                 </Link>
// //               </li>

// //               <li>
// //                 <Link
// //                   href="/contact"
// //                   className="text-sm text-slate-400 transition-colors hover:text-violet-700"
// //                 >
// //                   Contact
// //                 </Link>
// //               </li>

// //             </ul>
// //           </div>

// //           {/* Services */}
// //           <div>
// //             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
// //               Services
// //             </h3>

// //             <ul className="mt-5 space-y-3">

// //               <li>
// //                 <Link
// //                   href="#"
// //                   className="text-sm text-slate-400 transition-colors hover:text-violet-700"
// //                 >
// //                   Web Development
// //                 </Link>
// //               </li>

// //               <li>
// //                 <Link
// //                   href="#"
// //                   className="text-sm text-slate-400 transition-colors hover:text-violet-700"
// //                 >
// //                   UI/UX Design
// //                 </Link>
// //               </li>

// //               <li>
// //                 <Link
// //                   href="#"
// //                   className="text-sm text-slate-400 transition-colors hover:text-violet-700"
// //                 >
// //                   Frontend Development
// //                 </Link>
// //               </li>

// //               <li>
// //                 <Link
// //                   href="#"
// //                   className="text-sm text-slate-400 transition-colors hover:text-violet-700"
// //                 >
// //                   Backend Development
// //                 </Link>
// //               </li>

// //               <li>
// //                 <Link
// //                   href="#"
// //                   className="text-sm text-slate-400 transition-colors hover:text-violet-700"
// //                 >
// //                   Full Stack Development
// //                 </Link>
// //               </li>

// //             </ul>
// //           </div>

// //           {/* Contact */}
// //           <div>
// //             <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
// //               Contact Us
// //             </h3>

// //             <div className="mt-5 space-y-4">

// //               {/* Location */}
// //               <div className="flex items-start gap-3">
// //                 <MdLocationOn className="mt-0.5 h-5 w-5 shrink-0 hover:text-violet-700" />

// //                 <p className="text-sm leading-5 text-slate-400">
// //                   Dhaka, Bangladesh
// //                 </p>
// //               </div>

// //               {/* Email */}
// //               <div className="flex items-center gap-3">
// //                 <MdEmail className="h-5 w-5 shrink-0 hover:text-violet-700" />

// //                 <a
// //                   href="mailto:hello@example.com"
// //                   className="text-sm text-slate-400 transition-colors hover:text-violet-700"
// //                 >
// //                   hello@example.com
// //                 </a>
// //               </div>

// //               {/* Phone */}
// //               <div className="flex items-center gap-3">
// //                 <MdPhone className="h-5 w-5 shrink-0 hover:text-violet-700" />

// //                 <a
// //                   href="tel:+8801234567890"
// //                   className="text-sm text-slate-400 transition-colors hover:text-violet-700"
// //                 >
// //                   +880 1234-567890
// //                 </a>
// //               </div>

// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Footer */}
// //         <div className="mt-10 border-t border-slate-800 pt-6">

// //           <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

// //             {/* Copyright */}
// //             <p>
// //               © {new Date().getFullYear()} SocialNest. All rights reserved.
// //             </p>

// //             {/* Legal Links */}
// //             <div className="flex gap-6">

// //               <Link
// //                 href="/privacy"
// //                 className="transition-colors hover:text-violet-700"
// //               >
// //                 Privacy Policy
// //               </Link>

// //               <Link
// //                 href="/terms"
// //                 className="transition-colors hover:text-violet-700"
// //               >
// //                 Terms & Conditions
// //               </Link>

// //             </div>

// //           </div>

// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;


// import { Sparkles } from "lucide-react";
// import Link from "next/link";
// import {
//   FaFacebookF,
//   FaGithub,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="border-t border-gray-100 bg-purple-100">

//       <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">

//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

//           {/* Brand */}
//           <div className="lg:col-span-2">

//             <Link
//               href="/"
//               className="flex items-center gap-2.5"
//             >

//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7F22FE] text-white">
//                 <Sparkles className="h-5 w-5" />
//               </div>

//               <h3 className="text-xl font-bold">
//                 Social<span className="text-[#7F22FE]">
//                   Nest
//                 </span>
//               </h3>

//             </Link>

//             <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
//               A modern community for people who love to write,
//               learn, discover ideas and connect through meaningful
//               stories.
//             </p>

//             {/* Social */}
//             <div className="mt-6 flex items-center gap-3">

//               <Link
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-purple-200 hover:bg-purple-50 hover:text-[#7F22FE]"
//               >
//                 <FaTwitter className="h-4 w-4" />
//               </Link>

//               <Link
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-purple-200 hover:bg-purple-50 hover:text-[#7F22FE]"
//               >
//                 < FaGithub className="h-4 w-4" />
//               </Link>

//               <Link
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-purple-200 hover:bg-purple-50 hover:text-[#7F22FE]"
//               >
//                 <FaLinkedinIn className="h-4 w-4" />
//               </Link>

//               <Link
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-purple-200 hover:bg-purple-50 hover:text-[#7F22FE]"
//               >
//                 <FaFacebookF className="h-4 w-4" />
//               </Link>

//               <Link
//                 href="#"
//                 className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-purple-200 hover:bg-purple-50 hover:text-[#7F22FE]"
//               >
//                 <FaInstagram className="h-4 w-4" />
//               </Link>

//             </div>
//           </div>

//           {/* Explore */}
//           <div>

//             <h4 className="font-bold text-gray-900">
//               Explore
//             </h4>

//             <div className="mt-5 space-y-3">

//               <Link
//                 href="/posts"
//                 className="block text-sm text-gray-500 transition hover:text-[#7F22FE]"
//               >
//                 All Stories
//               </Link>

//               <Link
//                 href="/categories"
//                 className="block text-sm text-gray-500 transition hover:text-[#7F22FE]"
//               >
//                 Categories
//               </Link>

//               <Link
//                 href="/posts?isFeatured=true"
//                 className="block text-sm text-gray-500 transition hover:text-[#7F22FE]"
//               >
//                 Featured Posts
//               </Link>

//               <Link
//                 href="/about"
//                 className="block text-sm text-gray-500 transition hover:text-[#7F22FE]"
//               >
//                 About Us
//               </Link>

//             </div>
//           </div>

//           {/* Account */}
//           <div>

//             <h4 className="font-bold text-gray-900">
//               Account
//             </h4>

//             <div className="mt-5 space-y-3">

//               <Link
//                 href="/login"
//                 className="block text-sm text-gray-500 transition hover:text-[#7F22FE]"
//               >
//                 Sign In
//               </Link>

//               <Link
//                 href="/register"
//                 className="block text-sm text-gray-500 transition hover:text-[#7F22FE]"
//               >
//                 Create Account
//               </Link>

//               <Link
//                 href="/profile"
//                 className="block text-sm text-gray-500 transition hover:text-[#7F22FE]"
//               >
//                 My Profile
//               </Link>

//               <Link
//                 href="/dashboard"
//                 className="block text-sm text-gray-500 transition hover:text-[#7F22FE]"
//               >
//                 Dashboard
//               </Link>

//             </div>
//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row">

//           <p>
//             © 2026 SocialNest. All rights reserved.
//           </p>

//           <div className="flex gap-5">

//             <Link
//               href="/privacy"
//               className="hover:text-[#7F22FE]"
//             >
//               Privacy Policy
//             </Link>

//             <Link
//               href="/terms"
//               className="hover:text-[#7F22FE]"
//             >
//               Terms of Service
//             </Link>

//             <Link
//               href="/contact"
//               className="hover:text-[#7F22FE]"
//             >
//               Contact
//             </Link>

//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }



import { Sparkles } from "lucide-react";
import Link from "next/link";
import {
FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";



const footerLinks = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "All Posts", href: "/posts" },
    { label: "Categories", href: "/categories" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Account: [
    { label: "Sign In", href: "/login" },
    { label: "Create Account", href: "/register" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#11102c] text-white">
      <div className="absolute -left-28 -top-28 h-64 w-64 rounded-full bg-[#7F22FE]/20 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7F22FE] text-white shadow-lg">
            <Sparkles className="h-5 w-5" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              Social<span className="text-[#7F22FE]">Nest</span>
            </h1>

            <p className="hidden text-[10px] font-medium text-gray-400 sm:block">
              Stories. Ideas. Community.
            </p>
          </div>
        </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              A place for curious minds to share ideas, tell stories, and build
              meaningful connections.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { label: "Twitter", href: "https://x.com", Icon: FaTwitter },
                {
                  label: "Instagram",
                  href: "https://instagram.com",
                  Icon: FaInstagram,
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                  Icon: FaLinkedin,
                },
                { label: "GitHub", href: "https://github.com", Icon: FaGithub },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-purple-400 hover:bg-[#7F22FE] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-bold text-white">{heading}</h3>

              <ul className="mt-5 space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                      {link.href === "/contact" && (
                        <FaArrowRight className="h-3 w-3" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SocialNest. All rights reserved.
          </p>
          <p>Ideas · People · Better Tomorrow</p>
        </div>
      </div>
    </footer>
  );
}