import express from "express";
import cors from "cors";
import { loggers } from "./middlewares/loggers.js";
import studentRoutes from "./routes/studentRoutes.js";
import authRoutes from "./routes/authRoutes.js";

import { notFoundHandler, errorHandler } from "./middlewares/errorHandler.js";
const app=express();
// const PORT=3000;


app.use(loggers);
app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("api running");
// });
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
); 
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);
// app.listen(PORT,()=>{
//     console.log(server running on ${PORT});
// })

app.use(notFoundHandler);   // must come after all real routes
app.use(errorHandler);
export default app;