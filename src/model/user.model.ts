import  bycrypt  from 'bcrypt';

import mongoose from "mongoose";

const User = new mongoose.Schema({
  username: {
    unique: true,
    type: String,
    require: true
  },
  fullname: {
    unique: true,
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,    
  },
  isActive: {
    type: Boolean,
    default: true,
  }
}, {
  timestamps: true,
  versionKey: false,
})
 
export default mongoose.model("User", User);