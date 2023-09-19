import express from "express";
import mongoose from "mongoose";
import { currentDb } from "./config/db.js";
import cors from "cors";
import { handleError } from "./lib/http-error.js";

import UsersRoutes from "./routes/users-routes.js";
import PatientsRoutes from "./routes/patients-routes.js";

// establish database connection
mongoose.connect(currentDb, {
  useNewUrlParser: true,
});

// create express application object
const app = express();

// set CORS headers on response from this API using the `cors` NPM package
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || `http://localhost:3000`,
  })
);

// The method `.use` sets up middleware for the Express application
app.use(express.json());
// this parses requests sent by `$.ajax`, which use a different content type
app.use(express.urlencoded({ extended: true }));

const usersRoutes = new UsersRoutes();
const patientsRoutes = new PatientsRoutes();
app.use("/api/users", usersRoutes.router);
app.use("/api/patients", patientsRoutes.router);

const port = process.env.PORT || 8000;
app.set("port", port);

app.use(handleError);

// run API on designated port (4741 in this case)
app.listen(port, () => {
  console.log("listening on port " + port);
});
