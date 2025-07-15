"use client";
import { useState } from "react";
import { BsClock } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const weekDays = [
  { day: "14", label: "Sun" },
  { day: "15", label: "Mon" },
  { day: "16", label: "Tue" },
  { day: "17", label: "Wed" },
  { day: "18", label: "Thu" },
  { day: "19", label: "Fri" },
  { day: "20", label: "Sat" },
];
const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];
const events = [
  {
    office: "Office Name",
    dayIdx: 0, // Sunday
    start: 0, // 09:00
    end: 1, // 10:20
    color: "bg-blue-100 border-blue-400",
    text: "text-blue-700",
    time: "09:00 - 10:20",
    highlight: true,
  },
  {
    office: "Office Name",
    dayIdx: 1, // Monday
    start: 1, // 10:30
    end: 2, // 11:50
    color: "bg-blue-100 border-blue-400",
    text: "text-blue-700",
    time: "10:30 - 11:50",
    highlight: false,
  },
  {
    office: "Office Name",
    dayIdx: 2, // Tuesday
    start: 3, // 12:30
    end: 4, // 13:50
    color: "bg-cyan-100 border-cyan-400",
    text: "text-cyan-700",
    time: "12:30 - 13:50",
    highlight: false,
  },
];

const totalPages = 3;

const InterviewSchedulesOverview = () => {
  const [page, setPage] = useState(1);
  const selectedDayIdx = 0; // highlight Sunday for demo

  return (
    <div className="w-full bg-gray-50 rounded-xl shadow p-6 overflow-x-auto border border-gray-100">
      {/* Week Header */}
      <div className="flex items-center gap-4 mb-2">
        <span className="text-gray-400 font-medium mr-6 w-12">Week</span>
        {weekDays.map((d, idx) => (
          <div key={idx} className="flex flex-col items-center w-20">
            <span
              className={`text-base font-semibold ${
                idx === 2
                  ? "text-orange-500"
                  : idx === selectedDayIdx
                  ? "border border-blue-300 rounded-md px-2 text-gray-700"
                  : "text-gray-400"
              }`}
            >
              {d.day}
            </span>
            <span
              className={`text-xs ${
                idx === 2 ? "text-orange-500 font-bold" : "text-gray-400"
              }`}
            >
              {d.label}
            </span>
          </div>
        ))}
      </div>
      {/* Calendar Grid */}
      <div className="relative border-t border-gray-200 bg-white rounded-xl">
        {/* Time slots */}
        <div className="absolute left-0 top-0 flex flex-col h-full z-10">
          {timeSlots.map((slot, idx) => (
            <div
              key={slot}
              className="h-16 flex items-start justify-end pr-4 text-gray-400 text-sm min-w-[60px]"
            >
              {slot}
            </div>
          ))}
        </div>
        {/* Grid lines */}
        <div className="ml-16">
          {timeSlots.map((slot, idx) => (
            <div
              key={slot}
              className="h-16 border-b border-gray-100 w-full"
            ></div>
          ))}
        </div>
        {/* Event blocks */}
        <div className="absolute left-16 top-0 w-[calc(100%-4rem)] h-full z-20">
          {events.map((event, i) => {
            const top = event.start * 64; // 16*4 = 64px per slot
            const height = (event.end - event.start + 1) * 64 - 12;
            const left = event.dayIdx * 80;
            return (
              <div
                key={i}
                className={`absolute rounded-lg border-l-4 shadow-sm px-4 py-2 ${
                  event.color
                } ${event.text} ${
                  event.highlight ? "ring-2 ring-blue-300" : ""
                }`}
                style={{ top, left, width: 200, height }}
              >
                <div className="font-semibold text-sm mb-1">{event.office}</div>
                <div className="flex items-center gap-1 text-xs">
                  <BsClock className="w-4 h-4" />
                  {event.time}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-6">
        <button
          className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-400 disabled:opacity-50 hover:bg-gray-200 transition"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          <FiChevronLeft />
        </button>
        {[1, 2, 3].map((p) => (
          <button
            key={p}
            className={`w-8 h-8 flex items-center justify-center rounded border font-semibold transition ${
              p === page
                ? "bg-[#241836] text-white border-[#241836] shadow"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}
        <button
          className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-gray-100 text-gray-400 disabled:opacity-50 hover:bg-gray-200 transition"
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default InterviewSchedulesOverview;
