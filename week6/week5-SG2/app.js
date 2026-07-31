// app.js
import express from "express";
import { loggers } from "./middlewares/loggers.js";
import studentRoutes from "./routes/studentRoutes.js";
import { errorHandler, notFoundHanlder } from "./middlewares/errorHandler.js";
import cors from "cors";
const app = express();
app.use(loggers);
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use("/api/students", studentRoutes);


app.get("/", (req, res) => {
  res.send("api running");
});
app.use(notFoundHanlder); // must come after all real routes
app.use(errorHandler); // must come last of all
export default app;
