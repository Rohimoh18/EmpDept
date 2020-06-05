const mongoose = require("mongoose");
var Schema = mongoose.Schema

const schema = new Schema({
  first_name: {
    type: String,
    required: true,
    max:10
  },
  last_name: {
    type: String,
    required: true,
    max:10
  },
  age: {
    type: Number,
    required: true,
    min:18
  },
  department_id:
  {
    type: Schema.Types.ObjectId,
    ref: "Department"
  },
  status: {
    type: String,
    default:true
  },
  createdDate: {
    type: Date,
    default: Date.now()
},

})
module.exports = mongoose.model("Employee", schema);


