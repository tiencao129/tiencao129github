// Option 3: Passing parameters separately (other dialects)
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("suachuotct", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = connectDB;
