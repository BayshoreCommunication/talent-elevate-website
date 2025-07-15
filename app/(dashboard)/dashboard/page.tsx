import DashboardOverview from "@/component/dashboard/DashboardOverview";
import InterviewSchedules from "@/component/dashboard/InterviewSchedules";

const page = () => {
  return (
    <div>
      <DashboardOverview />
      <InterviewSchedules />
    </div>
  );
};

export default page;
