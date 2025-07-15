"use client";
import LinkedinOverview from "@/component/dashboard/resumeAndLinkedIn/LinkedinOverview";
import ResumeOverview from "@/component/dashboard/resumeAndLinkedIn/ResumeOverview";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 ">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-full md:w-3/5 flex items-start justify-center h-full">
          <ResumeOverview />
        </div>
        <div className="w-full md:w-2/5 flex items-start justify-center h-full">
          <LinkedinOverview />
        </div>
      </div>
      <div className="flex gap-4 mt-10  w-full">
        <Link
          href="/sign-in"
          className="px-8 py-2.5 rounded-lg border border-[#241836] bg-transparent text-[#241836] text-base font-semibold transition-all duration-300 ease-in-out hover:bg-[#241836] hover:text-white active:scale-95 shadow-sm hover:shadow-md text-center min-w-[120px]"
        >
          Upload
        </Link>
        <Link
          href="/sign-up"
          className="px-8 py-2.5 rounded-lg bg-[#241836] text-white text-base font-semibold transition-all duration-300 ease-in-out hover:bg-[#3a2952] active:scale-95 shadow-sm hover:shadow-md text-center min-w-[120px]"
        >
          Edit Resume
        </Link>
      </div>
    </div>
  );
};

export default page;
