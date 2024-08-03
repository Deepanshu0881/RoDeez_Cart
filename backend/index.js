const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
require("./config/db");

// Route for Images folder
app.use('/images', express.static('upload/images'));

// Routes
app.use("/", authRoutes);
app.use("/", productRoutes);
app.use("/upload", uploadRoutes);

// ROOT API Route For Testing
app.get("/", (req, res) => {
  res.send("Root");
});

// Starting Server
app.listen(port, (error) => {
  if (!error) console.log("Server Running on port " + port);
  else console.log("Error : ", error);
});
