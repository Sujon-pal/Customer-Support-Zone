import React from "react";

const Banner = ({ taskStatus, resolved }) => {
  return (
    <div className=" sm:px-6 md:px-5  py-6 sm:py-8 md:mt-15 mt-9">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* In-Progress Card */}
        <div className="card text-white shadow-md rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-500">
          <div className="card-body items-center justify-center text-center py-8 sm:py-10">
            
            <p className="text-base sm:text-lg md:text-xl font-semibold opacity-80">
              In-Progress
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {taskStatus.length}
            </h2>  

          </div>
        </div>

        {/* Resolved Card */}
        <div className="card text-white shadow-md rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600">
          <div className="card-body items-center justify-center text-center py-8 sm:py-10">
            
            <p className="text-base sm:text-lg md:text-xl font-semibold opacity-80">
              Resolved
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {resolved.length}
            </h2>  

          </div>
        </div>

      </div>

    </div>
  );
};

export default Banner;