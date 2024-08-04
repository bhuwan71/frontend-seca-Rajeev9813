/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
// import Navbar from "../../components/Navbar";
// import { testApi } from "../../apis/Api";
import Navbar from "../../components/Navbar";

const Homepage = () => {
  // Print Hello!, when page load (Automatic)
  useEffect(() => {
    // trigger testAPI
    // testApi().then((res) => {
    //   console.log(res); // Test api is working!
    // });
  }, []);

  return (
    <>
      <Navbar />
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Learning</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
        <style>{`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              background-color: black;
              color: white;
              font-family: "Poppins", sans-serif;
            }
            .navbar {
              position: absolute;
              top: 0;
              width: 100%;
              display: flex;
              justify-content: space-between;
              padding: 3% 5%;
              z-index: 10;
            }
            .navbar_netflix {
              width: 125px;
              height: 100%;
            }
            .navbar_nav_items {
              display: flex;
              gap: 10px;
            }
            .netflix_logo {
              width: 100%;
              height: 100%;
            }
            .languages_dropdown {
              background: transparent;
              border: none;
              color: white;
            }
            .dropdown_container {
              border: 1px solid white;
              padding: 0.4rem;
              border-radius: 4px;
              background: rgba(0,0,0,0.4);
            }
            .signin_button {
              border: #dc030f;
              background-color: #dc030f;
              color: white;
              padding-left: 0.25rem 0.5rem;
              border-radius: 4px;
              height: 35px;
              width: 100px;
            }
            .hero_bg_image_container {
              width: 100%;
              height: 100%;
            }
            .hero_bg_img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .hero_bg_overlay {
              position: absolute;
              inset: 0;
              width: 100%;
              height: 100%;
              background: rgba(0,0,0,0.4);
            }
            .hero_card {
              position: absolute;
              top: 25%;
              text-align: center;
              left: 15%;
              display: flex;
              flex-direction: column;
              gap: 10px;
              margin-top: 200px;
            }
            .hero_title {
              font-weight: 600;
              font-size: 3rem;
            }
            .hero_subtitle,
            .hero-description {
              font-weight: 400;
              font-size: 1.3rem;
            }
            .email {
              width: 450px;
              height: 60px;
              color: black;
              padding: 0.25rem 0.5rem;
              border-bottom: 3px;
              border-color: white;
            }
            .get_started {
              font-size: large;
              width: 170px;
              height: 60px;
              background-color: #dc030f;
              border: 1px solid #dc030f;
            }
            .card-1,
            .card-2,
            .card-3,
            .card-4,
            .faq,
            .footer {
              border-top: 8px solid rgb(69,69,69);
              padding: 50px;
            }
            .card-1 {
              position: relative;
              display: inline-grid;
              grid-template-columns: 50% 40%; 
              text-align: left;
              align-items: center;
              padding: 25px 45px 50px;
            }
            .desc-1 {
              padding-left: 80px;
            }
            .card-1 video {
              position: relative;
              width: 100%;
              height: 54%;
              grid-column: 2/2;
              grid-row: 1/2;
              z-index: -1;
            }
            .card-1 img {
              grid-column: 2/2;
              grid-row: 1/2;
            }
            .style-cards {
              overflow: hidden;
            }
            .style-cards h1 {
              font-size: 3rem;
              padding: 1rem;
              padding-left: 0;
            }
            .style-cards h3 {
              font-size: 1.6rem;
              line-height: 2rem;
            }
            .card-2 {
              display: flex;
              width: 100%;
              align-items: center;
              flex-wrap: wrap;
              padding: 50px 0;
            }
            .text {
              flex-basis: 50%;
              margin-bottom: 20px;
            }
            .desc-2 {
              flex-basis: 50%;
              margin-bottom: 20px;
            }
            .desc-2 img {
              display: block;
              width: 90%;
              margin: auto;
            }
            .card-3 {
              position: relative;
              display: inline-grid;
              grid-template-columns: 50% 40%; 
              text-align: left;
              align-items: center;
              padding: 25px 45px 50px;
            }
            .desc-3 {
              padding-left: 80px;
              padding-right: 20px;
            }
            .card-3 img {
              width: 110%;
              grid-column: 2/2;
              grid-row: 1/2;
            }
            .card-3 video {
              position: relative;
              top: -87px;
              left: 125px;
              width: 65%;
              height: 78%;
              grid-column: 2/2;
              grid-row: 1/2;
              z-index: -1;
            }
            .card-4 {
              display: flex;
              width: 100%;
              align-items: center;
              flex-wrap: wrap;
              padding: 50px 0;
            }
            .text-4 {
              flex-basis: 50%;
              margin-bottom: 20px;
            }
            .desc-4 {
              flex-basis: 50%;
              margin-bottom: 20px;
            }
            .desc-4 img {
              display: block;
              width: 90%;
              margin: auto;
            }
            .faq {
              padding: 10px 12%;
              text-align: center;
              font-size: 18px;
            }
            .faq h2 {
              margin-top: 50px;
              font-weight: -500;
              font-size: 40px;
            }
            .accordion {
              margin: 60px auto;
              width: 100%;
              max-width: 750px;
            }
            .accordion li {
              list-style: none;
              width: 100%;
              padding: 5px;
            }
            .accordion li label {
              display: flex;
              align-items: center;
              padding: 20px;
              font-size: 18px;
              font-weight: 500;
              background-color: #303030;
              margin-bottom: 2px;
              cursor: pointer;
              position: relative;
            }
            label::after {
              content: '+';
              font-size: 34px;
              position: absolute;
              right: 20px;
              transition: transform 0.5s;
            }
            input[type="radio"] {
              display: none;
            }
            .accordion .content {
              background-color: #303030;
              text-align: left;
              padding: 0 20px;
              max-height: 0;
              overflow: hidden;
              transition: max-height 0.5s, padding 0.5s;
            }
            .accordion input[type="radio"]:checked+label+.content {
              max-height: 600px;
              padding: 30px 20px;
            }
            .accordion input[type="radio"]:checked+label::after {
              transform: rotate(135deg);
            }
            .faq .email-signup {
              max-width: 600px;
              margin: 20px auto 60px;
            }
            .faq small {
              font-size: 20px;
            }
            .hero_description {
              margin-bottom: 30px;
            }
            .footer,
            .footer a {
              color: #999;
              font-size: 0.9rem;
            }
            .footer p {
              margin-bottom: 1.5rem;
              padding-left: 50px;
            }
            .footer .footer-cols {
              display: grid;
              grid-template-columns: repeat(4,1fr);
              grid-gap: 2rem;
              padding-left: 50px;
            }
            .footer li {
              line-height: 1.9;
              list-style: none;
            }
            .languages_dropdown2 {
              background: transparent;
              border: none;
              color: white;
            }
            .dropdown2_container {
              border: 1px solid white;
              padding: 0.4rem;
              border-radius: 4px;
              background: rgba(0,0,0,0.4);
              width: 10%;
              margin-top: 16px;
              margin-left: 40px;
            }
            .drop {
              color: black;
            }
            .copyright-txt {
              font-size: 14px;
              margin-top: 20px;
              margin-bottom: 10px;
              color: #9b9696;
            }
            .signin_button a {
              text-decoration: none;
              color: white;
            }
          `}</style>
      </head>
      <main className="bg-gray-50">
        {/* Hero Section */}
        <section
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://devostock.com/static12/preview2/stock-photo-devostock-education-school-library-students-blur-open-book-4k-175984.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Unlimited Learning, Anytime, Anywhere
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              Explore. Learn. Achieve.
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Ready to learn and explore? Enter your email to create your
              membership.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full sm:w-64 p-3 rounded-md text-gray-800"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="py-16 px-6 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <img
                  src="assets/images/img2.png"
                  alt="TV"
                  className="rounded-lg shadow-md mb-4 md:mb-0"
                />
                <video
                  className="rounded-lg shadow-md"
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source src="assets/videos/video2.m4v" type="video/mp4" />
                </video>
              </div>
              <div className="md:w-1/2 md:pl-6 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">
                  Enjoy on your TV
                </h3>
                <p className="text-gray-700">
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  Blu-ray players, and more.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <img
                  src="assets/images/ggg.png"
                  alt="Languages"
                  className="rounded-lg shadow-md mb-4 md:mb-0"
                />
              </div>
              <div className="md:w-1/2 md:pl-6 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">
                  Explore New Languages
                </h3>
                <p className="text-gray-700">
                  Check out available languages and learn anytime, anywhere. One
                  signup, endless opportunities.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <img
                  src="assets/images/asddd.png"
                  alt="Devices"
                  className="rounded-lg shadow-md mb-4 md:mb-0"
                />
                <video
                  className="rounded-lg shadow-md"
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source
                    src="assets/videos/video-devices-in.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="md:w-1/2 md:pl-6 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">
                  Learn Anytime, Anywhere
                </h3>
                <p className="text-gray-700">
                  Access courses on your phone, tablet, and laptop. Learning is
                  always within reach.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <img
                  src="assets/images/img5.png"
                  alt="Kids"
                  className="rounded-lg shadow-md mb-4 md:mb-0"
                />
              </div>
              <div className="md:w-1/2 md:pl-6 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">
                  Create Profiles for Kids
                </h3>
                <p className="text-gray-700">
                  Let your children embark on adventures with their favorite
                  characters. Free with your membership.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul className="accordion">
          <li>
            <input type="radio" name="accordion" id="first" />
            <label htmlFor="first">
              What languages can I learn on My Learning?
            </label>
            <div className="content">
              <p>
                My Learning is currently offering a variety of languages courses
                of English and Hindi. Soon it will add many languages including
                Spanish, French, Mandarin, German, and more. We're constantly
                updating our offerings, so check back regularly for new
                languages!
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="second" />
            <label htmlFor="second">
              How does My Learning personalize my language learning experience?
            </label>
            <div className="content">
              <p>
                We use a combination of AI technology and input from your
                learning preferences to tailor lessons and activities to your
                needs. This ensures that you progress at your own pace and focus
                on areas that require improvement.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="third" />
            <label htmlFor="third">
              What type of support is available if I get stuck?
            </label>
            <div className="content">
              <p>
                We offer 24/7 chat support with language experts. Additionally,
                you can access forums and peer support groups to connect with
                other learners. You can also download your favourite courses
                with the iOS, Android, or Windows. Use downloads to watch while
                you're on the go and without an internet connection. .
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fourth" />
            <label htmlFor="fourth">How do I track my progress?</label>
            <div className="content">
              <p>
                My Learning provides a detailed dashboard that tracks your
                progress in real-time. You can see your improvements in various
                skills like reading, writing, speaking, and listening.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="fifth" />
            <label htmlFor="fifth">
              What makes My Learning different from other language learning
              platforms?
            </label>
            <div className="content">
              <p>
                Unlike traditional one-size-fits-all approaches, My Learning
                focuses on a personalized learning experience. Our platform
                adapts to your individual learning style and pace, providing
                unique, context-based learning scenarios that make language
                learning fun and effective.
              </p>
            </div>
          </li>
          <li>
            <input type="radio" name="accordion" id="sixth" />
            <label htmlFor="sixth">
              Can I learn more than one language at a time?
            </label>
            <div className="content">
              <p>
                Absolutely! My Learning supports multi-language learning. You
                can enroll in multiple courses simultaneously and switch between
                them as per your interest and schedule.
              </p>
            </div>
          </li>
        </ul>
        <small>
          Ready to learn and explore? Enter your email to create your membership
        </small>
        <br />
        <br />
        <p className="hero_description">
          <nobr>
            <input type="email" placeholder="Email Address" className="email" />
            <button className="get_started">Get Started</button>
          </nobr>
        </p>
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
   
        <p className="copyright-txt">My Learning</p>
      </footer>
    </>
  );
};

export default Homepage;
