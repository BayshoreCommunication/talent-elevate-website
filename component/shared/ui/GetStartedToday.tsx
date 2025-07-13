import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const GetStartedToday = () => {
  return (
    <section
      className="relative w-full bg-top bg-no-repeat bg-cover flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/home/vactor-shape.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#EF783E]/90 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-16 sm:py-20 md:py-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-primary-foreground mb-8 leading-snug">
          From customization to communication, our project organizer makes
          everything simpler— Get started today!
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          {/* Sign In Button – Outline */}
          <Link
            href="/sign-in"
            className="border border-white text-white px-8 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:bg-white hover:text-[#241836]  active:scale-95 shadow-sm hover:shadow-md"
          >
            Learn more
          </Link>

          {/* Sign Up Button – Filled */}
          <Link
            href="/sign-up"
            className="bg-white text-[#241836] px-8 py-3 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:bg-[#3a2952] hover:text-white active:scale-95 shadow-sm hover:shadow-md flex items-center space-x-2"
          >
            <span>{`Let’s go`}</span> <IoArrowForward className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStartedToday;
