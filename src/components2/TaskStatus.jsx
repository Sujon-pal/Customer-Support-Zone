const TaskStatus = ({ inProgress, resolved, onComplete }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Task Status Panel */}
      <div>
        <h2 className="text-base font-bold text-base-content mb-3">Task Status</h2>
        <div className="flex flex-col gap-2">
          {inProgress.length === 0 ? (
            <p className="text-sm text-base-content/40 italic">
              Select a ticket to add to Task Status.
            </p>
          ) : (
            inProgress.map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center justify-between gap-2 bg-warning/10 border border-warning/20 rounded-lg px-3 py-2"
              >
                <span className="text-xs font-medium text-base-content flex-1 leading-snug">
                  {ticket.title}
                </span>
                <button
                  className="btn btn-xs btn-primary shrink-0"
                  onClick={() => onComplete(ticket)}
                >
                  Complete
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="divider my-0"></div>

      {/* Resolved Task Panel */}
      <div>
        <h2 className="text-base font-bold text-base-content mb-3">
          Resolved Task
          {resolved.length > 0 && (
            <span className="badge badge-success badge-sm ml-2">{resolved.length}</span>
          )}
        </h2>
        {resolved.length === 0 ? (
          <p className="text-sm text-base-content/40 italic">No resolved tasks yet.</p>
        ) : (
          <div className="flex flex-col gap-2">
            {resolved.map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center gap-2 bg-success/10 border border-success/20 rounded-lg px-3 py-2"
              >
                <span className="text-success text-xs">✓</span>
                <span className="text-xs font-medium text-base-content/70 flex-1 leading-snug line-through">
                  {ticket.title}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
