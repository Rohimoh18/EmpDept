const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mongoose = require("mongoose");
const databse = "test";

mongoose.connect(
  "mongodb://localhost:27017/" + databse,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (db) => {
    console.log("Connected to DB");
  }
);

// add more controller for new like usercontroller
const EmployeeController = require("./Controller/EmployeeController");
const DepartmentController = require("./Controller/DepartmentController");

// use controlle for new route
app.use("/Employee", EmployeeController);
app.use("/Department", DepartmentController);


app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
