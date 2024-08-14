import React, { useEffect, useState } from 'react';
import { getAllCourse } from '../../../apis/Api';

const ProfileComponent = () => {
  const [user, setUser] = useState({});
  const [courses, setCourses] = useState([null]);

  useEffect(() => {
    const user = (JSON.parse(localStorage.getItem("user"))); // Replace with the actual user ID
    setUser(user);

    getAllCourse().then(response => {
      setCourses(response.data.course);
    })
    .catch(error => {
      console.error('Error fetching courses data:', error);
    });
  }, []);

  if (courses===null) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
        <p className="text-white">Student</p>
      </div>
      <div className="mt-6">
        {courses.map(course => (
          <div key={course?._id} className="mb-4">
            <p className="text-lg font-semibold">{course?.courseName} ({course?.courseCategory})</p>
            {/* <progress className="w-full" value={course.progress} max="100">{course.progress}%</progress> */}
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold mt-8">Your Instructor</h2>
      <div className="flex mt-4 ">
          <div className="mr-4 text-center">
          <img src="assets/images/profile.png" className='w-16 h-16 rounded-full' alt="Instructor" />
            <p className="mt-2">Mohan</p>
          </div>
         
      </div>
    </div>
  );
};

export default ProfileComponent;
