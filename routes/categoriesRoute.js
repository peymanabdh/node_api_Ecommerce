import exppress from "express";
// import catetgoryFileUpload from "../config/categoryUpload.js";
import {
  createCategoryCtrl,
  getAllCategoriesCtrl,
  getSingleCategoryCtrl,
  updateCategoryCtrl,
  deleteCategoryCtrl,
} from "../controllers/categoriesController.js";
import { isLogedIn } from "../middlewares/isLogeIn.js";

const categoriesRouter = exppress.Router();

categoriesRouter.post(
  "/",
  isLogedIn,
//   catetgoryFileUpload.single("file"),
  createCategoryCtrl
);
categoriesRouter.get("/", getAllCategoriesCtrl);
categoriesRouter.get("/:id", getSingleCategoryCtrl);
categoriesRouter.delete("/:id", deleteCategoryCtrl);
categoriesRouter.put("/:id", updateCategoryCtrl);
export default categoriesRouter;