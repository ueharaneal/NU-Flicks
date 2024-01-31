const { User } = require("../models/user")
require("dotenv").config()
const {} = require("passport-jwt")

const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt")
const jwtOptions = {
	secretOrKey: process.env.DB_SECRET,
	jwtFromRequest: ExtractAuthHeaderAsBearerToken(),
}

//verify decodes the token
//then you can access the user information.
//the payload is whatever we use to sign the token
const jwtVerify = async (payload, done) => {
	try {
		const user = await User.findById(payload.sub)
		if (!user) {
			return done(null, false)
		}
		done(null, user)
	} catch (error) {
		done(error, false)
	}
}

//inside of the Strategy object we want to pass in the options then the callback
const jwtStrategy = new Strategy(jwtOptions, jwtVerify)

module.exports = { jwtStrategy }

//once the req is made, it gets the token and decodes it
//verify it and then return the user
