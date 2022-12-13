const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const todos = require("./routes/todos");

const app = express();
dotenv.config({ path: "./.env" });

app.use(cors());
app.use(express.json());
app.use("/api/todos", todos);

app.get("/", (req, res) => {
  res.send("Welcome to our todos api");
});

const connection_string = process.env.MONGODB_URL;

const port = process.env.PORT || 5000;

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongodb"))
  .catch((error) => console.error("Mongodb connection failed:", error.message));

app.listen(port, () => {
  console.log(`Server running on port ${port}..`);
});
