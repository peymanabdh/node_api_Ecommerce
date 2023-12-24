import express from "express";
import dbConect from "../config/dbConect.js";
import userRoutes from "../routes/userRoute.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {
  globalErrorHandler,
  notFound,
} from "../middlewares/globalErroHandler.js";
import productRouter from "../routes/productRoute.js";
import categoriesRouter from "../routes/categoriesRoute.js";
import brandsRouter from "../routes/brandRoute.js";
import colorRouter from "../routes/colorRoute.js";
import reviewRouter from "../routes/reviewRoute.js";

dbConect();
const app = express();

//pass incoming data
app.use(express.json());
//routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/brands/", brandsRouter);
app.use("/api/v1/colors/", colorRouter);
app.use("/api/v1/reviews/", reviewRouter);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple Ecommerce API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "",
      },
      contact: {
        name: "skills with Peyman Rahmani",
        url: "",
        email: "",
      },
    },
    servers: [
      {
        url: "http://localhost:5000/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

//error handler middleware
app.use(notFound);
app.use(globalErrorHandler);

export default app;
