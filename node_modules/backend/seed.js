// Run once to populate your DB with sample vehicles:
//   node seed.js

const mongoose = require("mongoose");
const Vehicle  = require("./models/Vehicle");
require("dotenv").config();

const vehicles = [
  { name: "Royal Enfield Classic 350", type: "cruiser",    pricePerHour: 120, description: "Iconic retro cruiser with powerful torque. Perfect for long rides.", available: true },
  { name: "Honda Activa 6G",           type: "scooter",    pricePerHour: 60,  description: "India's most trusted scooter — fuel efficient and easy to ride.", available: true },
  { name: "KTM Duke 390",              type: "sports",     pricePerHour: 180, description: "Aggressive naked sports bike with razor-sharp handling.", available: true },
  { name: "Yamaha R15 V4",             type: "sports",     pricePerHour: 200, description: "Race-bred 155cc sports bike with full fairing and VVA tech.", available: true },
  { name: "TVS Jupiter 125",           type: "scooter",    pricePerHour: 55,  description: "Feature-packed family scooter with smooth CVT transmission.", available: true },
  { name: "Bajaj Pulsar 200NS",        type: "motorcycle", pricePerHour: 140, description: "Sporty naked motorcycle with triple spark technology.", available: true },
  { name: "Royal Enfield Himalayan",   type: "cruiser",    pricePerHour: 160, description: "Purpose-built adventure tourer for any terrain.", available: true },
  { name: "Honda CB Shine",            type: "motorcycle", pricePerHour: 80,  description: "Reliable commuter motorcycle — smooth and fuel efficient.", available: true },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Vehicle.deleteMany({});
  await Vehicle.insertMany(vehicles);
  console.log("✅ Seeded", vehicles.length, "vehicles");
  mongoose.disconnect();
}).catch(console.error);