"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { BsFileEarmarkRuled } from "react-icons/bs";
import {
  MdOutlineCancel,
  MdOutlineUpcoming,
  MdPendingActions,
} from "react-icons/md";
import { PiHandbagDuotone } from "react-icons/pi";
import { TbBrandLinkedin } from "react-icons/tb";

const stats = [
  {
    label: "Resume Complete",
    value: 14,
    total: 30,
    percent: 60,
    icon: <BsFileEarmarkRuled className="text-blue-400 w-8 h-8" />,
    color: "blue-400",
    ring: "#60A5FA",
    bgcolor: "bg-[#ECEFF3]",
  },
  {
    label: "LinkedIn Complete",
    value: 9,
    total: 30,
    percent: 30,
    icon: <TbBrandLinkedin className="text-orange-400 w-8 h-8" />,
    color: "orange-400",
    ring: "#FB923C",
    bgcolor: "bg-[#FBEEE8]",
  },
  {
    label: "Job Applied",
    value: 14,
    total: 100,
    percent: 40,
    icon: <PiHandbagDuotone className="text-sky-400 w-8 h-8" />,
    color: "sky-400",
    ring: "#38BDF8",
    bgcolor: "bg-[#E1F4FD]",
  },
  {
    label: "Upcoming Interview",
    value: 20,
    total: 20,
    percent: 60,
    icon: <MdOutlineUpcoming className="text-yellow-300 w-8 h-8" />,
    color: "yellow-300",
    ring: "#FCD34D",
    bgcolor: "bg-[#F9F6D9]",
  },
  {
    label: "Waiting",
    value: 3,
    total: 5,
    percent: 60,
    icon: <MdPendingActions className="text-purple-400 w-8 h-8" />,
    color: "purple-400",
    ring: "#A78BFA",
    bgcolor: "bg-[#F5EAFF]",
  },
  {
    label: "Rejected",
    value: 35,
    total: 60,
    percent: 60,
    icon: <MdOutlineCancel className="text-rose-400 w-8 h-8" />,
    color: "rose-400",
    ring: "#FB7185",
    bgcolor: "bg-[#FFD2D2]",
  },
];

const donutColors = ["#10B981", "#06B6D4", "#FB7185"];
const donutLabels = [
  { label: "Pro Lerner", color: "#10B981" },
  { label: "High Achivers", color: "#06B6D4" },
  // { label: "Needs Improvement", color: "#FB7185" },
];

function AnimatedCount({
  to,
  duration = 1,
  className = "",
}: {
  to: number;
  duration?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = to;
    if (start === end) return;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor((duration * 1000) / (end - start)));
    let timer = setInterval(() => {
      start += increment;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [to, duration]);
  return <span className={className}>{count}</span>;
}

function AnimatedCircle({
  percent,
  color,
  children,
}: {
  percent: number;
  color: string;
  children: ReactNode;
}) {
  const radius = 34;
  const stroke = 7;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;
  return (
    <div className="relative w-[72px] h-[72px] flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2} className="block">
        <circle
          stroke="#E5E7EB"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <motion.circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1 }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

const DashboardOverview = () => {
  return (
    <div className="flex flex-wrap gap-6 w-full">
      <div className="grid grid-cols-2 gap-6 flex-1 w-3xl">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.6, type: "spring" }}
            className={`flex items-center rounded-xl shadow p-4 gap-4 min-w-[220px] ${stat.bgcolor}`}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="mb-2 bg-white/50 p-5 rounded-full">
                {stat.icon}
              </div>
            </div>
            <div className="flex-1">
              <div className="text-xl font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-base text-gray-400 font-medium">
                <AnimatedCount to={stat.value} duration={1} />
                {stat.total && (
                  <span className="text-gray-400">/{stat.total}</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <AnimatedCircle percent={stat.percent} color={stat.ring}>
                <span className="text-sm font-bold text-gray-700">
                  <AnimatedCount to={stat.percent} duration={1} />%
                </span>
              </AnimatedCircle>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Overall Performance */}
      <div className="flex flex-col   min-w-[450px] bg-white rounded-xl shadow p-6">
        <div className="text-xl font-semibold text-gray-800 mb-1">
          Overall Performance
        </div>
        <div className="text-base text-gray-400 mb-4">
          Preparation & Placement Rate
        </div>
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2 mt-2">
            {donutLabels.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ background: item.color }}
                ></span>
                <span className="text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
          <div
            className="relative flex items-center justify-center mb-4"
            style={{ width: 240, height: 240 }}
          >
            <svg width="240" height="240">
              <circle
                cx="120"
                cy="120"
                r="80"
                stroke="#E5E7EB"
                strokeWidth="14"
                fill="none"
              />
              <motion.circle
                cx="120"
                cy="120"
                r="80"
                stroke="#06B6D4"
                strokeWidth="14"
                fill="none"
                strokeDasharray={2 * Math.PI * 80}
                strokeDashoffset={2 * Math.PI * 80}
                animate={{ strokeDashoffset: 2 * Math.PI * 80 * (1 - 0.6) }}
                transition={{ duration: 1 }}
                strokeLinecap="round"
              />
            </svg>
            <div
              className="absolute left-1/2 top-1/2 flex flex-col items-center justify-center"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <span className="text-4xl font-bold text-[#06B6D4]">
                <AnimatedCount to={60} duration={1} />%
              </span>
              <span className="text-lg font-medium text-gray-700">
                High Achievers
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
