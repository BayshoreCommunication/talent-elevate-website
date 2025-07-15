"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCog,
  FaFileAlt,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <FaTachometerAlt className="w-5 h-5 mr-2" />,
  },
  {
    label: "Resume & LinkedIn",
    href: "/resume-and-linkedin",
    icon: <FaFileAlt className="w-5 h-5 mr-2" />,
  },
  {
    label: "Job Application",
    href: "/job-application",
    icon: <FaBriefcase className="w-5 h-5 mr-2" />,
  },
  {
    label: "Interview Schedules",
    href: "/interview-schedules",
    icon: <FaCalendarAlt className="w-5 h-5 mr-2" />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <FaCog className="w-5 h-5 mr-2" />,
  },
  {
    label: "Account",
    href: "/account",
    icon: <FaUser className="w-5 h-5 mr-2" />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen bg-white shadow-lg flex flex-col py-8 px-4 z-10">
      <div className="mb-8 flex flex-col items-center justify-center">
        <Image
          src="/assets/logo/talent-elevate-logo.png"
          alt="Talent Elevate Logo"
          width={500}
          height={500}
          className="object-contain mb-2 w-[220px] h-auto"
          priority
        />
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item, idx) => {
          const isActive = pathname === item.href;
          return (
            <div key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "bg-[#241836] text-white shadow-md"
                      : "text-gray-700 hover:bg-[#241836] hover:text-white"
                  }
                `}
              >
                {item.icon}
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
