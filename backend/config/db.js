// creating a base name for the mongodb
const mongooseBaseName = "Lifecare-Sync-2";
const dotenv = require('dotenv');
dotenv.config();

// create the mongodb uri for development and test
const database = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@cluster0.errui.mongodb.net/${mongooseBaseName}`;

// Use online database or local database
const currentDb = process.env.MONGODB_URI || database;

exports.currentDb = currentDb
