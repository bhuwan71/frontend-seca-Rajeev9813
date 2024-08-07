import React from "react";
import { FaBriefcase, FaPaperPlane, FaUser } from "react-icons/fa";
import Navbar from "../../components/Navbar";
// import { Footer } from "../../components/Footer";

const CareerPage = () => {
  return (
    <div>
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-600 pt-[200px] text-white py-20 text-center relative">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Join Our Language Learning Team
          </h1>
          <p className="text-lg mb-8 leading-relaxed">
            Discover exciting opportunities to contribute to a global mission of
            making language learning accessible and engaging.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mx-2 mb-4">About Us</h2>
          <p className="text-gray-700 px-10 mb-8 leading-relaxed">
            At our organization, we are dedicated to breaking down language
            barriers and fostering cross-cultural communication. We value
            creativity, inclusivity, and growth, and we are always on the
            lookout for talented individuals passionate about language education
            to join our team.
          </p>
          <img
            src="https://c0.wallpaperflare.com/preview/506/555/733/career-leadership-success-businessman.jpg"
            alt="About Us"
            className="mx-auto rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2"
          />
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default CareerPage;
