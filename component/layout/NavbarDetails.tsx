"use client";
import { userSingout } from "@/app/actions/auth"; // Adjust import if needed
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import {
  MdAccountCircle,
  MdDashboard,
  MdKeyboardArrowDown,
  MdLogout,
} from "react-icons/md";

type MenuItem = {
  title: string;
  slug: string;
};

const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const UserMenu = ({ user }: { user: any }) => {
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await userSingout();
    window.location.href = "/";
  };

  return (
    <div className="relative">
      <button
        className={`flex items-center gap-3 px-3 py-2 rounded-full transition-all duration-200 border border-gray-200 bg-white shadow-sm hover:shadow-md hover:bg-gray-50 focus:outline-none cursor-pointer ${
          open ? "ring-2 ring-[#241836]/30" : ""
        }`}
        onClick={() => setOpen((v) => !v)}
      >
        <MdAccountCircle className="w-9 h-9 text-[#241836]" />
        <div className="flex flex-col items-start">
          <span className="font-semibold text-[#241836] leading-tight">
            {user.name}
          </span>
          <span className="text-xs text-gray-500">{user.email}</span>
        </div>
        <MdKeyboardArrowDown
          className={`w-5 h-5 ml-1 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50 animate-fade-in">
          <button
            className="flex items-center w-full px-5 py-3 text-gray-700 hover:bg-gray-50 transition rounded-t-xl cursor-pointer"
            onClick={() => (window.location.href = "/dashboard")}
          >
            <MdDashboard className="w-5 h-5 mr-3 text-[#241836]" />
            <span className="font-medium">Dashboard</span>
          </button>
          <div className="border-t border-gray-100" />
          <button
            className="flex items-center w-full px-5 py-3 text-red-600 hover:bg-gray-50 transition rounded-b-xl cursor-pointer"
            onClick={handleSignOut}
          >
            <MdLogout className="w-5 h-5 mr-3" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      )}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.18s ease;
        }
      `}</style>
    </div>
  );
};

type NavbarDetailsProps = {
  user?: any;
};

const NavbarDetails: React.FC<NavbarDetailsProps> = ({ user }) => {
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { title: "Home", slug: "/" },
    { title: "About Us", slug: "/about-us" },
    { title: "Services", slug: "/services" },
    { title: "Contact Us", slug: "/contact-us" },
  ];

  const handleScroll = useCallback(
    debounce(() => {
      setNavbarColor(window.scrollY >= 100);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        navbarColor ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-2 md:py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/talent-elevate-logo.png"
            alt="Swop Logo"
            width={500}
            height={500}
            className="w-[140px] h-auto md:w-[180px] md:h-auto lg:w-[250px]"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-2 relative">
          <div className="flex items-center space-x-2 relative">
            {menuItems.map((item) => {
              const isActive = pathname === item.slug;
              return (
                <motion.div
                  key={item.slug}
                  className="relative"
                  initial={false}
                  animate={isActive ? { scale: 1.08 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Link
                    href={item.slug}
                    className={
                      `px-4 py-2 rounded-2xl text-lg font-medium transition-colors duration-200 focus:outline-none ` +
                      (isActive
                        ? "text-[#FC641A]"
                        : "text-black hover:text-[#FC641A] hover:bg-primary/10")
                    }
                  >
                    {item.title}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 -bottom-1 h-[3px] bg-[#FC641A] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </nav>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span
            className="block w-6 h-0.5 bg-black mb-1 rounded transition-all duration-300"
            style={{
              transform: isMenuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            className={`block w-6 h-0.5 bg-black mb-1 rounded transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className="block w-6 h-0.5 bg-black rounded transition-all duration-300"
            style={{
              transform: isMenuOpen
                ? "rotate(-45deg) translateY(-7px)"
                : "none",
            }}
          />
        </button>

        {/* Actions */}
        {user ? (
          <UserMenu user={user} />
        ) : (
          <div className="hidden md:flex items-center space-x-2 md:space-x-4">
            {/* Sign In Button – Border Only */}
            <Link
              href="/sign-in"
              className="border border-[#241836] bg-transparent text-[#241836] px-8 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:bg-[#241836] hover:text-white active:scale-95 shadow-sm hover:shadow-md"
            >
              Sign In
            </Link>

            {/* Sign Up Button – Filled */}
            <Link
              href="/sign-up"
              className="bg-[#241836] text-white px-8 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:bg-[#3a2952] active:scale-95 shadow-sm hover:shadow-md"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow rounded-b-xl"
          >
            {menuItems.map((item) => (
              <Link
                key={item.slug}
                href={item.slug}
                className={`block text-lg font-medium px-3 py-2 rounded-xl transition-colors duration-200 ${
                  pathname === item.slug
                    ? "text-[#FC641A]"
                    : "text-black hover:text-[#FC641A] hover:bg-primary/10"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Link
                href="/sign-in"
                className="w-full border border-[#241836] bg-transparent text-[#241836] px-8 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:bg-[#241836] hover:text-white active:scale-95 shadow-sm hover:shadow-md text-center cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="w-full bg-[#241836] text-white px-8 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out hover:bg-[#3a2952] active:scale-95 shadow-sm hover:shadow-md text-cente cursor-pointerr"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavbarDetails;
