require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const routes = require("./routes/index")

const mongoose = require("mongoose")
//require("../config")

const { xss } = require("express-xss-sanitizer")
const mongoSanitize = require("express-mongo-sanitize")

const passport = require("passport")
const { jwtStrategy } = require("./middleware/passport")

const { handleError, convertToApiError } = require("./middleware/apiError")

const port = process.env.PORT || 3002
mongoURI = process.env.MONGODB_URI
console.log(mongoURI)

mongoose.connect(mongoURI)

//mongoose.connect(mongoURI)

//Parsing
app.use(bodyParser.json())

//Santize
app.use(xss())
app.use(mongoSanitize())

//Passport
app.use(passport.initialize())
passport.use("jwt", jwtStrategy)
//routes
app.use("/api", routes)

//make sure this is after the routes
//error handling
app.use(convertToApiError)
app.use((error, req, res, next) => {
	handleError(error, res)
})

app.listen(port, () => console.log(`Server is running on Port ${port}`))
