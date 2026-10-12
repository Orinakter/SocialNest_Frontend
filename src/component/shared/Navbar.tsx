import Link from "next/link";
import {
  ArrowRight,
  Menu,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7F22FE] text-white shadow-lg shadow-purple-200">
            <Sparkles className="h-5 w-5" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Social<span className="text-[#7F22FE]">Nest</span>
            </h1>

            <p className="hidden text-[10px] font-medium text-gray-400 sm:block">
              Stories. Ideas. Community.
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            href="/"
            className="text-sm font-semibold text-[#7F22FE]"
          >
            Home
          </Link>

          <Link
            href="/explore"
            className="text-sm font-medium text-gray-600 transition hover:text-[#7F22FE]"
          >
            Explore
          </Link>

          <Link
            href="/categories"
            className="text-sm font-medium text-gray-600 transition hover:text-[#7F22FE]"
          >
            Categories
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 transition hover:text-[#7F22FE]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 transition hover:text-[#7F22FE]"
          >
            Contact
          </Link>

        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="hidden px-3 py-2 text-sm font-semibold text-gray-700 transition hover:text-[#7F22FE] sm:block"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="hidden items-center gap-2 rounded-xl bg-[#7F22FE] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-[#6D1FE0] sm:inline-flex"
          >
            Sign Up
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

        </div>
      </div>
    </header>
  );
}