const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(cors());

const connectToDb = require("./db/db");
const userRoutes = require("./routes/user.routes");
connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send({ message: "Welcme to the UBER API!" });
});

app.use("/users", userRoutes);

module.exports = app;
