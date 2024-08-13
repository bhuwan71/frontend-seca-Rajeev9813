import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import Api from "../../apis/Api";
import Navbar from "../../components/Navbar";
import CourseComponent from "../../components/CourseComponent";
import Footer from "../../components/Footer";

const CourseList = () => {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await Api.get("/course/get_all_course");
      if (res) {
        setTableData(res?.data?.course);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-blue-500 text-4xl" />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-32 px-8">
        {tableData?.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((course, index) => (
                <CourseComponent key={index} course={course} />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-700">No courses available.</p>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default CourseList;
