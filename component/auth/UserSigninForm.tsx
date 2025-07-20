"use client";
import { credentialLogin, socialAuthLogin } from "@/app/actions/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

const UserSigninForm = () => {
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Memoized Google signin function
  const googleSignin = useCallback(async () => {
    const formData = new FormData();
    formData.set("action", "google");
    try {
      await socialAuthLogin(formData);
    } catch (err) {
      console.error("Google sign-in failed", err);
    }
  }, []);

  // Memoized password visibility toggle
  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  // Memoized form submission
  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(null);

      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string | null;
      const password = formData.get("password") as string | null;

      if (!email || !password) {
        setError("Both email and password are required.");
        return;
      }

      try {
        setLoading(true);
        const response = await credentialLogin(formData);

        if (response?.error) {
          setError(response.error);
        } else if (response?.ok) {
          window.location.href = "/";
        } else {
          setError("Unexpected response from server. Please try again later.");
        }
      } catch (error: any) {
        console.error("Error during login:", error);
        setError(
          error?.message ||
            "An unexpected error occurred. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Memoized header content
  const headerContent = useMemo(
    () => (
      <div className="flex flex-col items-center mb-6">
        <Image
          src="/assets/logo/talent-elevate-logo.png"
          alt="Talent Elevate Logo"
          width={200}
          height={200}
          className="mb-4 object-contain"
          priority
        />
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Hi, Welcome to Talent Elevate!
        </h2>
        <p className="text-sm text-gray-500 mt-1 text-center">
          Create an account and build starting your career
        </p>
      </div>
    ),
    []
  );

  // Memoized Google button
  const googleButton = useMemo(
    () => (
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
    ),
    [googleSignin]
  );

  // Memoized password field with eye icon
  const passwordField = useMemo(
    () => (
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Min. 8 characters"
            className="w-full mt-1 px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            minLength={8}
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <svg
                className="h-5 w-5 text-gray-400 hover:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-gray-400 hover:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    ),
    [showPassword, togglePasswordVisibility]
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {headerContent}

      {/* Form Container */}
      <div className="w-full max-w-xl p-12 bg-white rounded-2xl shadow-md">
        {googleButton}

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

          {passwordField}

          <div className="flex items-center justify-between">
            <div className="flex items-center py-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
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
            disabled={loading}
            className="w-full bg-[#1C1833] text-white font-medium py-2 rounded-md hover:bg-[#2c254d] transition disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
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
