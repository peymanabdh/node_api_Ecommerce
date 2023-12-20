import exppress from "express";
import {
  createBrandCtrl,
  deleteBrandCtrl,
  getAllBrandsCtrl,
  getSingleBrandCtrl,
  updateBrandCtrl,
} from "../controllers/brandController.js";
// import isAdmin from "../middlewares/isAdmin.js";

import { isLogedIn } from "../middlewares/isLogeIn.js";

const brandsRouter = exppress.Router();

brandsRouter.post("/", isLogedIn, createBrandCtrl);
brandsRouter.get("/", getAllBrandsCtrl);
brandsRouter.get("/:id", getSingleBrandCtrl);
brandsRouter.delete("/:id", isLogedIn, deleteBrandCtrl);
brandsRouter.put("/:id", isLogedIn, updateBrandCtrl);

export default brandsRouter;
