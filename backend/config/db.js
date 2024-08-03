const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://2021uee1391:KB1JXbnVNcPjQCeH@cluster0.xud72mg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Database connected successfully");
}).catch((err) => {
  console.log("Database connection error:", err);
});
