const TicketsCard = ({ ticket, onClick }) => {
  return (
    <div
      onClick={() => onClick(ticket)}  
      className="card bg-base-100 border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-xl p-5 cursor-pointer hover:bg-gray-50"
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-3">
        <h2 className="font-semibold text-base leading-snug">{ticket.title}</h2>
        <span className="badge badge-sm badge-success">{ticket.status}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-2 line-clamp-2">{ticket.description}</p>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">#{100 + ticket.id}</span>
          <span className="badge badge-sm badge-warning">{ticket.priority}</span>
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