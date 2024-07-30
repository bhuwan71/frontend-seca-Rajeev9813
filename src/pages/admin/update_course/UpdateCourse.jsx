import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getSingleCourse, updateCourse } from "../../../apis/Api";

const UpdateCourse = () => {
  // get id from url
  const { id } = useParams();

  // get course information from (Backend)
  useEffect(() => {
    getSingleCourse(id)
      .then((res) => {
        console.log(res.data.course);
        setCourseName(res.data.course.courseName);
        setCoursePrice(res.data.course.coursePrice);
        setCourseCategory(res.data.course.courseCategory);
        setCourseDescription(res.data.course.courseDescription);
        setOldImage(res.data.course.courseImage);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // fill all the info in each fields

  // make a use state
  const [courseName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  // state for image
  const [courseNewImage, setCourseNewImage] = useState(null);
  const [previewNewImage, setPreviewNewImage] = useState(null);
  const [oldImage, setOldImage] = useState("");

  // image upload handler
  const handleImage = (event) => {
    const file = event.target.files[0];
    setCourseNewImage(file); // for backend
    setPreviewNewImage(URL.createObjectURL(file));
  };

  //update course
  const handleUpdate = (e) => {
    e.preventDefault();

    //make a form data
    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("coursePrice", coursePrice);
    formData.append("courseCategory", courseCategory);
    formData.append("courseDescription", courseDescription);
    formData.append("courseImage", courseNewImage);

    if (courseNewImage) {
      formData.append("courseImage", courseNewImage);
    }

    updateCourse(id, formData)
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        if (error.response.status === 500) {
          toast.error(error.response.data.message);
        } else if (error.response.status === 400) {
          toast.error(error.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="container mt-3">
        <h2>
          Update Course for <span className="text-danger">{courseName}</span>
        </h2>

        <div className="d-flex gap-3">
          <form action="">
            <label htmlFor="">Course Name</label>
            <input
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Enter your course name"
            />

            <label className="mt-2" htmlFor="">
              Course Price
            </label>
            <input
              value={coursePrice}
              onChange={(e) => setCoursePrice(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Enter your course name"
            />

            <label className="mt-2">Choose category</label>
            <select
              onChange={(e) => setCourseCategory(e.target.value)}
              className="form-control"
            >
              <option value="Basic">Basic</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
              <option value="Professional">Professional</option>
            </select>

            <label className="mt-2">Enter description</label>
            <textarea
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              className="form-control"
            ></textarea>

            <label className="mt-2">Choose course Image</label>
            <input
              onChange={handleImage}
              type="file"
              className="form-control"
            />

            <button
              className="btn btn-danger w-100 mt-2"
              onClick={handleUpdate}
            >
              Update Course
            </button>
          </form>
          <div className="image section">
            <h6>Previewing Old Image</h6>
            <img
              height={"150px"}
              width={"300px"}
              src={`http://localhost:5000/course/${oldImage}`}
              alt=""
              className="img-fluid rounded-4 object-fit-cover"
            />
          </div>

          {previewNewImage && (
            <>
              <h6>New Course Image</h6>
              <img
                height={"200px"}
                width={"300"}
                className="image-fluid rounded-4 object-fit-cover"
                src={previewNewImage}
                alt=""
              />{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};

//exporting
export default UpdateCourse;
