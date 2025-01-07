require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const milkBottleRoutes = require("./routes/milkBottleRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = 8000;

const uri = process.env.MONGO_URI;

app.use(express.json());

app.use("/api/bottles", milkBottleRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/users", userRoutes);

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Successful connection to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
connect();

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
