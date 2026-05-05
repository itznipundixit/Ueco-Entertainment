"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes, FaComment } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Reset visibility when interacting
  useEffect(() => {
    const handleActivity = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("click", handleActivity);
    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("click", handleActivity);
    };
  }, []);

  const phoneNumber = "919810533519";
  const message = "Hello%20UECO%20Team,%20I%20want%20to%20know%20more%20about%20your%20services";

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
        className="fixed bottom-6 left-6 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Chat Bubble */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute bottom-20 left-0 mb-4 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="text-white text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold">UECO Support</h3>
                  <p className="text-white/80 text-sm">Typically replies in minutes</p>
                </div>
              </div>

              {/* Message */}
              <div className="p-4 bg-gray-50">
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                  <p className="text-gray-700 text-sm">
                    Hello! 👋 Welcome to UECO Entertainment. How can we help you today?
                  </p>
                </div>
              </div>

              {/* Input/CTA */}
              <div className="p-4 border-t border-gray-200">
                <a
                  href={`https://wa.me/${phoneNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Start Conversation
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-gray-500 text-sm mt-2 hover:text-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute bottom-20 left-16 mb-4 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <FaComment className="text-white" />
                </div>
                <div>
                  <p className="font-semibold">Chat with us!</p>
                  <p className="text-sm text-gray-300">Get instant answers</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button Container */}
        <div className="relative">
          {/* Pulse Effect */}
          <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
          
          {/* Heartbeat Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-green-600"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative w-16 h-16 rounded-full flex items-center justify-center
              text-white text-3xl shadow-2xl border-2
              ${isOpen ? 'border-white/50 bg-green-600' : 'border-white/30 bg-gradient-to-br from-green-500 to-emerald-600'}
              transition-all duration-300`}
            aria-label="Chat on WhatsApp"
          >
            {isOpen ? (
              <motion.div
                initial={{ rotate: 180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaTimes />
              </motion.div>
            ) : (
              <motion.div
                animate={{
                  rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <FaWhatsapp />
              </motion.div>
            )}
          </button>
        </div>
      </motion.div>
    </>
  );
}