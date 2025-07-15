import {
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentText,
} from "react-icons/hi2";
import { LuRefreshCw } from "react-icons/lu";

const stats = [
  {
    title: "Total Applications",
    value: 154,
    label: "Applications",
    change: "+14 from this month",
    icon: <HiOutlineDocumentText className="w-6 h-6 text-[#241836]" />,
    border: true,
  },
  {
    title: "Interview Scheduled",
    value: 8,
    label: "Interviews",
    change: "+2 from this week",
    icon: <HiOutlineClipboardDocumentList className="w-6 h-6 text-[#241836]" />,
    border: false,
  },
  {
    title: "Applications in Progress",
    value: 57,
    label: "In Progress",
    change: "-5 from this week",
    icon: <LuRefreshCw className="w-6 h-6 text-[#241836]" />,
    border: false,
  },
];

const JobApplicationOverview = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 mt-4">
      {stats.map((stat, idx) => (
        <div
          key={stat.title}
          className={`flex-1 bg-gray-50 rounded-xl px-8 py-6 flex flex-col justify-between shadow-sm relative min-w-[220px] ${
            stat.border ? "border-2 border-[#241836]" : "border border-gray-200"
          }`}
        >
          <div className="flex items-start justify-between mb-4">
            <span className="text-base font-medium text-[#241836]">
              {stat.title}
            </span>
            {stat.icon}
          </div>
          <div className="text-2xl md:text-3xl font-bold text-[#241836] mb-1">
            {stat.value}{" "}
            <span className="font-normal text-lg">{stat.label}</span>
          </div>
          <div
            className={`text-sm ${
              stat.change.startsWith("+") ? "text-green-500" : "text-gray-400"
            } mt-1`}
          >
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobApplicationOverview;
