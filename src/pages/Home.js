import React from "react";
import ImageCarousel from "../components/ImageCarousel";

// Import local images
import bannerImage from "../assets/IMG-20250308-WA0081.jpg";
import carouselImage1 from "../assets/IMG-20250518-WA0088.jpg";
import carouselImage2 from "../assets/IMG-20250518-WA0105.jpg";
import carouselImage3 from "../assets/IMG-20250519-WA0075.jpg";
import carouselImage4 from "../assets/IMG-20250716-WA0119.jpg";
import carouselImage5 from "../assets/IMG-20250813-WA0003.jpg";
import aboutImage from "../assets/Jablpur-27_28 Aug.25.jpeg";

const Home = () => {
  // Carousel images using local assets
  const carouselImages = [
    {
      src: carouselImage1,
      alt: "Research Laboratory",
      caption: "State-of-the-art research facilities",
    },
    {
      src: carouselImage2,
      alt: "Community Outreach",
      caption: "Community engagement and development programs",
    },
    {
      src: carouselImage3,
      alt: "Sustainable Development",
      caption: "Promoting sustainable development practices",
    },
    {
      src: carouselImage4,
      alt: "Research Projects",
      caption: "Innovative research initiatives",
    },
    {
      src: carouselImage5,
      alt: "Community Impact",
      caption: "Making a difference in communities",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bannerImage}
            alt="PRDF Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container-custom text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Parameshwaram Research and Development Foundation
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-green-100">
              For Sustainable Future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Learn More
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Work in Action
          </h2>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                About PRDF
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Parameshwaram Research and Development Foundation (PRDF) is
                a non-profit organization dedicated to advancing sustainable
                development through innovative research, community engagement,
                and environmental stewardship.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to create a sustainable future by conducting
                cutting-edge research, implementing community-based solutions,
                and fostering partnerships that drive positive change.
              </p>
              <button className="btn-primary">Learn More About Us</button>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="PRDF Team"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-prdf-blue text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-green-100">Research Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-green-100">Community Members Reached</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">25+</h3>
              <p className="text-green-100">Sustainable Initiatives</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
