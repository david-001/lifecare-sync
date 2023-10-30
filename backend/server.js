import express from "express";
import mongoose from "mongoose";
import { currentDb } from "./config/db.js";
import { handleError } from "./lib/http-error.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import UsersRoutes from "./routes/users-routes.js";
import PatientsRoutes from "./routes/patients-routes.js";

// establish database connection
mongoose.connect(currentDb, {
  useNewUrlParser: true,
});

// create express application object
const app = express();

// Location for images.
app.use("/uploads/images", express.static(path.join("uploads", "images")));
// Use for deployment
// app.use(express.static(path.join("public")));

// set CORS headers on response from this API using the `cors` NPM package
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || `http://localhost:3000`,
  })
);

// app.use(function (req, res, next) {
//   res.setHeader(
//     "Content-Security-Policy-Report-Only",
//     "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
//   );
//   next();
// });

// The method `.use` sets up middleware for the Express application
app.use(express.json());
// this parses requests sent by `$.ajax`, which use a different content type
app.use(express.urlencoded({ extended: true }));

const usersRoutes = new UsersRoutes();
const patientsRoutes = new PatientsRoutes();
app.use("/api/users", usersRoutes.router);
app.use("/api/patients", patientsRoutes.router);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use("/", express.static(path.join(__dirname, "public")));
// app.use((req, res, next) => {
//   res.sendFile(path.resolve(__dirname, "public", "index.html"));
// });

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

app.listen(port, () => {
  console.log("listening on port " + port);
});
