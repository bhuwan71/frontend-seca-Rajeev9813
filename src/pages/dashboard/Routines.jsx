import React from "react";
import { FaChalkboardTeacher, FaClock, FaGlobe } from "react-icons/fa";

const classSchedule = [
  {
    day: "Monday",
    time: "9:00 AM - 10:30 AM",
    section: "English - Beginner",
    teacher: "Ms. Smith",
  },
  {
    day: "Tuesday",
    time: "11:00 AM - 12:30 PM",
    section: "English - Intermediate",
    teacher: "Mr. Johnson",
  },
  {
    day: "Wednesday",
    time: "1:00 PM - 2:30 PM",
    section: "English - Advanced",
    teacher: "Dr. Brown",
  },
  {
    day: "Thursday",
    time: "3:00 PM - 4:30 PM",
    section: "English - Conversational",
    teacher: "Mrs. Davis",
  },
];

const Routine = () => {
  return (
    <div>
      <h1 className="text-4xl py-2 font-extrabold text-center mb-5 text-indigo-600">
        Class Schedule
      </h1>
      <div className=" mx-auto  px-4 flex justify-center flex-col">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {classSchedule?.map((classInfo, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-200 to-indigo-300 shadow-lg rounded-xl p-6 transform transition-transform hover:scale-105"
            >
              <div className="flex justify-between items-center ">
                <h2 className="text-2xl font-bold text-indigo-800 flex items-center">
                  <FaGlobe className="text-blue-500 mr-2" />
                  {classInfo.section}
                </h2>
                <span className="text-indigo-500">{classInfo.day}</span>
              </div>
              <div className="text-gray-700 mb-4">
                <p className="flex items-center text-lg">
                  <FaClock className="text-green-500 mr-2" />
                  {classInfo?.time}
                </p>
              </div>
              <div className="text-gray-700">
                <p className="flex items-center text-lg">
                  <FaChalkboardTeacher className="text-purple-500 mr-2" />
                  {classInfo?.teacher}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default Routine;