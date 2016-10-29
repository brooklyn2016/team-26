  // We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// This package exports the function to create an express instance:
var app = express();

const data = require("./mongoDB/data");
const usersData = data.Users;
const countryData = data.country;

// This is called 'adding middleware', or things that will help parse your request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// This middleware will activate for every request we make to 
// any path starting with /assets;
// it will check the 'static' folder for matching files 
app.use(express.static(path.join(__dirname, 'www')));

app.get("/", function (request, response) { 
    // We have to pass a second parameter to specify the root directory
    // __dirname is a global variable representing the file directory you are currently in
    response.sendFile("./www/welcome.html", { root: __dirname });
});

app.get("/dbcall/:country", function(request, response) {

    if(!request.params.country) {
        response.status(400).json({message: "country not given!"});
    } else {
    
        countryData.getAllRecords(request.params.country).then((records) => {
            response.json(records);
        }, (error) => {
            response.status(500).json({message: "unable to retrieve records!"});
        });
    }

});

app.get("/dbcall/:country/:id", function(request, response) {
    countryData.getRecordById(request.params.country, request.params.id).then((record) => {
        response.json(record);
    }, (error) => {
        // Not found!
        response.status(404).json({message: "not found!"});
    });
});

app.post("/index.html", function(request, response) {

    if(!request.body.country) {
        response.status(400).json({message: "country not given!"});
    } else {
    
        countryData.addRecord(request.body).then((record) => {
            response.json(record);
        }, (error) => {
            response.status(500).json({message: "unable to add record!"});
        });
    }
    
});


app.delete("/dbcall/:country/:id", function(request, response) {
    return countryData.removeRecord(request.params.country, request.params.id)
        .then(() => {
            response.sendStatus(200);
        }).catch((e) => {
            response.status(500).json({ error: e });
        });

});

app.get("/users", function(request, response) {

    usersData.getAllUsers().then((users) => {
        response.json(users);
    }, (error) => {
        response.status(500).json({message: "unable to find users!"});
    });
    
});

app.post("/addusers", function(request, response) {

    if(!request.body.username) {
        response.status(400).json({message: "Username not given!"});
    } else if(!request.body.password) {
        response.status(400).json({message: "Password not given!"});
    } else {
    
        usersData.addUser(request.body.username, request.body.password).then((user) => {
            response.json(user);
        }, (error) => {
            response.status(500).json({message: "unable to add user!"});
        });
    }
    
});

app.post("/authuser", function(request, response) {

    if(!request.body.username) {
        response.status(400).json({message: "Username not given!"});
    } else if(!request.body.password) {
        response.status(400).json({message: "Password not given!"});
    } else {
        usersData.authenticateUser(request.body.username, request.body.password).then((success) => {
            response.json(success);
        }, (error) => {
            response.status(500).json({message: error});
        });
    }
});
    
// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! \nNavigate to http://localhost:3000 to access it');
});
