import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
import RefreshHandler from "./components/RefreshHandler";
import { useState } from "react";
// import Profile from "./pages/profile/Profile";
// import AdminRoutes from "./protected_routes/AdminRoutes";

// Task create for login and register
function App() {

  //isAuthenticated prevent user to redirect to homepage if user try navigating throungh url
  //Eg- if user try to navigate using url localhost:3000/login then it will redirect to homepage if token or use is there in local storage
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({element}) =>{
    return isAuthenticated ? element : element;
  };

  return (

    <Router>
      {/* <Navbar/> */}
      <ToastContainer />
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Homepage />} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        {/* <Route element={<AdminRoutes/>}> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/update/:id" element={<UpdateCourse />} />
        {/* </Route> */}

        {/* User Routes */}
          <Route path="/profile" element={<Profile  />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
