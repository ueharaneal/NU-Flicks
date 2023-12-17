require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
//require("../config")

const port = process.env.PORT || 3001;
mongoURI = process.env.MONGODB_URI
console.log(mongoURI)

mongoose.connect(mongoURI)

//mongoose.connect(mongoURI)
app.listen(port, ()=>{console.log(`App listening on ${port}`)})

//Parsing
app.use(bodyParser.json())
