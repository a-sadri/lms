import express from "express";
import dotenv from "dotenv";

import routes from "./routes/v1/index.js";
import db from "./models/index.js";

// Configurations
dotenv.config();
const app = express();

// DB Configuration
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// v1 api routes
app.use("/v1", routes);

// Setup Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
