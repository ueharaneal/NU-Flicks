const httpStatus = require('http-status')
const { User } = require('../models/user')

const createUser = async() => {
    try{
        if(await User.emailTaken(email)){
            throw new Error("Email is taken")
        }else{
            const user = new User({
                email,
                password
            });
            await user.save()
            return user
        }


    } catch(error){
        throw error;
    }
}

module.exports = { createUser }