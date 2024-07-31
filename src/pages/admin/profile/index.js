import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Api from "../../../apis/Api";
import Layout from "../admin_dashboard/layout";

const AdminProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Api.get("/admin/profile");
        setUserData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // if (loading) return <div className="text-center py-10">Loading...</div>;
  // if (error) return <div className="text-center py-10">Error loading data</div>;

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                <FaUser className="text-4xl text-gray-600" />
              </div>
              <h2 className="text-2xl font-bold mt-4">User Name : {userData?.name}</h2>
              <p className="text-gray-600 mt-1">{userData?.role}</p>
            </div>
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-gray-600 mr-2" />
                <span className="text-gray-800">Email:{userData?.email}</span>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-gray-600 mr-2" />
                <span className="text-gray-800">Phone :{userData?.phone}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-600 mr-2" />
                <span className="text-gray-800">Location:{userData?.address}</span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminProfile;
