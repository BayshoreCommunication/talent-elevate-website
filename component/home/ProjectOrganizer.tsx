import Image from "next/image";

const ProjectOrganizer = () => {
  return (
    <section className="bg-[#F5F5F5] py-10 md:py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground ">
          How does our Project Organizer work?
        </h2>
        <h5 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground mt-4 sm:mt-5">
          Powerful, self-serve team engagement tools and analytics. Supercharge
          your <br /> managers & keep employees engaged from anywhere.
        </h5>
        <Image
          width={1000}
          height={500}
          src="/assets/home/Video.png"
          alt="Remote team collaboration"
          className="w-[900px] h-auto mx-auto mt-8 sm:mt-12 rounded-lg shadow-lg"
          priority
        />
      </div>
    </section>
  );
};

export default ProjectOrganizer;
