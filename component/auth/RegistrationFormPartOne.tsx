"use client";
import { useState } from "react";
import { GrUserFemale, GrUserManager } from "react-icons/gr";
import { PiShootingStar } from "react-icons/pi";

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

const RegistrationFormPartOne = () => {
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
          <div className="h-4 w-1/2 bg-orange-500 rounded-full"></div>
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
              // value={emailForm.firstName}
              // onChange={(event) => {
              //   setEmailForm({
              //     ...emailForm,
              //     lastName: event.target.value,
              //   });
              // }}
            />
            {/* <span className="text-red-500">{formErrors.lastName}</span> */}
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
            name="currentLocation"
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
                onClick={() => setGender(g.value)}
                className={`rounded-full px-5 py-3 border flex items-center space-x-2 ${
                  gender === g.value
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
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, i) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-800 px-5 py-3 rounded-full text-sm border"
              >
                {lang.label} +
              </span>
            ))}
            <button className="text-orange-500 font-medium text-sm underline">
              + Add more language
            </button>
          </div>
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
                onClick={() => setType(t.value)}
                className={`rounded-full px-5 py-3 border ${
                  type === t
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
            {courses.map((course, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedCourse(course.value)}
                className={`rounded-full px-5 py-3 border ${
                  selectedCourse === course.value
                    ? "bg-[#1c1833] text-white"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                } transition`}
              >
                {course.value}
              </button>
            ))}
            <select className="border border-gray-300 text-sm rounded-md px-3 py-2">
              <option>Fine more courses</option>
            </select>
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
            name="Collegename"
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
              name="Endyear"
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

export default RegistrationFormPartOne;
