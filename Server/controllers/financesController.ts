import { Request, Response } from "express";
import { User } from "../models/userModel";
import { Finance } from "../models/financeSchema";

export const createFinance = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401).json({ message: "User not authenticated at creating" });
    }
    const { title, total_amount } = req.body;
    if (!title || !total_amount) {
      res.status(400).json({ message: "Please add required fields" });
    }
    const finance = await Finance.create({
      title,
      description: req.body.description,
      created_by: req.user.id,
      total_amount,
    });
    res.status(201).json(finance);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Create finance error" });
  }
};
