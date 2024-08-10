import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <FaSpinner className="text-blue-500 text-5xl animate-spin" />
    </div>
  );
};

export default Loader;
