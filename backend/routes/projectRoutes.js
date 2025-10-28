import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// Get all projects
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Create new project
router.post("/", async (req, res) => {
  const { name, files } = req.body;
  const project = new Project({ name, files });
  await project.save();
  res.json(project);
});

// Get single project by ID
router.get("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
});

// Update existing project
router.put("/:id", async (req, res) => {
  const { name, files } = req.body;
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    { name, files },
    { new: true }
  );
  res.json(project);
});

// Delete project
router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
});

export default router;
