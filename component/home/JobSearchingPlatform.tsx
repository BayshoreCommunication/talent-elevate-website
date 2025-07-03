import Image from "next/image";

const companyLogoList = [
  {
    name: "Rating 4.7",
    src: "/assets/home/company-logo/rtfyre.png",
  },
];

const JobSearchingPlatform = () => {
  return (
    <section className="bg-[#F5F5F5] py-10 md:py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground ">
          Job Searching Platform
        </h2>
        <h5 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground mt-4 sm:mt-5">
          Powerful, self-serve team engagement tools and analytics. Supercharge
          your <br /> managers & keep employees engaged from anywhere.
        </h5>
        <div className="flex items-center justify-center space-x-8 mt-12">
          <Image
            width={500}
            height={500}
            src="/assets/home/company-logo/download 1.png"
            alt="Remote team collaboration"
            className="w-[180px] h-auto"
            priority
          />
          <Image
            width={500}
            height={500}
            src="/assets/home/company-logo/image-1.png"
            alt="Remote team collaboration"
            className="w-[180px] h-auto"
            priority
          />
          <Image
            width={500}
            height={500}
            src="/assets/home/company-logo/image-3.png"
            alt="Remote team collaboration"
            className="w-[160px] h-auto"
            priority
          />
          <Image
            width={500}
            height={500}
            src="/assets/home/company-logo/image-4.png"
            alt="Remote team collaboration"
            className="w-[150px] h-auto"
            priority
          />

          <Image
            width={500}
            height={500}
            src="/assets/home/company-logo/Talent_logo-64c3146f73e3d729b2f0a01f1a73e07e04c8c33fa095dd69d6840abf637baccf 1.png"
            alt="Remote team collaboration"
            className="w-[250px] h-auto"
            priority
          />
        </div>
        <div className="flex items-center justify-center space-x-8 mt-12">
          <Image
            width={500}
            height={500}
            src="/assets/home/company-logo/image.png"
            alt="Remote team collaboration"
            className="w-[180px] h-auto"
            priority
          />
          <Image
            width={500}
            height={500}
            src="/assets/home/company-logo/image-2.png"
            alt="Remote team collaboration"
            className="w-[150px] h-auto"
            priority
          />
          <Image
            width={500}
            height={500}
            src="/assets/home/company-logo/image-5.png"
            alt="Remote team collaboration"
            className="w-[200px] h-auto"
            priority
          />
          <Image
            width={500}
            height={500}
            src="/assets/home/company-logo/image-6.png"
            alt="Remote team collaboration"
            className="w-[150px] h-auto"
            priority
          />

          <Image
            width={500}
            height={500}
            src="/assets/home/company-logo/image-7.png"
            alt="Remote team collaboration"
            className="w-[170px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default JobSearchingPlatform;
