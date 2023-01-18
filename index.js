const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");

const routes = require("./routes/v1");

const { sequelize } = require("./models");

// Configurations
dotenv.config();
const app = express();

// set security HTTP headers
app.use(helmet());

// enable cors
app.use(cors());
app.options("*", cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// v1 api routes
app.use("/v1", routes);

// Setup Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, async () => {
  console.log(`Server is running on port: ${PORT}`);
  await sequelize.sync({ alter: true });
  console.log("Database synced.");
});
