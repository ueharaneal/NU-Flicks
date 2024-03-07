const mongoose  = require('mongoose');
require('dotenv').config();

const categoriesSchema = mongoose.Schema({
    name:{
        type: String, 
        trim: true, 
        unique: true, 
        lowercase: true, 
        maxLength: 100,
        required: [true, "You need a name"]
    },
    date: {
        type: Date, 
        default: Date.now
    }
})

const Category = mongoose.model('Category', categoriesSchema)


module.exports = { Category }