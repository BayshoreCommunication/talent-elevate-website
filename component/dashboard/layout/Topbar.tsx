"use client";

import { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiBell, FiLogOut } from "react-icons/fi";

const Topbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        avatarRef.current &&
        !avatarRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex justify-end items-center px-6 py-3 bg-white shadow-sm gap-4 relative z-20">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#241836] text-sm mr-2 min-w-sm"
      />
      {/* Notification Icon */}
      <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
        <FiBell className="w-6 h-6 text-gray-600" />
        {/* Notification dot (optional) */}
        {/* <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span> */}
      </button>
      {/* User Avatar & Dropdown */}
      <div className="relative" ref={avatarRef}>
        <button
          className="flex items-center focus:outline-none"
          onClick={() => setDropdownOpen((open) => !open)}
        >
          <FaUserCircle className="w-8 h-8 text-gray-600" />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-4 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-30">
            <button
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition flex items-center gap-2"
              onClick={() => {
                setDropdownOpen(false);
                // TODO: Add logout logic here
              }}
            >
              <FiLogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
