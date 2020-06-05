const Department = require("../Service/Department");

let model = {

saveData: async function (data){
    console.log("data",data)
      
      try {
        let dept = new Department(data);
        console.log("dept",dept)
        return await dept.save();
      } catch (error) {
        throw error;
      }
    },
  
  getDept: async function () {
    try {
      return await Department.find({status:true});
    } catch (error) {
      console.log("error",error)
      throw error;
    }
  },
  getDeptById: async function (data) {
    console.log("data",data)
    try {
      console.log("in getDeptById")
      return await Department.find({_id:data.id});
    } catch (error) {
      throw error;
    }
  },
  updateDeptById: async function (data,deptid) {
    console.log("data",data,deptid)
   
       try {
      console.log("in updateDeptById")
      return await Department.findByIdAndUpdate({_id:deptid.id},data, {new: true});
    } catch (error) {
      console.log("error",error)
      throw error;
    }
  },

  deleteDepttById: async function (data,empid) {
    console.log("data",data,empid)
          try {
      console.log("in deleteDepttById")
      return await Department.findByIdAndUpdate({_id:empid.id},data, {new: true});
    } catch (error) {
      console.log("error",error)
      throw error;
    }
  },


  
};
module.exports = model;
