require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const routes = require("./routes/index")

const mongoose = require("mongoose")
//require("../config")

const { xss } = require("express-xss-sanitizer")
const mongoSanitize = require("express-mongo-sanitize")

const passport = require("passport")

const { jwtStrategy } = require("./middleware/passport")
//we need to add google strategy
const { handleError, convertToApiError } = require("./middleware/apiError")

const port = process.env.PORT || 3002
const mongoURI = process.env.MONGODB_URI

mongoose.connect(mongoURI)
// git add .
//Parsing and cores
app.use(cors())
app.use(express.json())
//Santize
app.use(xss())
app.use(mongoSanitize())

//Passport
app.use(passport.initialize())
passport.use("jwt", jwtStrategy)
// Google Auth routes for auth more comments
app.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
)
app.get(
	"/auth/google/callback",
	passport.authenticate("google", { failureRedirect: "/" }),
	(req, res) => {
		res.redirect("/your-redirect-url") // Replace with your frontend URL
	} //still need to add something went wrong with the routing.
)
//we need to create a new reroute for the googl auth

//routes
app.use("/api", routes)

//make sure this is after the routes so that it can catch the error yuh
//error handling
app.use(convertToApiError)
app.use((err, req, res, next) => {
	handleError(err, res)
})

app.listen(port, () => console.log(`Server is running on Port ${port}`))

//delete
