const express = require("express");
const router = express.Router();
const articlesController = require("../controllers/articles.controller");

const auth = require("../middleware/auth");

//categories
router
  .route("/categories")
  .post(auth("createAny", "categories"), articlesController.createCategories);

module.exports = router;
