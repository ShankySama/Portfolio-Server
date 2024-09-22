const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const headerRoutes = require("./routes/header");

const app = express();
const port = process.env.PORT || 5000;
const uri =process.env.CONNECTION_STRING;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch((err) => console.log(err));

app.use("/api",headerRoutes);
app.get("/", (req, res) => {
  res.send({ message: "Server is running" });
});
app.listen(port, () => {
  console.log("Server is runnig on: ", port);
});
