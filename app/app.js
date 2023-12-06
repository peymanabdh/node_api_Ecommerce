import express from "express";
import dbConect from "../config/dbConect.js";
dbConect();
const app = express();

export default app;
