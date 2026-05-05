import Counter from "./Counter";
import Link from "next/link";
import Reveal from "./Reveal";

export default function LetsTalk() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16 items-center">

        {/* LEFT IMAGES */}
        <div className="relative">
          <Reveal>
            <img
              src="/assets/lets-talk/img1.jpg"
              className="rounded-xl shadow-lg"
              alt="team"
            />
          </Reveal>

          <Reveal delay={200}>
            <img
              src="/assets/lets-talk/img2.jpg"
              className="rounded-xl shadow-lg absolute -bottom-10 right-10 w-3/4"
              alt="meeting"
            />
          </Reveal>
        </div>

        {/* COUNTER CARD */}
        <Reveal delay={300}>
          <div className="bg-blue-50 rounded-2xl p-10 text-center">
            <Counter target={5000} />
            <p className="mt-4 text-gray-600">
              Satisfied Customers
            </p>
          </div>
        </Reveal>

        {/* RIGHT CONTENT */}
        <div>
          <Reveal delay={200}>
            <h2 className="text-4xl font-bold mb-6">
              Let’s Talk
            </h2>
          </Reveal>

          <Reveal delay={350}>
            <p className="text-gray-600 leading-relaxed mb-8">
              Let’s make something great together. We are trusted by
              over <strong>5000+</strong> clients. Join them by using
              our services and grow your business.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition"
            >
              Join Us
            </Link>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
