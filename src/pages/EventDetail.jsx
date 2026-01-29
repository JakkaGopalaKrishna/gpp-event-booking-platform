import { useParams } from "react-router-dom";
import events from "../data/events.json";
import { format } from "date-fns";
import { getGoogleCalendarLink } from "../utils/googleCalendar";
import { useNavigate } from "react-router-dom";

export default function EventDetail() {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));
  const navigate = useNavigate();


  if (!event) return <div>Event not found</div>;

  return (
    <div>
      <h1 data-testid="event-detail-title">{event.title}</h1>

      <p data-testid="event-detail-description">
        {event.description}
      </p>

      <p data-testid="event-detail-date">
        {format(new Date(event.start), "PPpp")}
      </p>
      <p data-testid="event-detail-location">
        {event.location}
      </p>
      <a
        data-testid="add-to-calendar-link"
        href={getGoogleCalendarLink(event)}
        target="_blank"
       >
        Add to Google Calendar
      </a>
      <button onClick={() => navigate(`/booking/${event.id}`)}>
        Book Tickets
      </button>
    </div>
  );
}
