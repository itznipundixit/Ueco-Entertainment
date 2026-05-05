"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaChevronRight,
  FaStar,
  FaTrophy,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [stats, setStats] = useState([
    {
      value: 0,
      target: 250,
      label: "Events Completed",
      suffix: "+",
      icon: <FaTrophy />,
    },
    {
      value: 0,
      target: 50,
      label: "Happy Clients",
      suffix: "+",
      icon: <FaUsers />,
    },
    {
      value: 0,
      target: 15,
      label: "Years Experience",
      suffix: "",
      icon: <FaStar />,
    },
    {
      value: 0,
      target: 100,
      label: "Creative Projects",
      suffix: "%",
      icon: <FaLightbulb />,
    },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                current = stat.target;
                clearInterval(timer);
              }

              setStats((prev) => {
                const copy = [...prev];
                copy[index].value = Math.floor(current);
                return copy;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      {/* Decorative BG */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-black text-gray-900"
          >
            About <span className="text-yellow-400">UECO</span> Entertainment
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Crafting unforgettable experiences through innovation and excellence
          </motion.p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT CONTENT (TOP ALIGNED WITH IMAGE) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              <strong className="text-gray-900">UECO Entertainment</strong> is a
              premier creative production and event management company dedicated
              to delivering unforgettable experiences across entertainment,
              corporate events, and digital productions.
            </p>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              With a passionate team and years of industry expertise, we
              transform visionary ideas into reality through innovation,
              precision, and creative storytelling.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaChevronRight className="text-yellow-400" />
                Why Choose UECO?
              </h3>

              <ul className="space-y-3">
                {[
                  "End-to-end event management solutions",
                  "Innovative technology integration",
                  "Creative storytelling approach",
                  "Precision execution & attention to detail",
                  "Global network of partners & vendors",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src="/assets/about.jpg"
                alt="UECO Entertainment Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>

              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl">
                  <FaPlay className="text-gray-900 text-xl ml-1" />
                </div>
              </button>
            </div>

            {/* FLOATING BADGE */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-gray-900 text-white px-4 py-2 rounded-xl shadow-lg"
            >
              <FaStar className="inline text-yellow-400 mr-2" />
              Since 2008
            </motion.div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="text-yellow-400 text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-gray-900">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
