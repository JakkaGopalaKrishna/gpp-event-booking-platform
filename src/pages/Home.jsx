import { useState } from "react";
import events from "../data/events.json";
import CategoryFilter from "../components/CategoryFilter";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();


  const filteredEvents =
    category === "All"
      ? events
      : events.filter((e) => e.category === category);

  return (
    <div>
      <h1>Events</h1>
      

      <CategoryFilter value={category} onChange={setCategory} />

      <div data-testid="event-list-container">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            data-testid={`event-card-${event.id}`}
            onClick={() => navigate(`/events/${event.id}`)}
            style={{ cursor: "pointer" }}
          >
            {event.title}
          </div>

        ))}
      </div>
    </div>
  );
}
