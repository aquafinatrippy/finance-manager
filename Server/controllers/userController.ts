import { Request, Response } from "express";

import { User } from "../models/userModel";
import jsonwebtoken from "jsonwebtoken";
import { compareSync, genSaltSync, hashSync } from "bcrypt";

const RegisterUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).send({ message: "Missing credentials" });
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: "User already exist" });
  }
  const salt = genSaltSync(10);
  const hashedPw = hashSync(password, salt);
  const user = await User.create({
    name,
    email,
    password: hashedPw,
  });
  if (user) {
    res.status(201).json({
      message: "User created",
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: "Error with creating account" });
  }
};

const LoginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && compareSync(password, user.password)) {
      res.status(200).json({
        message: "Login successful",
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while logging in" });
  }
};

const generateToken = (id: any) => {
  const secret = process.env.JWT_SECRET as string;
  return jsonwebtoken.sign({ id }, secret, {
    expiresIn: "1d",
  });
};

export { RegisterUser, LoginUser };
