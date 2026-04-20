const priorityColors = {
  "HIGH PRIORITY": "badge-error",
  "MEDIUM PRIORITY": "badge-warning",
  "LOW PRIORITY": "badge-info",
};

const statusColors = {
  Open: "badge-success",
  "In-Progress": "badge-warning",
};

const TicketCard = ({ ticket, onAddToProgress }) => {
  const { id, title, description, customer, priority, status, createdAt } = ticket;

  return (
    <div
      className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onAddToProgress(ticket)}
    >
      <div className="card-body p-4 gap-2">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-sm text-base-content leading-tight flex-1">
            {title}
          </h3>
          <span className={`badge badge-sm ${statusColors[status] || "badge-ghost"} shrink-0`}>
            {status}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-base-content/60 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            <span className="text-xs text-base-content/50">{id}</span>
            <span className={`badge badge-xs ${priorityColors[priority] || "badge-ghost"}`}>
              {priority}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-base-content/40">
            <span>{customer}</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
