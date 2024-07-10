import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import booksRoute from "./routes/booksRoutes.js";

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;
const mongoDBURL = process.env.MONGO_DB_URL;

// middleware for parsing request body
app.use(express.json());

// // middleware for handling cors policy
// app.use(cors());

// to handle cors policy for custom domains
app.use(
  cors({
    origin: "http://localhost:5174/",
    methods: ["GET", "PUT", "DELETE", "POST"],
    allowedHeaders: ["Cntent-Type"],
  })
);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome to my first MERN stack project");
});

app.use("/boooks", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    app.listen(port, () => {
      console.log(`the server is running on ${port}`);
    });

    console.log("App connected to the database");
  })
  .catch((error) => {
    console.log(error.message);
  });
