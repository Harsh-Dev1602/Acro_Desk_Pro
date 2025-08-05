import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();
const app = express()

const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI);
    console.log("AcroDesk Pro Connected to Mongoose db..");
} catch (error) {
    console.log(error);
}

app.listen(PORT, () => {
  console.log(`AcroDesk Pro Running this  http://localhost:${PORT}`)
})