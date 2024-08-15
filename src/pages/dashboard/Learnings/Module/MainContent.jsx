import React from "react";
import Upperbar from "./Upperbar";
import Lowerbar from "./Lowerbar/Lowerbar";

const MainContent = () => {
  return (
    <div className="w-full flex-grow p-4 ">
      <Upperbar />
      <div className=" w-full">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative pb-9/16 h-80 w-full overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/zOVXrkk4ClU?si=fE_RYQ0c7x5LnM3l"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            
          </div>
          <Lowerbar />
        </div>
        
    </div>
  );
};

export default MainContent;
