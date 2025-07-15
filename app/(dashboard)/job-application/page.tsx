import ApplicationStatus from "@/component/dashboard/jobApplication/ApplicationStatus";
import JobApplicationOverview from "@/component/dashboard/jobApplication/JobApplicationOverview";

const page = () => {
  return (
    <div>
      <JobApplicationOverview />
      <ApplicationStatus />
    </div>
  );
};

export default page;
