import { Navigate, Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import "./App.css";
// import Navbar from './components/Navbar';
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// Toast Config
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/admin/admin_dashboard/AdminDashboard";
import UpdateCourse from "./pages/admin/update_course/UpdateCourse";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import AdminRoutes from "./protected_routes/AdminRoutes";
import RefreshHandler from "./components/RefreshHandler";
import { useEffect, useState } from "react";
// import Profile from "./pages/profile/Profile";
// import AdminRoutes from "./protected_routes/AdminRoutes";

// Task create for login and register
const App = (()=>{  

  const [loggedInUser, setLoggedInUser] = useState('')


  //isAuthenticated prevent user to redirect to homepage if user try navigating throungh url
  //Eg- if user try to navigate using url localhost:3000/login then it will redirect to homepage if token or use is there in local storage
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({element}) =>{
    return isAuthenticated ? element : element;
  };

  const ProtectedRoute = ({ component }) => {
    const navigate = useNavigate();
    useEffect(()=>{
      setLoggedInUser(JSON.parse(localStorage.getItem("user")));
      // return loggedInUser ? <component /> : (toast.error("Unauthorized access 401") navigate("/login"));

    },[])
    if(loggedInUser){
      return component;
    }else{
      <Navigate to={"/login"} />
    }
  
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
          <Route path="/profile" element={<ProtectedRoute component={<Profile />} />} />
          <Route path="/dashboard" element={<ProtectedRoute component={<Dashboard />} />} />
      </Routes>
    </Router>
  );
});

export default App;
