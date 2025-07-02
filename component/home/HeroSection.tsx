import Link from "next/link";
import HomeTabOption from "../shared/ui/HomeTabOption";

const HeroSection = () => {
  return (
    <section>
      <div className="bg-primary px-8 py-3 container mx-auto mt-20">
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mt-24">
          High-performing remote teams.
          <br /> The future of work.
        </h1>
        <h5 className="text-center text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground mt-8">
          Powerful, self-serve team engagement tools and analytics. Supercharge
          your <br />
          managers & keep employees engaged from anywhere.
        </h5>

        <div className="flex justify-center mt-8">
          <Link
            href="/sign-up"
            className="bg-[#241836] text-white px-14 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:bg-[#3a2952] active:scale-95 shadow-sm hover:shadow-md"
          >
            Explore Now
          </Link>
        </div>

        <h5 className="text-center text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground mt-6">
          Trusted by 4,000+ companies
        </h5>
      </div>
      <div className="flex items-center justify-center">
        <HomeTabOption />
      </div>
    </section>
  );
};

export default HeroSection;
