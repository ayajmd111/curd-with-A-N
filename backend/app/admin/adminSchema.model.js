
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  FirstName: {type:String,unique:true},
  LastName:  {type:String},
  Email: {type:String},
  MobileNumber:{type:String},
  completed: Boolean,
  note: String,
  created_Date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('profile1', userSchema);

