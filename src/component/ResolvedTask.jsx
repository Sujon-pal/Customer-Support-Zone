import React from "react";

const ResolvedTask = ({ resolved }) => {
  return (
    <div id="resolved" className="bg-white border rounded-xl p-4 sm:p-5 shadow-sm">
      
      <h2 className="font-bold text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
        Resolved Task
      </h2>

      {resolved.length === 0 ? (
        <p className="text-sm text-gray-400">
          No resolved tasks yet.
        </p>
      ) : (
        <div className="flex flex-col gap-2 sm:gap-3">
          
          {resolved.map((ticket) => (
            <div
              key={ticket.id}
              className="text-sm sm:text-base text-gray-600 bg-green-50 border border-green-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2"
            >
              <span className="text-green-600">✅</span>
              <span className="break-words">{ticket.title}</span>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default ResolvedTask;