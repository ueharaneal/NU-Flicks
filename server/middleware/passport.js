const { User } = require("../models/user")
require("dotenv").config()
const {} = require("passport-jwt")

const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt")
const jwtOptions = {
	secretOrKey: process.env.DB_SECRET,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}

//verify decodes the token
const jwtVerify = async () => {}

//inside of the Strategy object we want to pass in the options then the callback
const jwtStrategy = new Strategy(jwtOptions, jwtVerify)

module.exports = { jwtStrategy }
