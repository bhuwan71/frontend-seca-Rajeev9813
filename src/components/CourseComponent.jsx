import React from "react";
import { FaTag, FaMoneyBillAlt } from "react-icons/fa";

const getPlaceholderImage = (firstLetter) => {
  const colors = {
    A: "FF0000",
    B: "00FF00",
    C: "0000FF",
    D: "FFFF00",
    E: "FF00FF",
    F: "00FFFF",
    // Add more letters and colors as needed
  };

  const color = colors[firstLetter.toUpperCase()] || "CCCCCC";
  return `https://via.placeholder.com/100/${color}/FFFFFF?text=${firstLetter.toUpperCase()}`;
};

const CourseComponent = ({ course }) => {
  const formattedDate = new Date(course.createdAt).toLocaleDateString();
  const firstLetter = course.courseName.charAt(0);

  return (
    <tr className="border-b">
      <td className="py-2 px-4">
        <img
          src={getPlaceholderImage(firstLetter)}
          alt={course.courseName}
          className="w-16 h-16 object-cover rounded-md"
        />
      </td>
      <td className="py-2 px-4">
        <h2 className="text-lg font-bold text-gray-900">{course.courseName}</h2>
        <p className="text-xs text-gray-500">{formattedDate}</p>
      </td>
      <td className="py-2 px-4 flex items-center">
        <FaTag className="text-gray-500 mr-2" />
        <span className="text-gray-700 py-4 font-medium">
          {course.courseCategory}
        </span>
      </td>
      <td className="py-2 px-4">
        <FaMoneyBillAlt className="text-gray-500 mr-2" />
        <span className="text-gray-700 font-medium">${course.coursePrice}</span>
      </td>
      <td className="py-2 px-4">
        <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          View
        </button>
      </td>
    </tr>
  );
};

export default CourseComponent;
