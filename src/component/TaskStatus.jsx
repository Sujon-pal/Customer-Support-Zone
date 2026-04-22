import React from "react";

const TaskStatus = ({ taskStatus, onComplete }) => {
  return (
    <div  id="status" className="bg-white border rounded-xl p-4 sm:p-5 shadow-sm">
      
      <h2 className="font-bold text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
        Task Status
      </h2>

      {taskStatus.length === 0 ? (
        <p className="text-sm text-gray-400">
          No active tasks yet.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          
          {taskStatus.map((ticket) => (
            <div
              key={ticket.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b pb-2 last:border-none"
            >
              
              <p className="text-sm sm:text-base font-medium text-gray-700">
                {ticket.title}
              </p>

              <button
                onClick={() => onComplete(ticket)}
                className="btn btn-success btn-sm w-full sm:w-auto text-white"
              >
                Complete
              </button>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default TaskStatus;