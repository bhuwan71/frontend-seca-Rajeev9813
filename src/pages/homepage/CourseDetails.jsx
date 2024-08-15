import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaBook, FaDollarSign, FaTag, FaImage } from "react-icons/fa";
import Api from "../../apis/Api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await Api.get(`/course/get_single_course/${id}`);
      if (res) {
        setCourse(res.data.course);
      }
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mt-20  mx-auto p-6 bg-white rounded-lg shadow-md ">
        {course && (
          <>
            <div className="flex items-center mb-4">
              <FaBook className="text-3xl text-blue-500 mr-4" />
              <h1 className="text-3xl font-bold">{course.courseName}</h1>
            </div>
            <p className="text-gray-700 text-lg mb-4">
              {course.courseDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <FaDollarSign className="text-2xl text-green-500 mr-2" />
                <span className="text-lg font-medium">
                  Price: ${course.coursePrice}
                </span>
              </div>
              <div className="flex items-center">
                <FaTag className="text-2xl text-yellow-500 mr-2" />
                <span className="text-lg font-medium">
                  Category: {course.courseCategory}
                </span>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={() => {
                  navigate(`/admin/classSchedule/${course._id}`);
                }}
                className="bg-blue-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                View Class Schedule
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
