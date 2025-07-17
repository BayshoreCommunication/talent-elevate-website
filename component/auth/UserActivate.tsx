"use client";

import { userActivate } from "@/app/actions/auth";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const UserActivate = ({ token }: any) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  console.log("check ", token);

  const handleActivate = async () => {
    setError(null);
    setLoading(true);
    if (!token) {
      setError("Activation token is missing.");
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append("token", token);
    const response = await userActivate(formData);
    if (response.ok) {
      setSuccess(true);
      // Optionally redirect after a delay:
      // setTimeout(() => router.push("/sign-in"), 2000);
    } else {
      setError(response.error || "Activation failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded shadow flex flex-col items-center max-w-xl w-full py-16">
        <Image
          src="/assets/logo/talent-elevate-logo.png"
          alt="Talent Elevate Logo"
          width={200}
          height={200}
          className="mb-4 object-contain"
        />
        <h2 className="text-2xl font-semibold text-green-700 mb-2 text-center">
          {success ? "Account Activated!" : "Activate Your Account"}
        </h2>
        <p className="text-gray-700 text-center mb-6">
          {success
            ? "Your account has been activated. You can now sign in."
            : "Click the button below to activate your account."}
        </p>
        {error && <div className="text-red-600 text-sm mb-4">{error}</div>}
        {success ? (
          <button
            className="w-full bg-[#1C1833] text-white font-medium px-8 py-2 rounded hover:bg-[#2c254d] transition cursor-pointer"
            onClick={() => router.push("/sign-in")}
          >
            Go to Sign In
          </button>
        ) : (
          <button
            className="w-full bg-[#1C1833] text-white font-medium px-8 py-2 rounded hover:bg-[#2c254d] transition cursor-pointer"
            onClick={handleActivate}
            disabled={loading}
          >
            {loading ? "Activating..." : "Activate Account"}
          </button>
        )}
      </div>
    </div>
  );
};

export default UserActivate;
