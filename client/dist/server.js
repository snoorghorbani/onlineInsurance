const express = require("express");
const app = express();
var path = require("path");
var https = require("https");
var fs = require("fs");
app.use(express.static(path.join(__dirname + "/src")));

app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "/src/index.html"));
});

const server = https
	.createServer(
		{
			key  : fs.readFileSync("oi.key"),
			cert : fs.readFileSync("oi.cert")
		},
		app
	)
	.listen(4200, function() {
		console.log("Example app listening on port 4200! :D");
	});

// app.listen(4200, function () {
// 	console.log("Example app listening on port 4200! :D");
// });
