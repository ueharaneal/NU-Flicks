const passport = require("passport");
const { ApiError } = require("./apiError");
const httpStatus = require("http-status");
const { roles } = require("../config/roles");

const verify = (req, res, resolve, reject, rights) => async (err, user) => {
  console.log("reached the verify")
  if (err || !user) {
    return reject(
      new ApiError(httpStatus.UNAUTHORIZED, "Sorry unauthorized (API)")
    );
  }
  req.user = {
    _id: user._id,
    email:user.email,
    role:user.role,
    firstname:user.firstname,
    lastname:user.lastname,
    age:user.age,
    verified: user.verified
  };
  //we will determine the role of the user here
  if(rights.length) {
    const action = rights[0]; //create Any, read any ...
    const resource = rights[1]; // profiles,articles...
    const permission = roles.can(req.user.role)[action](resource);
    if(!permission.granted){
      return reject(new ApiError(httpStatus.FORBIDDEN,'Sorry you dont have enough rights'))
    }
    res.locals.permission = permission;
  }
  resolve();
};

const auth = (...rights) => async (req, res, next) => {
  return new Promise((resolve, reject) => {
    passport.authenticate(
      "jwt",
      { session: false },
      verify(req, res, resolve, reject, rights)
    )(req, res, next);
  })
    .then(() => {
      next();
    })
    .catch((error) => {
      next(error);
    });
};

module.exports = auth;
