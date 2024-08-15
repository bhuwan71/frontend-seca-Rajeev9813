import React, { useState } from 'react';
import Quiz from "../../../Quiz/Quiz.jsx"
import Overview from './Overview.jsx';
import Resources from './Resources.jsx';

const Lowerbar = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Resources', 'Quiz'];

  return (
    <div className="mt-2">
      <div className="flex space-x-4 bg-blue-500 p-2 rounded">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 rounded ${
              activeTab === tab ? 'bg-white text-blue-500' : 'text-white'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-full bg-white rounded shadow mt-2">
        {activeTab === 'Overview' && <div><Overview /></div>}
        {activeTab === 'Resources' && <div><Resources /></div>}
        {activeTab === 'Quiz' && <div><Quiz /></div>}
      </div>
    </div>
  );
};

export default Lowerbar;
