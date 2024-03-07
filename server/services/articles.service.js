const { Category } = require("../models/category");
const httpStatus = require('http-status')
const ApiError  =  require('../middleware/apiError')

const addCategory = async (body) => {
    try{

    }catch(error){
        throw new ApiError({})
    }
};

module.exports = {
  addCategory,
};
