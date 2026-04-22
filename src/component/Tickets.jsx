import React, { use } from "react";
import TicketsCard from "./TicketsCard";
import TaskStatus from "./TaskStatus";
import ResolvedTask from "./ResolvedTask";

const Tickets = ({
  TicketsPromice,
  onTicketClick,
  taskStatus,
  resolved,
  onComplete,
}) => {
  const userTickets = use(TicketsPromice);

  return (
    <div className="px-4 sm:px-6 md:px-6 ">
      
      <h1 className="pb-4 text-lg sm:text-xl md:text-2xl font-bold text-gray-700">
        Customer Tickets
      </h1>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* Left: Ticket Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:col-span-2">
          {userTickets.map((ticket) => (
            <TicketsCard
              key={ticket.id}
              ticket={ticket}
              onClick={onTicketClick}
              taskStatus={taskStatus}
              resolved={resolved}
            />
          ))}
        </div>

        {/* Right: Status Panels */}
        <div className="flex flex-col gap-5">
          <TaskStatus
            taskStatus={taskStatus}
            onComplete={onComplete}
          />
          <ResolvedTask resolved={resolved} />
        </div>

      </div>
    </div>
  );
};

export default Tickets;