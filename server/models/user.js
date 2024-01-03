const mongoose = require("mongoose");
require("dotenv").config();
const validator = require("validator");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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

//this function is hashing the password
userSchema.pre('save', async function(next){
  let user = this
  if(user.isModified('password')){
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash;
  }  
  next();
})

userSchema.statics.emailTaken = async(email)=>{
  const user = await this.findOne({email})
  return !!user
}

//currently working on this function
userSchema.methods.generateAuthToken = function(){

}

const User = mongoose.model("User", userSchema);
module.exports = { User, isTaken };