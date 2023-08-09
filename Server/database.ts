import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DBurl = process.env.MONGODB_URI ?? "";

const ConnectDB = async () => {
  try {
    const connection = await connect(DBurl);
    console.log(connection.connection.host);
  } catch (error) {
    console.log("An error occurred while connecting to the database.");
  }
};

export { ConnectDB };
