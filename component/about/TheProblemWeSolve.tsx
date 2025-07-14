import { CgTimer } from "react-icons/cg";
import { GiDeadEye } from "react-icons/gi";
import { LiaUserTagSolid } from "react-icons/lia";
import { PiReadCvLogoLight } from "react-icons/pi";
import { TbHistoryToggle, TbUserCog } from "react-icons/tb";
import MotionFadeIn from "../shared/ui/MotionFadeIn";

const helpList = [
  {
    title: "No idea where or how to apply",
    description: "1-on-1 Career Planning + Strategy",
    iconUrl: <GiDeadEye className="size-6 text-orange-500" />,
  },
  {
    title: "Poor Resume/LinkedIn",
    description: "Expert Resume + LinkedIn Creation",
    iconUrl: <PiReadCvLogoLight className="size-6 text-orange-500" />,
  },
  {
    title: "No work history",
    description: "Add Valid Experience via Our Shell Companies",
    iconUrl: <TbHistoryToggle className="size-6 text-orange-500" />,
  },
  {
    title: "No network or HR access",
    description: "We Apply & Arrange Interviews",
    iconUrl: <LiaUserTagSolid className="size-6 text-orange-500" />,
  },
  {
    title: "Poor interview skills",
    description: "Personalized Mock Interviews",
    iconUrl: <TbUserCog className="size-6 text-orange-500" />,
  },
  {
    title: "Limited time to apply",
    description: "We apply on your behalf daily",
    iconUrl: <CgTimer className="size-6 text-orange-500" />,
  },
];

const TheProblemWeSolve = () => {
  return (
    <div className="bg-[#F5F5F5] ">
      <div className="container mx-auto py-10 md:py-20 px-4 ">
        <MotionFadeIn>
          <h2 className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground ">
            The Problem We Solve
          </h2>
          <h5 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-primary-foreground mt-4 sm:mt-5">
            See how Capable has transformed users social experiences through{" "}
            <br />
            their own words.
          </h5>
        </MotionFadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {helpList.map((item, index) => (
            <MotionFadeIn key={index} delay={0.1 * index}>
              <div className="p-4 flex flex-col items-center">
                <div className="flex items-center justify-center bg-[#FE641A]/10 rounded-lg w-16 h-16 mb-4">
                  {item.iconUrl}
                </div>
                <h6 className="text-xl font-semibold text-primary-foreground mt-2">
                  {item.title}
                </h6>
                <p className="text-base text-center text-primary-foreground mb-6">
                  {item.description}
                </p>
              </div>
            </MotionFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheProblemWeSolve;
