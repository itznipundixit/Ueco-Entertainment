"use client";

import { useState } from "react";

interface ApplyFormProps {
  title: string;
  type: "hosting" | "agency" | "recruiter";
}

export default function ApplyForm({ title, type }: ApplyFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setSuccess("Application submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        experience: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            Apply for <span className="text-yellow-400">{title}</span>
          </h1>
          <p className="mt-3 text-gray-600">
            Fill the form below and our team will contact you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border px-4 py-3 rounded focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="border px-4 py-3 rounded focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="border px-4 py-3 rounded focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="text"
            name="experience"
            placeholder={
              type === "hosting"
                ? "Hosting Experience"
                : type === "agency"
                ? "Agency Name / Experience"
                : "Recruitment Experience"
            }
            value={form.experience}
            onChange={handleChange}
            className="border px-4 py-3 rounded focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            name="message"
            placeholder="Additional Details"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="border px-4 py-3 rounded focus:ring-2 focus:ring-yellow-400"
          />

          {success && <p className="text-green-600">{success}</p>}
          {error && <p className="text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white py-3 rounded hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>

      </div>
    </section>
  );
}
