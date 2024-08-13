import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaHome } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import Api from "../../apis/Api";

const AdminLoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await Api?.post("/user/login", {
          email: formData.email,
          password: formData.password,
        });
        if (response) {
          localStorage?.setItem("token", response.data.token);
          localStorage?.setItem(
            "adminData",
            JSON.stringify(response?.data?.userData)
          );
          toast.success("Logged in successfully!");
          navigate("/admin/dashboard");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-2 relative">
              <FaLock className="text-gray-500 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
              <div
                className="absolute right-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="text-gray-500" />
                ) : (
                  <AiFillEye className="text-gray-500" />
                )}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center mt-6 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg shadow hover:bg-gray-200 transition duration-300"
        >
          <FaHome className="mr-2" />
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default AdminLoginForm;
