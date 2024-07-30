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
import UpdateCourse from "./pages/admin/update_course/UpdateCourse";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import AdminRoutes from "./protected_routes/AdminRoutes";
// import Profile from "./pages/profile/Profile";
// import AdminRoutes from "./protected_routes/AdminRoutes";

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
        <Route path="/admin/update/:id" element={<UpdateCourse />} />
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
