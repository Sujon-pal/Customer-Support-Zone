const TicketsCard = ({ ticket, onClick, taskStatus, resolved }) => {
  const isDisabled = taskStatus.some((t) => t.id === ticket.id);
  const isResolved = resolved.some((t) => t.id === ticket.id);

  return (
    <div
      onClick={() => !isDisabled && !isResolved && onClick(ticket)}
      className={`card bg-base-100 border shadow-sm rounded-xl p-5 transition-all duration-300
        ${
          isResolved
            ? "opacity-60 cursor-not-allowed bg-green-50 border-green-400"
            : isDisabled
              ? "opacity-60 cursor-not-allowed"
              : "hover:shadow-2xl hover:-translate-y-2 cursor-pointer hover:bg-gray-50"
        }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-3">
        <h2 className="font-semibold text-base leading-snug">{ticket.title}</h2>

        {/* 👈 Status badge */}
        <span
          className={`badge badge-sm ${isResolved ? "badge-success" : isDisabled ? "badge-warning" : "badge-success"}`}
        >
          {isResolved
            ? "Resolved ✅"
            : isDisabled
              ? "In-Progress"
              : ticket.status}
        </span>
      </div>

      <p className="text-sm text-gray-500 mt-2 line-clamp-2">
        {ticket.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">#{100 + ticket.id}</span>
          <span className="badge badge-sm badge-warning">
            {ticket.priority}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="font-medium">{ticket.customer}</span>
          <span>📅 {ticket.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketsCard;
