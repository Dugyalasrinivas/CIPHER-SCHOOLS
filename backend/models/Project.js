import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  name: String,
  content: String,
  type: { type: String, enum: ["file", "folder"], default: "file" },
});

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    files: [fileSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
