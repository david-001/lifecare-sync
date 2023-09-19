// creating a base name for the mongodb
const mongooseBaseName = "Lifecare-Sync";
import dotenv from "dotenv";
dotenv.config();

// create the mongodb uri for development and test
// const database = `mongodb://127.0.0.1/${mongooseBaseName}`;
const database = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@cluster0.errui.mongodb.net/${mongooseBaseName}`;
//`mongodb+srv://david001:animaladoptionpassword@cluster0.errui.mongodb.net/?retryWrites=true&w=majority`

// Use online database or local database
const currentDb = process.env.MONGODB_URI || database;

export { currentDb };
