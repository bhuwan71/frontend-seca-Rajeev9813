import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TimeSpentChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300} >
      <LineChart  data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3"  />
        <XAxis dataKey="day" />
        <YAxis  />
        <Tooltip />
        <Line type="monotone" dataKey="hours" stroke="#82ca9d"  />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TimeSpentChart;
