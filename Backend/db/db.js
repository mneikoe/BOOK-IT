const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect("mongodb://localhost:4000/uber-practice")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err));
}

module.exports = connectToDb;
