import express from "express";
import dbConect from "../config/dbConect.js";
import userRoutes from "../routes/userRoute.js";
dbConect();
const app = express();

//pass incoming data
app.use(express.json());
//routes
app.use("/", userRoutes);

export default app;
