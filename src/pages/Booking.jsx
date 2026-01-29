import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import events from "../data/events.json";

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === Number(id));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      eventId: event.id,
      eventTitle: event.title,
      name,
      email,
      quantity
    };

    localStorage.setItem("latestBooking", JSON.stringify(booking));

    const existing =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existing, event.id])
    );

    navigate("/confirmation");
  };

  if (!event) return <div>Event not found</div>;

  return (
    <form data-testid="booking-form" onSubmit={handleSubmit}>
      <h2>{event.title}</h2>

      <input
        data-testid="booking-form-name"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />

      <input
        data-testid="booking-form-email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        data-testid="booking-form-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
        required
      />

      <button data-testid="booking-form-submit" type="submit">
        Confirm Booking
      </button>
    </form>
  );
}
