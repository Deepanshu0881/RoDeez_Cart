const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://deepanshuniku:p4BUOwJ9U7I2Gj7z@cluster0.gdm5h7p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Database connected successfully");
}).catch((err) => {
  console.log("Database connection error:", err);
});
