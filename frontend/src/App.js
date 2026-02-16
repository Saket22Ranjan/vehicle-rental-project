import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Vehicles from "./pages/Vehicles";
import Rent from "./pages/Rent";
import Bookings from "./pages/Bookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/rent/:id" element={<Rent />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
