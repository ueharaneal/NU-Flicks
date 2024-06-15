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
var GoogleStrategy = require("passport-google-oidc")
const { jwtStrategy } = require("./middleware/passport")

const { handleError, convertToApiError } = require("./middleware/apiError")

const port = process.env.PORT || 3002
const mongoURI = process.env.MONGODB_URI

mongoose.connect(mongoURI)

//Parsing
app.use(cors())
app.use(express.json())
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
app.use((err, req, res, next) => {
	handleError(err, res)
})

app.listen(port, () => console.log(`Server is running on Port ${port}`))

//delete
