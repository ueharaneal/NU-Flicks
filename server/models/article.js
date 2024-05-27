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
	description: {
		type: String,
		required: [true, "You need a description"],
	},
	excerpt: {
		type: String,
		required: [true, "You need a title"],
		maxLength: 500,
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
				return array.length >= 2
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
