const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
require("dotenv").config();
const validator = require("validator");

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "You need a title"],
    maxLength: 100,
  },
  content: {
    type: String,
    required: [true, "You need a content"],
  },
  excerpt: {
    type: String,
    required: [true, "You need a title"],
    maxLength: 500,
  },
  score: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  actors: {
    type: [String],
    required: true,
    validate: {
      validator: function (array) {
        return array.length >= 2;
      },
      message: "You must add atleast three actors",
    },
  },
  status: {
    type: String,
    required: true,
    enum: ["draft", "public"],
    default: "draft",
    index: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

articleSchema.plugin(aggregatePaginate);

const Article = mongoose.model("Article", articleSchema);

module.exports = { Article };
