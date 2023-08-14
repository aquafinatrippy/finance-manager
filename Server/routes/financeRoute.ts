import express from "express";
import {
  createFinance,
  getFinanceData,
} from "../controllers/financesController";
import { authCheck } from "../middleware/authMiddleware";

export const financeRoutes = express.Router();

financeRoutes.route("/").get(authCheck, getFinanceData);
financeRoutes.route("/create").post(authCheck, createFinance);
financeRoutes.route("/:id").delete(authCheck, )