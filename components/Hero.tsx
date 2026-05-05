"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ SSR disabled for react-slick
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Hero() {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: false,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const images = [
    "/assets/hero1.jpg",
    "/assets/hero2.jpg",
    "/assets/hero3.jpg",
    "/assets/hero4.jpg",
  ];

  const slideTitles = [
    "Creating Unforgettable Entertainment Experiences",
    "World-Class Event Productions",
    "Innovative Creative Solutions",
    "Premium Live Show Experiences",
  ];

  return (
    <section className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* BACKGROUND SLIDER */}
      {/* @ts-ignore */}
      <Slider {...settings} ref={sliderRef} className="h-full">
        {images.map((img, index) => (
          <div key={index} className="h-[90vh] md:h-screen">
            <div
              className="h-full w-full bg-center bg-no-repeat bg-cover md:bg-cover"
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          </div>
        ))}
      </Slider>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

      {/* LEFT ARROW (DESKTOP ONLY) */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="
          hidden md:flex 
          absolute left-6 top-1/2 -translate-y-1/2 z-30
          bg-black/40 hover:bg-black/70 
          w-14 h-14 rounded-full
          items-center justify-center 
          transition-all hover:scale-110
        "
      >
        <FaChevronLeft className="text-white text-xl hover:text-yellow-400" />
      </button>

      {/* RIGHT ARROW (DESKTOP ONLY) */}
      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="
          hidden md:flex 
          absolute right-6 top-1/2 -translate-y-1/2 z-30
          bg-black/40 hover:bg-black/70 
          w-14 h-14 rounded-full
          items-center justify-center 
          transition-all hover:scale-110
        "
      >
        <FaChevronRight className="text-white text-xl hover:text-yellow-400" />
      </button>

      {/* CONTENT */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-yellow-400">UECO</span> Entertainment
          </h1>

          <h2 className="mt-4 text-xl md:text-3xl font-bold">
            {slideTitles[currentSlide]}
          </h2>

          <p className="mt-6 max-w-xl text-gray-200">
            Delivering world-class events, productions, and creative solutions
            tailored for unforgettable brand experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="
                bg-yellow-400 text-black 
                px-8 py-3 font-semibold rounded-lg
                hover:bg-yellow-300 transition
              "
            >
              Get Started
            </Link>

            <Link
              href="/lets-talk"
              className="
                border border-white 
                px-8 py-3 rounded-lg
                hover:bg-white hover:text-black transition
              "
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* DOTS - BOTTOM CENTER */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
        <div className="flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => sliderRef.current?.slickGoTo(index)}
              className={`rounded-full transition-all ${
                currentSlide === index
                  ? "w-6 h-2 bg-yellow-400"
                  : "w-2 h-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}