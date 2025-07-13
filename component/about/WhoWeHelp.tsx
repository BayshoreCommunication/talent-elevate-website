import Image from "next/image";

const helpList = [
  {
    title: "International Students",
    description: "F-1, OPT, CPT, PR, etc.",
    imageUrl: "/assets/about/image (2).png",
  },
  {
    title: "Fresh Graduates",
    description: "With limited/no job experience",
    imageUrl: "/assets/about/image (3).png",
  },
  {
    title: "Part-Time Workers",
    description: "Busy schedule, no time to apply",
    imageUrl: "/assets/about/image (4).png",
  },
  {
    title: "Confused Job Seekers",
    description: "Lack of guidance and strategy",
    imageUrl: "/assets/about/image (5).png",
  },
];

const WhoWeHelp = () => {
  return (
    <div className="container mx-auto py-10 md:py-20">
      <h2 className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground ">
        Who We Help
      </h2>
      <h5 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground mt-4 sm:mt-5">
        See how Capable has transformed users social experiences through <br />
        their own words.
      </h5>
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {helpList.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F5F5] rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <h6 className="text-xl font-semibold text-primary-foreground mt-2">
                {item.title}
              </h6>
              <p className="text-base text-center text-primary-foreground mb-6">
                {item.description}
              </p>
              <Image
                width={1200}
                height={600}
                src={item.imageUrl}
                alt={item.title}
                className="object-cover w-[400px] h-auto"
                priority
              />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default WhoWeHelp;
