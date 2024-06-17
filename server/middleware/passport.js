const { User } = require("../models/user")
require("dotenv").config()
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const passport = require("passport")

const jwtOptions = {
	secretOrKey: process.env.DB_SECRET,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}

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

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify)

// Google oAuth Strategy configuration
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
		},
		async (token, tokenSecret, profile, done) => {
			try {
				let user = await User.findOne({ googleId: profile.id })
				if (!user) {
					user = await User.create({
						googleId: profile.id,
						username: profile.displayName,
						email: profile.emails[0].value,
					})
				}
				done(null, user)
			} catch (error) {
				done(error, false)
			}
		}
	)
)

module.exports = { jwtStrategy }
