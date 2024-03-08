const mongoose = require("mongoose");
require("dotenv").config();
const Schema = mongoose.Schema;

const articleSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
});

const Article = mongoose.model(articlesSchema, "Article");

module.exports = { Article };
