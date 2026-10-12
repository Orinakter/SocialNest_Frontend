// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Field,
//   FieldDescription,
//   FieldGroup,
//   FieldLabel,
//   FieldSeparator,
// } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import {
//   ArrowRight,
//   Eye,
//   EyeOff,
//   LockKeyhole,
//   Mail,
//   ShieldCheck,
// } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// export function LoginForm({
//   className,
//   ...props
// }: React.ComponentProps<"form">) {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <form
//       className={`w-full ${className || ""}`}
//       {...props}
//     >
//       <FieldGroup className="gap-6">
//         {/* ================= HEADER ================= */}
//         <div className="space-y-3 text-center">
//           {/* Small Badge */}
//           <div className="flex justify-center">
//             <div className="inline-flex items-center gap-2 rounded-full border border-[#7F22FE]/10 bg-[#7F22FE]/5 px-3 py-1.5 text-xs font-medium text-[#7F22FE]">
//               <ShieldCheck className="size-3.5" />
//               Secure Login
//             </div>
//           </div>

//           <div>
//             <h1 className="text-3xl font-bold tracking-tight text-[#111827]">
//               Welcome back
//             </h1>

//             <p className="mt-2 text-sm leading-6 text-gray-500">
//               Sign in to continue your journey on{" "}
//               <span className="font-semibold text-[#7F22FE]">
//                 SocialNest
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* ================= EMAIL ================= */}
//         <Field>
//           <FieldLabel
//             htmlFor="email"
//             className="mb-2 text-sm font-semibold text-gray-700"
//           >
//             Email address
//           </FieldLabel>

//           <div className="group relative">
//             <Mail
//               className="
//                 absolute left-3.5 top-1/2 size-[18px]
//                 -translate-y-1/2
//                 text-gray-400
//                 transition-colors
//                 group-focus-within:text-[#7F22FE]
//               "
//             />

//             <Input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="you@example.com"
//               autoComplete="email"
//               required
//               className="
//                 h-12
//                 rounded-xl
//                 border-gray-200
//                 bg-white
//                 pl-11
//                 text-sm
//                 shadow-sm
//                 transition-all
//                 duration-200
//                 placeholder:text-gray-400
//                 hover:border-gray-300
//                 focus:border-[#7F22FE]
//                 focus:ring-4
//                 focus:ring-[#7F22FE]/10
//               "
//             />
//           </div>
//         </Field>

//         {/* ================= PASSWORD ================= */}
//         <Field>
//           <div className="mb-2 flex items-center justify-between">
//             <FieldLabel
//               htmlFor="password"
//               className="text-sm font-semibold text-gray-700"
//             >
//               Password
//             </FieldLabel>

//             <Link
//               href="/forgot-password"
//               className="
//                 text-xs
//                 font-semibold
//                 text-[#7F22FE]
//                 transition-colors
//                 hover:text-[#6D1FE0]
//                 hover:underline
//                 hover:underline-offset-4
//               "
//             >
//               Forgot password?
//             </Link>
//           </div>

//           <div className="group relative">
//             <LockKeyhole
//               className="
//                 absolute left-3.5 top-1/2 size-[18px]
//                 -translate-y-1/2
//                 text-gray-400
//                 transition-colors
//                 group-focus-within:text-[#7F22FE]
//               "
//             />

//             <Input
//               id="password"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter your password"
//               autoComplete="current-password"
//               required
//               className="
//                 h-12
//                 rounded-xl
//                 border-gray-200
//                 bg-white
//                 pl-11
//                 pr-11
//                 text-sm
//                 shadow-sm
//                 transition-all
//                 duration-200
//                 placeholder:text-gray-400
//                 hover:border-gray-300
//                 focus:border-[#7F22FE]
//                 focus:ring-4
//                 focus:ring-[#7F22FE]/10
//               "
//             />

//             <button
//               type="button"
//               onClick={() => setShowPassword((prev) => !prev)}
//               className="
//                 absolute right-3.5 top-1/2
//                 -translate-y-1/2
//                 rounded-md
//                 p-1
//                 text-gray-400
//                 transition-all
//                 hover:bg-[#7F22FE]/5
//                 hover:text-[#7F22FE]
//               "
//               aria-label={
//                 showPassword
//                   ? "Hide password"
//                   : "Show password"
//               }
//             >
//               {showPassword ? (
//                 <EyeOff className="size-[18px]" />
//               ) : (
//                 <Eye className="size-[18px]" />
//               )}
//             </button>
//           </div>
//         </Field>

