"use client";
import { useState } from "react";
import { GrUserFemale, GrUserManager } from "react-icons/gr";
import { LuCloudUpload } from "react-icons/lu";
import { PiShootingStar } from "react-icons/pi";
import SkillsInputField from "../shared/ui/SkillsInputField";

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
const courses = [
  { value: "B.Tech", label: "B.Tech" },
  { value: "B.Com", label: "B.Com" },
  { value: "MBA", label: "MBA" },
  { value: "B.A", label: "B.A" },
];

const RegistrationFormPartTwo = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [gender, setGender] = useState("");

  const [type, setType] = useState("");

  const [languages, setLanguages] = useState([
    { value: "english", label: "English" },
  ]);

  const [selectedCourse, setSelectedCourse] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4 bg-white">
      {/* Progress Bar */}
      <div className="w-full max-w-5xl">
        <div className="h-4 bg-gray-200 rounded-full">
          <div className="h-3 w-full bg-orange-500 rounded-full"></div>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mt-6 mb-8">
        <h3 className="text-xl font-medium text-gray-700">Hi there 👋</h3>
        <h1 className="text-3xl font-bold text-gray-900 mt-1">
          Let's get started
        </h1>
      </div>

      {/* Form */}
      <div className="w-full max-w-5xl bg-white rounded-xl border px-8 py-10 shadow-sm">
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
          />
        </div>

        <div className="w-full mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Skills
          </label>
          <SkillsInputField
            defaultSkills={[
              "Skills 1",
              "Skills 2",
              "Skills 3",
              "Skills 4",
              "Skills 5",
            ]}
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
            moreButtonText="Add other skills"
          />
        </div>

        <div className="w-full mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Certifications
          </label>
          <SkillsInputField
            defaultSkills={["Skills 1"]}
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
            moreButtonText="Add training/course"
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
            type="tel"
            name="phone"
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
            name="currentLocation"
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
            name="currentLocation"
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
              name="Startyear"
            />
          </div>{" "}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End year
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
              placeholder="End year"
              required
              type="text"
              name="Endyear"
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
            required
            name="currentLocation"
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
            name="currentLocation"
          />
        </div>

        <div className="w-full mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Resume
          </label>
          <div className="relative w-[200px]">
            <label
              htmlFor="dropzone-file"
              className="flex items-center justify-center gap-2 w-full h-12 px-4 border border-gray-300 rounded-full bg-gray-50 text-gray-700 text-base cursor-pointer hover:bg-gray-100"
            >
              <LuCloudUpload className="text-xl" />
              Upload Resume
            </label>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept=".pdf, .doc, .docx"
              name="resume"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="bg-[#1C1833] text-white font-medium px-10 py-2 rounded-md hover:bg-[#2c254d] transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormPartTwo;
