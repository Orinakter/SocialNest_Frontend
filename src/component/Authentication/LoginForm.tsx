"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import {
  ArrowRight,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

import { loginUserActions } from "@/app/(auth)/auth_actions/authAction";
import { LoginState } from "@/app/(auth)/auth_interface/auth.interface";

const initialState: LoginState = {
  success: false,
  message: "",
  statusCode: 400,
};

export default function LoginForm() {
  const [state, loginAction, pending] = useActionState(
    loginUserActions,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      toast.success(state.message || "Login successful!");
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={loginAction} className="space-y-5">
      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-semibold text-slate-700"
        >
          Email address
        </label>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
            className="h-12 rounded-xl border-slate-200 bg-slate-50 pl-11 shadow-none transition-all focus-visible:border-[#7F22FE] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-100"
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <label
            htmlFor="password"
            className="text-sm font-semibold text-slate-700"
          >
            Password
          </label>

          <Link
            href="/forgot-password"
            className="text-xs font-semibold text-[#7F22FE] transition hover:text-purple-800"
          >
            Forgot password?
          </Link>
        </div>

        <div className="relative">
          <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            autoComplete="current-password"
            className="h-12 rounded-xl border-slate-200 bg-slate-50 pl-11 shadow-none transition-all focus-visible:border-[#7F22FE] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-100"
          />
        </div>
      </div>

      {/* Remember me */}
      <div className="flex items-center justify-between gap-3">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            name="remember"
            className="h-4 w-4 rounded border-slate-300 accent-[#7F22FE] focus:ring-[#7F22FE]"
          />

          <span className="text-xs font-medium text-slate-500">
            Remember me
          </span>
        </label>

        <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <ShieldCheck className="h-4 w-4 text-[#7F22FE]" />
          Secure login
        </span>
      </div>

      {/* Login button */}
      <Button
        type="submit"
        disabled={pending}
        className="h-12 w-full rounded-xl bg-[#7F22FE] text-sm font-bold text-white shadow-lg shadow-purple-200 transition-all hover:bg-[#6915df] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? (
          <span className="flex items-center justify-center gap-2">
            <Spinner />
            Signing in...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            Login to SocialNest
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </Button>

      {/* Register link */}
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-100" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs font-medium text-slate-400">
            New to SocialNest?
          </span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="h-12 w-full rounded-xl border-slate-200 bg-white text-sm font-bold text-slate-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-[#7F22FE]"
        
      >
        <Link href="/register">
          Create an account
        </Link>
      </Button>

      {/* Server Action response */}
      {!state.success && state.message && (
        <p role="alert" className="text-center text-sm text-red-600">
          {state.message}
        </p>
      )}
    </form>
  );
}