import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EventDetail from "../pages/EventDetail";
import CalendarPage from "../pages/CalendarPage";
import Booking from "../pages/Booking";
import Confirmation from "../pages/Confirmation";
import Dashboard from "../pages/Dashboard";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/booking/:id" element={<Booking />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
