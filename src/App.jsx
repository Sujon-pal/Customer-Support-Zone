import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Tickets from "./component/Tickets";

const FetchTickets = async () => {
  const res = await fetch("../ticket.json");
  return res.json();
};

const TicketsPromice = FetchTickets();

function App() {
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleTicketClick = (ticket) => {
    const alreadyAdded = taskStatus.find((t) => t.id === ticket.id);
    if (!alreadyAdded) {
      setTaskStatus((prev) => [...prev, ticket]);
    }
  };

  const handleComplete = (ticket) => {
    setTaskStatus((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolved((prev) => [...prev, ticket]);
  };

  return (
    <div className="min-h-screen bg-base-200">
      
      {/* Navbar */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20">
        <Navbar />
      </div>

      {/* Banner */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-4">
        <Banner taskStatus={taskStatus} resolved={resolved} />
      </div>

      {/* Tickets Section */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 pb-10">
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-20">
              <span className="loading loading-ring loading-xl"></span>
            </div>
          }
        >
          <Tickets
            TicketsPromice={TicketsPromice}
            onTicketClick={handleTicketClick}
            taskStatus={taskStatus}
            resolved={resolved}
            onComplete={handleComplete}
          />
        </Suspense>
      </div>

    </div>
  );
}

export default App;