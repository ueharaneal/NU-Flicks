const httpStatus = require('http-status')
const { User } = require('../models/user')
//in this file we are multiple functions related to OAUTH
//we are creating a function called createUser
//we are creating a function that hashes the users passwords 
const createUser = async() => {
    try{
        if(await User.emailTaken(email)){
            throw new Error("Email is taken")
        }else{
            const user = new User({
                email,
                password
            });
            await user.save();
            return user
        }


    } catch(error){
        throw error;
    }
}

const getAuthToken = (user) =>{
    const token  = user.generateAuthToken();
    return token
}


module.exports = { createUser, getAuthToken }