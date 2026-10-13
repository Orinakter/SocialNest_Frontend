"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import {
  ArrowRight,
  UserRound,
  Mail,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { registerUserActions } from "@/app/(auth)/auth_register_actions/authRegisterActions";
import { RegisterState } from "@/app/(auth)/auth_register_interface/authRegister.interface";



const initialState: RegisterState = {
  success: false,
  message: "",
  statusCode: 400,
  data: null,
};

export default function RegisterForm() {
  const [state, registerAction, pending] = useActionState(
    registerUserActions,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      toast.success(state.message || "Account created successfully!");
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={registerAction} className="space-y-5">
      {/* Full Name */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-semibold text-slate-700"
        >
          Full name
        </label>

        <div className="relative">
          <UserRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            required
            autoComplete="name"
            className="h-12 rounded-xl border-slate-200 bg-slate-50 pl-11 shadow-none transition-all focus-visible:border-[#7F22FE] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-100"
          />
        </div>
      </div>

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
        <label
          htmlFor="password"
          className="text-sm font-semibold text-slate-700"
        >
          Password
        </label>

        <div className="relative">
          <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Create a strong password"
            required
            autoComplete="new-password"
            minLength={6}
            className="h-12 rounded-xl border-slate-200 bg-slate-50 pl-11 shadow-none transition-all focus-visible:border-[#7F22FE] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-100"
          />
        </div>

        <p className="text-xs text-slate-400">
          Use at least 6 characters for your password.
        </p>
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <label
          htmlFor="confirmPassword"
          className="text-sm font-semibold text-slate-700"
        >
          Confirm password
        </label>

        <div className="relative">
          <ShieldCheck className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            required
            autoComplete="new-password"
            minLength={6}
            className="h-12 rounded-xl border-slate-200 bg-slate-50 pl-11 shadow-none transition-all focus-visible:border-[#7F22FE] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-100"
          />
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start gap-3">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#7F22FE] focus:ring-[#7F22FE]"
        />

        <label
          htmlFor="terms"
          className="text-xs leading-5 text-slate-500"
        >
          I agree to the{" "}
          <Link
            href="/terms"
            className="font-semibold text-[#7F22FE] hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="font-semibold text-[#7F22FE] hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      {/* Register Button */}
      <Button
        type="submit"
        disabled={pending}
        className="h-12 w-full rounded-xl bg-[#7F22FE] text-sm font-bold text-white shadow-lg shadow-purple-200 transition-all hover:bg-[#6915df] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? (
          <span className="flex items-center justify-center gap-2">
            <Spinner />
            Creating account...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            Create your account
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </Button>

      {/* Login Link */}
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-100" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs font-medium text-slate-400">
            Already have an account?
          </span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="h-12 w-full rounded-xl border-slate-200 bg-white text-sm font-bold text-slate-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-[#7F22FE]"
        
      >
        <Link href="/login">Login to your account</Link>
      </Button>

      {/* Server Action Error */}
      {!state.success && state.message && (
        <p role="alert" className="text-center text-sm text-red-600">
          {state.message}
        </p>
      )}
    </form>
  );
}