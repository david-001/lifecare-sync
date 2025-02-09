const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const currentDb = require('./config/db.js');
const path = require('path');
const cors = require('cors');

const patientsRoutes = require('./routes/patients-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join('public')));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

// set CORS headers on response from this API using the `cors` NPM package
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || `http://localhost:3000`,
  })
);

app.use('/api/patients', patientsRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});


mongoose
  .connect(
    currentDb.currentDb
  )
  .then(() => {
    app.listen(8000);
    console.log("Server started at 8000");
  })
  .catch(err => {
    console.log(err);
  });
