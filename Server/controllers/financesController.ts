import { Request, Response } from "express";
import { User } from "../models/userModel";

const createFinance = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(401).json({ message: "User not authenticated at creating" });
    }
    const { description, project } = req.body;
    if (!project || !description) {
      res.status(400);
      throw new Error("Please add required fields");
    }
    const ticket = await Ticket.create({
      title: project,
      description,
      user: req.user.id,
      status: "New",
    });
    res.status(201).json(ticket);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Create finance error" });
  }
};
