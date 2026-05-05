const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Corporate Client",
    message:
      "UECO Entertainment delivered an exceptional experience. The event was perfectly managed and executed.",
  },
  {
    name: "Anjali Verma",
    role: "Brand Manager",
    message:
      "Their creativity and professionalism truly set them apart. Highly recommended!",
  },
  {
    name: "Amit Singh",
    role: "Event Partner",
    message:
      "From planning to execution, everything was seamless. UECO is our go-to event partner.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            What Our <span className="text-yellow-400">Clients Say</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Hear from those who have experienced our work firsthand.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 mb-6 italic">
                “{item.message}”
              </p>

              <div className="font-semibold">
                {item.name}
              </div>
              <div className="text-sm text-gray-500">
                {item.role}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
