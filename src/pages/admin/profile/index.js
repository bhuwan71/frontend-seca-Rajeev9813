import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Layout from "../admin_dashboard/layout";

const AdminProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("adminData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center bg-gray-100 min-h-screen py-12 px-4">
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md transform transition duration-300 hover:scale-105">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <FaUser className="text-6xl text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mt-6">
              {userData?.firstName} {userData?.lastName}
            </h2>
            <p className="text-lg text-blue-500 mt-2">{userData?.isAdmin ? "Administrator" : "User"}</p>
          </div>
          <div className="mt-8">
            <div className="flex items-center mb-6">
              <FaEnvelope className="text-blue-600 text-xl mr-3" />
              <span className="text-gray-700 text-lg">Email: {userData?.email}</span>
            </div>
            <div className="flex items-center mb-6">
              <FaPhone className="text-blue-600 text-xl mr-3" />
              <span className="text-gray-700 text-lg">Phone: {userData?.phone || "N/A"}</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 text-xl mr-3" />
              <span className="text-gray-700 text-lg">Location: {userData?.address || "N/A"}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminProfile;
