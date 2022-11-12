import express from "express";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:4PDBCys5KnO913NH@project-final-semester.epvywgf.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("MongoDb connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();
const app = express();

app.get("/", (req, res) => res.send("Hello World"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server on run port ${PORT}`));
