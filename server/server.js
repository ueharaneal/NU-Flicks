require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/index') 

const mongoose = require('mongoose');
//require("../config")

const { xss }  = require("express-xss-sanitizer");
const mongoSanitize = require("express-mongo-sanitize")

const port = process.env.PORT || 3001;
mongoURI = process.env.MONGODB_URI
console.log(mongoURI)

mongoose.connect(uri)

//mongoose.connect(mongoURI)


//Parsing
app.use(bodyParser.json())

//Santize 
app.use(xss())
app.use(mongoSanitize());


//routes
app.use('api',routes)


app.listen(port, ()=> console.log(`Server is running on Port ${port}`))