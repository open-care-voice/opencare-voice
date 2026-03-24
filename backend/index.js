const express = require("express");
const cors = require("cors");
const db = require("./config/db"); // import the db connection
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("OpenCare Voice Backend Running");  
});




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});