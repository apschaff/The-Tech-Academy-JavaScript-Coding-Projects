var lang = "JavaScript";

function myfunction(lang) {
	this.lang = lang;
	console.log("Hello, welcome to "+this.lang);
};
var test = new myfunction(lang)