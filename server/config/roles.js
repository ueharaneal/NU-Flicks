//this a manifest for all the roles
const AccessControl = require("accesscontrol");

const allRights = {
  "create:any": ["*"],
  "read:any": ["*"],
  "update:any": ["*"],
  "delete:any": ["*"],
};
let grantsObject = {
  admin: {
    test: allRights,
  },
  user: {
    test: {
      "create:any": ["*"],
    },
  },
};

const roles = new AccessControl(grantsObject);

module.exports = { roles };
