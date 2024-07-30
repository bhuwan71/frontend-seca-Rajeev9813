/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createCourseApi, deleteCourse, getAllCourse } from "../../../apis/Api";
import "./Dashboard.css"; // Importing Dashboard.css for internal styling
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import Layout from "./layout";

const AdminDashboard = () => {
  const [course, setCourse] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseCategory, setCourseCategory] = useState("Basic");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseImage, setCourseImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    getAllCourse()
      .then((res) => {
        setCourse(res.data.course);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleImage = (event) => {
    const file = event.target.files[0];
    setCourseImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("coursePrice", coursePrice);
    formData.append("courseCategory", courseCategory);
    formData.append("courseDescription", courseDescription);
    formData.append("courseImage", courseImage);

    createCourseApi(formData)
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.data.message);
          getAllCourse().then((res) => {
            setCourse(res.data.course);
          });
          resetForm();
        }
      })
      .catch((error) => {
        handleApiError(error);
      });
  };

  const handleDelete = (id) => {
    const confirmDialog = window.confirm("Are you sure to delete this course?");
    if (confirmDialog) {
      deleteCourse(id)
        .then((res) => {
          if (res.status === 201) {
            toast.success(res.data.message);
            getAllCourse().then((res) => {
              setCourse(res.data.course);
            });
          }
        })
        .catch((error) => {
          handleApiError(error);
        });
    }
  };

  const resetForm = () => {
    setCourseName("");
    setCoursePrice("");
    setCourseCategory("Basic");
    setCourseDescription("");
    setCourseImage("");
    setPreviewImage("");
  };

  const handleApiError = (error) => {
    if (error.response) {
      if (error.response.status === 400) {
        toast.warning(error.response.data.message);
      } else if (error.response.status === 500) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <Layout>
        <h1 className="text-4xl text-center  py-20">
          Welcome to My Learning System
        </h1>
      </Layout>
    </div>
  );
};

export default AdminDashboard;
