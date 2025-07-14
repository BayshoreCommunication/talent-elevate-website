import MotionFadeIn from "../shared/ui/MotionFadeIn";

const OurVision = () => {
  return (
    <div className="bg-[#F5F5F5] py-10 md:py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <MotionFadeIn className="w-full md:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-primary-foreground text-center md:text-left">
            Our Vision
          </h1>
        </MotionFadeIn>
        <MotionFadeIn delay={0.1} className="w-full md:w-1/2">
          <h5 className="text-base sm:text-lg md:text-lg lg:text-xl font-normal text-primary-foreground text-center md:text-left">
            To become the most trusted bridge between graduation and employment
            for job <br className="hidden md:block" /> seekers around the world.
          </h5>
        </MotionFadeIn>
      </div>
    </div>
  );
};

export default OurVision;
