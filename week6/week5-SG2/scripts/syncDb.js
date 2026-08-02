// scripts/syncDb.js
import { sequelize } from "../config/database.js";
import "../models/studentModels.js"; // registers Student on the sequelize ins
const run = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synced successfully");
    process.exit(0);
  } catch (err) {
    console.error("Failed to sync database:", err);
    process.exit(1);
  }
};
run();
