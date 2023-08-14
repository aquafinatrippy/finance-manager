import { Request, Response } from "express";
import { User } from "../models/userModel";
import { Finance } from "../models/financeSchema";

export const createFinance = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401).json({ message: "User not authenticated at creating" });
    }
    const { type, title, total_amount } = req.body;
    if (!title || !total_amount) {
      res.status(400).json({ message: "Please add required fields" });
    }
    const finance = await Finance.create({
      title,
      description: req.body.description,
      created_by: req.user.id,
      total_amount,
      type,
    });
    res.status(201).json(finance);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Create finance error" });
  }
};

export const getFinanceData = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401).json({ message: "User not authenticated at creating" });
    }
    const resData = await Finance.find({ created_by: user?._id });
    res.status(200).json(resData);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Create finance error" });
  }
};

export const deleteFinance = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401).json({ message: "User not authenticated at creating" });
    }
    await Finance.findByIdAndRemove(req.params.id);
    res.status(200).json({ message: "finance has been removed" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Delete finance error" });
  }
};

export const updateFinance = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401).json({ message: "User not authenticated at creating" });
    }
    const { title, description, total_amount, type } = req.body;
    const updatedFincance = await Finance.findByIdAndUpdate({
      title,
      description,
      total_amount,
      type,
    });
    res.status(200).json(updatedFincance);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Update finance error" });
  }
};
