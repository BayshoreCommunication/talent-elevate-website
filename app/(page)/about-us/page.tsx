import AboutTalentElevate from "@/component/about/AboutTalentElevate";
import OurVision from "@/component/about/OurVision";
import TheProblemWeSolve from "@/component/about/TheProblemWeSolve";
import WhoWeHelp from "@/component/about/WhoWeHelp";
import GetStartedToday from "@/component/shared/ui/GetStartedToday";
import StudentPlan from "@/component/shared/ui/StudentPlan";

const page = () => {
  return (
    <div>
      <AboutTalentElevate />
      <OurVision />
      <WhoWeHelp />
      <TheProblemWeSolve />
      <StudentPlan />
      <GetStartedToday />
    </div>
  );
};

export default page;
