const mongoose = require('mongoose');
require('dotenv').config();

const userSchema = mongoose.Schema({
    email:{},
    password:{},
    role: {},
    firstname: {},
    lastname:{},
    age:{},
    date:{},
    verified:{},
})

const User = mongoose.model('User', userSchema);
module.exports = { User }