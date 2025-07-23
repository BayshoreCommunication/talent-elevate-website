"use client";

import { createResumeDetails, getResumeDetails } from "@/app/actions/resume";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import RegistrationFormPartOne from "./RegistrationFormPartOne";
import RegistrationFormPartTwo from "./RegistrationFormPartTwo";

// Types
interface Duration {
  startYear: string;
  endYear: string;
}

interface ResumeInfoType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentCity: string;
  gender: string;
  languages: string[];
  type: string;
  course: string[];
  collegeName: string;
  duration: Duration;
  careerGoals: string;
  skills: string[];
  certifications: string[];
  tanningProgram: string;
  organization: string;
  location: string;
  jobDuration: Duration;
  description: string;
  preferredIndustriesAndRoles: string;
}

interface SubmitStatus {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialResumeInfo: ResumeInfoType = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  currentCity: "",
  gender: "",
  languages: [],
  type: "",
  course: [],
  collegeName: "",
  duration: { startYear: "", endYear: "" },
  careerGoals: "",
  skills: [],
  certifications: [],
  tanningProgram: "",
  organization: "",
  location: "",
  jobDuration: { startYear: "", endYear: "" },
  description: "",
  preferredIndustriesAndRoles: "",
};

const ResumeInfo = () => {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [resumeInfo, setResumeInfo] =
    useState<ResumeInfoType>(initialResumeInfo);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    loading: false,
    error: null,
    success: false,
  });
  const [stepError, setStepError] = useState<string | null>(null);

  // Fetch resume info on mount
  useEffect(() => {
    async function fetchResume() {
      const response = await getResumeDetails();
      if (response.ok && response.data) {
        setResumeInfo(response.data);
      }
    }
    fetchResume();
  }, []);

  // Step 1 validation
  const validateStep1 = () => {
    if (
      !resumeInfo.firstName.trim() ||
      !resumeInfo.lastName.trim() ||
      !resumeInfo.email.trim() ||
      !resumeInfo.phone.trim() ||
      !resumeInfo.currentCity.trim() ||
      !resumeInfo.gender.trim() ||
      resumeInfo.languages.length === 0 ||
      !resumeInfo.type.trim() ||
      resumeInfo.course.length === 0 ||
      !resumeInfo.collegeName.trim() ||
      !resumeInfo.duration.startYear.trim() ||
      !resumeInfo.duration.endYear.trim()
    ) {
      setStepError("Please fill in all required fields for Step 1.");
      return false;
    }
    setStepError(null);
    return true;
  };

  // Step 2 validation
  const validateStep2 = () => {
    if (
      !resumeInfo.careerGoals.trim() ||
      resumeInfo.skills.length === 0 ||
      resumeInfo.certifications.length === 0 ||
      !resumeInfo.tanningProgram?.trim() ||
      !resumeInfo.organization.trim() ||
      !resumeInfo.location.trim() ||
      !resumeInfo.jobDuration.startYear.trim() ||
      !resumeInfo.jobDuration.endYear.trim() ||
      !resumeInfo.preferredIndustriesAndRoles.trim()
    ) {
      setStepError("Please fill in all required fields for Step 2.");
      return false;
    }
    setStepError(null);
    return true;
  };

  // Handle next step
  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  // Handle submit
  const handleSubmit = async () => {
    if (!validateStep2()) return;
    setSubmitStatus({ loading: true, error: null, success: false });
    const response = await createResumeDetails(resumeInfo);
    if (response.ok) {
      setSubmitStatus({ loading: false, error: null, success: true });
      toast.success("Resume created successfully!");
      router.push("/");
    } else {
      setSubmitStatus({
        loading: false,
        error: response.error || "Failed to submit.",
        success: false,
      });
      toast.error(response.error || "Failed to submit.");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-32">
      {/* Progress Bar with animation */}
      <div className="h-4 bg-gray-200 rounded-full mx-auto overflow-hidden">
        <div
          className={`h-4 bg-orange-500 rounded-full transition-all duration-700 ease-in-out ${
            step === 1 ? "w-1/2" : "w-full"
          }`}
        ></div>
      </div>

      {/* Header */}
      <div className="text-center mt-6 mb-8">
        <h3 className="text-xl font-medium text-gray-700">Hi there 👋</h3>
        <h1 className="text-3xl font-bold text-gray-900 mt-1">
          Let's get started
        </h1>
      </div>

      <div className="w-full max-w-5xl bg-white rounded-xl border px-8 py-10 shadow-sm">
        {step === 1 ? (
          <div>
            <RegistrationFormPartOne
              resumeInfo={resumeInfo}
              setResumeInfo={setResumeInfo}
              onNext={handleNext}
            />
            {stepError && (
              <div className="text-red-500 mt-4 text-sm">{stepError}</div>
            )}
          </div>
        ) : (
          <div>
            <RegistrationFormPartTwo
              resumeInfo={resumeInfo}
              setResumeInfo={setResumeInfo}
              onSubmit={handleSubmit}
              submitStatus={submitStatus}
            />
            {stepError && (
              <div className="text-red-500 mt-4 text-sm">{stepError}</div>
            )}
            <div className="mt-8 flex flex-col items-end gap-2">
              {/* Submit button is now in RegistrationFormPartTwo */}
              {submitStatus.error && (
                <div className="text-red-500 text-sm mt-2">
                  {submitStatus.error}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeInfo;
