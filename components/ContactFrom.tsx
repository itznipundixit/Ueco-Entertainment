"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPhoneAlt,
  FaComment,
  FaWhatsapp,
} from "react-icons/fa";
import { MdError } from "react-icons/md";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [activeField, setActiveField] = useState<string | null>(null);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "message") setCharCount(value.length);
    setForm({ ...form, [name]: value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await new Promise((r) => setTimeout(r, 1500));
      setSuccess("Your enquiry has been sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
      setCharCount(0);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: "+91 72910 07777",
      sub: "Mon–Fri, 9AM–6PM",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: "hello@uecoentertainment.com",
      sub: "24h response time",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      details: "Ekta Enclave Rd, Gurugram",
      sub: "Haryana 122102",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-yellow-100 rounded-full text-yellow-600 font-semibold mb-4">
            GET IN TOUCH
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Contact <span className="text-yellow-400">UECO</span>
          </h2>

          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Ready to create something extraordinary? Let’s bring your vision to
            life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT INFO */}
          <div className="space-y-6">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex gap-4">
                  <div className="text-yellow-400 text-xl">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-yellow-500 font-semibold">
                      {item.details}
                    </p>
                    <p className="text-gray-500 text-sm">{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-3 bg-green-500 text-white font-bold py-4 rounded-xl hover:bg-green-600 transition"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
          </div>

          {/* FORM */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="input"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="input"
                />
                <input
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="input"
                />
                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  maxLength={maxChars}
                  className="input md:col-span-2 resize-none"
                />
              </div>

              <AnimatePresence>
                {success && (
                  <p className="mt-4 text-green-600 flex items-center gap-2">
                    <FaCheckCircle /> {success}
                  </p>
                )}
                {error && (
                  <p className="mt-4 text-red-600 flex items-center gap-2">
                    <MdError /> {error}
                  </p>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 rounded-xl transition flex justify-center gap-2"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Input utility */}
      <style jsx>{`
        .input {
          width: 100%;
          border: 2px solid #e5e7eb;
          padding: 14px;
          border-radius: 12px;
          outline: none;
          transition: 0.3s;
        }
        .input:focus {
          border-color: #facc15;
          box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.2);
        }
      `}</style>
    </section>
  );
}
