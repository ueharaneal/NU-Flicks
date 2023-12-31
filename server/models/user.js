const mongoose = require("mongoose");
require("dotenv").config();
const validator = require("validator");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
    required: true, 
    trim: true,
    lowercase: true,
  },
  role: {
    type: String,
    enum:['user','admin'],
    default: 'user' 
  },
  firstname: {
    type: String,
    trim: true,
    maxLength: 100,
  },
  lastname: {
    type: String,
    trim: true,
    maxLength: 100,
  },
  age: {
    type: Number,
    trim: true,
    maxLength: 100,
  },
  date: {
    type: Date,
    default: Date.now
  },
  verified: {
    type: Boolean,
    default: false,
  },
});


userSchema.statics.emailTaken = async(email)=>{
  const user = await this.findOne({email})
  return !!user
}

const User = mongoose.model("User", userSchema);
module.exports = { User, isTaken };