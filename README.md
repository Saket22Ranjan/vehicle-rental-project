# 🚀 RideX - Vehicle Rental System

Premium motorcycle rental platform with instant hourly bookings.

## ✨ Features
- Browse premium motorcycles/scooters with rich previews  
- Instant booking with hours selector & pricing calculator
- Phone-based login (auto account creation)
- Booking history & receipts
- Modern dark glassmorphism UI with SVG animations
- Responsive design • Real-time availability

## 🛠 Tech Stack
```
Frontend: React 18 + React Router + Axios + Tailwind/custom CSS
Backend: Node/Express + MongoDB/Mongoose
```
## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone <repo>
cd vehicle-rental-project
```

### 2. Backend Setup
```bash
cd backend
npm install
npm start
```
*Server runs on `http://localhost:5000`*

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```
*App runs on `http://localhost:3000`*

### 4. Seed Data (Optional)
```bash
cd backend
node seed.js
```

## 📱 Flow
```
Homepage → Vehicles → [Rent Now] → Login → Book (hours) → Bookings History
```

## 🗄 Database Models
- **Users**: `{name, phone, _id}`
- **Vehicles**: `{name, type, pricePerHour, description, available}` 
- **Bookings**: `{userId, vehicleId, hours, totalPrice, bookingTime}`

## API Endpoints
```
GET /api/vehicles           # Available vehicles
GET /api/vehicles/:id       # Single vehicle
POST /api/users/login       # Phone login
POST /api/bookings/rent     # Create booking
GET /api/bookings/user/:id  # User bookings
```

## 🎨 Styling
- Custom CSS vars (`--black`, `--orange`, `--gray-800`)
- Bebas Neue + DM Sans fonts
- Glassmorphism cards + SVG illustrations
- Hover animations + responsive grid

## 🤝 Contributing
1. Fork repo
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push & PR!

## 📄 License
MIT
