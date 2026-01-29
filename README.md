# Interactive Event Booking Platform

## Overview
This project is an interactive, multi-page Event Booking Platform built using React.  
It allows users to discover events, view them on a calendar, book tickets, generate QR code tickets, and manage their bookings through a personal dashboard.

The application is fully frontend-based, uses mock data, and is containerized with Docker for easy deployment.

---

## Tech Stack
- React (Vite)
- React Router DOM
- Redux Toolkit
- Tailwind CSS
- react-big-calendar
- date-fns
- qrcode.react
- Docker
- Nginx

---

## Features
- Event listing with category-based filtering
- Interactive calendar view of events
- Event detail page with full information
- Add-to-Google-Calendar integration
- Ticket booking form
- Booking confirmation with QR code
- User dashboard showing booked events
- LocalStorage-based data persistence
- Dockerized production build

---

## Project Structure
```
event-booking-platform/
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── README.md
├── package.json
└── src/
    ├── data/
    ├── pages/
    ├── components/
    ├── router/
    ├── features/
    ├── app/
    └── utils/
```

---

## Setup & Run (Local Development)
```bash
npm install
npm run dev
```

Open in browser:
```
http://localhost:5173
```

---

## Run with Docker (Production)
```bash
docker-compose up --build
```

Open in browser:
```
http://localhost:3000
```

---

## Application Routes
- `/` – Home page (event listing)
- `/calendar` – Calendar view
- `/events/:id` – Event detail page
- `/booking/:id` – Ticket booking page
- `/confirmation` – Booking confirmation page
- `/dashboard` – User dashboard

---

## Environment Variables
Create an environment file using the template:
```
.env.example
```

Example:
```env
REACT_APP_API_BASE_URL=mock
```

---

## Notes
- This project uses mock data only (no backend).
- All bookings are stored in browser LocalStorage.
- Designed to meet all mandatory task requirements.

---