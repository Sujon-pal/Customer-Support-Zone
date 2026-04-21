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
    // Avoid duplicates
    const alreadyAdded = taskStatus.find((t) => t.id === ticket.id);
    if (!alreadyAdded) {
      setTaskStatus((prev) => [...prev, ticket]);
    }
  };

  const handleComplete = (ticket) => {
    // Move from taskStatus → resolved
    setTaskStatus((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolved((prev) => [...prev, ticket]);
  };

  return (
    <div>
      <Navbar />
      <Banner taskStatus={taskStatus} resolved={resolved} />
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <Tickets
          TicketsPromice={TicketsPromice}
          onTicketClick={handleTicketClick}
          taskStatus={taskStatus}
          resolved={resolved}
          onComplete={handleComplete}
          
        />
      </Suspense>
    </div>
  );
}

export default App;