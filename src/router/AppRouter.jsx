import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EventDetail from "../pages/EventDetail";
import CalendarPage from "../pages/CalendarPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/booking/:id" element={<div>Booking Page</div>} />
      <Route path="/confirmation" element={<div>Confirmation</div>} />
      <Route path="/dashboard" element={<div>Dashboard</div>} />
    </Routes>
  );
}
