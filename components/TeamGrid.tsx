const teamMembers = [
  {
    name: "Amit Kumar",
    role: "Founder & Director",
    image: "/assets/team/p1.jpg",
  },
  {
    name: "Neha Sharma",
    role: "Business Development Manager",
    image: "/assets/team/p2.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Event Manager",
    image: "/assets/team/p3.jpg",
  },
  {
    name: "Priya Singh",
    role: "Operations Head",
    image: "/assets/team/p4.jpg",
  },
];

export default function TeamGrid() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Meet Our <span className="text-yellow-400">Team</span>
          </h1>
          <p className="mt-4 text-gray-600">
            The people behind UECO Entertainment’s success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
