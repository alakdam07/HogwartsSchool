//require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const studentRoutes = require("./models/studentRoutes");
const courseRoutes = require("./models/courseRoutes");

app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.json()); //body Parser

//Routes
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 App is listening at port ${port}!`));
