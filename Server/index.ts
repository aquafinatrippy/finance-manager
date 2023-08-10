import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./database";
import { userRoutes } from "./routes/userRoute";

ConnectDB();
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/user", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
