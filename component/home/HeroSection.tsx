import Image from "next/image";
import Link from "next/link";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import HomeTabOption from "../shared/ui/HomeTabOption";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-top bg-no-repeat overflow-hidden "
      style={{
        backgroundImage: "url('/assets/home/homegradientbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background overlay (optional) */}
      <div className="absolute inset-0 bg-black/0 z-0"></div>

      {/* Content container */}
      <div className="relative z-10">
        <div className="bg-primary px-4 sm:px-8 py-3 container mx-auto mt-12 sm:mt-20">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mt-12 sm:mt-24">
            High-performing remote teams.
            <br /> The future of work.
          </h1>
          <h5 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground mt-6 sm:mt-8">
            Powerful, self-serve team engagement tools and analytics.
            Supercharge your <br className="hidden sm:block" />
            managers & keep employees engaged from anywhere.
          </h5>

          <div className="flex justify-center mt-6 sm:mt-8">
            <Link
              href="/sign-up"
              className="bg-[#241836] text-white px-8 sm:px-14 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out hover:bg-[#3a2952] active:scale-95 shadow-sm hover:shadow-md"
            >
              Explore Now
            </Link>
          </div>

          <h5 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground mt-4 sm:mt-6">
            Trusted by 4,000+ companies
          </h5>
        </div>

        <div className="flex items-center justify-center mt-8 sm:mt-12">
          <HomeTabOption />
        </div>

        <div className="container mx-auto mt-8 sm:mt-14 px-4 sm:px-6">
          <div className="relative w-full aspect-video max-w-6xl mx-auto">
            <Image
              fill
              src="/assets/home/tab-option-image.png"
              alt="Remote team collaboration"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="container mx-auto mt-8 sm:mt-16 px-4 sm:px-6 mb-16">
          <div className="flex items-center justify-center space-x-4">
            <h3 className="text-xl font-medium"> Rating 4.7</h3>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4].map((star) => (
                <FaStar key={star} className="text-amber-500 size-5" />
              ))}
              <FaRegStarHalfStroke className="text-amber-500 size-5" />
            </div>
            <h3 className="text-xl font-medium text-gray-500">
              {" "}
              Based on 300+ reviews
            </h3>
          </div>
          <div className="flex items-center justify-center space-x-8 mt-8">
            <Image
              width={500}
              height={500}
              src="/assets/home/rating-logo_1 1.png"
              alt="Remote team collaboration"
              className="w-[45px] h-auto"
              priority
            />
            <Image
              width={500}
              height={500}
              src="/assets/home/rating-logo_2 1.png"
              alt="Remote team collaboration"
              className="w-[160px] h-auto"
              priority
            />

            <Image
              width={500}
              height={500}
              src="/assets/home/rating-logo_3 1.png"
              alt="Remote team collaboration"
              className="w-[45px] h-auto"
              priority
            />
            <Image
              width={500}
              height={500}
              src="/assets/home/rating-logo_4 1.png"
              alt="Remote team collaboration"
              className="w-[200px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
