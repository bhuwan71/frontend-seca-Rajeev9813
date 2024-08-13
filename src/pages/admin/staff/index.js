import React from "react";
import { FaEnvelope, FaPhone, FaUserTie } from "react-icons/fa";
import { MdWork, MdEmail, MdPhone } from "react-icons/md";
import Layout from "../admin_dashboard/layout";

const StaffDetails = () => {
  // Static data for multiple staff members
  const staffMembers = [
    {
      id: 1,
      profilePicture:
        "https://static.preply.com/static/ssr/_next/static/images/vacancy-sidebanner-image-0062481e3f40bf2054e0210af3255378.jpg",
      name: "Jane Smith",
      role: "Instructor",
      department: "Science Department",
      email: "jane.smith@example.com",
      phone: "123-456-7890",
      hireDate: "2021-08-15",
    },
    {
      id: 2,
      profilePicture:
        "https://m.media-amazon.com/images/M/MV5BYzkxNTk3MzQtMjE0ZS00NjlkLTg5MzAtZDM4ZWE3ZDA4NjRiXkEyXkFqcGdeQXVyNTUwMDU2ODc@._V1_.jpg",
      name: "John Doe",
      role: "Administrator",
      department: "Admin Department",
      email: "john.doe@example.com",
      phone: "123-456-7891",
      hireDate: "2020-05-12",
    },
    {
      id: 3,
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuzTx2HsBrZ8rAXL-B5WvnqID-T0ooKv9Rg&s",
      name: "Alice Johnson",
      role: "Coordinator",
      department: "Events Department",
      email: "alice.johnson@example.com",
      phone: "123-456-7892",
      hireDate: "2019-07-23",
    },
    {
      id: 4,
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/d/dc/Jon_Bon_Jovi_at_Health_Datapalooza_Event.jpg",
      name: "Robert Brown",
      role: "IT Support",
      department: "IT Department",
      email: "robert.brown@example.com",
      phone: "123-456-7893",
      hireDate: "2018-09-10",
    },
    {
      id: 5,
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz0azVWejK5-dmSZ7Q-Rz02NOXApEOZFqVEQ&s",
      name: "Emma Wilson",
      role: "Librarian",
      department: "Library Department",
      email: "emma.wilson@example.com",
      phone: "123-456-7894",
      hireDate: "2017-11-04",
    },
    {
      id: 6,
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSASwDeZGzcdBkEgNMK1d9HfPLXLMRgM960zg&s",
      name: "Michael Davis",
      role: "Instructor",
      department: "Mathematics Department",
      email: "michael.davis@example.com",
      phone: "123-456-7895",
      hireDate: "2021-01-16",
    },
  ];

  return (
    <>
      <Layout>
          <h1 className="text-3xl px-5 font-bold font-serif">Staff Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {staffMembers.map((staff) => (
            <div
              key={staff.id}
              className="group relative bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={staff.profilePicture}
                alt={`${staff.name}'s profile`}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{staff.name}</h2>
                <p className="text-gray-600">{staff.role}</p>
              </div>
              <div className="absolute inset-0 bg-gray-800 bg-opacity-75 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition duration-300 ease-in-out">
                <div className="flex items-center mb-2">
                  <MdEmail className="mr-2" />
                  <a href={`mailto:${staff.email}`} className="hover:underline">
                    {staff.email}
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <MdPhone className="mr-2" />
                  <a href={`tel:${staff.phone}`} className="hover:underline">
                    {staff.phone}
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <MdWork className="mr-2" />
                  <p>{staff.department}</p>
                </div>
                <div className="flex items-center">
                  <FaUserTie className="mr-2" />
                  <p>Joined: {new Date(staff.hireDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default StaffDetails;
