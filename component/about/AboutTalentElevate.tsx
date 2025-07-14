import Image from "next/image";
import MotionFadeIn from "../shared/ui/MotionFadeIn";

const AboutTalentElevate = () => {
  return (
    <div className="my-12 sm:my-20 px-4">
      <MotionFadeIn>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-primary-foreground mt-12 sm:mt-40">
          About Talent Elevate
        </h1>
      </MotionFadeIn>
      <div className="flex items-center justify-center flex-col mt-4 sm:mt-8">
        <MotionFadeIn delay={0.1} className="w-full flex justify-center">
          <Image
            width={1200}
            height={600}
            src="/assets/about/hero-video-thumbnail.png"
            alt="Remote team collaboration"
            className="object-cover w-full max-w-3xl h-auto mt-8 sm:mt-12 rounded-xl shadow-lg mx-auto"
            priority
          />
        </MotionFadeIn>
        <MotionFadeIn delay={0.2} className="w-full">
          <h5 className="text-center text-base sm:text-lg md:text-lg lg:text-xl font-normal text-primary-foreground mt-6 sm:mt-8 max-w-3xl mx-auto">
            Talent Elevate is a done-for-you job preparation and placement
            agency built for international students, recent graduates, and
            part-time workers who are trying to break into the job market but
            don’t know where to begin. We handle everything from resume creation
            to interview scheduling so clients can focus on learning and growing
            while we secure job opportunities.
          </h5>
        </MotionFadeIn>
      </div>
    </div>
  );
};

export default AboutTalentElevate;
