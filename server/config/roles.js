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
    //test: allRights,
    profile: allRights,
  },
  user: {
    //test: {"create:any": ["*"],},
	profile:{
		'read:own':['*', '!password','!_id'],
		'update:own':['*','!password', '!_id']
	}
  },
};

const roles = new AccessControl(grantsObject);

module.exports = { roles };
