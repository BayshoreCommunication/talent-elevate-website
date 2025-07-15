import Image from "next/image";

const LinkedinOverview = () => {
  return (
    <div className="">
      <div className="">
        <Image
          src="/assets/dashboard/linkedin-page.png"
          alt="LinkedIn Overview"
          height={1000}
          width={1500}
          className="w-[1000px] h-[1200px]"
          priority
        />
      </div>
    </div>
  );
};

export default LinkedinOverview;
