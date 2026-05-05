const services = [
  {
    title: "Event Management",
    description:
      "End-to-end planning and execution of corporate and entertainment events.",
    icon: "🎤",
  },
  {
    title: "Artist Management",
    description:
      "Professional management and booking of artists and performers.",
    icon: "🎶",
  },
  {
    title: "Production & Setup",
    description:
      "Stage, sound, lighting, and complete production solutions.",
    icon: "🎬",
  },
  {
    title: "Brand Promotions",
    description:
      "Creative brand activations, launches, and promotional campaigns.",
    icon: "🚀",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            What <span className="text-yellow-400">We Do</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Our wide range of services are designed to make your event
            unforgettable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
