const Router = require("express").Router();
const EmployeeModel = require("../Model/EmployeeModel");



Router.post("/addEmployee", async (req, res) => {
  try {
    let emp = await EmployeeModel.saveEmp(req.body);
    res.status(201).send(emp);
  } catch (error) {
    res.status(500).send(error);
  }
});


Router.get("/getEmployee", async (req,res) => {
  try {
    //console.log("fdsv res",res)
    let emp = await EmployeeModel.getEmp();
    console.log("emp",emp)
    res.status(201).send(emp);
  } catch (error) {
    res.status(500).send(error);
  }
});

Router.get("/getEmployee/:id", async (req,res) => {
  try {
    console.log("fdsv res",res)
    let emp = await EmployeeModel.getEmpById(req.params);
    console.log("emp",emp)
    res.status(201).send(emp);
  } catch (error) {
    res.status(500).send(error);
  }
});

Router.put("/updateEmployee/:id", async (req,res) => {
  try {
    console.log("updateEmployee res",res)
    let emp = await EmployeeModel.updateEmptById(req.body,req.params);
    console.log("emp",emp)
    res.status(201).send(emp);
  } catch (error) {
    res.status(500).send(error);
  }
});

Router.put("/deleteEmployee/:id", async (req,res) => {
  try {
    console.log("deleteEmployee res",res)
    let emp = await EmployeeModel.deleteEmptById(req.body,req.params);
    console.log("emp",emp)
    res.status(201).send({"message":"Employee deleted Successfuly"});
  } catch (error) {
    res.status(500).send(error);
  }
});




module.exports = Router;
