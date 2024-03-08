const httpStatus = require("http-status");
const { articlesService } = require("../services");

const articlesController = {
  async createArticle(req, res, next) {
    try {
      const article = await articlesService.addArticle(req.body);
    } catch (error) {
      next(error);
    }
  },
  async createCategories(req, res, next) {
    try {
      const category = await articlesService.addCategory(req.body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  },

  async getAllCategories(req, res, next) {
    try {
      const categories = await articlesService.findAllCategories();
      res.json(categories);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = articlesController;
