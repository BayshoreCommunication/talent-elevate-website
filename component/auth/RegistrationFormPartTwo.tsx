"use client";
import { useEffect, useState } from "react";
import SelectedInputField from "../shared/ui/SelectedInputField";

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

type Props = {
  resumeInfo: ResumeInfoType;
  setResumeInfo: (info: ResumeInfoType) => void;
  onSubmit?: () => void;
  submitStatus?: { loading: boolean; error: string | null; success: boolean };
};

const RegistrationFormPartTwo: React.FC<Props> = ({
  resumeInfo,
  setResumeInfo,
  onSubmit,
  submitStatus,
}) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedCertifications, setSelectedCertifications] = useState<
    string[]
  >([]);

  useEffect(() => {
    setResumeInfo({ ...resumeInfo, skills: selectedSkills });
  }, [selectedSkills]);

  useEffect(() => {
    setResumeInfo({ ...resumeInfo, certifications: selectedCertifications });
  }, [selectedCertifications]);

  const [error, setError] = useState<string | null>(null);

  // Validation function
  const validate = () => {
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
      setError("Please fill in all required fields.");
      return false;
    }
    setError(null);
    return true;
  };

  // Handle submit
  const handleSubmit = () => {
    if (validate() && onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="">
      <div className="w-full mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Career Goals
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
          placeholder="Write here"
          required
          type="text"
          name="careerGoals"
          value={resumeInfo.careerGoals}
          onChange={(e) =>
            setResumeInfo({ ...resumeInfo, careerGoals: e.target.value })
          }
        />
      </div>

      <div className="w-full mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Skills
        </label>
        <SelectedInputField
          defaultItems={[
            "Skills 1",
            "Skills 2",
            "Skills 3",
            "Skills 4",
            "Skills 5",
          ]}
          selectedItems={selectedSkills}
          setSelectedItems={setSelectedSkills}
          moreButtonText="Add other skills"
          newTitleItem="Add New Skills"
        />
      </div>

      <div className="w-full mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Certifications
        </label>
        <SelectedInputField
          defaultItems={["CSE", "EEE", "ECE", "ME", "CE", "BBA", "MBA"]}
          selectedItems={selectedCertifications}
          setSelectedItems={setSelectedCertifications}
          moreButtonText="Add training/course"
          newTitleItem="Add New Skills"
        />
      </div>

      <div className="w-full mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tanning program
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
          placeholder="Tanning program"
          required
          type="text"
          name="tanningProgram"
          value={resumeInfo.tanningProgram}
          onChange={(e) =>
            setResumeInfo({ ...resumeInfo, tanningProgram: e.target.value })
          }
        />
      </div>

      <div className="w-full mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Organization
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
          placeholder="Organization name"
          required
          type="text"
          name="organization"
          value={resumeInfo.organization}
          onChange={(e) =>
            setResumeInfo({ ...resumeInfo, organization: e.target.value })
          }
        />
      </div>

      <div className="w-full mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
          placeholder="Institute location"
          required
          type="text"
          name="location"
          value={resumeInfo.location}
          onChange={(e) =>
            setResumeInfo({ ...resumeInfo, location: e.target.value })
          }
        />
      </div>

      <div className="flex items-center justify-between space-x-5  mt-5">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start year
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
            placeholder="Start year"
            required
            type="text"
            name="jobDuration.startYear"
            value={resumeInfo.jobDuration.startYear}
            onChange={(e) =>
              setResumeInfo({
                ...resumeInfo,
                jobDuration: {
                  ...resumeInfo.jobDuration,
                  startYear: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End year
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
            placeholder="End year"
            required
            type="text"
            name="jobDuration.endYear"
            value={resumeInfo.jobDuration.endYear}
            onChange={(e) =>
              setResumeInfo({
                ...resumeInfo,
                jobDuration: {
                  ...resumeInfo.jobDuration,
                  endYear: e.target.value,
                },
              })
            }
          />
        </div>
      </div>

      <div className="w-full mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description (Optional)
        </label>
        <textarea
          rows={4}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
          placeholder="Type here"
          name="description"
          value={resumeInfo.description}
          onChange={(e) =>
            setResumeInfo({ ...resumeInfo, description: e.target.value })
          }
        />
      </div>

      <div className="w-full mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Industries & Roles
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
          placeholder="Areas you want to work in learn about"
          required
          type="text"
          name="preferredIndustriesAndRoles"
          value={resumeInfo.preferredIndustriesAndRoles}
          onChange={(e) =>
            setResumeInfo({
              ...resumeInfo,
              preferredIndustriesAndRoles: e.target.value,
            })
          }
        />
      </div>

      {/* Error message */}
      {error && <div className="text-red-500 mt-4 text-sm">{error}</div>}

      {/* Submit Button */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="bg-[#1C1833] text-white font-medium px-10 py-2 rounded-md hover:bg-[#2c254d] transition cursor-pointer"
          onClick={handleSubmit}
          disabled={submitStatus?.loading}
        >
          {submitStatus?.loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default RegistrationFormPartTwo;
