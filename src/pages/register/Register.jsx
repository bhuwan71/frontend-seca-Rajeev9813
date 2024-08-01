import React, { useState } from "react";
import { toast } from "react-toastify";
import { registerUserApi } from "../../apis/Api";
import Navbar from "../../components/Navbar";
import {Link, useNavigate} from "react-router-dom"

const Register = () => {
  // State for 5 Fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State for Error Messages
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  // Handle input changes and reset error messages
  const handleFirstname = (e) => {
    setFirstName(e.target.value);
    setFirstNameError("");
  };
  const handleLastname = (e) => {
    setLastName(e.target.value);
    setLastNameError("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  // Validation
  const validate = () => {
    let isValid = true;

    if (firstName.trim() === "") {
      setFirstNameError("Firstname is Required!");
      isValid = false;
    }
    if (lastName.trim() === "") {
      setLastNameError("Lastname is Required!");
      isValid = false;
    }
    if (email.trim() === "") {
      setEmailError("Email is Required!");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is Required!");
      isValid = false;
    }
    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Confirm Password is Required!");
      isValid = false;
    }
    if (confirmPassword.trim() !== password.trim()) {
      setConfirmPasswordError("Password and Confirm Password don't match!");
      isValid = false;
    }

    return isValid;
  };

  // Submit button Function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please enter all fields!");
      return;
    }

    // Making json object
    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    registerUserApi(data).then((res) => {
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);

        setTimeout(()=>{
          navigate("/login")
        },200)
      }
      
    });
  };
  return (
    <>
      <div 
      className=" md:w-full   md:flex md:justify-center md:items-center"
        style={{
          backgroundImage:
            "url(../../assets/images/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
        }}
        
        
      >
        <form
                  className="w-[20rem] md:w-1/3 mx-auto pt-20 md:pt-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "50px",
            borderRadius: "10px",
          }}
        >
          <h2 style={{ textAlign: "center", fontWeight: "bold" }} className="text-3xl text-green-500">Register</h2>
          <label style={{ fontWeight: "bold" }}>Firstname</label>
          <input
            onChange={handleFirstname}
            value={firstName}
            type="text"
            className="form-control"
            placeholder="Enter your firstname"
            style={{ marginBottom: "10px" }}
          />
          {firstNameError && <p className="text-danger">{firstNameError}</p>}

          <label style={{ fontWeight: "bold" }}>Lastname</label>
          <input
            onChange={handleLastname}
            value={lastName}
            type="text"
            className="form-control w-full"
            placeholder="Enter your lastname"
            style={{ marginBottom: "10px" }}
          />
          {lastNameError && <p className="text-danger">{lastNameError}</p>}

          <label style={{ fontWeight: "bold" }}>Email</label>
          <input
            onChange={handleEmail}
            value={email}
            type="text"
            className="form-control"
            placeholder="Enter your email"
            style={{ marginBottom: "10px" }}
          />
          {emailError && <p className="text-danger">{emailError}</p>}

          <label style={{ fontWeight: "bold" }}>Password</label>
          <input
            onChange={handlePassword}
            value={password}
            type="password"
            className="form-control"
            placeholder="Enter your password"
            style={{ marginBottom: "10px" }}
          />
          {passwordError && <p className="text-danger">{passwordError}</p>}

          <label style={{ fontWeight: "bold" }}>Confirm Password</label>
          <input
            onChange={handleConfirmPassword}
            value={confirmPassword}
            type="password"
            className="form-control"
            placeholder="Enter your confirm password"
            style={{ marginBottom: "10px" }}
          />
          {confirmPasswordError && (
            <p className="text-danger">{confirmPasswordError}</p>
          )}

          <button
            onClick={handleSubmit}
            className="btn btn-dark mt-2 w-100 bg-orange-400"
            style={{ fontWeight: "bold" }}
          >
            Create an Account!
          </button>

          <p className="mt-4 text-center">Already Existing User ? <Link to={"/login"} className="text-yellow-300">Sign In</Link></p>
        </form>
      </div>
      {/* <footer className="footer">
        <p>
          Questions? Call <a href="">9813420243</a>
        </p>
        <div className="footer-cols">
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Speed Test</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Help Centre</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Ways to Watch</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
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
              max-height: 
  
  600px;
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
          `}</style> */}
    </>
  );
};

export default Register;
