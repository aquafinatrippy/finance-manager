import expressAsyncHandler from "express-async-handler";
import jsonwebtoken from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { NextFunction, Request, Response } from "express";

const authCheck = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jsonwebtoken.verify(
          token,
          process.env.JWT_SECRET ?? ""
        ) as { id: string };
        req.user = await User.findById(decoded.id).select("-password");
        next();
      } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Not authorized" });
      }
    }
    if (!token) {
      res.status(401).json({ message: "Access token not found" });
    }
  }
);

export { authCheck };
