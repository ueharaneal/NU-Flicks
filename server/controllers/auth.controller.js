const { authService } = require("../services/index")
const httpStatus = require("http-status")

const authController = {
	async register(req, res, next) {
		try {
			const { email, password } = req.body
			const user = await authService.createUser(email, password)
			const token = authService.genAuthToken(user)

			//Send Verification Email
			res.status(httpStatus.OK)
				.cookie("x-access-token", token)
				.send({ user, token })
		} catch (error) {
			next(error)
		}
	},
	async signin(req, res, next) {
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
			res.status(httpStatus.OK) // Ensure httpStatus.OK is a valid number, typically 200
				.cookie("x-access-token", token)
				.send({ user, token })
		} catch (error) {
			console.log("error occued at controller")
			next(error)
		}
	},
}
//controller that calls service.
module.exports = authController
