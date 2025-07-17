import { auth } from "@/auth";
import DashboardOverview from "@/component/dashboard/DashboardOverview";
import InterviewSchedules from "@/component/dashboard/InterviewSchedules";

const page = async () => {
  const session = await auth();

  console.log("check value item session", session?.user?.accessToken);

  return (
    <div>
      <DashboardOverview />
      <InterviewSchedules />
    </div>
  );
};

export default page;
