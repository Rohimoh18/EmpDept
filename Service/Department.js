const mongoose = require("mongoose");
var Schema = mongoose.Schema


const schema = new Schema({
  dept_id: {
    type: String,
    required:true
  },

  dept_name: {
    type: String,
    required:true
  },
  status: {
    type: String,
    default:true
  }
});
module.exports = mongoose.model("Department", schema);


