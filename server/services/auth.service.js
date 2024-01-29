const httpStatus = require("http-status")
const { User } = require("../models/user")
const userService = require("./user.service")
const { ApiError } = require("../middleware/apiError")

const createUser = async (email, password) => {
	try {
		if (await User.emailTaken(email)) {
			// we will no long be using throw new Error
			// we will use our own error handling
			throw new ApiError(httpStatus.BAD_REQUEST, "Sorry this email is taken")
		}

		const user = new User({
			email,
			password,
		})
		await user.save()
		return user
	} catch (error) {
		throw error
	}
}

const genAuthToken = user => {
	const token = user.generateAuthToken()
	return token
}

const signInWithEmailAndPassword = async function (email, password) {
	try {
		//first check if an email exist
		const user = await userService.findUserByEmail(email)
		if (!user) {
			throw new ApiError(
				httpStatus.BAD_REQUEST,
				"Sorry, This email does not exist"
			)
		}
		//check to see if the passwords match
		if (!(await user.comparePasswords(password))) {
			throw new ApiError(httpStatus.BAD_REQUEST, "Incorrect Password")
		}
		return user
	} catch (error) {
		throw error
	}
}

module.exports = {
	createUser,
	genAuthToken,
	signInWithEmailAndPassword,
}
