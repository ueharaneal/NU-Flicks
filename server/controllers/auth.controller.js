
const { authServices }  = require('../services')
const httpStatus = require('http-status')

const authController = {
    async register(req,res){
        try{
            const {email, password} = req.body
            const user = await authServices.createUser(email,password)
            const token = authServices.genAuthToken(user)

            //Send Verification Email
            res.cookie('x-access-token', token)
            .status(httpStatus.CREATED).send({
                user,
                token
            })
        }
        catch(error){
            res.status(httpStatus).send(error.message)
        }
    }
}
//controller that calls service
module.exports = authController;