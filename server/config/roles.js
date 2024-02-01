//this a manifest for all the roles
const AccessControl = require("accesscontrol")

const allRights = {
	"create:any": ["*"],
	"read:any": ["*"],
	"update:any": ["*"],
	"delete:any": ["*"],
}

let grantsObject = {
	admin: {
		test: allRights,
	},
	user: {
		test: { "read:any": ["*"] },
	},
}

const roles = new AccessControl(grantsObject)
//accesscontroll determines what user can and can not do

module.exports = { roles }
