import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/projects",
});

export const saveProject = (projectId, files) =>
  API.post("/save", { projectId, files });

export const loadProject = (projectId) =>
  API.get(`/load/${projectId}`);
