import axios from "axios";

// creating backend Config!
const Api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
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

// get all courses
export const getAllCourse = () => Api.get("/api/course/get_all_course", config);

// http://localhost:5000/test
export default Api;