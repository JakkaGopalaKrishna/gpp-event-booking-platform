import QRCode from "qrcode.react";

export default function Confirmation() {
  const booking =
    JSON.parse(localStorage.getItem("latestBooking"));

  if (!booking) return <div>No booking found</div>;

  const qrData = {
    eventTitle: booking.eventTitle,
    userName: booking.name,
    tickets: booking.quantity
  };

  return (
    <div>
      <h2>Booking Confirmed</h2>

      <p>{booking.eventTitle}</p>
      <p>{booking.name}</p>
      <p>Tickets: {booking.quantity}</p>

      <div data-testid="qr-code-container">
        <QRCode value={JSON.stringify(qrData)} />
      </div>
    </div>
  );
}
