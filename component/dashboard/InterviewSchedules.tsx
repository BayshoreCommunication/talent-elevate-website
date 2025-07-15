"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const data = [
  {
    jobRole: "UI UX Designer",
    applyDate: "16/08/2013",
    office: "Perkins+Will",
    location: "7529 E. Pecan St.",
    salary: "$6,000",
    interviewDate: "12/06/2020",
    status: "Waiting",
  },
  {
    jobRole: "Medical Assistant",
    applyDate: "07/05/2016",
    office: "OMA",
    location: "8558 Green Rd.",
    salary: "$5,300",
    interviewDate: "18/09/2016",
    status: "Waiting",
  },
  {
    jobRole: "Dog Trainer",
    applyDate: "15/08/2017",
    office: "Pitsou Kedem Ar...",
    location: "775 Rolling Green Rd.",
    salary: "$3,700",
    interviewDate: "28/10/2012",
    status: "Waiting",
  },
  {
    jobRole: "Marketing Coordi...",
    applyDate: "18/09/2016",
    office: "Foster + Partners",
    location: "3890 Poplar Dr.",
    salary: "$4,000",
    interviewDate: "16/08/2013",
    status: "Waiting",
  },
  {
    jobRole: "President of Sales",
    applyDate: "28/10/2012",
    office: "Zaha Hadid Arch...",
    location: "8080 Railroad St.",
    salary: "$5,200",
    interviewDate: "15/08/2017",
    status: "Waiting",
  },
  {
    jobRole: "Nursing Assistant",
    applyDate: "12/06/2020",
    office: "NatureHumaine",
    location: "3605 Parker Rd.",
    salary: "$5,100",
    interviewDate: "07/05/2016",
    status: "Waiting",
  },
];

const InterviewSchedules = () => {
  const [search, setSearch] = useState("");
  const filtered = data.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="w-full bg-white rounded-xl shadow p-6 overflow-x-auto mt-10 border border-gray-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold text-[#241836]">
          Interview Schedules
        </h2>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 w-sm">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiSearch className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#241836] bg-gray-50 text-sm"
            />
          </div>
          <button className="bg-[#241836] text-white px-6 py-2 rounded font-semibold text-sm whitespace-nowrap cursor-pointer">
            View All
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-gray-700 text-lg border-b border-gray-200 bg-gray-50 ">
              <th className="py-3 px-4 font-semibold">Job Role</th>
              <th className="py-3 px-4 font-semibold">Apply Date</th>
              <th className="py-3 px-4 font-semibold">Office</th>
              <th className="py-3 px-4 font-semibold">Location</th>
              <th className="py-3 px-4 font-semibold">Salary</th>
              <th className="py-3 px-4 font-semibold">Interview Date</th>
              <th className="py-3 px-4 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-400">
                  No results found.
                </td>
              </tr>
            ) : (
              filtered.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-4 max-w-[180px] truncate font-medium text-gray-700">
                    {row.jobRole}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{row.applyDate}</td>
                  <td className="py-3 px-4 max-w-[140px] truncate text-gray-600">
                    {row.office}
                  </td>
                  <td className="py-3 px-4 max-w-[180px] truncate text-gray-600">
                    {row.location}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{row.salary}</td>
                  <td className="py-3 px-4 text-gray-600">
                    {row.interviewDate}
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full text-xs font-semibold">
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InterviewSchedules;
