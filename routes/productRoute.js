import express from "express";
import {
  createProducts,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
import { isLogedIn } from "../middlewares/isLogeIn.js";

const productRouter = express.Router();

productRouter.post("/", isLogedIn, createProducts);
productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);
export default productRouter;
