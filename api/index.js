const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes"); // Corrected import

app.use("/api/users", userRoutes);

app.listen(8800, () => {
  console.log("API working...");
});
