const express = require("express");
const router = express.Router();
const articlesController = require("../controllers/articles.controller");
const { addArticleValidator } = require('../middleware/validation')

const auth = require("../middleware/auth");

router.post(
  "/",
  auth("createAny", "articles"),
  addArticleValidator,
  articlesController.createArticle
);
//categories
router
  .route("/categories")
  .post(auth("createAny", "categories"), articlesController.createCategories)
  .get(auth("readAny", "categories"), articlesController.getAllCategories);

module.exports = router;
