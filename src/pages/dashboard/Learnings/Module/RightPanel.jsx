import React from 'react';

const RightPanel = () => {
  return (
    <div className="w-full mt-4 p-4 bg-gray-100">
      <h2 className="text-xl font-bold">Lecturer</h2>
      <div className="mt-4">
        <p>Manoj Shrestha</p>
        <p>Email: manoj@example.com</p>
        <p>Office Hours: Mon-Fri, 10am-12pm</p>
        <p>Next Appointment: Aug 17, 2034</p>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold">Overall Progress</h3>
        <div className="mt-4">
          <p>Lectures Watched</p>
          <progress className="w-full" value="50" max="100">50%</progress>
        </div>
        <div className="mt-4">
          <p>Assignments Completed</p>
          <progress className="w-full" value="75" max="100">75%</progress>
        </div>
        <div className="mt-4">
          <p>Upcoming Submissions</p>
          <progress className="w-full" value="30" max="100">30%</progress>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
