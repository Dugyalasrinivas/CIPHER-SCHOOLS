import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import projectRoutes from "./routes/projectRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// API routes
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Cipher Studio Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
