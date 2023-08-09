import express from "express";
import {
  RegisterUser,
  LoginUser,
} from "../controllers/userController";

export const userRoutes = express.Router();

userRoutes.post("/", RegisterUser);

userRoutes.post("/login", LoginUser);
