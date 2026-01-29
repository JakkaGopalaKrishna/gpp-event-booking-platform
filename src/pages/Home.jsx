import events from "../data/events.json";

export default function Home() {
  return (
    <div>
      <h1>Events</h1>

      <div data-testid="event-list-container">
        {events.map(event => (
          <div
            key={event.id}
            data-testid={`event-card-${event.id}`}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
}
