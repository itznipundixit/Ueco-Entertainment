const reasons = [
  {
    title: "Experienced Team",
    description:
      "Our team consists of industry professionals with years of experience.",
    icon: "👨‍💼",
  },
  {
    title: "Creative Excellence",
    description:
      "We deliver innovative and unique solutions tailored to your needs.",
    icon: "✨",
  },
  {
    title: "End-to-End Solutions",
    description:
      "From planning to execution, we manage everything seamlessly.",
    icon: "🔧",
  },
  {
    title: "Trusted by Clients",
    description:
      "We are trusted by numerous brands and clients nationwide.",
    icon: "🤝",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why <span className="text-yellow-400">Choose Us</span>
          </h2>
          <p className="mt-4 text-gray-600">
            We stand out because of our commitment to quality and excellence.
          </p>
        </div>

        {/* Points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 border rounded-lg hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
