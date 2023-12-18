require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/index') 

const mongoose = require('mongoose');
//require("../config")

const port = process.env.PORT || 3001;
mongoURI = process.env.MONGODB_URI
console.log(mongoURI)

mongoose.connect(mongoURI)

//mongoose.connect(mongoURI)


//Parsing
app.use(bodyParser.json())

//routes
app.use('api',routes)


app.listen(port, ()=> console.log(`Server is running on Port ${port}`))