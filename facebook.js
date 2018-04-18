var database = [
	{
		username: "pavol",
		password: "secret",
	},
	{
		username: "sally",
		password: "123",
	},
	{
		username: "inke",
		password: "777",
	},
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "LALALALALALALALA this is my feed",
	},
	{
		username: "Sally",
		timeline: "HEYOOOOOO JS",
	}
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password) {
		console.log(newsFeed);
	} else {
			alert("Sorry, wrong username or password");
	}
}

signIn(userNamePrompt, passwordPrompt);