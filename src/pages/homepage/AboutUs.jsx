import React from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaHeart,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";

// Replace with your actual image URLs and descriptions
const images = [
  {
    src: "https://www.alphalearn.com/wp-content/uploads/2021/11/e-learning-2.jpg", // Replace with your image URL
    alt: "Course Dashboard",
    description:
      "Our intuitive course dashboard provides an easy way to track your progress and manage your courses.",
  },
  {
    src: "https://www.gumlet.com/learn/content/images/2022/07/Elearning_platform.jpg", // Replace with your image URL
    alt: "Interactive Lessons",
    description:
      "Engage with interactive lessons designed to make learning fun and effective.",
  },
  {
    src: "https://img.freepik.com/free-photo/people-meeting-community-center_23-2149155366.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722729600&semt=ais_hybrid", // Replace with your image URL
    alt: "Community Support",
    description:
      "Join a vibrant community of learners and get support from fellow students and instructors.",
  },
];

const AboutUs = () => {
  return (
    <>
       <Navbar/>
      <div className="  flex flex-col items-center p-4 md:p-10">
        <div className="bg-white mt-[100px] rounded-lg  p-6 max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-center text-black mb-4">
            About Us
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
            <FaGraduationCap className="text-black text-6xl mb-4 md:mb-0 md:mr-4" />
            <p className="text-lg leading-relaxed text-gray-800">
              Welcome to our learning application! We are passionate about
              providing high-quality education to learners around the globe. Our
              platform is designed to offer engaging and interactive learning
              experiences that cater to a variety of learning styles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center">
              <FaChalkboardTeacher className="text-black text-4xl mb-2" />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Expert Instructors
              </h3>
              <p className="text-center text-gray-700">
                Our courses are taught by industry experts with years of
                experience in their fields.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaUserGraduate className="text-black text-4xl mb-2" />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Diverse Courses
              </h3>
              <p className="text-center text-gray-700">
                We offer a wide range of courses across various subjects to
                cater to all interests and skill levels.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaHeart className="text-black text-4xl mb-2" />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Passion for Learning
              </h3>
              <p className="text-center text-gray-700">
                We believe in the power of education and are dedicated to
                fostering a love for learning in our community.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col items-center mb-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg shadow-lg mb-2"
                />
                <p className="text-center text-gray-800">{image.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg text-gray-800">
              Join us on this exciting journey of knowledge and growth. Let's
              learn, grow, and achieve together!
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>
          Questions? Call <a href="">9813420243</a>
        </p>
        <div className="footer-cols">
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Investor Relations</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Speed Test</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Help Centre</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Cookie Preferences</a>
            </li>
            <li>
              <a href="">Legal Notices</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Account</a>
            </li>
            <li>
              <a href="">Ways to Watch</a>
            </li>
            <li>
              <a href="">Corporate Information</a>
            </li>
            <li>
              <a href="">Only on Netflix</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Media Centre</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="dropdown2_container">
          <i className="bi bi-globe"></i>
          <select
            name="languages"
            id="languagesSelect"
            className="languages_dropdown2"
          >
            <option value="english" className="drop">
              English
            </option>
            <option value="hindi" className="drop">
              Hindi
            </option>
          </select>
        </div>
        <p className="copyright-txt">My Learning</p>
      </footer>
    </>
  );
};

export default AboutUs;
