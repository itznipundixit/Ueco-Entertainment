"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const applyDropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect with rotation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);

      // Calculate rotation based on scroll
      const maxScroll = 500; // Adjust this to control rotation speed
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        applyDropdownRef.current &&
        !applyDropdownRef.current.contains(event.target as Node)
      ) {
        setApplyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  const applyLinks = [
    { href: "/apply/hosting", label: "Apply Hosting" },
    { href: "/apply/agency", label: "Apply Agency" },
    { href: "/apply/recruiter", label: "Apply Recruiter" },
  ];

  // Calculate rotation based on scroll progress
  const rotationDegrees = scrollProgress * 360; // Full 360° rotation
  const scaleValue = 1 - scrollProgress * 0.1; // Slight scale down effect
  const opacityValue = 1 - scrollProgress * 0.2; // Slight fade effect

  return (
    <header
      className={`w-full sticky top-0 left-0 right-0 transition-all duration-300 z-50 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-xl py-3 border-b border-yellow-500"
          : "bg-black py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LOGO WITH ROTATION (NO NUMBERS) */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }
            }}
            className="relative group flex items-center gap-3"
          >
            <div className="relative">
              {/* Glow effects that also rotate */}
              <div
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-5 bg-yellow-500 blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  transform: `rotate(${rotationDegrees * 0.3}deg)`,
                  opacity: opacityValue * 0.8,
                }}
              ></div>

              <div
                className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  transform: `rotate(${rotationDegrees * 0.2}deg)`,
                  opacity: opacityValue * 0.9,
                }}
              ></div>

              <div
                className="absolute -bottom-2 -left-2 w-10 h-10 bg-yellow-300 blur-md opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                style={{
                  transform: `rotate(${rotationDegrees * -0.1}deg)`,
                  opacity: opacityValue * 0.9,
                }}
              ></div>

              {/* Logo container with rotation */}
              <div
                className="relative"
                style={{
                  transform: `rotate(${rotationDegrees}deg) scale(${scaleValue})`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <Image
                  src="/assets/logo.png"
                  alt="UECO"
                  width={60}
                  height={60}
                  priority
                  className="object-contain drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(250,204,21,0.4)] transition-all duration-500"
                  style={{
                    opacity: opacityValue,
                  }}
                />

                {/* Subtle glow around logo */}
                <div className="absolute inset-0 bg-yellow-500/10 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Text next to logo */}
            <div className="hidden md:block leading-tight">
              <div className="text-sm font-semibold text-white">UECO</div>
              <div className="text-xs text-yellow-300">
                Entertainment Pvt. Ltd.
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-gray-300 font-medium rounded-lg hover:text-yellow-400 transition-colors duration-200 group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-yellow-900/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
              </Link>
            ))}

            {/* APPLY DROPDOWN */}
            <div className="relative" ref={applyDropdownRef}>
              <button
                onClick={() => setApplyOpen(!applyOpen)}
                className="flex items-center gap-1 px-4 py-2 text-gray-300 font-medium rounded-lg hover:text-yellow-400 transition-colors duration-200 group"
              >
                Apply
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    applyOpen ? "rotate-180 text-yellow-400" : ""
                  }`}
                />
                <span className="absolute inset-0 bg-yellow-900/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-black rounded-xl shadow-2xl border border-yellow-500 py-2 transition-all duration-300 origin-top ${
                  applyOpen
                    ? "opacity-100 visible scale-100 translate-y-0"
                    : "opacity-0 invisible scale-95 -translate-y-2"
                }`}
              >
                {applyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center px-4 py-3 text-gray-300 hover:bg-yellow-900/30 hover:text-yellow-400 transition-all duration-200 group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button - Yellow accent */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 border border-transparent hover:border-yellow-300 shadow-lg hover:shadow-yellow-500/50"
            >
              Get Started
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-yellow-900/30 transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-yellow-400" />
            ) : (
              <Menu className="w-6 h-6 text-yellow-400" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU with smooth animation */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed inset-x-0 top-[72px] bg-black border-t border-yellow-500 shadow-2xl transition-all duration-500 ease-in-out transform ${
          mobileOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div className="px-6 py-8 overflow-y-auto h-full">
          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-lg font-medium text-gray-300 rounded-lg hover:bg-yellow-900/30 hover:text-yellow-400 transition-all duration-200"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "both",
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* APPLY MOBILE */}
            <div className="border-t border-yellow-500 pt-4 mt-4">
              <button
                onClick={() => setApplyOpen(!applyOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-gray-300 rounded-lg hover:bg-yellow-900/30 hover:text-yellow-400 transition-all duration-200"
              >
                Apply
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    applyOpen ? "rotate-180 text-yellow-400" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  applyOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-6 space-y-3">
                  {applyLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                      style={{
                        animationDelay: `${index * 30}ms`,
                        animationFillMode: "both",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Logo Info - NO rotation indicators */}
            <div className="pt-6 border-t border-yellow-500 mt-6">
              <div className="flex flex-col items-center p-4 bg-yellow-900/10 rounded-lg">
                <div className="relative mb-4">
                  {/* Side glow for mobile logo */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-24 bg-yellow-500 blur-lg opacity-20"></div>

                  {/* Rotating logo in mobile menu */}
                  <div
                    className="relative"
                    style={{
                      transform: `rotate(${rotationDegrees}deg)`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    <Image
                      src="/assets/logo.png"
                      alt="UECO Logo"
                      width={80}
                      height={80}
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">UECO</div>
                  <div className="text-sm text-gray-300">
                    Entertainment Pvt. Ltd.
                  </div>
                  <div className="text-xs text-yellow-300 mt-1">
                    Creating Unforgettable Experiences
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE CTA */}
            <div className="pt-6">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-6 py-4 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 active:scale-95 border border-transparent hover:border-yellow-300 shadow-lg hover:shadow-yellow-500/50"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
