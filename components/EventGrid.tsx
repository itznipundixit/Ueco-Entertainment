const events = [
  {
    title: "Corporate Annual Meet 2024",
    date: "March 2024",
    location: "Delhi, India",
    image: "/assets/events/e1.jpg",
  },
  {
    title: "Live Music Concert",
    date: "January 2024",
    location: "Mumbai, India",
    image: "/assets/events/e2.jpg",
  },
  {
    title: "Brand Launch Event",
    date: "December 2023",
    location: "Bangalore, India",
    image: "/assets/events/e3.jpg",
  },
];

export default function EventsGrid() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Our <span className="text-yellow-400">Events</span>
          </h1>
          <p className="mt-4 text-gray-600">
            A showcase of memorable events delivered by UECO Entertainment
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>

                <p className="text-sm text-gray-500 mb-1">📅 {event.date}</p>

                <p className="text-sm text-gray-500">📍 {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
