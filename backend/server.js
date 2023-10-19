import express from "express";
import mongoose from "mongoose";
import { currentDb } from "./config/db.js";
import cors from "cors";
import { handleError } from "./lib/http-error.js";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";

import UsersRoutes from "./routes/users-routes.js";
import PatientsRoutes from "./routes/patients-routes.js";

// establish database connection
mongoose.connect(currentDb, {
  useNewUrlParser: true,
});

// create express application object
const app = express();
// app.use(bodyParser.json());

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

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

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

app.use((req, res, next) => {
  res.sendFile(path.resolve(_dirname, "public", "index.html"));
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

// run API on designated port (4741 in this case)
app.listen(port, () => {
  console.log("listening on port " + port);
});
