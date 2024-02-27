const { User } = require("../models/user")
const httpStatus = require("http-status")

//find user email for login
const findUserByEmail = async email => {
	return await User.findOne({email})
}

module.exports = {
	findUserByEmail,
}
