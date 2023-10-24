import express from "express";
import mongoose from "mongoose";
import { currentDb } from "./config/db.js";
import { handleError } from "./lib/http-error.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import UsersRoutes from "./routes/users-routes.js";
import PatientsRoutes from "./routes/patients-routes.js";

// create express application object
const app = express();

// Location for images.
app.use("/uploads/images", express.static(path.join("uploads", "images")));

// The method `.use` sets up middleware for the Express application
app.use(express.json());
// this parses requests sent by `$.ajax`, which use a different content type
app.use(express.urlencoded({ extended: true }));

const usersRoutes = new UsersRoutes();
const patientsRoutes = new PatientsRoutes();
app.use("/api/users", usersRoutes.router);
app.use("/api/patients", patientsRoutes.router);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/", express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

const port = process.env.PORT || 8000;
app.set("port", port);

app.use(handleError);

// establish database connection
mongoose.connect(
  currentDb,
  {
    useNewUrlParser: true,
  },
  app.listen(port, () => {
    console.log("listening on port " + port);
  })
);
