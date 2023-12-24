import exppress from "express";

import { isLogedIn } from "../middlewares/isLogeIn.js";
import { createReviewCtrl } from "../controllers/reviewsController.js";

const reviewRouter = exppress.Router();

reviewRouter.post("/:productID", isLogedIn, createReviewCtrl);

export default reviewRouter;
