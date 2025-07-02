"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

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

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { title: "Home", slug: "/home" },
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
            className="w-[80px] md:w-[250px]"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className=" flex items-center">
            {menuItems.map((item) => (
              <Link
                key={item.slug}
                href={item.slug}
                className={`px-4 py-1.5 rounded-3xl text-lg font-medium transition-colors ${
                  pathname === item.slug ? "text-primary" : "text-black"
                } hover:bg-secon`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2 md:space-x-4">
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow">
          {menuItems.map((item) => (
            <Link
              key={item.slug}
              href={item.slug}
              className={`block text-lg font-medium ${
                pathname === item.slug ? "text-primary" : "text-black"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
