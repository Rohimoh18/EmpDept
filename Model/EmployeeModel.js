const Employee = require("../Service/Employee");

let model = {
  
  saveEmp: async function (data) {
    try {
      let emp = new Employee(data);
      return await emp.save();
    } catch (error) {
      throw error;
    }
  },
  getEmp: async function () {
    try {
      return await Employee.find({status:true});
    } catch (error) {
      console.log("error",error)
      throw error;
    }
  },
  getEmpById: async function (data) {
    console.log("data",data)
    try {
      console.log("in getEmpById")
      return await Employee.find({_id:data.id});
    } catch (error) {
      throw error;
    }
  },

  updateEmptById: async function (data,empid) {
    console.log("data",data,empid)
          try {
      console.log("in updateEmptById")
      return await Employee.findByIdAndUpdate({_id:empid.id},data, {new: true});
    } catch (error) {
      console.log("error",error)
      throw error;
    }
  },

  deleteEmptById: async function (data,empid) {
    console.log("data",data,empid)
          try {
      console.log("in deleteEmptById")
      return await Employee.findByIdAndUpdate({_id:empid.id},data, {new: true});
    } catch (error) {
      console.log("error",error)
      throw error;
    }
  },

};
module.exports = model;
