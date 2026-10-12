"use client";

import Link from "next/link";
import { useState } from "react";

import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
  Mail,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState("");

  const passwordLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);

  const passwordStrong =
    passwordLength && hasNumber && hasLetter;

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    // Backend API integration will be added here.
    // Example:
    //
    // const formData = new FormData(e.currentTarget);
    //
    // const data = {
    //   name: formData.get("name"),
    //   email: formData.get("email"),
    //   password: formData.get("password"),
    // };

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      {/* ================= NAME ================= */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-bold text-gray-800"
        >
          Full name
        </label>

        <div className="relative">
          <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            required
            autoComplete="name"
            className="h-12 rounded-xl border-gray-200 bg-gray-50 pl-11 pr-4 text-sm shadow-none transition placeholder:text-gray-400 focus-visible:border-[#7F22FE] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-100"
          />
        </div>
      </div>

      {/* ================= EMAIL ================= */}
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

      {/* ================= PASSWORD ================= */}
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-bold text-gray-800"
        >
          Password
        </label>

        <div className="relative">
          <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            required
            autoComplete="new-password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="h-12 rounded-xl border-gray-200 bg-gray-50 pl-11 pr-12 text-sm shadow-none transition placeholder:text-gray-400 focus-visible:border-[#7F22FE] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-100"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition hover:bg-purple-50 hover:text-[#7F22FE]"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Password Strength */}
        {password.length > 0 && (
          <div className="space-y-2 pt-1">

            <div className="flex gap-1">
              <div
                className={`h-1 flex-1 rounded-full ${
                  password.length >= 4
                    ? "bg-[#7F22FE]"
                    : "bg-gray-200"
                }`}
              />

              <div
                className={`h-1 flex-1 rounded-full ${
                  passwordLength
                    ? "bg-[#7F22FE]"
                    : "bg-gray-200"
                }`}
              />

              <div
                className={`h-1 flex-1 rounded-full ${
                  passwordStrong
                    ? "bg-[#7F22FE]"
                    : "bg-gray-200"
                }`}
              />
            </div>

            <div className="space-y-1">
              <PasswordRequirement
                checked={passwordLength}
                text="At least 8 characters"
              />

              <PasswordRequirement
                checked={hasLetter}
                text="Contains a letter"
              />

              <PasswordRequirement
                checked={hasNumber}
                text="Contains a number"
              />
            </div>
          </div>
        )}
      </div>

      {/* ================= CONFIRM PASSWORD ================= */}
      <div className="space-y-2">
        <label
          htmlFor="confirmPassword"
          className="text-sm font-bold text-gray-800"
        >
          Confirm password
        </label>

        <div className="relative">
          <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Confirm your password"
            required
            autoComplete="new-password"
            className="h-12 rounded-xl border-gray-200 bg-gray-50 pl-11 pr-12 text-sm shadow-none transition placeholder:text-gray-400 focus-visible:border-[#7F22FE] focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-purple-100"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-gray-400 transition hover:bg-purple-50 hover:text-[#7F22FE]"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* ================= TERMS ================= */}
      <div className="pt-1">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="terms"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 accent-[#7F22FE] focus:ring-[#7F22FE]"
          />

          <span className="text-xs leading-5 text-gray-500">
            I agree to the{" "}
            <Link
              href="/terms"
              className="font-bold text-[#7F22FE] hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-bold text-[#7F22FE] hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>

      {/* ================= SUBMIT ================= */}
      <Button
        type="submit"
        disabled={loading}
        className="h-12 w-full rounded-xl bg-[#7F22FE] text-sm font-bold text-white shadow-lg shadow-purple-200 transition-all hover:bg-[#6D1BE0] hover:shadow-xl hover:shadow-purple-200 disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          <>
            Create account
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      {/* ================= LOGIN ================= */}
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-100" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs font-medium text-gray-400">
            Already have an account?
          </span>
        </div>
      </div>

      <Button
        
        variant="outline"
        className="h-12 w-full rounded-xl border-gray-200 bg-white text-sm font-bold text-gray-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-[#7F22FE]"
      >
        <Link href="/login">
          Sign in to SocialNest
        </Link>
      </Button>
    </form>
  );
}


/* ================= PASSWORD REQUIREMENT ================= */

function PasswordRequirement({
  checked,
  text,
}: {
  checked: boolean;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-3.5 w-3.5 items-center justify-center rounded-full ${
          checked
            ? "bg-[#7F22FE] text-white"
            : "bg-gray-100 text-gray-300"
        }`}
      >
        <Check className="h-2.5 w-2.5" />
      </div>

      <span
        className={`text-[11px] ${
          checked
            ? "text-gray-600"
            : "text-gray-400"
        }`}
      >
        {text}
      </span>
    </div>
  );
}