import React from "react";

const TicketsCard = ({ ticket, onClick, taskStatus, resolved }) => {
  const isDisabled = taskStatus.some((t) => t.id === ticket.id);
  const isResolved = resolved.some((t) => t.id === ticket.id);

  return (
    <div
      onClick={() => !isDisabled && !isResolved && onClick(ticket)}
      className={`card bg-base-100 border shadow-sm rounded-xl p-4 sm:p-5 transition-all duration-300
        ${
          isResolved
            ? "opacity-60 cursor-not-allowed bg-green-50 border-green-400"
            : isDisabled
            ? "opacity-60 cursor-not-allowed"
            : "hover:shadow-2xl sm:hover:-translate-y-2 cursor-pointer hover:bg-gray-50"
        }`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-3">
        
        <h2 className="font-semibold text-sm sm:text-base leading-snug break-words">
          {ticket.title}
        </h2>

        {/* Status badge */}
        <span
          className={`badge badge-sm w-fit ${
            isResolved
              ? "badge-success"
              : isDisabled
              ? "badge-warning"
              : "badge-success"
          }`}
        >
          {isResolved
            ? "Resolved ✅"
            : isDisabled
            ? "In-Progress"
            : ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-500 mt-2 line-clamp-2">
        {ticket.description}
      </p>

      {/* Footer */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-gray-400">
            #{100 + ticket.id}
          </span>
          <span className="badge badge-sm badge-warning">
            {ticket.priority}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-500">
          <span className="font-medium break-words">
            {ticket.customer}
          </span>
          <span>📅 {ticket.createdAt}</span>
        </div>

      </div>
    </div>
  );
};

export default TicketsCard;