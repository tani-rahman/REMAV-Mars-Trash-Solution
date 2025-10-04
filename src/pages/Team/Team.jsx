import React from "react";

const teamMembers = [
  {
    name: "Nusrath Jahan Shawon",
    role: "Team Leader & UI/UX design ",
    img: "/Shawon.jpg",
  },
  {
    name: "Mahinur Rahman Tani",
    role: "Research & Data Integration",
    img: "/tani.webp",
  },
  {
    name: "Maimuna Rashid",
    role: "Lead Front-End Development",
    img: "/MR.jpg",
  },
  {
    name: "Samea Binte Saif",
    role: "Pitch Development & Video Production",
    img: "/safe.jpg",
  },
  {
    name: "Fozilatun Naher Mimi",
    role: "Front-End Development",
    img: "/mimi.jpg",
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Team
        </h2>
        <div className="flex justify-center mt-2">
          <span className="text-gray-600">▼</span>
        </div>

        {/* Team Grid */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              {/* Image */}
              <div className="w-64 h-80 overflow-hidden rounded-md shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Stay updated with cosmic discoveries!
          </h3>
          <form className="mt-6 flex flex-col items-center space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-1/2 border-b border-gray-400 focus:outline-none px-2 py-2"
              required
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="privacy" className="h-4 w-4" required />
              <label htmlFor="privacy" className="text-gray-600 text-sm">
                I agree to the{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>.
              </label>
            </div>
            <button
              type="submit"
              className="flex items-center space-x-2 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              <span>Subscribe</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 6l7 6-7 6" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Team;
