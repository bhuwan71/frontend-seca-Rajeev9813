import React from "react";
import { FaTachometerAlt, FaUserCog, FaChartLine, FaQuestionCircle, FaUsers } from "react-icons/fa";
import "./Dashboard.css"; // Importing Dashboard.css for any additional internal styling
import Layout from "./layout";

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to My Learning System
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Manage your learning system effectively with the tools below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-blue-600 transition">
            <FaTachometerAlt className="text-3xl" />
            <span className="text-xl font-semibold">Dashboard</span>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-green-600 transition">
            <FaUserCog className="text-3xl" />
            <span className="text-xl font-semibold">Admin Settings</span>
          </div>
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-purple-600 transition">
            <FaChartLine className="text-3xl" />
            <span className="text-xl font-semibold">Quizzes</span>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-yellow-600 transition">
            <FaQuestionCircle className="text-3xl" />
            <span className="text-xl font-semibold">FAQ</span>
          </div>
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:bg-red-600 transition">
            <FaUsers className="text-3xl" />
            <span className="text-xl font-semibold">User Management</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
