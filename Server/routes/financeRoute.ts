import express from "express";
import { createFinance } from "../controllers/financesController";
import { authCheck } from "../middleware/authMiddleware";

export const financeRoutes = express.Router();

financeRoutes.route("/create").post(authCheck, createFinance);
