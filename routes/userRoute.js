import express from "express";
import {
  registerUserCtrl,
  loginUserCtrl,
  getProfileUser,
} from "../controllers/userController.js";
import { isLogedIn } from "../middlewares/isLogeIn.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUserCtrl);
userRoutes.post("/login", loginUserCtrl);
userRoutes.get("/profile", isLogedIn, getProfileUser);
export default userRoutes;
