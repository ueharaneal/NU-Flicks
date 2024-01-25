const { authService } = require("../services/index")
const httpStatus = require("http-status")

const authController = {
	async register(req, res) {
		try {
			const { email, password } = req.body
			const user = await authService.createUser(email, password)
			const token = authService.genAuthToken(user)

			//Send Verification Email
			res.cookie("x-access-token", token).status(httpStatus.CREATED).send({
				user,
				token,
			})
		} catch (error) {
			res.status(httpStatus.BAD_REQUEST).send(error.message)
		}
	},
	async signin(req, res) {
		try {
			//we first need to verify the email exist
			//check to see if the passwords match
			//generate token and send response back to user
			const { email, password } = req.body
			const user = await authService.signInWithEmailAndPassword(
				email,
				password
			)
			//since sign in was successful we can send a token
			const token = await authService.genAuthToken(user)
			res.cookie()
		} catch (error) {}
	},
}
//controller that calls service.
//added cookies
module.exports = authController
