const Router = require("express").Router();
const DepartmentModel = require("../Model/DepartmentModel");


Router.post("/addDepartment", async (req, res) => {
  try {
    let dept = await DepartmentModel.saveData(req.body);
    console.log("dept:::",dept)
    res.status(201).send(dept);
  } catch (error) {
    res.status(500).send(error);
  }
});

Router.get("/getDepartment", async (req,res) => {
  try {
    //console.log("fdsv res",res)
    let dept = await DepartmentModel.getDept();
    console.log("dept",dept)
    res.status(201).send(dept);
  } catch (error) {
    res.status(500).send(error);
  }
});


Router.get("/getDepartment/:id", async (req,res) => {
  try {
    console.log("getDepartment res",res)
    let dept = await DepartmentModel.getDeptById(req.params);
    console.log("dept",dept)
    res.status(201).send(dept);
  } catch (error) {
    res.status(500).send(error);
  }
});

Router.put("/updateDepartment/:id", async (req,res) => {
  try {
    //console.log("updateDeptById res",res)
    let dept = await DepartmentModel.updateDeptById(req.body,req.params);
    console.log("dept",dept)
    res.status(201).send(dept);
  } catch (error) {
    res.status(500).send(error);
  }
});

Router.put("/deleteDepartment/:id", async (req,res) => {
  try {
    console.log("deleteDepartment res",res)
    let dept = await DepartmentModel.deleteDepttById(req.body,req.params);
    console.log("dept",dept)
    res.status(201).send({"message":"Department deleted Successfuly"});
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = Router;
