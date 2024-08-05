import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import Api from "../../apis/Api";
import Navbar from "../../components/Navbar";
import CourseComponent from "../../components/CourseComponent";

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
                <th className="py-2 px-4 border-b">Price</th>
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
      <footer className="footer">
        <p>
          Questions? Call <a href="">9813420243</a>
        </p>
        <div className="footer-cols">
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Investor Relations</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Speed Test</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Help Centre</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Cookie Preferences</a>
            </li>
            <li>
              <a href="">Legal Notices</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Account</a>
            </li>
            <li>
              <a href="">Ways to Watch</a>
            </li>
            <li>
              <a href="">Corporate Information</a>
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
    </>
  );
};

export default CourseList;
