import express from "express";
import dotenv from "dotenv";
import { sessionConfig } from "./config/sessionConfig.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();
const app = express();

// Middleware-ներ
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sessionConfig);

// Todo Routes
app.use("/todos", todoRoutes);

// Սերվերի գործարկում
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
