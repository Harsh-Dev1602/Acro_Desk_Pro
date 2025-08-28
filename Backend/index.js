import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import cors from "cors";
import seedAdmin from "./controller/admin.controller.js"

dotenv.config();


const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

const app = express();
app.use(express.json());
app.use(cors({ origin: "https://acrodesk.vercel.app" }));

try {
  mongoose.connect(URI);
  console.log("AcroDesk Pro Connected to Mongoose db..");
  await seedAdmin(); 
} catch (error) {
  console.log(error);
}

app.use("/api/user",userRouter);

app.listen(PORT, () => {
  console.log(`AcroDesk Pro Running this  http://localhost:${PORT}`)
})