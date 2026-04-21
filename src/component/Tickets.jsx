import React, { use } from "react";
import TicketsCard from "./TicketsCard";
import TaskStatus from "./TaskStatus";
import ResolvedTask from "./ResolvedTask";

const Tickets = ({ TicketsPromice, onTicketClick, taskStatus, resolved, onComplete }) => {
  const userTickets = use(TicketsPromice);

  return (
    <div className="px-6 lg:px-16">
      <h1 className="pb-3 font-bold text-gray-700">Customer Tickets</h1>
      <div className="grid grid-cols-3 gap-5">

        {/* Left: Ticket Cards */}
        <div className="grid grid-cols-2 col-span-2 gap-5">
          {userTickets.map((ticket) => (
            <TicketsCard
              key={ticket.id}
              ticket={ticket}
              onClick={onTicketClick}
            />
          ))}
        </div>

        {/* Right: Status Panels */}
        <div className="flex flex-col gap-5">
          <TaskStatus taskStatus={taskStatus} onComplete={onComplete} />
          <ResolvedTask resolved={resolved} />
        </div>

      </div>
    </div>
  );
};

export default Tickets;