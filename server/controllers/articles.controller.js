const httpStatus = require("http-status");
const { articlesService } = require("../services");

const articlesController = {
  async createCategories(req, res, next) {
    try {
      const category = articlesService.addCategory(req.body);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = articlesController;
