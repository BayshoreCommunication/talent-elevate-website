import BlogSection from "@/component/home/BlogSection";

import HeroSection from "@/component/home/HeroSection";
import JobSearchingPlatform from "@/component/home/JobSearchingPlatform";
import ProjectOrganizer from "@/component/home/ProjectOrganizer";
import ReviewsAndFeedback from "@/component/home/ReviewsAndFeedback";
import GetStartedToday from "@/component/shared/ui/GetStartedToday";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ProjectOrganizer />
      <BlogSection />
      <JobSearchingPlatform />
      <ReviewsAndFeedback />
      <GetStartedToday />
    </div>
  );
}
