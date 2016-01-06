var express = require('express');
var app = express();
var router = express.Router;
var cookieParser = require('cookie-parser');

// app.use(function(req,res,next){
// 	res.send("I'm always called because I have no path" );
// });	

// app.use('/index', function(req,res,next){
// 	console.log("I'm now the path to index");
// 	next();	
// });
	
// app.use('/about', function(req,res,next){
// 	console.log("I'm now the path to about");
// });

// //app get loads a page
// app.get('/index', function(req,res,next){
// 	console.log("I'm getting index2");
// });

app.use(cookieParser());

app.use('/path', function(req,res, next) {
	console.log('first function');
	next();
 }, function(req, res, next){
 	console.log('second function');
 	next();
 }, function(req, res, next){
 	console.log('third function');
 	req.cookie
 });

var server = app.listen(process.env.PORT || 3000, function () { 
	var port = server.address().port;  console.log('Server up and listening on', port); 
});



