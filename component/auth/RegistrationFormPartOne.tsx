"use client";
import { useEffect, useState } from "react";
import { GrUserFemale, GrUserManager } from "react-icons/gr";
import { PiShootingStar } from "react-icons/pi";
import SelectedInputField from "../shared/ui/SelectedInputField";

const genders = [
  { value: "Female", label: "Female", icon: <GrUserFemale /> },
  { value: "Male", label: "Male", icon: <GrUserManager /> },
  { value: "Others", label: "Others", icon: <PiShootingStar /> },
];
const types = [
  { value: "Student", label: "Student" },
  { value: "Fresher", label: "Fresher" },
  { value: "Working professional", label: "Working professional" },
];

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
  onNext?: () => void;
};

const RegistrationFormPartOne: React.FC<Props> = ({
  resumeInfo,
  setResumeInfo,
  onNext,
}) => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  useEffect(() => {
    setResumeInfo({ ...resumeInfo, languages: selectedLanguages });
  }, [selectedLanguages]);

  useEffect(() => {
    setResumeInfo({ ...resumeInfo, course: selectedCourses });
  }, [selectedCourses]);

  const [error, setError] = useState<string | null>(null);

  // Validation function
  const validate = () => {
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
      setError("Please fill in all required fields.");
      return false;
    }
    setError(null);
    return true;
  };

  // Handle Next button
  const handleNext = () => {
    if (validate() && onNext) {
      onNext();
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First name
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
            placeholder="First Name"
            required
            type="text"
            name="firstName"
            value={resumeInfo.firstName}
            onChange={(e) =>
              setResumeInfo({ ...resumeInfo, firstName: e.target.value })
            }
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last name
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
            placeholder="Last Name"
            required
            type="text"
            name="lastName"
            value={resumeInfo.lastName}
            onChange={(e) =>
              setResumeInfo({ ...resumeInfo, lastName: e.target.value })
            }
          />
        </div>
      </div>

      <div className="w-full mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
          placeholder="Email"
          required
          type="email"
          name="email"
          value={resumeInfo.email}
          onChange={(e) =>
            setResumeInfo({ ...resumeInfo, email: e.target.value })
          }
        />
      </div>

      <div className="w-full mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
          placeholder="Phone"
          required
          type="tel"
          name="phone"
          value={resumeInfo.phone}
          onChange={(e) =>
            setResumeInfo({ ...resumeInfo, phone: e.target.value })
          }
        />
      </div>

      <div className="w-full mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current city
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
          placeholder="Current location"
          required
          type="text"
          name="currentCity"
          value={resumeInfo.currentCity}
          onChange={(e) =>
            setResumeInfo({ ...resumeInfo, currentCity: e.target.value })
          }
        />
      </div>

      {/* Gender */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Gender
        </label>
        <div className="flex flex-wrap gap-3">
          {genders.map((g, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setResumeInfo({ ...resumeInfo, gender: g.value })}
              className={`rounded-full px-5 py-3 border flex items-center space-x-2 ${
                resumeInfo.gender === g.value
                  ? "bg-[#1c1833] text-white"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              } transition`}
            >
              <span>{g.icon}</span>
              <span>{g.value}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Languages you know
        </label>
        <SelectedInputField
          defaultItems={["Bangla", "English", "Hindi", "Urdhu", "Denish"]}
          selectedItems={selectedLanguages}
          setSelectedItems={setSelectedLanguages}
          moreButtonText="Languages you know"
          newTitleItem="Add New Language"
        />
      </div>

      {/* Type */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type
        </label>
        <div className="flex flex-wrap gap-3">
          {types.map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setResumeInfo({ ...resumeInfo, type: t.value })}
              className={`rounded-full px-5 py-3 border ${
                resumeInfo.type === t.value
                  ? "bg-[#1c1833] text-white"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              } transition`}
            >
              {t.value}
            </button>
          ))}
        </div>
      </div>

      {/* Courses */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Course
        </label>
        <div className="flex flex-wrap gap-3">
          <SelectedInputField
            defaultItems={["BSc", "B.Tech", "BBA", "BA", "MSc"]}
            selectedItems={selectedCourses}
            setSelectedItems={setSelectedCourses}
            moreButtonText="Courses you know"
            newTitleItem="Add New Course"
          />
        </div>
      </div>

      {/* College Info */}
      <div className="w-full mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          College name
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
          placeholder="College name"
          required
          type="text"
          name="collegeName"
          value={resumeInfo.collegeName}
          onChange={(e) =>
            setResumeInfo({ ...resumeInfo, collegeName: e.target.value })
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
            name="startYear"
            value={resumeInfo.duration.startYear}
            onChange={(e) =>
              setResumeInfo({
                ...resumeInfo,
                duration: { ...resumeInfo.duration, startYear: e.target.value },
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
            name="endYear"
            value={resumeInfo.duration.endYear}
            onChange={(e) =>
              setResumeInfo({
                ...resumeInfo,
                duration: { ...resumeInfo.duration, endYear: e.target.value },
              })
            }
          />
        </div>
      </div>

      {/* Error message */}
      {error && <div className="text-red-500 mt-4 text-sm">{error}</div>}

      {/* Next Button */}
      <div className="mt-8 flex justify-end">
        <button
          type="button"
          className="bg-[#1C1833] text-white font-medium px-10 py-2 rounded-md hover:bg-[#2c254d] transition cursor-pointer"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RegistrationFormPartOne;
