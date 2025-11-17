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
  // Carousel images using local assets with ImageInfoCard format
  const carouselImages = [
    {
      src: carouselImage1,
      image: carouselImage1,
      alt: "Research Laboratory",
      title: "Research Laboratory",
      description:
        "State-of-the-art research facilities dedicated to advancing sustainable development through innovative research and community engagement.",
    },
    {
      src: carouselImage2,
      image: carouselImage2,
      alt: "Community Outreach",
      title: "Community Outreach",
      description:
        "Community engagement and development programs that empower local communities and foster sustainable growth.",
    },
    {
      src: carouselImage3,
      image: carouselImage3,
      alt: "Sustainable Development",
      title: "Sustainable Development",
      description:
        "Promoting sustainable development practices that create lasting positive impact on communities and the environment.",
    },
    {
      src: carouselImage4,
      image: carouselImage4,
      alt: "Research Projects",
      title: "Research Projects",
      description:
        "Innovative research initiatives that address pressing global challenges while fostering local community development.",
    },
    {
      src: carouselImage5,
      image: carouselImage5,
      alt: "Community Impact",
      title: "Community Impact",
      description:
        "Making a meaningful difference in communities through research, education, and sustainable development programs.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner - Secondary Lime background */}
      <section className="relative h-96 sm:h-[500px]  overflow-hidden ">
        {/* <div className="absolute inset-0">
          <img
            src={bannerImage}
            alt="PRDF Banner"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-prdf-footer bg-opacity-40"></div>
        </div> */}
        <div className="relative flex items-center justify-center">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-prdf-primary">
                Parameshwaram Research and Development Foundation
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-prdf-text-dark">
                Creating a just, equitable, and sustainable society through
                community-led progress and inclusion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="btn-primary text-lg px-8 py-4">
                  Learn More
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel - Odd section: bg-light */}
      <section className="section-padding bg-prdf-secondary">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-prdf-primary mb-12">
            Our Work in Action
          </h2>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      {/* Mission & Vision Section - Even section: surface white */}
      <section className="section-padding bg-prdf-surface">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-prdf-primary mb-12">
            Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <h3 className="text-2xl font-bold text-prdf-primary mb-4">
                Mission
              </h3>
              <p className="text-prdf-text-dark leading-relaxed">
                To build pathways for marginalised communities to thrive —
                through economic empowerment, climate resilience, and
                affirmation of indigenous knowledge and cultural wisdom.
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold text-prdf-primary mb-4">
                Vision
              </h3>
              <p className="text-prdf-text-dark leading-relaxed">
                To contribute towards creating a just and equitable society
                anchored in constitutional values and consciousness building,
                where marginalised communities shape their collective progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Odd section: bg-light */}
      <section className="section-padding bg-prdf-bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-prdf-primary mb-6">
                About PRDF
              </h2>
              <p className="text-lg text-prdf-text-dark mb-6 leading-relaxed">
                The Parameshwaram Research and Development Foundation (PRDF) is
                a non-profit organization dedicated to advancing sustainable
                development through innovative research, community engagement,
                and environmental stewardship.
              </p>
              <p className="text-lg text-prdf-text-dark mb-8 leading-relaxed">
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

      {/* Highlights Section - CTA Green background */}
      <section className="section-padding bg-prdf-cta text-white">
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
              <p className="text-white opacity-90">
                Research Projects Completed
              </p>
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
              <p className="text-white opacity-90">Community Members Reached</p>
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
              <p className="text-white opacity-90">Sustainable Initiatives</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
