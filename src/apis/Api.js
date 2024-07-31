import axios from "axios";

// creating backend Config!
const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

//make a config for token
const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

// Test API
export const testApi = () => Api.get("/test");

// Register Api
export const registerUserApi = (data) => Api.post("/api/user/create", data);

// login api
export const loginUserApi = (data) => Api.post("/api/user/login", data);

// create course
export const createCourseApi = (data) => Api.post("/api/course/create", data);

//get single courses
export const getSingleCourse = (id) =>
  Api.get(`/api/course/get_single_course/${id}`);

// get all courses
export const getAllCourse = () => Api.get("/api/course/get_all_course", config);

// delete course
export const deleteCourse = (id) =>
  Api.delete(`/api/course/delete_course/${id}`, config);

// update course
export const updateCourse = (id, data) =>
  Api.put(`/api/course/update_course/${id}`, data, config);

// http://localhost:5000/test
