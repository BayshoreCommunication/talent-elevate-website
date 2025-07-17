import Image from "next/image";
import Link from "next/link";

const SignupConfirm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded shadow flex flex-col items-center max-w-xl w-full  py-16">
        <Image
          src="/assets/logo/talent-elevate-logo.png"
          alt="Talent Elevate Logo"
          width={200}
          height={200}
          className="mb-4 object-contain"
        />
        <h2 className="text-2xl font-semibold text-green-700 mb-2 text-center">
          Signup Successful!
        </h2>
        <p className="text-gray-700 text-center mb-6">
          You have successfully signed up.
          <br />
          Please check your email and activate your account to continue.
        </p>
        <Link href="/sign-in" passHref>
          <button className="w-full bg-[#1C1833] text-white font-medium px-8 py-2 rounded hover:bg-[#2c254d] transition cursor-pointer">
            Go to Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignupConfirm;
