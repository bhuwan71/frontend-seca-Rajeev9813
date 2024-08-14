import React from 'react';
import Upperbar from './Upperbar';
import MainContent from './MainContent';
import RightPanel from './RightPanel';
import Navbar from '../../../../components/Navbar';

const Module = () => {
  return (
    <div className="w-full flex flex-col h-screen ">
      <Navbar />
      <div className="w-[65%]  flex flex-grow mt-16 mx-auto">
        <div className='flex flex-col w-[70%]'> 
        <MainContent />
        </div>
        <div className='w-[30%]'><RightPanel /></div>
        
      </div>
    </div>
  );
};

export default Module;
