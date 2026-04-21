# 🚀 RideX — Smart Vehicle Rental Platform

> A modern full-stack vehicle rental system with real-time booking, dynamic pricing, and a premium UI experience.

---

## 🌟 Overview

RideX is a high-performance motorcycle rental platform designed for **instant hourly bookings**, seamless authentication, and a visually rich user experience using modern UI patterns like glassmorphism.

It simulates real-world rental systems with **live availability tracking**, **dynamic pricing**, and a smooth booking flow.

---

## 🔥 Key Features

### 🏍 Vehicle Browsing
- Browse premium motorcycles and scooters
- Rich UI previews with descriptions
- Real-time availability status

### ⏱ Booking System
- Hour-based rental model
- Dynamic pricing calculation
- Instant booking confirmation

### 🔐 Authentication
- Phone-based login system
- Auto account creation
- Scalable for OTP/JWT integration

### 📊 User Dashboard
- Booking history tracking
- Digital receipts
- Clean and intuitive UI

### 🎨 UI/UX
- Dark theme with glassmorphism
- Smooth animations & hover effects
- Fully responsive design
- SVG illustrations

---

## 🧠 System Architecture

```
Client (React)
   ↓
REST API (Node + Express)
   ↓
MongoDB (Mongoose)
```

---

## 🛠 Tech Stack

### Frontend
- React 18
- React Router DOM
- Axios
- Tailwind CSS + Custom CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📦 Installation & Setup

### 1. Clone Repository
```bash
git clone <repo-url>
cd vehicle-rental-project
```

### 2. Backend Setup
```bash
cd backend
npm install
npm start
```
Server runs on: `http://localhost:5000`

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```
App runs on: `http://localhost:3000`

### 4. Seed Data (Optional)
```bash
cd backend
node seed.js
```

---

## 🔄 Application Flow

```
Homepage → Vehicles → Rent Now → Login → Select Hours → Confirm Booking → Booking History
```

---

## 🗄 Database Models

### Users
```json
{
  "_id": "ObjectId",
  "name": "String",
  "phone": "String"
}
```

### Vehicles
```json
{
  "name": "String",
  "type": "String",
  "pricePerHour": "Number",
  "description": "String",
  "available": "Boolean"
}
```

### Bookings
```json
{
  "userId": "ObjectId",
  "vehicleId": "ObjectId",
  "hours": "Number",
  "totalPrice": "Number",
  "bookingTime": "Date"
}
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|---------|------------|
| GET    | /api/vehicles           | Get all vehicles |
| GET    | /api/vehicles/:id       | Get vehicle details |
| POST   | /api/users/login        | Login via phone |
| POST   | /api/bookings/rent      | Create booking |
| GET    | /api/bookings/user/:id  | Get user bookings |

---

## 🚀 Future Enhancements

- JWT Authentication
- OTP Verification System
- Payment Integration (Razorpay / Stripe)
- Real-time availability (WebSockets)
- Admin Dashboard
- Google Maps integration
- AI-based vehicle recommendations

---

## 🧪 Testing (Planned)

- Unit Testing (Jest)
- API Testing (Supertest)
- Frontend Testing (React Testing Library)

---

## 🤝 Contributing

1. Fork the repository  
2. Create your branch (`git checkout -b feature/NewFeature`)  
3. Commit changes (`git commit -m 'Add feature'`)  
4. Push to branch (`git push origin feature/NewFeature`)  
5. Open a Pull Request
6. Now your projectwill be live.

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Author

**Vansh Gupta**  
Full Stack Developer 🚀
