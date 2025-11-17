import React from "react";

const Services = () => {
  const services = [
    {
      title: "Research & Development",
      description:
        "Conducting cutting-edge research in sustainable technologies, environmental science, and community development.",
      icon: "🔬",
      features: [
        "Environmental impact studies",
        "Sustainable technology development",
        "Community needs assessment",
        "Policy research and analysis",
      ],
    },
    {
      title: "Community Programs",
      description:
        "Implementing community-based solutions that address local challenges and promote sustainable development.",
      icon: "👥",
      features: [
        "Educational workshops",
        "Skills training programs",
        "Community health initiatives",
        "Environmental awareness campaigns",
      ],
    },
    {
      title: "Consulting Services",
      description:
        "Providing expert consultation to organizations, governments, and communities on sustainable development strategies.",
      icon: "💼",
      features: [
        "Strategic planning",
        "Project evaluation",
        "Capacity building",
        "Policy development support",
      ],
    },
    {
      title: "Training & Education",
      description:
        "Offering comprehensive training programs to build capacity in sustainable development practices.",
      icon: "🎓",
      features: [
        "Professional development courses",
        "Certification programs",
        "Workshop series",
        "Online learning platforms",
      ],
    },
  ];

  const events = [
    {
      title: "Sustainable Development Conference 2024",
      date: "March 15-17, 2024",
      location: "New Delhi, India",
      description:
        "Join us for our annual conference featuring keynote speakers, panel discussions, and networking opportunities.",
      type: "Conference",
    },
    {
      title: "Community Workshop: Green Technologies",
      date: "April 8, 2024",
      location: "Mumbai, India",
      description:
        "Hands-on workshop on implementing green technologies in community settings.",
      type: "Workshop",
    },
    {
      title: "Research Symposium: Climate Solutions",
      date: "May 20-21, 2024",
      location: "Bangalore, India",
      description:
        "Presenting latest research findings on climate change mitigation and adaptation strategies.",
      type: "Symposium",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-prdf-green text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Research and Events
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover our comprehensive research programs and upcoming events
            designed to drive sustainable development.
          </p>
        </div>
      </section>

      {/* Research Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Research Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-prdf-green mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn-primary mt-6">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        event.type === "Conference"
                          ? "bg-prdf-green text-white"
                          : event.type === "Workshop"
                          ? "bg-prdf-blue text-white"
                          : "bg-prdf-yellow text-gray-800"
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {event.location}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <button className="btn-secondary w-full">Register Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-prdf-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking for research collaboration, community
            programs, or event participation, we're here to help you achieve
            your sustainable development goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-prdf-green hover:bg-gray-100">
              Contact Us Today
            </button>
            <button className="btn-secondary">Download Brochure</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
