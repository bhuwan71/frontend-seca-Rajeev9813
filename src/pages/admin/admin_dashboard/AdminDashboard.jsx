/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createCourseApi, deleteCourse, getAllCourse } from "../../../apis/Api";
import "./Dashboard.css"; // Importing Dashboard.css for internal styling
import Sidebar from "../../../components/Sidebar";

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
      <Sidebar />
      {/* <div className="admin-header text-center mt-5">
        <h1 className="text-white">Admin Dashboard</h1>
        <h3 className="text-white">My Learning</h3>
      </div>

      <div className="add-course-button text-end mt-3">
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Course
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">
                Create a new course!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label text-dark">Course Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setCourseName(e.target.value)}
                    value={courseName}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark">Course Price</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setCoursePrice(e.target.value)}
                    value={coursePrice}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark">
                    Choose category
                  </label>
                  <select
                    className="form-select"
                    onChange={(e) => setCourseCategory(e.target.value)}
                    value={courseCategory}
                  >
                    <option value="Basic">Basic</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark">
                    Enter description
                  </label>
                  <textarea
                    className="form-control"
                    onChange={(e) => setCourseDescription(e.target.value)}
                    value={courseDescription}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label text-dark">
                    Choose course Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleImage}
                  />
                </div>
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Course Preview"
                    className="img-fluid rounded mt-2"
                  />
                )}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="course-table mt-5">
        <table className="table table-striped table-hover text-white">
          <thead className="table-dark">
            <tr>
              <th>Course Image</th>
              <th>Course Name</th>
              <th>Course Price</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {course.map((singleCourse) => (
              <tr key={singleCourse._id}>
                <td>
                  <img
                    src={`http://localhost:5000/course/${singleCourse.courseImage}`}
                    alt="Course"
                    className="img-thumbnail"
                  />
                </td>
                <td>{singleCourse?.courseName}</td>
                <td>${singleCourse?.coursePrice}</td>
                <td>{singleCourse?.courseCategory}</td>
                <td>{singleCourse?.courseDescription}</td>
                <td>
                  <Link
                    to={`/admin/update/${singleCourse._id}`}
                    className="btn btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(singleCourse._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="footer fixed-bottom bg-dark text-white">
        <div className="footer-content">
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
          <div className="languages-dropdown">
            <i className="bi bi-globe"></i>
            <select
              name="languages"
              id="languagesSelect"
              className="languages-dropdown-select"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
        </div>
        <p className="copyright-txt">My Learning</p>
      </footer> */}
    </div>
  );
};

export default AdminDashboard;
