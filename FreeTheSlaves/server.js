  // We first require our express package
var express = require('express');
var bodyParser = require('body-parser');

// This package exports the function to create an express instance:
var app = express();

// This is called 'adding middleware', or things that will help parse your request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// This middleware will activate for every request we make to 
// any path starting with /assets;
// it will check the 'static' folder for matching files 
//app.use('/assets', express.static('www'));

// Setup your routes here!

app.get("/", function (request, response) { 
    // We have to pass a second parameter to specify the root directory
    // __dirname is a global variable representing the file directory you are currently in
    response.sendFile("./www/index.html", { root: __dirname });
});

app.post("/index.html", function (request, response) {
    var tableData = [];
    
    // our request.body will get populated as an object
    for (var key in request.body) {
        var data = request.body[key];
        var entry = {
            inputName: key
        };

        tableData.push(entry);
    }

    response.sendFile('./www/cool.html', { status: "success"});
});



// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
