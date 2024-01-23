import "dotenv/config";
import express from "express";

import { upload } from "./middleware/bucket.js";

const startServer = async () => {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
  });

  app.post("/upload", upload.single("file"), (req, res) => {
    return res.json({ message: req.file.location });
  });

  return app;
};

startServer()
  .then((app) => app.listen(3333))
  .catch(console.error);