const { User } = require("../models/user");
const httpStatus = require("http-status");

//find user email for login
const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const findUserById = async (_id) => {
  return await User.findById(_id);
};

const updateUserProfile = async (req) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          age: req.body.age,
        },
      },
      { new: true }
    );
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    return user;
  } catch (error) {
	throw new ApiError(httpStatus.NOT_FOUND, 'User not found')
  }
};

module.exports = {
  findUserByEmail,
  findUserById,
  updateUserProfile,
};
