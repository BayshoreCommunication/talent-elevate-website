"use client";
import { useState } from "react";
import { FiCalendar, FiSearch } from "react-icons/fi";

const statusColors = {
  Pending: {
    bg: "bg-yellow-50",
    badge: "bg-yellow-500 text-white",
  },
  Rejected: {
    bg: "bg-red-50",
    badge: "bg-red-500 text-white",
  },
  Selected: {
    bg: "bg-green-50",
    badge: "bg-green-600 text-white",
  },
};

const data = [
  {
    company: "Company / Office name",
    location: "Office location",
    date: "October 30, 2017",
    status: "Pending",
  },
  {
    company: "Company / Office name",
    location: "Office location",
    date: "October 30, 2017",
    status: "Rejected",
  },
  {
    company: "Company / Office name",
    location: "Office location",
    date: "October 30, 2017",
    status: "Selected",
  },
  {
    company: "Company / Office name",
    location: "Office location",
    date: "October 30, 2017",
    status: "Pending",
  },
  {
    company: "Company / Office name",
    location: "Office location",
    date: "October 30, 2017",
    status: "Rejected",
  },
  {
    company: "Company / Office name",
    location: "Office location",
    date: "October 30, 2017",
    status: "Pending",
  },
  {
    company: "Company / Office name",
    location: "Office location",
    date: "October 30, 2017",
    status: "Rejected",
  },
  {
    company: "Company / Office name",
    location: "Office location",
    date: "October 30, 2017",
    status: "Selected",
  },
  {
    company: "Company / Office name",
    location: "Office location",
    date: "October 30, 2017",
    status: "Pending",
  },
];

const ApplicationStatus = () => {
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState({
    from: "2023-06-14",
    to: "2025-06-13",
  });

  // Filter logic (search and date range)
  const filtered = data.filter((item) => {
    const matchesSearch =
      item.company.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());
    // For demo, all dates are the same, but you could add real date filtering here
    return matchesSearch;
  });

  return (
    <div className="w-full mt-10">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-[#241836] flex-shrink-0">
          Application Status
        </h2>
        <div className="flex-1 flex gap-3 items-center">
          {/* Search */}
          <div className="relative w-full max-w-md">
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
          {/* Date Range (static for now) */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded px-4 py-2 text-gray-700 text-sm cursor-pointer">
            <FiCalendar className="w-5 h-5 text-gray-400" />
            <span>{`13 June 2025  -  14June 2023`}</span>
          </div>
        </div>
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-6 shadow-sm ${
              statusColors[item.status as keyof typeof statusColors].bg
            } min-h-[160px] flex flex-col justify-between`}
          >
            <div>
              <div className="text-lg font-semibold text-[#241836] mb-1">
                {item.company}
              </div>
              <div className="text-sm text-gray-500 mb-2">{item.location}</div>
              <div className="text-base font-medium text-[#241836] mb-1">
                Interview Date
              </div>
              <div className="text-sm text-gray-500 mb-4">{item.date}</div>
            </div>
            <div className="flex items-center justify-end">
              <span
                className={`px-6 py-1 rounded-full text-sm font-semibold shadow-sm ${
                  statusColors[item.status as keyof typeof statusColors].badge
                }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationStatus;
