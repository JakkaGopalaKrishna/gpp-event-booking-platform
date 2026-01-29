export const getGoogleCalendarLink = (event) => {
  const formatDate = (date) =>
    date.replace(/[-:]/g, "").split(".")[0];

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.title
  )}&dates=${formatDate(event.start)}/${formatDate(event.end)}`;
};
