const mongoose = require('mongoose');
const Schema=mongoose.Schema;


const loginSchema=new Schema({
  UserName:{
    type:String,
    required:true,
    unique:true
  },
  Password:{
    type:String,
    required:true

  }
},{
  timestamps:true
});

module.exports=mongoose.model('detail',loginSchema);
