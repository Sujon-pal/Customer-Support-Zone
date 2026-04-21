const TaskStatus = ({ taskStatus, onComplete }) => {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <h2 className="font-bold text-gray-700 mb-3">Task Status</h2>

      {taskStatus.length === 0 ? (
        <p className="text-sm text-gray-400">No active tasks yet.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {taskStatus.map((ticket) => (
            <div key={ticket.id} className="flex flex-col gap-2">
              <p className="text-sm font-medium text-gray-700">{ticket.title}</p>
              <button
                onClick={() => onComplete(ticket)}
                className="btn btn-success btn-sm w-full text-white"
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