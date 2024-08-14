import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';
import ProgressBarChart from './ProgressBarChart';
import TimeSpentChart from './TimeSpentChart';
import { getAllCourse } from '../../../apis/Api';

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

const Home = () => {
  const [user, setUser] = useState({});
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const user = (JSON.parse(localStorage.getItem("user"))); 
    setUser(user);
    

    // Fetch courses data
    getAllCourse().then(response => {
        setCourses(response.data.course);
      })
      .catch(error => {
        console.error('Error fetching courses data:', error);
      });
  }, []);


  const progressBarData = courses.map(course => ({
    name: course.courseName,
    progress: Math.floor(Math.random() * 100),
  }));

  const timeSpentData = [
    { day: 'Sun', hours: 2 },
    { day: 'Mon', hours: 4 },
    { day: 'Tue', hours: 3 },
    { day: 'Wed', hours: 5 },
    { day: 'Thu', hours: 4 },
    { day: 'Fri', hours: 3 },
    { day: 'Sat', hours: 2 },
  ];

  return (
        <div className="dashboard">
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
                <img src="assets/images/profile.png" alt="Instructor" />
                <img src="assets/images/profile.png" alt="Instructor" />
                <img src="assets/images/profile.png" alt="Instructor" />
                <img src="assets/images/profile.png" alt="Instructor" />
              </div>
            </div>
          </div>
        </div>
      

  );
};

export default Home;
