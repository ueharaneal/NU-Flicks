const express = require("express");
const router = express.Router();
const articlesController = require("../controllers/articles.controller");
const { addArticleValidator } = require("../middleware/validation");

const auth = require("../middleware/auth");

router.post(
  "/",
  auth("createAny", "articles"),
  addArticleValidator,
  articlesController.createArticle
);
router
  .route("/article/:id")
  .get(auth("readAny", "articles"), articlesController.getArticleById)
  .patch(auth("updateAny", "articles"), articlesController.updateArticleById)
  .delete(auth("deleteAny", "articles"), articlesController.deleteArticleById);

//get user's article ID
router.route("/users/article/:id").get(articlesController.getUsersArticlesById);

//get all articles
router
  .route("/all")
  .get(articlesController.getAllArticles)
  .post(articlesController.getMoreArticles);

//article pagination 
router.post('/admin/paginate', auth('readAny', 'articles'),articlesController.adminPaginate)
//categories
router
  .route("/categories")
  .post(auth("createAny", "categories"), articlesController.createCategories)
  .get(auth("readAny", "categories"), articlesController.getAllCategories);

module.exports = router;
