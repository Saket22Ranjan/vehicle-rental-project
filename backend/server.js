const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const vehicleRoutes = require("./routes/vehicleRoutes");
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");



require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("API Running...");
});



app.use("/api/bookings", bookingRoutes);


app.use("/api/users", userRoutes);
app.use("/api/vehicles", vehicleRoutes);
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
})
.catch(err => console.log(err));
