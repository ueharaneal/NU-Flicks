
const { authServices }  = require('../services')

const authController = {
    async register(req,res){
        try{
            const {email, password} = req.body
            const user = await authServices.createUser(email,password)
        }
        catch(error){

        }
    }
}

module.exports = authController;