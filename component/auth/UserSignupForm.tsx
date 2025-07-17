"use client";
import { userSignup } from "@/app/actions/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const UserSignupForm = () => {
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const response = await userSignup(formData);

    console.log("df", response);

    if (response.ok) {
      // Optionally redirect or show success
      window.location.href = "/signup-confirm";
    } else {
      setError(response.error || "Signup failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Header with Logo */}
      <div className="flex flex-col items-center mb-6">
        <Image
          src="/assets/logo/talent-elevate-logo.png"
          alt="Talent Elevate Logo"
          width={200}
          height={200}
          className="mb-4 object-contain"
        />
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Hi, Welcome to Talent Elevate!
        </h2>
        <p className="text-sm text-gray-500 mt-1 text-center">
          Create an account and build starting your career
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-xl p-12 bg-white rounded-2xl shadow-md">
        {/* Google Signup */}
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 rounded-md py-2 hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign up with Google
        </button>

        {/* Separator */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-sm text-gray-400">
            or Sign up with Email
          </span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email Signup Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
          {loading && (
            <div className="text-gray-500 text-sm mb-2">Signing up...</div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Smith"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Min. 8 characters"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              minLength={8}
              required
            />
          </div>

          <div className="flex items-center py-2">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required
            />
            <label className="ml-2 text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-red-600 font-medium hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1C1833] text-white font-medium py-2 rounded-md hover:bg-[#2c254d] transition disabled:opacity-50 cursor-pointer"
            disabled={!agree || loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-sm text-center text-gray-500">
          Already have an Account?{" "}
          <Link
            href="/sign-in"
            className="text-[#F75C4E] hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserSignupForm;
