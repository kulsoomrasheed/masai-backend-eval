const mongoose = require("mongoose");
const userschema = mongoose.Schema({
  name: String, 

  email: {type : String, unique : true},

  gender: String,

  password: String,

  age: Number,

  city: String,
  
  is_married: Boolean
},{
    versionKey:false
});

const UserModel=new mongoose.model("user",userschema)
module.exports={UserModel}
