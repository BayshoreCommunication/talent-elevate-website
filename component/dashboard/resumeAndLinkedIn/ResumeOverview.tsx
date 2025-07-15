import Image from "next/image";

const ResumeOverview = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <Image
            src={"/assets/dashboard/resume.png"}
            alt="LinkedIn Overview"
            height={1000}
            width={1500}
            className="w-[1000px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeOverview;
