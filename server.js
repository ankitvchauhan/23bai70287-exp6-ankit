const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

// ✅ REQUIRED
app.use(express.json());
app.use(cors());

app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});