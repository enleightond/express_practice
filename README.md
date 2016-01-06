Node JS is fancy backend JS.
Express js is a node library to make Node look pretty, and easy to manipulate.

var express =  require('express') This loads the express library to be used by at the app level.
var app = express();  This is used to use access the methods in the express library.

Middleware is a function that has access to req,res,next.

app.use can use (function()); ('path', function()), ('path', function(), function())
	every path will use the first option, I'm always called because I have no path.	

app.get loads the page

app.post adds new data

app.put updates data to existing data

app.delete