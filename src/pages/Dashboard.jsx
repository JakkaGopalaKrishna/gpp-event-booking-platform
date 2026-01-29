import events from "../data/events.json";

export default function Dashboard() {
  const bookedIds =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const bookedEvents =
    events.filter(e => bookedIds.includes(e.id));

  return (
    <div>
      <h2>My Booked Events</h2>

      <div data-testid="dashboard-event-list">
        {bookedEvents.map(event => (
          <div
            key={event.id}
            data-testid={`dashboard-event-${event.id}`}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
}
