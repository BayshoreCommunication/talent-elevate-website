"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

type TabItem = {
  key: string;
  title: string;
};

const tabs: TabItem[] = [
  { key: "resume", title: "Resume" },
  { key: "linkedin-status", title: "LinkedIn Status" },
  { key: "job-application-progress", title: "Job Application Progress" },
  { key: "interview-schedules", title: "Interview Schedules" },
];

export default function HomeTabOption() {
  const [activeTab, setActiveTab] = useState<string>("resume");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [highlightStyle, setHighlightStyle] = useState({
    left: 0,
    width: 0,
  });

  useLayoutEffect(() => {
    const node = tabRefs.current[activeTab];
    if (node) {
      setHighlightStyle({
        left: node.offsetLeft,
        width: node.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div
        className="relative flex bg-gradient-to-r from-[#fe621a70] to-[#fe621a84]
 rounded-full p-1"
      >
        {/* Highlight Background */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-1 bottom-1 bg-white rounded-full shadow-md"
          style={{
            left: highlightStyle.left,
            width: highlightStyle.width,
          }}
        />

        {/* Tabs */}
        {tabs.map((tab) => (
          <button
            key={tab.key}
            ref={(el: any) => (tabRefs.current[tab.key] = el)}
            onClick={() => setActiveTab(tab.key)}
            className={`relative z-10 flex-1 text-center py-4 px-4 rounded-full transition-colors duration-300 cursor-pointer ${
              activeTab === tab.key
                ? "text-gray-700 font-semibold"
                : "text-gray-700 font-semibold"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
}
