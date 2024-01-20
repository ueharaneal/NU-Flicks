
const { authService }  = require('../services/index')
const httpStatus = require('http-status')

const authController = {
    async register(req,res){
        try{
            const {email, password} = req.body
            const user = await authService.createUser(email,password)
            const token = authService.genAuthToken(user)

            //Send Verification Email
            res.cookie('x-access-token', token)
            .status(httpStatus.CREATED).send({
                user,
                token
            })
        }
        catch(error){
            res.status(httpStatus.BAD_REQUEST).send(error.message)
        }
    }
}
//controller that calls service.
//added cookies
module.exports = authController;