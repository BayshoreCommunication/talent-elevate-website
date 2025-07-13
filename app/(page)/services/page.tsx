import ReviewsAndFeedback from "@/component/home/ReviewsAndFeedback";
import OurCoreServices from "@/component/services/OurCoreServices";
import GetStartedToday from "@/component/shared/ui/GetStartedToday";
import StudentPlan from "@/component/shared/ui/StudentPlan";

const page = () => {
  return (
    <div>
      <OurCoreServices />
      <StudentPlan />
      <ReviewsAndFeedback />
      <GetStartedToday />
    </div>
  );
};

export default page;
