import BlogSection from "@/component/home/BlogSection";
import GetStartedToday from "@/component/home/GetStartedToday";
import HeroSection from "@/component/home/HeroSection";
import JobSearchingPlatform from "@/component/home/JobSearchingPlatform";
import ProjectOrganizer from "@/component/home/ProjectOrganizer";
import ReviewsAndFeedback from "@/component/home/ReviewsAndFeedback";

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
