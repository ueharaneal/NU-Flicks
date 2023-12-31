const httpStatus = require('http-status')
const { User } = require('../models/user')

const createUser = async() => {
    try{
        if(await User.emailTaken(email))
    } catch(error){

    }
}

module.exports = { createUser }