import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import ProgressBarChart from './ProgressBarChart';
import TimeSpentChart from './TimeSpentChart';
import { Link, useNavigate } from 'react-router-dom';
import { getAllCourse } from '../../apis/Api';
<<<<<<< HEAD


const Sidebar = () => {
    
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="assets/images/logo.png" alt="Logo" />
      </div>
      <ul className="sidebar-nav">
        <li className="active"><FaHome /> Home</li>
        <li><FaComments /> Course Overview</li>
        <li><FaCalendarAlt /> Chat</li>
        <li><FaBook /> Schedule</li>
        <li><FaCog /> Resources</li>
        <li><FaQuestionCircle /> Quiz</li>
      </ul>
      <div className="sidebar-footer">
        <ul>
          <li><FaLifeRing /> Help and Support</li>
          <li onClick={() => window.location.href = "/login"}><FaSignOutAlt /> Log out</li>
        </ul>
      </div>
    </div>
  );
};

const Header = ({ user, toggleDarkMode, isDarkMode }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Evening';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="header">
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="user-section">
        <FaBell className="icon" />
        {isDarkMode ? (
          <FaSun className="icon" onClick={toggleDarkMode} />
        ) : (
          <FaMoon className="icon" onClick={toggleDarkMode} />
        )}
        <Link to="profile">
        <div className="user-profile">
          <p>{getGreeting()}, {user.firstName} {user.lastName}</p>
          <img src={user.profilePic || 'assets/images/profile.png'} alt="User" />
        </div>
        </Link>
      </div>
    </div>
  );
};
=======
import Sidebar from './SideBar';
import Header from './Header';
import RequestForm from './RequestForm';
import { useSelector } from 'react-redux';
import Notices from './Notices';
import Routines from './Routines';
import Learnings from './Learnings/Learnings';
import Quiz from './Quiz/Quiz';
import Results from './Results/Results';
import Profile from './Profile/Profile';
import Classes from './Classes/Classes';
>>>>>>> 4818a34177d275dad19ef3f644b53320f14a8295

const Widget = ({ title, progress }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <p>You Completed {progress}%</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

const ProgressBar = ({ label, progress }) => {
  useEffect(() => {
    const progressBar = document.querySelector(`#${label.replace(" ", "-")}`);
    progressBar.style.width = `${progress}%`;
  }, [label, progress]);

  return (
    <div className="progress-bar-container">
      <p>{label}</p>
      <div className="progress-bar">
        <div className="progress" id={label.replace(" ", "-")}></div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [courses, setCourses] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const componentNumber = useSelector(store=>store.userDashboard.componentNumber)
  

  useEffect(() => {
    const user = (JSON.parse(localStorage.getItem("user"))); // Replace with the actual user ID
    setUser(user);
    // Fetch user data
    // axios.get(`http://localhost:5000/api/users/${userId}`)
    //   .then(response => {
    //     setUser(response.data.user);
    //     console.log(user);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching user data:', error);
    //   });

    // Fetch courses data
    getAllCourse().then(response => {
        setCourses(response.data.course);
      })
      .catch(error => {
        console.error('Error fetching courses data:', error);
      });
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // const progressBarData = courses.map(course => ({
  //   name: course.courseName,
  //   progress: Math.floor(Math.random() * 100),
  // }));

  // const timeSpentData = [
  //   { day: 'Sun', hours: 2 },
  //   { day: 'Mon', hours: 4 },
  //   { day: 'Tue', hours: 3 },
  //   { day: 'Wed', hours: 5 },
  //   { day: 'Thu', hours: 4 },
  //   { day: 'Fri', hours: 3 },
  //   { day: 'Sat', hours: 2 },
  // ];

  const components= [<Notices />, <RequestForm/>,<Routines />, <Learnings />, <Quiz />, <Results />, <Profile />, <Classes />]
  const componentToRender= components[componentNumber];

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar />
      <div className="main-content">
        <Header user={user} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        {/* This was previous dashboard */}
        <div>
        {/*<div className="dashboard">
          <h2>Progress Report on your Revision and Readings</h2>
          <div className="widgets">
            <Widget title="Reading" progress={75} />
            <Widget title="Listening" progress={56} />
            <Widget title="Speaking" progress={48} />
            <Widget title="Grammar" progress={33} />
          </div>
          <div className="charts">
            <div className="time-spent-chart">
              <h3>Time Spent</h3>
              <TimeSpentChart data={timeSpentData} />
            </div>
            <div className="current-progress">
              <h3>Current Course</h3>
              <div className="progress-bars">
                {courses.map((course, index) => (
                  <ProgressBar key={index} label={course.courseName} progress={Math.floor(Math.random() * 100)} />
                ))}
              </div>
              <div className="your-progress">
                <h3>Your Progress</h3>
                <ProgressBarChart data={progressBarData} />
              </div>
            </div>
          </div>
          <div className="user-details">
            <div className="user-stats">
              <div className="profile-pic">
                <img src={user.profilePic || 'assets/images/profile.png'} alt="User" />
              </div>
              <h3>{user.firstName} {user.lastName}</h3>
              <p>Student</p>
              <div className="stats">
                <p>French: Beginner - {Math.floor(Math.random() * 100)}%</p>
                <p>Spanish: Advanced - {Math.floor(Math.random() * 100)}%</p>
                <p>English: Advanced - {Math.floor(Math.random() * 100)}%</p>
              </div>
            </div>
            <div className="your-instructor">
              <h3>Your Instructor</h3>
              <div className="instructor-icons">
                {/* Replace with actual instructor images */}
                {/*<img src="assets/images/profile.png" alt="Instructor" />
                <img src="assets/images/profile.png" alt="Instructor" />
                <img src="assets/images/profile.png" alt="Instructor" />
                <img src="assets/images/profile.png" alt="Instructor" />
              </div>
            </div>
          </div>
        </div> */}
        </div>

        {/* New Dashboard */}
        {componentToRender}
        
        
      </div>
    </div>
  );
};



export default Dashboard;
