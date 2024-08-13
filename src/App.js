import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
// import Navbar from './components/Navbar';
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// Toast Config
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/admin/admin_dashboard/AdminDashboard";
import Profile from "./pages/profile/Profile";
import AdminRoutes from "./protected_routes/AdminRoutes";
import RefreshHandler from "./components/RefreshHandler";
import { useEffect, useState } from "react";
// import Profile from "./pages/profile/Profile";
// import AdminRoutes from "./protected_routes/AdminRoutes";

import Course from "./pages/admin/course";
import CourseAction from "./pages/admin/course/Action";
import Users from "./pages/admin/user";
import UserAction from "./pages/admin/user/Action";
import AdminProfile from "./pages/admin/profile";
import Quizzes from "./pages/admin/quiz";
import QuizAction from "./pages/admin/quiz/Action";
import QuizComponent from "./pages/homepage/Quiz";
import CourseList from "./pages/homepage/Course";
import AboutUs from "./pages/homepage/AboutUs";
import CareerPage from "./pages/homepage/Career";
import StaffDetails from "./pages/admin/staff";
import ClassSchedule from "./pages/admin/classSchedule";
import FAQ from "./pages/admin/faq";
import CourseDetails from "./pages/homepage/CourseDetails";
import RequestForm from "./pages/dashboard/RequestForm";
import store from "./components/utils/store";
import { Provider } from "react-redux";
import Dashboard from "./pages/dashboard/Dashboard";
import AdminLoginForm from "./pages/login/AdminLogin";
import QuizResults from "./pages/admin/results";

// Task create for login and register
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});

  //isAuthenticated prevent user to redirect to homepage if user try navigating throungh url
  //Eg- if user try to navigate using url localhost:3000/login then it will redirect to homepage if token or use is there in local storage
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : element;
  };

  const ProtectedRoute = ({ component }) => {
    const navigate = useNavigate();

    if (isAuthenticated) {
      return component;
    } else {
      <Navigate to={"/login"} />;
      return null;
    }
  };

  return (
    <Provider store={store}>
      <Router>
        {/* <Navbar/> */}
        <ToastContainer />
        <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Homepage />} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLoginForm />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/quizzes" element={<QuizComponent />} />

          {/* Admin Routes */}
          <Route element={<AdminRoutes />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/admin/courses" element={<Course />} />
            <Route path="/admin/courses/CourseAdd" element={<CourseAction />} />
            <Route path="/admin/course/:id" element={<CourseAction />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/user/UserAdd" element={<UserAction />} />
            <Route path="/admin/user/:id" element={<UserAction />} />
            <Route path="/admin/quizzes" element={<Quizzes />} />
            <Route path="/admin/quizzes/QuizzesAdd" element={<QuizAction />} />
            <Route path="/admin/quizzes/:id" element={<QuizAction />} />
            <Route path="/admin/ticket" element={<Quizzes />} />
            <Route path="/admin/staff" element={<StaffDetails />} />
            <Route path="/admin/classSchedule" element={<ClassSchedule />} />
            <Route path="/admin/quizResult" element={<QuizResults />} />

            <Route
              path="/admin/classSchedule/:id"
              element={<CourseDetails />}
            />
            <Route path="/admin/faq" element={<FAQ />} />
          </Route>
          {/* User Routes */}
          <Route
            path="/profile"
            element={<ProtectedRoute component={<Profile />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute component={<Profile />} />}
          />
          <Route
            path="/dashboard"
            element={<ProtectedRoute component={<Dashboard />} />}
          />
          <Route path="/dashboard/request" element={<RequestForm />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
