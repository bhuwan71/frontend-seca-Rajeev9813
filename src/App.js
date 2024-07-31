import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from './components/Navbar';
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// Toast Config
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/admin/admin_dashboard/AdminDashboard";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import AdminRoutes from "./protected_routes/AdminRoutes";
// import Profile from "./pages/profile/Profile";
// import AdminRoutes from "./protected_routes/AdminRoutes";

import Course from "./pages/admin/course";
import CourseAction from "./pages/admin/course/Action";
import Users from "./pages/admin/user";
import UserAction from "./pages/admin/user/Action";
import AdminProfile from "./pages/admin/profile";

// Task create for login and register
function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        {/* <Route element={<AdminRoutes/>}> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/courses" element={<Course />} />
        <Route path="/admin/courses/CourseAdd" element={<CourseAction />} />
        <Route path="/admin/courses/:id" element={<CourseAction />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/user/UserAdd" element={<UserAction />} />
        <Route path="/admin/user/:id" element={<UserAction />} />

        {/* </Route> */}

        {/* User Routes */}
        <Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
