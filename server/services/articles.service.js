const { Category } = require("../models/category");
const { Article } = require("../models/article");
const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");

const addArticle = async (body) => {
  try {
    const article = new Article({
      ...body,
      score: parseInt(body.score),
    });
    await article.save();
    return article;
  } catch (error) {
    throw error;
  }
};

const getArticleById = async (_id, user) => {
  try {
    if (user.role === "user") {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Sorry bad request, You are not authorized"
      );
    }
    const article = await Article.findById(_id).populate("category");
    if (!article) {
      throw new ApiError(httpStatus.NOT_FOUND, "Could not find article by ID");
    }
    return article;
  } catch (error) {
    throw error;
  }
};

const updateArticleById = async (_id, body) => {
  try {
    const article = await Article.findOneAndUpdate(
      { _id },
      { $set: body },
      { new: true }
    );
    if (!article) throw new ApiError(httpStatus.NOT_FOUND, "Article not found");
    return article;
  } catch (error) {
    throw error;
  }
};

const deleteArticleById = async (_id) => {
  try {
    const article = await Article.findByIdAndDelete(_id)
    if(!article){
      throw new ApiError(httpStatus.NOT_FOUND, "Article could not be found")
    }
    return article 
  } catch (error) {
    throw error;
  }
};

const addCategory = async (body) => {
  try {
    //validation
    const category = new Category({
      ...body,
    });
    await category.save();
    return category;
  } catch (error) {
    throw error;
  }
};

const findAllCategories = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  addCategory,
  findAllCategories,
  addArticle,
  getArticleById,
  updateArticleById,
  deleteArticleById,
};
