import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === "production" });
import express from "express";
import mongoose from "mongoose";
import authRouter from "./router/auth.router.js";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@project-final-semester.epvywgf.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("MongoDb connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();
const app = express();
app.use(express.json());

app.use("/api/auth", authRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server on run port ${PORT}`));
