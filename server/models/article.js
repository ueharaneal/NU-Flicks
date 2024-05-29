const mongoose = require("mongoose")
const aggregatePaginate = require("mongoose-aggregate-paginate-v2")
require("dotenv").config()
const validator = require("validator")

const articleSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, "You need a title"],
		maxLength: 100,
	},
	ratingDescription: {
		type: String,
		required: [true, "You need a description"],
	},
	rating: {
		type: Number,
		min: 0,
		max: 10,
		required: true,
	},
	director: {
		type: String,
	},
	actors: {
		type: [String],
		required: true,
		validate: {
			validator: function (array) {
				return array.length >= 1
			},
			message: "You must add atleast two actors",
		},
	},
	status: {
		type: String,
		required: true,
		enum: ["draft", "public"],
		default: "draft",
		index: true,
	},
	categories: {
		type: [String],
		required: true,
	},
	genres: {
		type: [String],
		required: true,
		validate: {
			validator: function (array) {
				return array.length >= 1
			},
			message: "You must add atleast 1 genres",
		},
	},
	date: {
		type: Date,
		default: Date.now,
	},
})

articleSchema.plugin(aggregatePaginate)

const Article = mongoose.model("Article", articleSchema)

module.exports = { Article }
