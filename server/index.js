const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv/config");

const userRoute = require("./Router/UserRoute");
const vehicleRoute = require("./Router/VehicleRoute");

app.use(express.json());
app.use(cors());
app.use("/user", userRoute);
app.get("/user", (req, res) => {
  res.send("Users");
});
app.use("/vehicles", vehicleRoute);
app.get("/vehicles", (req, res) => {
  res.send("Vehicles");
});

mongoose.connect(process.env.CONNECT_DB, () =>
  console.log("connected to DataBase")
);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
