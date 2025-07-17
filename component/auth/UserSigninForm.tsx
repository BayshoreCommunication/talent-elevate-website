"use client";
import { credentialLogin, socialAuthLogin } from "@/app/actions/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserSigninForm = () => {
  const [agree, setAgree] = useState(false);

  const googleSignin = async () => {
    const formData = new FormData();
    formData.set("action", "google");
    try {
      await socialAuthLogin(formData);
    } catch (err) {
      // Optionally handle error (e.g., show toast)
      console.error("Google sign-in failed", err);
    }
  };

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Reset error on new attempt

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;

    // Basic validation
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    try {
      setLoading(true); // Start loading state

      // Call login API
      const response = await credentialLogin(formData);
      console.log("Login response:", response); // Debug log

      if (response?.error) {
        setError(response.error); // Set error from response
      } else if (response?.ok) {
        // Set OTP flag and user info only if login is successful
        console.log("Login successful");
      } else {
        setError(
          "Unexpected response from server. Please try again later. [No ok/error in response]"
        );
      }
    } catch (error: any) {
      // Handle unexpected errors
      console.error("Error during login:", error);
      setError(
        error?.message ||
          "An unexpected error occurred. Please try again later."
      );
    } finally {
      setLoading(false); // Stop loading state
    }
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
        <button
          type="button"
          onClick={googleSignin}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 rounded-md py-2 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        {/* Separator */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-sm text-gray-400">
            or Sign in with Email
          </span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email Signup Form */}
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
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

          <div className="flex items-center justify-between">
            <div className="flex items-center py-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                required
              />
              <label className="ml-2 text-sm text-gray-700">Remember me</label>
            </div>

            <div className="flex items-center py-2">
              <label className="ml-2 text-sm text-primary">
                Forgot your password?
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1C1833] text-white font-medium py-2 rounded-md hover:bg-[#2c254d] transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Error Display */}
        {error && (
          <div className="mt-4 flex justify-center">
            <p className="text-base text-red-500 text-center">{error}</p>
          </div>
        )}

        {/* Login Link */}
        <p className="mt-4 text-sm text-center text-gray-500">
          Not registered yet?{" "}
          <Link
            href="/sign-up"
            className="text-[#F75C4E] hover:underline font-medium"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserSigninForm;
