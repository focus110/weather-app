import React from "react";

const Offline = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 bg-white bg-opacity-10 rounded-lg py-16">
      <h2 className="flex space-x-2 font-medium text-white text-xl">
        <span>Offline</span>
      </h2>
      <div className="flex flex-col sm:flex-row items-center space-x-4">
        <div>
          <h2 className="sm:text-left text-white text">
            Make sure you have an internet connection
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Offline;
