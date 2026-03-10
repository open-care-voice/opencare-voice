const express = require("express");
const cors = require("cors");
const db = require("./config/db"); // import the db connection
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Optional: test DB
// db.query("SELECT 1", (err) => {
//   if (err) throw err;
//   console.log("DB is working!");
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});