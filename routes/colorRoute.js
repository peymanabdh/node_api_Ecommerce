import exppress from "express";
import {
  createColorCtrl,
  deleteColorCtrl,
  getAllColorsCtrl,
  getSingleColorCtrl,
  updateColorCtrl,
} from "../controllers/colorsController.js";
// import isAdmin from "../middlewares/isAdmin.js";

import { isLogedIn } from "../middlewares/isLogeIn.js";

const colorRouter = exppress.Router();

colorRouter.post("/", isLogedIn, createColorCtrl);
colorRouter.get("/", getAllColorsCtrl);
colorRouter.get("/:id", getSingleColorCtrl);
colorRouter.delete("/:id", isLogedIn, deleteColorCtrl);
colorRouter.put("/:id", isLogedIn, updateColorCtrl);

export default colorRouter;
