import express from "express";
import dbConect from "../config/dbConect.js";
import userRoutes from "../routes/userRoute.js";
import {
  globalErrorHandler,
  notFound,
} from "../middlewares/globalErroHandler.js";
import productRouter from "../routes/productRoute.js";
dbConect();
const app = express();

//pass incoming data
app.use(express.json());
//routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRouter);
//error handler middleware
app.use(notFound);
app.use(globalErrorHandler);
export default app;
