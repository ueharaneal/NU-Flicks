
const { authServices }  = require('../services')
const httpStatus = require('http-status')

const authController = {
    async register(req,res){
        try{
            const {email, password} = req.body
            const user = await authServices.createUser(email,password)
        }
        catch(error){
            res.status(httpStatus).send(error.message)
        }
    }
}

module.exports = authController;