//         {/* ================= LOGIN BUTTON ================= */}
//         <Field className="pt-1">
//           <Button
//             type="submit"
//             className="
//               group
//               relative
//               h-12
//               w-full
//               overflow-hidden
//               rounded-xl
//               bg-[#7F22FE]
//               text-sm
//               font-semibold
//               text-white
//               shadow-lg
//               shadow-[#7F22FE]/20
//               transition-all
//               duration-300
//               hover:-translate-y-0.5
//               hover:bg-[#6D1FE0]
//               hover:shadow-xl
//               hover:shadow-[#7F22FE]/25
//               active:translate-y-0
//             "
//           >
//             <span className="relative z-10 flex items-center justify-center gap-2">
//               Login to SocialNest

//               <ArrowRight
//                 className="
//                   size-4
//                   transition-transform
//                   duration-300
//                   group-hover:translate-x-1
//                 "
//               />
//             </span>

//             {/* Button Shine */}
//             <span
//               className="
//                 absolute
//                 inset-0
//                 -translate-x-full
//                 bg-gradient-to-r
//                 from-transparent
//                 via-white/15
//                 to-transparent
//                 transition-transform
//                 duration-700
//                 group-hover:translate-x-full
//               "
//             />
//           </Button>
//         </Field>

//         {/* ================= DIVIDER ================= */}
//         <FieldSeparator className="my-1 text-xs text-gray-400">
//           <span className="px-2">Or continue with</span>
//         </FieldSeparator>

//         {/* ================= SOCIAL LOGIN PLACEHOLDER ================= */}
//         <Field>
//           <Button
//             type="button"
//             variant="outline"
//             className="
//               h-12
//               w-full
//               rounded-xl
//               border-gray-200
//               bg-white
//               text-sm
//               font-medium
//               text-gray-700
//               shadow-sm
//               transition-all
//               duration-200
//               hover:-translate-y-0.5
//               hover:border-[#7F22FE]/30
//               hover:bg-[#7F22FE]/5
//               hover:text-[#7F22FE]
//               hover:shadow-md
//             "
//           >
//             <span className="flex size-5 items-center justify-center rounded-full bg-gray-100 text-xs font-bold">
//               G
//             </span>

//             Continue with Google
//           </Button>
//         </Field>

//         {/* ================= SIGN UP ================= */}
//         <FieldDescription className="pt-1 text-center text-sm text-gray-500">
//           Don&apos;t have an account?{" "}
//           <Link
//             href="/register"
//             className="
//               font-semibold
//               text-[#7F22FE]
//               transition-colors
//               hover:text-[#6D1FE0]
//               hover:underline
//               hover:underline-offset-4
//             "
//           >
//             Create an account
//           </Link>
//         </FieldDescription>

//         {/* ================= SECURITY NOTE ================= */}
//         <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-gray-400">
//           <ShieldCheck className="size-3.5" />
//           <span>Your information is securely protected</span>
//         </div>
//       </FieldGroup>
//     </form>
//   );
// }



"use client";

import Link from "next/link";
import { useState } from "react";

import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // API integration later
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-bold text-gray-800"
        >
          Email address
        </label>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
            className="h-12 rounded-xl border-gray-200 bg-gray-50 pl-11 pr-4 text-sm shadow-none transition placeholder:text-gray-400 focus-visible:border-[#7F22FE] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-100"
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="text-sm font-bold text-gray-800"
          >
            Password
          </label>

          <Link
            href="/forgot-password"
            className="text-xs font-bold text-[#7F22FE] transition hover:text-purple-700"
          >
            Forgot password?
          </Link>
        </div>

        <div className="relative">
          <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            required
            autoComplete="current-password"
            className="h-12 rounded-xl border-gray-200 bg-gray-50 pl-11 pr-12 text-sm shadow-none transition placeholder:text-gray-400 focus-visible:border-[#7F22FE] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-100"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition hover:bg-purple-50 hover:text-[#7F22FE]"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Remember */}
      <div className="flex items-center justify-between">

        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-gray-300 accent-[#7F22FE] focus:ring-[#7F22FE]"
          />

          <span className="text-xs font-medium text-gray-500">
            Remember me
          </span>
        </label>

        <span className="text-xs text-gray-400">
          Secure login
        </span>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={loading}
        className="h-12 w-full rounded-xl bg-[#7F22FE] text-sm font-bold text-white shadow-lg shadow-purple-200 transition-all hover:bg-[#6D1BE0] hover:shadow-xl hover:shadow-purple-200 disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          <>
            Sign in
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      {/* Divider */}
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-100" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs font-medium text-gray-400">
            New to SocialNest?
          </span>
        </div>
      </div>

      {/* Register */}
      <Button
        variant="outline"
        className="h-12 w-full rounded-xl border-gray-200 bg-white text-sm font-bold text-gray-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-[#7F22FE]"
      >
        <Link href="/register">
          Create an account
        </Link>
      </Button>

    </form>
  );
}