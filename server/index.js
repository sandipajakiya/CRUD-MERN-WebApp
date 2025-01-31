import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Use the `/api` route prefix
app.use("/api", route);

// Database connection and server start
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGOURL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully...");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
