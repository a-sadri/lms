import { Sequelize } from "sequelize";

const connectDB = async () => {
  const sequelize = new Sequelize("pgdb", "dbuser", "5432", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDB;
