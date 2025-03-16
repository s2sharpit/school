"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import HamSvg from "./HamSvg";
import navData from "@/data/navData";
import clsx from "clsx";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname(); // Detects route changes

  // Function to close navbar
  const closeNav = useCallback(() => setNavOpen(false), []);

  // Handle click outside navbar
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeNav();
      }
    },
    [closeNav]
  );

  // Close navbar on scroll, route change, or outside click
  useEffect(() => {
    window.addEventListener("scroll", closeNav);
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", closeNav);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [closeNav, handleOutsideClick]);

  // Close navbar when route changes
  useEffect(closeNav, [closeNav, pathname]);

  // Toggle Navbar
  const handleNavToggle = () => setNavOpen((prev) => !prev);

  // Scroll to a section
  const handleScroll = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-2 left-3 right-3 z-50 rounded-md h-max px-6 max-md:pr-4 shadow-header bg-blue-950/80 transition backdrop-blur-xs text-blue-50 lg:flex lg:justify-between gap-6"
    >
      <div className="flex justify-between items-center">
        <Link
          href="/"
          onClick={() => handleScroll("header")}
          className="flex items-center gap-2"
        >
          <Image
            src="/img/school_logo.png"
            width={40}
            height={40}
            alt="school logo"
            className="max-sm:hidden"
          />
          <span className="text-lg md:text-xl font-semibold text-gray-300 hover:text-slate-100">
            B. S. Senior Secondary School
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={handleNavToggle}
          aria-label="Toggle navigation"
          className={clsx(
            "menu-btn flex z-10 lg:hidden justify-center items-center py-1",
            { opened: navOpen }
          )}
        >
          <HamSvg />
        </button>
      </div>
      {/* Navbar Links */}
      <div
        className={clsx(
          "duration-300 transition-all w-full lg:max-w-3/5 lg:min-w-[37rem] left-[1%] right-[1%]",
          navOpen
            ? "max-lg:max-h-[calc(100vh-4rem)] max-lg:overflow-y-auto max-lg:border-t"
            : "max-lg:max-h-0 max-lg:opacity-0"
        )}
      >
        <ul className="text-center py-4 lg:flex justify-between gap-">
          {navData.map((data, index) => (
            <li key={index} className="group">
              <Link
                href={data.path}
                className={clsx(
                  "capitalize flex items-end justify-center text-gray-300 hover:text-slate-100 relative",
                  data.nested && "pointer-events-none"
                )}
              >
                {data.title}{" "}
                {data.nested && (
                  <MdOutlineKeyboardArrowDown className="text-xl" />
                )}
              </Link>
              {data.nested && (
                <div className="max-h-0 overflow-hidden group-hover:max-h-60 opacity-0 group-hover:opacity-100 lg:absolute bg-blue-950/90 group-hover:p-2 shadow-header lg:w-48 max-w-72 mx-auto rounded-md transition-all duration-500 lg:-translate-x-1/4">
                  {data.nested.map((d, i) => (
                    <Link
                      key={i}
                      href={`${data.path}${d.path}`}
                      className="block capitalize w-full text-center p-2 hover:bg-blue-900/70 rounded-md transition duration-300"
                    >
                      {d.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li
            className="cursor-pointer capitalize"
            onClick={() => handleScroll("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
