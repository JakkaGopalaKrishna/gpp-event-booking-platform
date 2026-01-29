import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<div>Calendar Page</div>} />
      <Route path="/events/:id" element={<div>Event Detail</div>} />
      <Route path="/booking/:id" element={<div>Booking Page</div>} />
      <Route path="/confirmation" element={<div>Confirmation</div>} />
      <Route path="/dashboard" element={<div>Dashboard</div>} />
    </Routes>
  );
}
