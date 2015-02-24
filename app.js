var profile = require("./profile.js")
var users = process.argv.slice(2);
users.forEach(function(username){
	profile.get(username);
})
