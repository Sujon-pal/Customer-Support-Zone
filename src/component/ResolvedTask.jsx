const ResolvedTask = ({ resolved }) => {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <h2 className="font-bold text-gray-700 mb-3">Resolved Task</h2>

      {resolved.length === 0 ? (
        <p className="text-sm text-gray-400">No resolved tasks yet.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {resolved.map((ticket) => (
            <div
              key={ticket.id}
              className="text-sm text-gray-600 bg-green-50 border border-green-200 rounded-lg px-3 py-2"
            >
              ✅ {ticket.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResolvedTask;