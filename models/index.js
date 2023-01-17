import { Sequelize } from "sequelize";

const sequelize = new Sequelize("pgdb", "dbuser", "5432", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;
