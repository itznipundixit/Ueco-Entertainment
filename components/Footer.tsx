"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Footer links data
  const quickLinks = [
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

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 72910 07777" },
    { icon: Mail, text: "info@uecoentertainment.com" },
    { icon: MapPin, text: "India" },
  ];

  return (
    <footer className="relative bg-black text-gray-300 border-t border-yellow-500/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand Column with Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-yellow-500/10 rounded-lg blur-sm"></div>
                <Image
                  src="/assets/logo.png"
                  alt="UECO Entertainment Logo"
                  width={50}
                  height={50}
                  className="relative object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  UECO Entertainment
                </h2>
                <p className="text-xs text-yellow-300">Pvt. Ltd.</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Creating unforgettable entertainment experiences with world-class
              events, productions, and creative solutions.
            </p>

            {/* Social Links */}
            <div className="pt-2">
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-yellow-500/30 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 hover:pl-2 transition-all duration-300 block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-yellow-500/30 inline-block">
              Apply
            </h3>
            <ul className="space-y-2">
              {applyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 hover:pl-2 transition-all duration-300 block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-yellow-500/30 inline-block">
              Contact Us
            </h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <info.icon className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{info.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                © {currentYear} UECO Entertainment Pvt. Ltd. All rights
                reserved. Dev Dixit Docker
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-yellow-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-yellow-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-yellow-400 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-yellow-500 text-black rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
